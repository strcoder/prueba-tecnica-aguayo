import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '../Home';
import { vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import * as api from '../../api/users';
import { User } from '../../model/User';

vi.mock('../../api/users');

const mockUsers = [
  { id: 1, name: 'Antonio Guzmán', email: 'antonio@example.com' },
  { id: 2, name: 'Juan Pérez', email: 'juan@example.com' },
];

describe('Home', () => {
  beforeEach(() => {
    vi.spyOn(api, 'getUsers').mockResolvedValue(mockUsers as User[]);
  });

  it('renders user list from API', async () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(
      screen.getByPlaceholderText('Buscar por nombre')
    ).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('Antonio Guzmán')).toBeInTheDocument();
      expect(screen.getByText('Juan Pérez')).toBeInTheDocument();
    });
  });

  it('filters users based on search input', async () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Antonio Guzmán')).toBeInTheDocument();
    });

    const input = screen.getByPlaceholderText('Buscar por nombre');
    userEvent.type(input, 'juan');

    await waitFor(() => {
      expect(screen.queryByText('Antonio Guzmán')).not.toBeInTheDocument();
      expect(screen.getByText('Juan Pérez')).toBeInTheDocument();
    });
  });

  it('sanitizes input to prevent injection', async () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const input = screen.getByPlaceholderText('Buscar por nombre');
    userEvent.type(input, '<script>');

    expect(input).toHaveValue('');
  });

  it('shows correct users per page', async () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    await waitFor(() => {
      expect(screen.getAllByRole('listitem').length).toBeLessThanOrEqual(5);
    });
  });
});
