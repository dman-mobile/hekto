import { styled } from "@mui/system";

export const InputWrapper = styled('div')({
  padding: 2,
  height: 40,
  minWidth: 304,
  width: 'max-content',
  background: 'var(--color-white)',
  borderRadius: 8,
  border: '1px solid var(--color-gray-2)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingLeft: 16,
  '& input': {
    fontFamily: 'var(--font-family-secondary)',
    fontSize: 14,
    lineHeight: '16px',
    letterSpacing: 0,
    color: 'var(--color-black)',
    '::placeholder': {
      color: 'var(--color-gray-3)',
      fontFamily: 'inherit'
    }
  }
})