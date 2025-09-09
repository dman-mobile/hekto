import { Body } from '../styled-components/Typography.styles';
import { FlexColumn, FlexContainer } from '../styled-components/Flex.styles';
import { styled } from '@mui/material/styles'; // Corrected import

export const BannerWrapper = styled('div')({
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: 'var(--color-tertiary-light)',
});

export const CarouselTrack = styled('div')({
  display: 'flex',
  transition: 'transform 0.5s ease-in-out',
});

export const CarouselSlide = styled('div')({
  width: '100%',
  flexShrink: 0,
  display: 'flex',
  justifyContent: 'center',
});



export const BannerContent = styled(FlexColumn)({
  '& > button': {
    marginTop: '1rem',
  }
});

export const Subtitle = styled(Body)({
  color: 'var(--color-primary)',
  fontWeight: 700,
});

export const Banner = styled(FlexContainer)({
  justifyContent: 'end',
  alignItems: 'center',
  gap: '56px',
  padding: 34,
  width: '100%',
  marginRight: 'calc(173px - var(--spacing-unit))',
  transition: 'margin-right 0.3s ease-out',
  '@media (max-width: 1900px)': {
    marginRight: 0,
    gap: 32,
    justifyContent: 'center',
  },
});

export const LampImage = styled('img')({
  position: "absolute",
  width: '100%',
  height: '100%',
  maxWidth: 387,
  maxHeight: 387,
  top: 0,
  left: 70,
  zIndex: 1,
  '@media (max-width: 1899px)': {
    display: 'none',
  },
});

export const ImageContainer = styled('div')({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const DiscountTag = styled('div')({
  position: 'absolute',
  backgroundImage: 'url(/hero-discount-bg.png)',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  width: 138,
  height: 138,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'var(--color-white)',
  top: 60,
  right: 13,

  h3: {
    margin: 0,
    fontSize: '24px',
    fontWeight: 700,
  }
});