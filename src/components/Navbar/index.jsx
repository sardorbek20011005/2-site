import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

import Rasm from '../../assets/logo.png'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
const pages = ['Home', 'Service', 'About','Pricing','Newsletter'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  


  return (
    <AppBar sx={{
      backgroundColor: 'lightgrey',
      opacity: 0.7,
      zIndex:"10",
      boxShadow:"none",
      borderBottom:"1px solid grey",
      position:"fixed"
    }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img style={{paddingLeft:"5% "}} src={Rasm}/>
          <Box sx={{ flexGrow: 1,color:"black",display: { xs: 'flex',sm:"none" ,md: 'none' },ml:{xs:"44%",sm:"10%"} }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block',sm:"none", md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography  textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none',sm:"flex", md: 'flex', }, marginLeft:{md:"28%",lg:"40%",sm:"9%"} }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                   my: 2, color: 'black', }}
                  >
                {page}
              </Button>
            ))}
          </Box>
          <Button variant="contained" sx={{display:{md:"flex",sm:"flex",xs:"none"}}} startIcon={<ExitToAppIcon />}>
            Sign In Now  
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;