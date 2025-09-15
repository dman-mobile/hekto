import { FlexCenter } from "../styled-components/Flex.styles"
import { styled } from "@mui/system"

export const FooterSection = styled('footer')({
  paddingTop: 92,
  background: 'var(--color-tertiary-light)'
})

export const FooterWrapper = styled('footer')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'start',
  maxWidth: 1280,
  margin: '0 auto',
  '& .links': {
    marginLeft: 144
  },
  '& .info': {
    justifyContent: 'start',
    gap: 32,
  },
  paddingBottom: 142,
})

export const LinkColumn = styled('ul')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'start',
  gap: 24,
  '& .link': {
    color: 'var(--color-gray-3)',
    cursor: 'pointer',
    transition: 'all .2s ease-in-out',
    ':hover': {
      color: 'var(--color-black)'
    }
  }
})

export const SocialsWrapper = styled('div')({
  padding: 16,
  background: 'var(--color-gray-2)',
  '& .socials-container': {
    gap: 20
  },
  '& .footer': {
    maxWidth: 1280,
    margin: '0 auto',
  }
})

export const RoundLink = styled(FlexCenter)({
  aspectRatio: '1/1',
  width: 24,
  height: 24,
  background: 'var(--color-black)',
  transition: 'all .2s ease-in-out',
  ':hover': {
    background: 'var(--color-gray-3)',
  },
  borderRadius: '50%',
  color: 'var(--color-white)'
})