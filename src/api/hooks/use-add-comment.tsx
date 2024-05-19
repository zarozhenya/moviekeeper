import {useContext, useMemo} from 'react';
import firestore from '@react-native-firebase/firestore';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import {UserContext} from '../../contexts';

interface UseAddCommentProps {
  text: string;
  movieId: string;
}

export const useAddComment = ({text, movieId}: UseAddCommentProps) => {
  const {user} = useContext(UserContext);
  return useMemo(
    () => ({
      addComment: () => {
        if (!user) {
          return;
        }
        firestore()
          .doc(`movies/${movieId}`)
          .update({
            comments: firestore.FieldValue.arrayUnion({
              id: uuidv4(),
              text,
              username: user.username,
              date: new Date().toISOString(),
            }),
          });
      },
    }),
    [user, movieId, text],
  );
};
