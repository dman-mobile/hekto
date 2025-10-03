import { styled } from "@mui/system";

export const NotificationContainer = styled('div')({
  position: "absolute",
  zIndex: 99,
  bottom: 10,
  right: 10,
  borderRadius: 'var(--border-radius)',
  width: '400px',
  padding: '8px 16px',
  backgroundColor: "var(--color-info)",
  color: "var(--color-white)",
  display: "flex",
  gap: "var(--spacing-unit)",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "var(--shadow)",
});

export const Title = styled('h2')({
  fontSize: 16,
  margin: 0
})
export const Body = styled('p')({
  fontSize: 16,
  margin: 0
})

