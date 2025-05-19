export interface User {
  id?: number;
  username: string;
  email: string;
  full_name: string;
  hashed_password: string;
  is_active?: boolean;
  is_admin?: boolean;
}
