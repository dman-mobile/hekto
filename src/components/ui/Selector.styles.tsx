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


export const SelectedValueDisplay = styled('div')({
  height: 40,
  display: 'flex',
  alignItems: 'center',
  padding: '0 32px 0 12px',
  border: 'none',
  borderRadius: 'var(--border-radius)',
  fontSize: 16,
  fontWeight: 600,
  fontFamily: 'var(--font-family-primary)',
  color: 'inherit',
  cursor: 'pointer',
  userSelect: 'none',
  '&:focus': {
    outline: 'none',
  },
});

export const SelectedValueDisplayOutlined = styled('div')({
  height: 40,
  display: 'flex',
  alignItems: 'center',
  padding: '0 32px 0 12px',
  border: '1px solid var(--color-gray-2)',
  borderRadius: 'var(--border-radius)',
  fontSize: 16,
  fontWeight: 600,
  fontFamily: 'var(--font-family-primary)',
  color: 'inherit',
  cursor: 'pointer',
  userSelect: 'none',
  '&:focus': {
    outline: 'none',
  },
});

export const OptionsList = styled('ul')({
  position: 'absolute',
  top: 'calc(100% + 4px)',
  left: 0,
  right: 0,
  margin: 0,
  listStyle: 'none',
  backgroundColor: 'var(--color-white)',
  borderRadius: 'var(--border-radius)',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  zIndex: 100,
  maxHeight: '200px',
  overflowY: 'auto',
});

export const OptionItem = styled('li')({
  padding: '12px',
  fontFamily: 'var(--font-family-primary)',
  fontSize: 16,
  color: 'var(--color-text-primary)',
  cursor: 'pointer',
  transition: 'background-color 0.15s ease',

  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
});

export const Label = styled('label')({
  color: 'var(--color-gray-3)',
  fontSize: '16px',
});