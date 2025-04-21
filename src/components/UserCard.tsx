import { Card, CardContent, Typography } from '@mui/material';
import { User } from '../model/User';

type UserCardProps = {
  user: User;
};

const UserCard = ({ user }: UserCardProps) => {
  return (
    <Card>
      <CardContent>
        <Typography variant='h5' gutterBottom>
          {user?.name}
        </Typography>
        <Typography>Email: {user?.email}</Typography>
        <Typography>Phone: {user?.phone}</Typography>
        <Typography>Website: {user?.website}</Typography>
        <Typography>Company: {user?.company.name}</Typography>
        <Typography>
          Address: {user?.address?.street}, {user?.address.city}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserCard;
