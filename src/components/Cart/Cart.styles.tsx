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

export const CartList = styled('ul')({
  listStyle: 'none',
  padding: 0,
  margin: '0 0 40px 0',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  width: '100%',
  maxWidth: 800,
});

export const CartItemCard = styled('li')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: 'var(--color-white)',

  '& .item-total': {
    width: '10ch',
    textAlign: 'end'
  },

  '& img': {
    width: 150,
    height: 104,
    objectFit: 'cover',
    borderRadius: 4,
  },
});

export const ItemInfo = styled('div')({
  display: 'flex',
  alignItems: 'center',
  flex: 2,
});

export const ItemDetails = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  maxWidth: 340,
  width: '100%',

  '& h4': {
    fontWeight: 700,
    fontSize: 22,
    lineHeight: "28px",
  },
});

export const ItemActions = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  padding: '5px',
  borderRadius: '4px',
  justifyContent: 'center',
  width: 120,
  height: 40,
  border: '1px solid var(--color-gray-2)',

  '& button': {
    border: 'none',
    background: 'none',
    fontWeight: 200,
    cursor: 'pointer',
    width: 36,
    height: 36,
    fontSize: 24
  },

  '& span': {
    textAlign: 'center',
    width: 44,
    fontSize: 14,
    color: 'var(--color-black)',
  },
});