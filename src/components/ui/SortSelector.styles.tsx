import { FlexCenter } from '../../styled-components/Flex.styles';
import { styled } from '@mui/system';

export const Wrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  fontFamily: 'var(--font-family-secondary)',
});

export const Label = styled('label')({
  color: 'var(--color-gray-3)',
  fontSize: '16px',
});

export const SelectWrapper = styled('div')({
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
});

export const StyledSelect = styled('select')({
  fontFamily: 'var(--font-family-secondary)',
  appearance: 'none',
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  height: 40,
  width: 208,
  backgroundColor: 'transparent',
  border: '1px solid var(--color-gray-2)',
  borderRadius: 'var(--border-radius)',
  paddingLeft: 16,
  paddingRight: 2,
  fontSize: 14,
  color: 'var(--color-black)',
  cursor: 'pointer',

  '&:focus': {
    outline: 'none',
  },
});

export const IconWrapper = styled(FlexCenter)({
  position: 'absolute',
  width: 24,
  height: 24,
  aspectRatio: '1/1',
  right: '2px',
  pointerEvents: 'none',
});