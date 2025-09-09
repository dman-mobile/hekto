import { styled } from "@mui/system";

export const HeaderWrapper = styled('header')({
  display: 'flex',
  backgroundColor: 'var(--color-tertiary)',
  flexDirection: 'column'
})

export const HeaderContainer = styled('div')({
  color: 'var(--color-text-secondary)',
  padding: '14px 16px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: 1280,
  width: '100%',
  margin: 'auto'
});

export const ContactContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 48
})

export const ContactField = styled('a')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 10
})

export const MenuContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 'var(--spacing-unit)'
})

export const MenuLink = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 4
})

export const Dropdown = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 4
})


export const NavWrapper = styled('nav')({
  background: 'var(--color-white)',
})

export const NavContainer = styled('nav')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '16px 16px',
  maxWidth: 1280,
  width: '100%',
  margin: 'auto'
})

export const NavLinks = styled('ul')({
  background: 'var(--color-white)',
  listStyle: "none",
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 'var(--spacing-unit)',
})