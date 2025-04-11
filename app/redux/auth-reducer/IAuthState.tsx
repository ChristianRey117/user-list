export interface AuthState {
  isAuthenticated: boolean;
  user: { username: string } | null;
}
