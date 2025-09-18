import { FlexCenter } from '../../styled-components/Flex.styles';
import { styled } from '@mui/system';

export const Wrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
});

export const SelectWrapper = styled('div')({
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
});

export const StyledSelect = styled('select')({
  appearance: 'none',
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  height: 40,
  width: 'calc-size(calc-size(max-content, size), size + 24px)',
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: 'var(--border-radius)',
  paddingRight: 2,
  fontSize: 16,
  fontWeight: 600,
  fontFamily: 'var(--font-family-primary)',
  color: 'var(--color-text-secondary)',
  cursor: 'pointer',
  background: 'var(--color-tertiary)',
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