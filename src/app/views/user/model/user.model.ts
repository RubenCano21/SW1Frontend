export interface User {
  username: string;
  email: string;
  full_name: string;
  hashed_password: string;
  is_active?: boolean;
  is_admin?: boolean;
}

export interface UserListResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}
