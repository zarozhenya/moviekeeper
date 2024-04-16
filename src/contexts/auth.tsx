import React, {FC, useEffect, useMemo, useState} from 'react';
import EncryptedStorage from 'react-native-encrypted-storage';
import SplashScreen from 'react-native-splash-screen';
import {IAuthContext} from '../types';

interface Props {
  children: React.ReactNode;
}

export const AuthContext = React.createContext<IAuthContext>({
  userId: null,
  signIn: () => {},
  signOut: () => {},
});

export const AuthProvider: FC<Props> = ({children}) => {
  const [userId, setUserId] = useState<string | null>(null);

  const authContext = useMemo<IAuthContext>(
    () => ({
      signIn: data => {
        EncryptedStorage.setItem('userId', data)
          .then(() => {
            setUserId(data);
          })
          .catch(e => console.error('ERROR:', e));
      },
      signOut: () => {
        EncryptedStorage.setItem('userId', '')
          .then(() => {
            setUserId(null);
          })
          .catch(e => console.error('ERROR:', e));
      },
      userId,
    }),
    [userId],
  );

  useEffect(() => {
    const bootstrapAsync = async () => {
      try {
        const token = await EncryptedStorage.getItem('userId');
        setUserId(token);
      } catch (e) {
        console.error('ERROR:', e);
      } finally {
        setTimeout(() => {
          SplashScreen.hide();
        });
      }
    };

    bootstrapAsync();
  }, []);

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};
