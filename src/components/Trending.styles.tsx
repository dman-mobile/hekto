import { Section } from "../styled-components/Section.styles"
import { Label } from "../styled-components/Typography.styles"
import { FlexCenter, FlexColumn } from "../styled-components/Flex.styles"
import { styled } from "@mui/system"

export const PriceDiscount = styled('p')({
  color: 'var(--color-primary)',
  textDecoration: 'line-through'
})

export const PriceContainer = styled(FlexCenter)({
  gap: 16
})

export const TrendingSection = styled(Section)({
})

export const Card = styled(FlexColumn)({
  padding: 16,
  boxShadow: 'var(--shadow)',
  transition: 'all .3s ease-in-out',
  ':hover': {
    boxShadow: 'var(--shadow-large)',
    transform: 'translateY(-25px)',
  },
  width: '100%',
  alignItems: "center"
})

export const CardBody = styled(FlexColumn)({
  padding: 24,
  alignItems: 'center'
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
  height: 232,
  width: 272,
  '& img': {
    height: '100%',
    width: '100%',
    objectFit: 'cover'
  },
  overflow: 'hidden'
})

export const SkeletonCard = styled(FlexColumn)({
  transition: 'all .3s ease-in-out',
  flexShrink: 0,
  width: 304,
  height: 380,
  opacity: 1,
  borderRadius: 'var(--border-radius)',
  alignItems: "center",
  gap: 0,
  cursor: 'wait',
  background: 'var(--color-gray-1)'
})