import { FlexCenter, FlexContainer, FlexStart } from "../styled-components/Flex.styles"
import { styled } from "@mui/system"

export const PriceDiscount = styled('p')({
  textDecoration: 'line-through',
  color: 'var(--color-gray-3)',
})

export const ProductsContainer = styled('div')({
  display: 'flex',
  justifyContent: 'start',
  flexDirection: 'column',
  maxWidth: 976,
  width: '100%',
  margin: '0 auto',
  gap: 'var(--spacing-unit)'
})

export const ProductCard = styled(FlexContainer)({
  gap: 'var(--spacing-unit)',
  padding: 16,
  borderRadius: 'var(--border-radius)',
  boxShadow: 'var(--shadow)',
  transition: 'all .3s ease-in-out',
  ':hover': {
    boxShadow: 'var(--shadow-large)',
  }
})

export const Price = styled('p')({
  color: 'var(--color-black)',
  fontWeight: 400,
  fontStyle: 'Bold',
  fontSize: 16,
  lineHeight: '20px',
  letterSpacing: 0,
  textAlign: 'center',
  paddingTop: 8
})

export const PriceContainer = styled(FlexCenter)({
  gap: 16,
})

export const ProductsWrapper = styled(FlexStart)({
  margin: '0 auto',
  maxWidth: 1280,
  width: '100%',
  alignItems: 'start',
  paddingTop: 'var(--spacing-unit)',
})

export const ImageWrapper = styled('div')({
  position: 'relative',
  height: 200,
  width: 288,
  borderRadius: 'var(--border-radius)',
  overflow: 'hidden',
  '& img': {
    height: '100%',
    width: '100%',
    objectFit: 'cover'
  },
})

export const RatingContainer = styled(FlexCenter)({
  alignItems: 'start',
  gap: 8
})

export const CardActions = styled(FlexCenter)({
  gap: 24,
})

export const CardBody = styled('div')({
  maxWidth: 616,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'space-between',
})

export const CardHeader = styled('div')({
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'space-between',
  width: '100%'
})