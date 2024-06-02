import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoutes, BookingRoutes } from '../../../routes/routes';

const Sidebar: React.FC = () => {
  return (
      <List>
        <ListItem component={Link} to={AppRoutes.HOME}>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem component={Link} to={AppRoutes.ESCAPE_ROOMS}>
          <ListItemText primary="Escape Rooms" />
        </ListItem>
        <ListItem component={Link} to={BookingRoutes.BOOKING}>
          <ListItemText primary="Booking" />
        </ListItem>
      </List>
  );
};

export default Sidebar;
