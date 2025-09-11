import { styled } from "@mui/system";

export const Subtitle = styled('p')({
  fontFamily: 'var(--font-family-secondary)',
  color: 'var(--color-primary)',
  fontWeight: 700,
  fontSize: 16,
  letterSpacing: 1
})

export const Title = styled('h1')({
  fontFamily: 'var(--font-family-primary)',
  maxWidth: 570
})

export const SubtitleSmall = styled('p')({
  fontFamily: 'var(--font-family-primary)',
  fontWeight: 600,
  fontSize: 16,
  lineHeight: '20px',
  letterSpacing: 0
})

export const Body = styled('p')({
  fontFamily: 'var(--font-family-secondary)',
  color: 'var(--color-gray-3)',
  fontWeight: 400,
  fontSize: 16,
  letterSpacing: 0,
  maxWidth: '60ch',
})

export const LabelSmall = styled('p')({
  fontFamily: 'var(--font-family-primary)',
  fontWeight: 400,
  fontSize: 14,
  lineHeight: '16px',
  letterSpacing: 0
})  

export const BodyLarge = styled(Body)({
  fontSize: 18,
  lineHeight: '24px'
})