import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Link,
  IconButton,
  Container,
  Stack,
  Button,
} from '@mui/material';
import {
  MailOutline,
  Phone,
  PersonOutline,
  FavoriteBorder,
  ShoppingCartOutlined,
  Search,
  ExpandMore,
} from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import Input from './ui/Input';

const NavLinkStyles = {
  textDecoration: 'none',
  color: 'var(--color-text-primary)',
  padding: '8px 12px',
  borderRadius: '4px',
  transition: 'color 0.3s, background-color 0.3s',
};

const ActiveNavLinkStyles = {
  color: 'var(--color-primary)',
};

const AppHeader = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: '1px solid var(--divider-color)' }}>
      <Box sx={{ bgcolor: 'var(--color-tertiary)', color: 'var(--color-text-secondary)', py: 1.4 }}>
        <Container>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Stack direction="row" spacing={3} divider={<Box sx={{ borderRight: '1px solid #9A4BCE', height: '16px', alignSelf: 'center' }} />}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <MailOutline sx={{ fontSize: 18 }} />
                <Typography sx={{ color: 'var(--color-white)' }} variant="body1">mwasyluk@griddynamics.com</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Phone sx={{ fontSize: 18 }} />
                <Typography sx={{ color: 'var(--color-white)' }} variant="body1">(12345)67890</Typography>
              </Stack>
            </Stack>
            <Stack direction="row" spacing={2.5} alignItems="center">
              <Link href="#" color="inherit" underline="none" sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography sx={{ color: 'var(--color-white)' }} variant="body1">English</Typography>
                <ExpandMore fontSize="small" />
              </Link>
              <Link href="#" color="inherit" underline="none" sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography sx={{ color: 'var(--color-white)' }} variant="body1">USD</Typography>
                <ExpandMore fontSize="small" />
              </Link>
              <Link href="#" color="inherit" underline="none" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Typography sx={{ color: 'var(--color-white)' }} variant="body1">Login</Typography>
                <PersonOutline sx={{ fontSize: 20 }} />
              </Link>
              <Link href="#" color="inherit" underline="none" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Typography sx={{ color: 'var(--color-white)' }} variant="body1">Wishlist</Typography>
                <FavoriteBorder sx={{ fontSize: 20 }} />
              </Link>
              <IconButton size="small" color="inherit" aria-label="cart">
                <ShoppingCartOutlined />
              </IconButton>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Toolbar sx={{ bgcolor: 'background.white', py: 2.2 }}>
        <Container>
          <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={3.2}>
            <Typography variant="h4" component="p" sx={{ fontWeight: 'bold' }}>
              Hekto
            </Typography>

            <Stack direction="row" spacing={1} component="nav" sx={{ flexGrow: 1 }}>
              <NavLink to="/" style={({ isActive }) => ({ ...NavLinkStyles, ...(isActive ? ActiveNavLinkStyles : {}) })}>
                Home
              </NavLink>
              <NavLink to="/products" style={({ isActive }) => ({ ...NavLinkStyles, ...(isActive ? ActiveNavLinkStyles : {}) })}>
                Products
              </NavLink>
              <NavLink to="/blog" style={({ isActive }) => ({ ...NavLinkStyles, ...(isActive ? ActiveNavLinkStyles : {}) })}>
                Blog
              </NavLink>
              <NavLink to="/contact" style={({ isActive }) => ({ ...NavLinkStyles, ...(isActive ? ActiveNavLinkStyles : {}) })}>
                Contact
              </NavLink>
            </Stack>

            <Box p={.2} paddingLeft={1.6} component="form" sx={{ display: 'flex' }}>
              <Input placeholder='Search' />
              <Button
                variant="contained"
                color="primary"
                sx={{
                  borderBottomRightRadius: .8,
                  borderTopRightRadius: .8,
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  px: 2,
                }}
              >
                <Search />
              </Button>
            </Box>
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;