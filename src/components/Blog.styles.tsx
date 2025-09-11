import { FlexCenter, FlexColumn, FlexStart } from '../styled-components/Flex.styles';
import { Body, SubtitleSmall } from '../styled-components/Typography.styles';
import { styled } from '@mui/system';
import { ButtonText } from './ui/Button.styles';

export const BlogTitle = styled(SubtitleSmall)({
  paddingBottom: 16,
  paddingTop: 24,
  transition: 'color .3s ease-in-out',
})

export const BlogCard = styled(FlexColumn)({
  userSelect: 'none',
  msUserSelect: 'none',
  MozUserSelect: 'none',
  maxWidth: 416,
  width: '100%',
  borderRadius: 'var(--border-radius)',
  boxShadow: 'var(--shadow)',
  transition: 'all .3s ease-in-out',
  ':hover': {
    boxShadow: 'var(--shadow-large)',
    transform: 'translateY(-24px)',
    [`& ${BlogTitle}`]: {
      color: 'var(--color-primary)'
    },
  },
  '& > img': {
    maxWidth: '100%',
    objectFit: 'cover',
    borderRadius: 'var(--border-radius)',
  }
})

export const BlogCardBody = styled(FlexColumn)({
  gap: 0,
  padding: 18,
  paddingBottom: 36
})

export const BlogInfo = styled(FlexStart)({
  gap: 'calc(var(--spacing-unit) * 2)',
  '& div': {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    gap: 8
  },
  color: 'var(--color-gray-3)'
})

export const BlogDescription = styled(Body)({
  paddingBottom: 'var(--spacing-unit)'
})

export const BlogWrapper = styled(FlexCenter)({
  gap: 'var(--spacing-unit)',
  maxWidth: 1280,
  margin: 'auto',
  padding: 72,
})

export const ReadMoreButton = styled(ButtonText)({
  marginTop: 36
})