import { styled } from "@mui/system";

export const CarouselWrapper = styled('div')({
  width: '100%',
})

export const CarouselDotsWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 16,
  position: "absolute",
  bottom: 44,
  left: 0,
  right: 0,
  margin: 'auto',
})

export const CarouselDotSquare = styled('div', {
  shouldForwardProp: (prop) => prop !== '$isActive',
})<{ $isActive?: boolean }>(({ $isActive }) => ({
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  backgroundColor: $isActive ? 'var(--color-primary)' : 'transparent',
  border: '1px solid var(--color-primary)',
  width: 12,
  height: 12,
  transform: 'rotate(-45deg)',
}));

