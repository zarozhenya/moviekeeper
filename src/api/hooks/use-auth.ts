import {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';

export const useAuth = () => {
  const [userId, setUserId] = useState<string | null>(null);
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      setUserId(user && user.uid);
      setIsInitializing(false);
    });
    return subscriber;
  }, []);

  return {userId, isInitializing};
};
