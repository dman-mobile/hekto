import { FlexColumn } from "@/styled-components/Flex.styles";
import { styled } from "@mui/system";

export const EmptyCartImage = styled('div')({
  width: 387,
  height: 268.5,
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  }
});

export const CartContainer = styled(FlexColumn)({
  justifyContent: 'center',
  alignItems: 'center',
  gap: 'var(--spacing-unit)',
  padding: '40px 20px',
});