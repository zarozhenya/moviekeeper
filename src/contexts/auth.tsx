import React, {FC, useEffect, useMemo} from 'react';
import SplashScreen from 'react-native-splash-screen';
import auth from '@react-native-firebase/auth';
import {IAuthContext} from '../types';
import {useAuth} from '../api/hooks';
import {showErrorMessage} from '../utils';

interface Props {
  children: React.ReactNode;
}

export const AuthContext = React.createContext<IAuthContext>({
  userId: null,
  signIn: () => {},
  signUp: () => {},
  signOut: () => {},
});

export const AuthProvider: FC<Props> = ({children}) => {
  const {userId, isInitializing} = useAuth();

  const authContext = useMemo<IAuthContext>(
    () => ({
      signIn: async ({email, password}) => {
        try {
          await auth().signInWithEmailAndPassword(email, password);
        } catch (e) {
          console.log(e);
          showErrorMessage(e);
        }
      },
      signUp: async ({email, password}) => {
        try {
          await auth().createUserWithEmailAndPassword(email, password);
        } catch (e) {
          showErrorMessage(e);
        }
      },
      signOut: async () => {
        try {
          return await auth().signOut();
        } catch (e) {
          showErrorMessage(e);
        }
      },
      userId,
    }),
    [userId],
  );

  useEffect(() => {
    if (!isInitializing) {
      setTimeout(() => {
        SplashScreen.hide();
      }, 300);
    }
  }, [isInitializing]);

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};
