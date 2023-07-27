export interface IUser {
  id?: number;
  name?: string;
  email?: string;
  avatar_data?: {
    filename: string;
    id: string;
  };
  phone?: string;
  role?: string;
  created_at?: Date;
}
