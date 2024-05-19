import {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {IFbUser} from '../../types';
import {showErrorMessage} from '../../utils';
import auth from '@react-native-firebase/auth';

interface UseUserProps {
  userId: string | null;
}

export const useUser = ({userId}: UseUserProps) => {
  const [user, setUser] = useState<IFbUser | null>(null);
  useEffect(() => {
    if (!userId) {
      setUser(null);
      return;
    }

    const subscriber = firestore()
      .collection('users')
      .doc(userId)
      .onSnapshot(async documentSnapshot => {
        try {
          if (!documentSnapshot.exists) {
            firestore().collection('users').doc(userId).set({
              id: userId,
              username: auth().currentUser?.email,
              my_movies: [],
            });
            return;
          }

          const userData = documentSnapshot.data() as IFbUser | undefined;

          if (documentSnapshot.exists && userData) {
            setUser(userData);
          }
        } catch (e) {
          showErrorMessage(e);
        }
      });

    return subscriber;
  }, [userId]);

  return {user};
};
