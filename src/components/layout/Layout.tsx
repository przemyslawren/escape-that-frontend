import { Box, Container, CssBaseline, Drawer } from '@mui/material';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';

const Layout: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Container maxWidth={false} disableGutters>
      <CssBaseline />
      <Header onDrawerToggle={handleDrawerToggle} />
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <Sidebar />
      </Drawer>
      <Box
        component="main"
        sx={{
          marginTop: 8,
        }}
      >
        <Outlet />
      </Box>
    </Container>
  );
};

export default Layout;
