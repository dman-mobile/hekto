import { styled } from "@mui/system";

export const FlexBetween = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
})

export const FlexCenter = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 'var(--spacing-unit)'
})

export const FlexStart = styled('div')({
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  gap: 'var(--spacing-unit)'
})

export const FlexColumn = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'start',
  gap: 16,
})

export const FlexContainer = styled('div')({
  display: 'flex'
})