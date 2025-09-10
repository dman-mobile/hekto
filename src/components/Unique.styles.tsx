import { FlexCenter, FlexColumn } from "../styled-components/Flex.styles";
import { styled } from "@mui/system";
import { Body } from "../styled-components/Typography.styles";

export const UniqueWrapper = styled('section')({
  display: 'flex',
  justifyItems: 'center',
  alignItems: 'center',
  gap: 'var(--spacing-unit)',
  width: '100%',
  background: 'var(--color-tertiary-light)'
})

export const Banner = styled(FlexCenter)({
  maxWidth: 1280,
  margin: 'auto',
  padding: 32,
  flexWrap: 'wrap'
})

export const BannerImage = styled('div')({
  maxWidth: '100%',
  flex: 1,
  minWidth: 420
})

export const BannerInfo = styled(FlexColumn)({
  gap: 48,
  flex: 1,
  width: '100'
})

export const DescriptionList = styled('ul')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'start',
  gap: 16,
})

export const ListItem = styled(Body)({
  color: 'var(--color-gray-3)'
})

export const ListDot = styled('div')({
  width: 11,
  height: 11,
  borderRadius: '50%'
})

export const DotPink = styled('div')({
  background: 'var(--color-primary)',
  width: 11,
  height: 11,
  borderRadius: '50%',
  aspectRatio: '1/1'
})

export const DotBlue = styled('div')({
  background: 'var(--color-info)',
  width: 11,
  height: 11,
  borderRadius: '50%',
  aspectRatio: '1/1'
})

export const DotGreen = styled('div')({
  background: 'var(--color-success)',
  width: 11,
  height: 11,
  borderRadius: '50%',
  aspectRatio: '1/1'
})