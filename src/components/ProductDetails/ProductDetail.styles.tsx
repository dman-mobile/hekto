import { FlexCenter, FlexColumn, FlexContainer } from "../../styled-components/Flex.styles";
import { styled } from "@mui/system";

export const ProductDetailWrapper = styled(FlexContainer)({
  maxWidth: 1280,
  margin: '0 auto',
  justifyContent: 'space-between',
  gap: 144,
  '& .product-info': {
    justifyContent: 'center',
    flex: 1,
    gap: 0
  }
});

export const ImagePickerContainer = styled(FlexContainer)({
  gap: 32
});

export const ImagePicker = styled(FlexColumn)({
  gap: 16

});

export const Thumbnail = styled('div')({
  width: 192,
  height: 136,
  borderRadius: 'var(--border-radius)',
  background: 'var(--color-gray-1)',
  overflow: 'hidden',
  objectPosition: 'center',
  '& img': {
    transition: 'all .2s ease-in-out',
    objectFit: 'cover',
    width: "100%",
    height: "100%"
  },
  ':hover': {
    '& img': {
      scale: 1.1
    }
  }
});

export const ProductImage = styled('div')({
  width: 528,
  height: 438,
  borderRadius: 'var(--border-radius)',
  background: 'var(--color-gray-1)',
  boxShadow: 'var(--shadow-large)',
  overflow: 'hidden',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'all .2s ease-in-out',
  },
  ':hover': {
    '& img': {
      scale: 1.2
    }
  }
});

export const ProductActions = styled(FlexContainer)({
  paddingTop: 'calc(var(--spacing-unit) * 2)',
  alignItems: 'center',
  gap: 32
});

export const PriceContainer = styled(FlexCenter)({
  paddingTop: 24,
  paddingBottom: 24,
  gap: 16,
});

export const RatingContainer = styled(FlexCenter)({
  alignItems: 'start',
  paddingTop: 8,
  gap: 8,
});