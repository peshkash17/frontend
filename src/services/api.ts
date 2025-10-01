import axios from 'axios';
import type { User, ApiResponse } from '../types/user';

const API_BASE_URL = 'http://localhost:4000';

const api = axios.create({
  baseURL: API_BASE_URL,
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
