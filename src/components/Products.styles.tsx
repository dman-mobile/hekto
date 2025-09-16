import { StyleProps } from "@/types/Product";
import { FlexCenter, FlexContainer, FlexStart } from "../styled-components/Flex.styles"
import { styled } from "@mui/system"


export const PriceDiscount = styled('p')({
  textDecoration: 'line-through',
  color: 'var(--color-gray-3)',
})

export const ProductsContainer = styled('div')<StyleProps>(({ view }) => ({
  display: view === 'grid' ? 'grid' : 'flex',
  flexDirection: view === 'list' ? 'column' : 'unset',
  gridTemplateColumns: view === 'grid' ? 'repeat(auto-fill, minmax(280px, 1fr))' : 'none',
  gap: 'var(--spacing-unit)',
  width: '100%',
  maxWidth: 1310,
  margin: '0 auto',
  paddingLeft: 172
}));

export const ProductCard = styled(FlexContainer)<StyleProps>(({ view }) => ({
  flexDirection: view === 'grid' ? 'column' : 'row',
  padding: 16,
  gap: 'var(--spacing-unit)',
  borderRadius: 'var(--border-radius)',
  boxShadow: 'var(--shadow)',
  transition: 'all .3s ease-in-out',
  ':hover': {
    boxShadow: 'var(--shadow-large)',
  },
  '& .description': {
    paddingTop: 24
  }
}));

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

export const ImageWrapper = styled('div')<StyleProps>(({ view }) => ({
  position: 'relative',
  height: view === 'grid' ? 200 : 200,
  width: view === 'grid' ? '100%' : 288,
  borderRadius: 'var(--border-radius)',
  overflow: 'hidden',
  flexShrink: 0,
  '& img': {
    height: '100%',
    width: '100%',
    objectFit: 'cover'
  },
}));

export const RatingContainer = styled(FlexCenter)<StyleProps>(({ view }) => ({
  alignItems: 'start',
  gap: 8,
  paddingTop: view === 'grid' ? 8 : 0,
}));

export const CardActions = styled(FlexCenter)({
  gap: 24,
  paddingTop: 16,
})

export const CardBody = styled('div')<StyleProps>(({ view }) => ({
  paddingTop: view === 'grid' ? 16 : 24,
  maxWidth: 616,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'space-between',
}));

export const CardHeader = styled('div')<StyleProps>(({ view }) => ({
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'space-between',
  width: '100%',
  flexDirection: view === 'grid' ? 'column' : 'row',
  paddingBottom: view === 'grid' ? 8 : 0,
}));

export const ViewPickerButton = styled('div')<StyleProps>(({ isActive }) => ({
  cursor: 'pointer',
  color: isActive ? 'var(--color-primary)' : 'inherit',
  transition: 'all .2s ease-in-out',
  ':hover': {
    color: 'var(--color-primary)'
  }
}));

export const Pagination = styled(FlexCenter)({
  maxWidth: 1280,
  margin: '0 auto',
  paddingTop: 48,
  gap: 8,
  justifyContent: 'end',
  width: '100%'
})

export const PaginationButton = styled('button')<StyleProps>(({ isActive }) => ({
  borderRadius: 'calc(var(--border-radius) / 2)',
  background: isActive ? 'var(--color-primary)' : 'transparent',
  width: 32,
  height: 32,
  color: isActive ? 'var(--color-white)' : 'var(--color-black)',
  border: 'none',
  cursor: 'pointer',
  transition: 'all .2s ease-in-out',
  ':hover': {
    background: 'var(--color-primary-dark)',
    color: 'var(--color-white)'
  },
  fontWeight: 400,
  fontSize: 16,
  leadingTrim: 'NONE',
  lineHeight: '20px',
  letterSpacing: '0px',
  textAlign: 'center'
}));