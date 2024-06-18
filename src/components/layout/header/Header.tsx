import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { AppRoutes, BookingRoutes } from '../../../routes/routes';
import logo from '../../../assets/images/logo.svg';

interface HeaderProps {
  onDrawerToggle: () => void;
}
const Header: React.FC<HeaderProps> = ({ onDrawerToggle }) => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Box
          component="img"
          sx={{
            width: 80,
            marginRight: 2,
            display: { xs: 'none', sm: 'block' },
          }}
          alt="Escape That! logo"
          src={logo}
        ></Box>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={onDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          fontSize={26}
          noWrap
          component={Link}
          to={AppRoutes.HOME}
          sx={{ textDecoration: 'none', color: 'inherit' }}
        >
          Escape That!
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' }, ml: 2 }}>
          <IconButton color="inherit" component={Link} to={AppRoutes.HOME}>
            Home
          </IconButton>
          <IconButton
            color="inherit"
            component={Link}
            to={AppRoutes.ESCAPE_ROOMS}
          >
            Escape Rooms
          </IconButton>
          <IconButton
            color="inherit"
            component={Link}
            to={BookingRoutes.BOOKING}
          >
            Bookings
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
