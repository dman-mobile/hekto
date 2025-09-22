import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

export const BreadcrumbNav = styled('nav')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  fontFamily: 'var(--font-family-secondary)',
  paddingTop: 24,
});

export const BreadcrumbList = styled('ol')({
  listStyle: 'none',
  display: 'flex',
  alignItems: 'center',
  padding: 0,
  margin: 0,
});

export const BreadcrumbItem = styled('li')({
  '& + &::before': {
    fontSize: 14,
    content: "'•'",
    margin: '0 8px',
    color: 'var(--color-gray-1)',
  },
});

export const BreadcrumbLink = styled(Link)({
  textDecoration: 'none',
  color: 'var(--color-gray-3)',
  transition: 'color .2s ease-in-out',
  '&:hover': {
    color: 'var(--color-primary)',
  },
});

export const BreadcrumbActive = styled('span')({
  color: 'var(--color-primary)',
});