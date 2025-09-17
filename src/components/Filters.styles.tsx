import { StyledCheckboxProps } from "@/types/Filters";
import { Label } from "../styled-components/Typography.styles";
import { styled } from "@mui/system";

export const SideNav = styled('nav')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'start',
  maxWidth: 164,
  width: '100%',
  height: 'max-content',
  gap: 48
})

export const FilterLabel = styled(Label)({
  fontFamily: 'var(--font-family-primary)',
  fontWeight: 700,
  fontSize: 20,
  leadingTrim: 'NONE',
  lineHeight: '24px',
  letterSpacing: 0,
  paddingBottom: 8,
  borderBottom: '1px solid var(--color-black)'
})

export const FilterSection = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});


export const FilterList = styled('ul')({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});

export const FilterListItem = styled('li')({});

export const CheckboxWrapper = styled('label')({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
});

export const HiddenCheckbox = styled('input')({
  display: 'none',
});

export const StyledCheckbox = styled('div')<StyledCheckboxProps>(
  ({ checked, activeColor, backgroundColor }) => ({
    width: '16px',
    height: '16px',
    border: '1px solid var(--color-gray-2)',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '12px',
    transition: 'all 150ms',

    backgroundColor: checked ? (activeColor || 'var(--color-primary)') : (backgroundColor || 'var(--color-danger-light)'),
    borderColor: checked ? (activeColor || 'var(--color-primary)') : (backgroundColor || 'var(--color-danger-light)'),

    '&::after': {
      content: '""',
      display: checked ? 'block' : 'none',
      width: '4px',
      height: '8px',
      border: 'solid white',
      borderWidth: '0 2px 2px 0',
      transform: 'rotate(45deg)',
    },
  })
);

export const CheckboxLabel = styled('span')({
  color: 'var(--color-gray-3)',
  fontFamily: 'var(--font-family-secondary)',
});

export const RatingWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
});