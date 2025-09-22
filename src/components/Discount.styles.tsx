import { FlexCenter, FlexColumn } from "../styled-components/Flex.styles"
import { Section } from "../styled-components/Section.styles"
import { styled } from '@mui/system'
export const DiscountSection = styled(Section)({

})

export const ProductWrapper = styled(FlexCenter)({
  paddingTop: 26,
  maxWidth: 1280,
  margin: '0 auto'
})

export const Title = styled('h3')({
  fontWeight: 700,
  fontSize: 36,
  lineHeight: '44px',
  letterSpacing: '1.5%',
  textTransform: 'capitalize'
})

export const DiscountInfo = styled(FlexColumn)({
  gap: 24,
  flex: 1
})

export const ImageWrapper = styled(FlexCenter)({
  flex: 1,
  height: '100%',
  width: '100%',
  position: 'relative',
})

export const ProductBackground = styled('div')({
  '& img': {
    position: 'absolute',
    top: 48,
    left: 83,
    zIndex: '-1'
  },
  '& img:first-of-type': {
    position: 'absolute',
    top: 11,
    left: 296,
    zIndex: '-2'
  },
})

export const ProductImage = styled('div')({
  position: "relative",
  width: '100%',
  maxWidth: '100%',
  left: 164,
  top: 22,
  '& > img': {
    maxWidth: 448,
  }
})

export const Subtitle = styled('p')({
  color: 'var(--color-primary)',
  fontWeight: 700,
  fontSize: 22,
  lineHeight: '28px',
  letterSpacing: 0,
  textTransform: 'capitalize'
})

export const FeatureList = styled('ul')({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  columnGap: 'var(--spacing-unit)',
  rowGap: 26,
  '& li': {
    display: 'flex',
    gap: 8,
    justifyContent: 'start',
    alignItems: 'center'
  }
})