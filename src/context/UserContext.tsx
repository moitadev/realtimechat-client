import { PropsWithChildren, createContext } from 'react'
import { updateProfile } from 'firebase/auth'
import { useAuth } from '@/hooks'

type UserProviderProps = PropsWithChildren

type UserContextProps = {
  updateUserName: (userName: string) => Promise<void>
}

export const UserContext = createContext<UserContextProps | undefined>(
  undefined
)

export const UserProvider = ({ children }: UserProviderProps) => {
  const { user } = useAuth()
  const updateUserName = async (userName: string) => {
    try {
      if (user) {
        await updateProfile(user, {
          displayName: userName,
        })
      }
    } catch (err) {
      console.log(err)
    }
  }

  const userContextValue = { updateUserName }

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  )
}
