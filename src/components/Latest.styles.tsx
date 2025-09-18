import { TabProps } from "../types/Tabs";
import { FlexCenter, FlexColumn } from "../styled-components/Flex.styles";
import { Section } from "../styled-components/Section.styles";
import { styled } from "@mui/system";

export const LatestSection = styled(Section)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

})

export const TabsBar = styled('nav')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'calc(var(--spacing-unit) * 2)',
  paddingTop: 16
})


export const Tab = styled('button')<TabProps>(({ isActive }) => ({
  border: 'none',
  background: 'transparent',
  fontFamily: 'var(--font-family-secondary)',
  fontSize: '18px',
  lineHeight: '24px',
  letterSpacing: '0px',
  cursor: 'pointer',
  color: isActive ? 'var(--color-primary)' : 'var(--color-black)',
  transition: 'color 0.3s ease, border-bottom 0.3s ease',
}))


export const Grid = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gridTemplateRows: '1fr 1fr',
  gap: 'var(--spacing-unit)',
  paddingTop: 64,
})

export const Card = styled(FlexColumn)({
  gap: 12,
  maxWidth: 416,
  width: '100%',
  maxHeight: 304,
  overflow: 'hidden',
  ':hover': {
    '& button': {
      opacity: 1
    }
  },
  position: "relative"
})

export const ImageContainer = styled('div')({
  position: 'relative',
})

export const Image = styled('img')({
  position: 'relative',
  maxWidth: '100%',
  height: 272,
  width: 416,
  objectFit: "cover",
  borderRadius: 'var(--border-radius)'
})

export const CardActions = styled(FlexColumn)({
  gap: 8,
  position: 'absolute',
  bottom: 8,
  left: 8,
  '& > button': {
    transition: 'all .3s ease-in-out',
    opacity: 0
  }
})

export const SaleTag = styled('div')({
  width: 86,
  height: 56,
  backgroundImage: 'url(/sale-tag.png)',
  backgroundRepeat: 'no-repeat',
  position: 'absolute',
  top: 0,
  left: 0
})

export const PriceDiscount = styled('p')({
  color: 'var(--color-primary)',
  textDecoration: 'line-through'
})

export const Title = styled('p')({
  textTransform: 'capitalize'
})

export const PriceContainer = styled(FlexCenter)({
  gap: 16
})

export const SkeletonCard = styled(FlexColumn)({
  gap: 12,
  width: 416,
  height: 304,
  overflow: 'hidden',
  ':hover': {
    '& button': {
      opacity: 1
    }
  },
  position: "relative",
  '& .skeleton-body-top': {
    background: 'var(--color-gray-1)',
    width: 416,
    height: 272,
    borderRadius: 8
  },
  '& .skeleton-body-left': {
    width: 233,
    height: 24,
    borderRadius: 8,
    background: 'var(--color-gray-1)'
  },
  '& .skeleton-body-right': {
    width: 99,
    height: 24,
    borderRadius: 8,
    background: 'var(--color-gray-1)'
  },
})