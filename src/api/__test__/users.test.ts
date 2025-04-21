import axios from 'axios';
import { getUsers } from '../users';
import { vi } from 'vitest';

vi.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

it('calls the correct API endpoint', async () => {
  mockedAxios.get.mockResolvedValue({ data: [] });
  await getUsers();
  expect(mockedAxios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users');
});
