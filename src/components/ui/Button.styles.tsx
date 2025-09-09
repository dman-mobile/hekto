import { styled } from "@mui/system";

export const ButtonBig = styled('button')({
  padding: '16px 40px',
  background: 'var(--color-primary)',
  ":hover": 'var(--color-primary-dark)',
  fontSize: 16,
  fontWeight: 600,
  lineHeight: 20
})

export const ButtonSearch = styled('button')({
  maxHeight: 36,
  border: 'none',
  borderRadius: 8,
  padding: '6px 14px',
  background: 'var(--color-primary)',
  ":hover": 'var(--color-primary-dark)',
})

export const ButtonSmall = styled('button')({
  padding: '11px 16px',
  background: 'var(--color-success)',
  ":hover": 'var(--color-success-dark)',
  fontSize: 12,
  fontWeight: 600,
  lineHeight: 14
})

export const ButtonRound = styled('button')({
  padding: '11px 16px',
  color: 'var(--color-tertiary)',
  background: 'var(--color-white)',
  ":hover": 'var(--color-gray-2)',
})