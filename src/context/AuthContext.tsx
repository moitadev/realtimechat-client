import { PropsWithChildren, createContext, useEffect, useState } from 'react';
import { errors } from '@/assets/errors';
import firebase from '@/util/FirebaseConfig';
import 'firebase/compat/auth';

type AuthProviderProps = PropsWithChildren;

type FirebaseUser = {
  uid: string | null;
  email: string | null;
  displayName?: string | null;
  photoURL?: string | null;
};

type AuthContextProps = {
  user: FirebaseUser | null;
  errorMsg: string;
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        const { uid, email, displayName, photoURL } = authUser;
        setUser({ uid, email, displayName, photoURL });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const signUp = async (email: string, password: string) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (err) {
      setErrorMsg(errors[err.code]);
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (err) {
      setErrorMsg(errors[err.code]);
    }
  };

  const signOut = async () => {
    await firebase.auth().signOut();
  };

  const contextValue = { user, signUp, signIn, signOut, errorMsg };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
