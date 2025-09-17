import { Section } from "../styled-components/Section.styles"
import { Label } from "../styled-components/Typography.styles"
import { FlexCenter, FlexStart } from "../styled-components/Flex.styles"
import { styled } from "@mui/system"

export const PriceDiscount = styled('p')({
  color: 'var(--color-primary)',
  textDecoration: 'line-through'
})

export const CategoryWrapper = styled(FlexCenter)({
  flexDirection: 'column',
  textAlign: 'center'
})

export const TopSection = styled(Section)({
  position: 'relative',
  overflow: 'hidden',
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

export const Card = styled(FlexCenter)({
  position: 'relative',
  borderRadius: '50%',
  overflow: "hidden",
  boxShadow: 'var(--shadow)',
  transition: 'all .3s ease-in-out',
  flexShrink: 0,
  width: 272,
  height: 272,
  aspectRatio: '1/1',
  alignItems: "center",
  gap: 0,
  '& .button-details': {
    position: 'absolute',
    margin: '0 auto',
    bottom: 34,
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
    },
    '& .card-background': {
      opacity: 1,
    }
  },
  '& img': {
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    objectFit: 'cover'
  },
  '& .card-background': {
    opacity: 0,
    transition: 'all .3s ease-in-out',
  }
})

export const CategoryTitle = styled(Label)({
  color: 'var(--color-black)',
  textAlign: 'center',
  textTransform: 'capitalize'
})

export const CategoriesWrapper = styled(FlexStart)({
  gap: 64,
  maxWidth: 1312,
  margin: 'auto auto',
  paddingTop: 72,
  paddingBottom: 100,
  overflow: 'hidden'
})

export const CarouselTrack = styled('div')({
  display: 'flex',
  transition: 'transform 0.5s ease-in-out',
  gap: 64,
  userSelect: 'none',
  '&.grabbing': {
    transition: 'none'
  }
});

export const ImageWrapper = styled('div')({
  position: 'relative',
  borderRadius: 'var(--border-radius)',
  overflow: 'hidden',
  height: '100%',
  width: '100%',
  '& img': {
    objectFit: 'cover'
  },
})

export const CardBackground = styled('img')({
  position: 'absolute',
  maxWidth: 236,
  maxHeight: 236,
  top: 34,
  left: 0,
  zIndex: 2
})