import { Section } from "../styled-components/Section.styles"
import { Label, LabelSmall } from "../styled-components/Typography.styles"
import { FlexCenter, FlexColumn } from "../styled-components/Flex.styles"
import { styled } from "@mui/system"

export const PriceDiscount = styled('p')({
  color: 'var(--color-primary)',
  textDecoration: 'line-through'
})

export const Price = styled('p')({
  fontWeight: 700,
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

export const ProductCode = styled(LabelSmall)({
  color: 'var(--color-gray-3)',
  paddingTop: 24,
  lineHeight: '16px'
})

export const FeaturedSection = styled(Section)({
  position: 'relative'
})

export const CardActions = styled(FlexCenter)({
  gap: 8,
  position: 'absolute',
  top: 8,
  left: 8,
  '& > button': {
    transition: 'all .3s ease-in-out',
    opacity: 0
  }
})

export const Card = styled(FlexColumn)({
  borderRadius: 'var(--border-radius)',
  boxShadow: 'var(--shadow)',
  transition: 'all .3s ease-in-out',
  '& .button-details': {
    position: 'absolute',
    margin: '0 auto',
    bottom: 5,
    left: 0,
    right: 0,
    transition: 'all .3s ease-in-out',
    opacity: 0
  },
  ':hover': {
    boxShadow: 'var(--shadow-large)',
    transform: 'translateY(-25px)',
    '& button': {
      opacity: 1
    }
  },
  width: '100%',
  alignItems: "center",
  gap: 0
})

export const CardBody = styled(FlexColumn)({
  padding: 24,
  alignItems: 'center',
  gap: 0
})

export const ProductTitle = styled(Label)({
  color: 'var(--color-primary)',
  textAlign: 'center',
  textTransform: 'capitalize'
})

export const ProductsWrapper = styled(FlexCenter)({
  gap: 'var(--spacing-unit)',
  maxWidth: 1280,
  margin: '0 auto',
  marginTop: 72
})

export const ImageWrapper = styled('div')({
  position: 'relative',
  height: 232,
  width: 304,
  borderRadius: 'var(--border-radius)',
  overflow: 'hidden',
  '& img': {
    height: '100%',
    width: '100%',
    objectFit: 'cover'
  },
})
