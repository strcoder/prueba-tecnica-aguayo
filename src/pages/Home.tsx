// src/pages/Home.tsx
import { Box, TextField, Typography, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { getUsers } from '../api/users';
import { User } from '../model/User';
import UsersList from '../components/UsersList';

function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
      setLoading(false);
    });
  }, []);

  return (
    <Box my={4}>
      <Typography variant='h4' gutterBottom>
        Lista de Usuarios
      </Typography>
      <TextField
        fullWidth
        label='Buscar por nombre'
        placeholder='Buscar por nombre'
        variant='outlined'
        margin='normal'
        value={search}
        onChange={(e) => setSearch(e.target.value.replace(/[<>]/g, ''))}
      />

      {loading ? (
        <CircularProgress />
      ) : (
        <UsersList users={users} search={search} />
      )}
    </Box>
  );
}

export default Home;
