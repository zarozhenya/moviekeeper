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
