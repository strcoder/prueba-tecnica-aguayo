// src/api/users.ts
import axios from 'axios';
import { User } from '../model/User';

const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

export const getUsers: () => Promise<User[]> = async () => {
  const res = await axios.get(BASE_URL);
  return res.data;
};
