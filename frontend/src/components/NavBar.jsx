import { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Avatar, IconButton, Menu, MenuItem } from '@mui/material';
import { color } from '../colors/color';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" sx={{ bgcolor: color[300] }}>
      <Toolbar>
        <Box display="flex" alignItems="center" sx={{ mr: 2 }}>
          <img src="../logo.png" alt="Logo" style={{ marginRight: 10, width: 50 }} />
          <Typography variant="h6" noWrap sx={{ color: color[100] }}>
            <b>Contact Management</b>
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
        </Box>
        <Box display={{ xs: 'none', md: 'flex' }} alignItems="center">
          <Box textAlign="right" sx={{ mr: 2 }}>
            <Typography variant="body1" sx={{ color: color[100] }}>Sanju</Typography>
            <Typography variant="body2" sx={{ color: color[100] }}>Assistant Manager</Typography>
          </Box>
          <Avatar alt="Profile Picture" src="/path/to/profile.jpg" />
        </Box>
        <Box display={{ xs: 'flex', md: 'none' }} alignItems="center">
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>
              <Box display="flex" alignItems="center">
                <Avatar alt="Profile Picture" src="/path/to/profile.jpg" sx={{ mr: 2 }} />
                <Box>
                  <Typography variant="body1">Sanju</Typography>
                  <Typography variant="body2">Assistant Manager</Typography>
                </Box>
              </Box>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;