import { styled } from "@mui/system";

export const ButtonBig = styled('button')({
  padding: '16px 40px',
  transition: 'background 0.2s',
  background: 'var(--color-primary)',
  ":hover": {
    background: 'var(--color-primary-dark)'
  },
  fontSize: 16,
  fontWeight: 600,
  border: 'none',
  color: 'var(--color-white)',
  borderRadius: 'var(--border-radius)',
  cursor: 'pointer'
})

export const ButtonSearch = styled('button')({
  cursor: 'pointer',
  maxHeight: 36,
  border: 'none',
  borderRadius: 8,
  padding: '6px 14px',
  background: 'var(--color-primary)',
  transition: 'background 0.2s',
  ":hover": {
    background: 'var(--color-primary-dark)'
  },
})

export const ButtonSmall = styled('button')({
  cursor: 'pointer',
  padding: '11px 16px',
  transition: 'background 0.2s',
  background: 'var(--color-success)',
  ":hover": {
    background: 'var(--color-success-dark)'
  },
  fontSize: 12,
  fontWeight: 600,
  lineHeight: 14
})

export const ButtonRound = styled('button')({
  cursor: 'pointer',
  padding: '11px 16px',
  color: 'var(--color-tertiary)',
  transition: 'background 0.2s',
  background: 'var(--color-white)',
  ":hover": {
    background: 'var(--color-gray-2)'
  },
})