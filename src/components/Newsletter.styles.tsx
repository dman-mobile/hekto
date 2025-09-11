import { FlexCenter } from "../styled-components/Flex.styles";
import { Section } from "../styled-components/Section.styles";
import { styled } from "@mui/system";

export const NewsletterSection = styled(Section)({
  textAlign: 'center',
  padding: '112px 0',
  '& > h2': {
    maxWidth: '32ch',
    paddingBottom: 60,
    margin: 'auto'
  },
  position: 'relative',
  overflow: 'hidden'
})

export const ImageWrapper = styled(FlexCenter)({
  position: 'absolute',
  width: '100%',
  objectFit: 'cover',
  bottom: '-55px',
  zIndex: -1,
  '& > img': {
    maxWidth: '100%',
  },
})