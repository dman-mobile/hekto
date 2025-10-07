import { FlexBetween, FlexColumn } from "@/styled-components/Flex.styles";
import { Section } from "@/styled-components/Section.styles";
import { flex, styled } from "@mui/system";

export const TotalContainer = styled(FlexColumn)({
  background: 'var(--color-gray-1)',
  padding: 24,
  gap: 0,
  borderRadius: 'var(--border-radius)'
})

export const CartWrapper = styled(Section)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'start',
  gap: 145
})

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
    marginRight: 21,
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

export const Total = styled(FlexBetween)({
  fontFamily: 'var(--font-family-secondary)',
  fontWeight: 700,
  fontStyle: 'Bold',
  fontSize: 16,
  gap: 124,
  borderTop: '1px solid var(--color-gray-2)',
  borderBottom: '1px solid var(--color-gray-2)',
  padding: '16px 0'
})

export const Subtotal = styled(FlexBetween)({
  fontFamily: 'var(--font-family-secondary)',
  fontWeight: 700,
  fontStyle: 'Bold',
  fontSize: 16,
  gap: 124,
  paddingBottom: 16
})

export const Shipping = styled(FlexBetween)({
  fontFamily: 'var(--font-family-secondary)',
  gap: 124,
  padding: '16px 0 32px 0',
  fontWeight: 400,
  fontSize: 14,
  lineHeight: '16px',
  letterSpacing: 0,
  color: 'var(--color-gray-3)'
})

export const Price = styled('p')({
  fontFamily: 'var(--font-family-primary)',
})

export const TotalWrapper = styled(FlexColumn)({
  gap: 'var(--spacing-unit)',
  alignItems: 'center'
})

export const ModalBackdrop = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 100,
});

export const ModalContent = styled('div')({
  backgroundColor: 'white',
  padding: '30px',
  borderRadius: 'var(--border-radius)',
  textAlign: 'center',
  boxShadow: 'var(--shadow)',
  width: '90%',
  maxWidth: '400px',

  '& h3': {
    marginTop: 0,
  },

  '& p': {
    margin: '15px 0 25px 0',
    color: 'var(--color-gray-3)',
  },

  '& div': {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    '& div':{
      flex: 1
    }
  }
});