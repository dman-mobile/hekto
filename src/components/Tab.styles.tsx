import { TabProps } from "../types/Tabs"
import { styled } from "@mui/system"

export const TabsBar = styled('nav')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'calc(var(--spacing-unit) * 2)',
  paddingTop: 16
})


export const Tab = styled('button')<TabProps>(({ isActive }) => ({
  border: 'none',
  background: 'transparent',
  fontFamily: 'var(--font-family-secondary)',
  fontSize: '18px',
  lineHeight: '24px',
  letterSpacing: '0px',
  cursor: 'pointer',
  color: isActive ? 'var(--color-primary)' : 'var(--color-black)',
  transition: 'color 0.3s ease, border-bottom 0.3s ease',
}))
