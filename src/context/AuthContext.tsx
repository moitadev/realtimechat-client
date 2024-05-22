import { PropsWithChildren, createContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth'
import { auth } from '@/util'
import { onAuthStateChanged } from 'firebase/auth/web-extension'

type AuthProviderProps = PropsWithChildren

type FirebaseUser = {
  uid: string | null
  email: string | null | undefined
  displayName?: string | null
  photoURL?: string | null
}

type AuthContextProps = {
  user: FirebaseUser | null
  error: boolean
  signUp: (email: string, password: string) => Promise<void>
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<FirebaseUser | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        const { uid, email, displayName, photoURL } = authUser
        setUser({ uid, email, displayName, photoURL })
      } else {
        setUser(null)
      }
    })

    return () => unsubscribe()
  }, [])

  const signUp = async (email: string, password: string) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
    } catch (err) {
      setError(true)
    }
  }

  const signIn = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (err) {
      setError(true)
    }
  }

  const signOut = async () => {
    await auth.signOut()
  }

  const contextValue = { user, signUp, signIn, signOut, error }

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}
