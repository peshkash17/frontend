// types/user.ts
export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address?: string;
  status: 'active' | 'inactive';
  gender: 'male' | 'female';
  location?: string;
  profile?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
  total?: number; // For paginated responses
}
