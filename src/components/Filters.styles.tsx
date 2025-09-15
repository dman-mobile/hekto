import { Label } from "../styled-components/Typography.styles";
import { styled } from "@mui/system";

export const SideNav = styled('nav')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'start',
  width: 164,
  height: 'max-content',
  gap: 48
})

export const FilterLabel = styled(Label)({
  fontFamily: 'var(--font-family-primary)',
  fontWeight: 700,
  fontSize: 20,
  leadingTrim: 'NONE',
  lineHeight: '24px',
  letterSpacing: 0,
  paddingBottom: 8,
  borderBottom: '1px solid var(--color-black)'
})