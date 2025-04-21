// src/pages/UserDetails.tsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUsers } from '../api/users';
import { Box, CircularProgress } from '@mui/material';
import { User } from '../model/User';
import UserCard from '../components/UserCard';

function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState<User | undefined>();

  useEffect(() => {
    getUsers().then((users) => {
      const found = users.find((u) => u.id === Number(id));
      setUser(found);
    });
  }, [id]);

  if (!user) return <CircularProgress />;

  return (
    <Box my={4}>
      <UserCard user={user} />
    </Box>
  );
}

export default UserDetails;
