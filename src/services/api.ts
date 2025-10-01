import axios from 'axios';
import type { User, ApiResponse } from '../types/user';



const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api',
});

api.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error.response?.data?.message || 'An error occurred')
);

export const createUser = (data: Partial<User>): Promise<ApiResponse<User>> =>
  api.post('/users', data);

export const getUsers = (page: number, limit: number): Promise<ApiResponse<User[]>> =>
  api.get(`/users?page=${page}&limit=${limit}`);

export const getUser = (id: string): Promise<ApiResponse<User>> =>
  api.get(`/users/${id}`);

export const updateUser = (id: string, data: Partial<User>): Promise<ApiResponse<User>> =>
  api.put(`/users/${id}`, data);

export const deleteUser = (id: string): Promise<ApiResponse<null>> =>
  api.delete(`/users/${id}`);

export const searchUsers = (query: string): Promise<ApiResponse<User[]>> =>
  api.get(`/users/search?query=${query}`);

export const exportUsers = (): Promise<Blob> =>
  api.get('/users/export', { responseType: 'blob' });
