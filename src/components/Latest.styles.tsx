import { FlexColumn } from "../styled-components/Flex.styles";
import { Section } from "../styled-components/Section.styles";
import { styled } from "@mui/system";

export const LatestSection = styled(Section)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
})

export const TabsBar = styled('nav')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'calc(var(--spacing-unit) * 2)',
  paddingTop: 16
})

export const Tab = styled('button')({
  border: 'none',
  background: 'transparent',
  fontFamily: 'var(--font-family-secondary)',
  fontSize: '18px',
  lineHeight: '24px',
  letterSpacing: '0px',
  color: 'var(--color-black)'

})

export const Grid = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gridTemplateRows: '1fr 1fr',
  gap: 'var(--spacing-unit)',
  paddingTop: 64
})

export const Card = styled(FlexColumn)({
  maxWidth: 416,
  width: '100%',
  maxHeight: 304,
  overflow: 'hidden'
})

export const Image = styled('img')({
  maxWidth: '100%',
  height: 272,
  width: 416,
  objectFit: "cover",
  borderRadius: 'var(--border-radius)'
})

export const CardActions = styled(FlexColumn)({
  gap: 8,
  
})