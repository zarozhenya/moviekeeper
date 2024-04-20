import React, {FC, useContext, useMemo} from 'react';
import {IUserContext} from '../types';
import {useUser} from '../api/hooks';
import {AuthContext} from './auth';

interface Props {
  children: React.ReactNode;
}

export const UserContext = React.createContext<IUserContext>({
  user: null,
});

export const UserProvider: FC<Props> = ({children}) => {
  const {userId} = useContext(AuthContext);
  const {user} = useUser({userId});

  const userContext = useMemo<IUserContext>(
    () => ({
      user,
    }),
    [user],
  );

  return (
    <UserContext.Provider value={userContext}>{children}</UserContext.Provider>
  );
};
