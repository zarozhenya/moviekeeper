export interface IAuthContext {
  userId: string | null;
  signIn: (token: string) => void;
  signOut: () => void;
}
