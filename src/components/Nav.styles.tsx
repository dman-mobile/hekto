import { styled } from "@mui/system";

export const Nav = styled('nav')({
  '& .view-picker-container': {
    gap: 16
  }
})

export const NavWrapper = styled('nav')({
  paddingTop: 80,
  display: 'flex',
  justifyContent: 'end',
  alignItems: 'center',
  gap: 'calc(var(--spacing-unit) * 2)',
  maxWidth: 1280,
  margin: '0 auto',
  width: '100%'
})