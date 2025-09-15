import { styled } from "@mui/system";

export const Select = styled('select')({
  padding: '12px 16px',
  fontFamily: 'var(--font-family-secondary)',
  color: 'var(--color-black)',
  fontSize: 14,
  lineHeight: '16px',
  '&, &::picker(select)': {
    borderRadius: 'var(--border-radius)',
    border: '1px solid var(--color-gray-2)',
  },
})