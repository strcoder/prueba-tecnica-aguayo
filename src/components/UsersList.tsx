import {
  Box,
  Card,
  CardContent,
  List,
  ListItemButton,
  ListItemText,
  Pagination,
} from '@mui/material';
import { User } from '../model/User';
import { Link } from 'react-router-dom';
import { useState } from 'react';

type UsersListProps = {
  users: User[];
  search: string;
};

export const UsersList = ({ users, search }: UsersListProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const filtered = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );
  const totalPages = Math.ceil(filtered.length / usersPerPage);
  const startIndex = (currentPage - 1) * usersPerPage;
  const currentUsers = filtered.slice(startIndex, startIndex + usersPerPage);

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };
  return (
    <>
      <List role='list'>
        {currentUsers.map((user) => (
          <ListItemButton
            key={user.id}
            component={Link}
            sx={{ p: 0, mb: 2 }}
            role='listitem'
            to={`/user/${user.id}`}>
            <Card variant='outlined' sx={{ width: '100%' }}>
              <CardContent>
                <ListItemText primary={user.name} secondary={user.email} />
              </CardContent>
            </Card>
          </ListItemButton>
        ))}
      </List>
      {totalPages > 1 && (
        <Box mt={2} display='flex' justifyContent='center'>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color='primary'
            shape='rounded'
          />
        </Box>
      )}
    </>
  );
};

export default UsersList;
