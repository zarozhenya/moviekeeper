import {IFbUser, IMovie} from './api';

interface AuthAction {
  email: string;
  password: string;
}

export interface IAuthContext {
  userId: string | null;
  signIn: (credentials: AuthAction) => void;
  signUp: (credentials: AuthAction) => void;
  signOut: () => void;
}

export interface IUserContext {
  user: IFbUser | null;
}

export interface IMoviesContext {
  movies: IMovie[] | null;
}
