import { styled } from '@mui/system';

export const TabsContainer = styled('div')({
  width: '100%',
  backgroundColor: 'var(--color-gray-1)',
  padding: '50px 0',
  minHeight: 576
});

export const TabList = styled('div')({
  display: 'flex',
  justifyContent: 'start',
  gap: 'var(--spacing-unit)',
  maxWidth: 1088,
  margin: '0 auto',

});

export const TabButton = styled('button')<{ active?: boolean }>(({ active }) => ({
  border: 'none',
  background: 'none',
  padding: '15px 0',
  cursor: 'pointer',
  fontSize: 26,
  lineHeight: '32px',
  letterSpacing: 0,
  color: active ? 'var(--color-black)' : 'var(--color-gray-3)',
  fontWeight: active ? 700 : 400,
  position: 'relative',
  '&:after': {
    content: '""',
    display: 'block',
    position: 'absolute',
    bottom: '-1px',
    left: 0,
    width: '100%',
    height: '2px',
    backgroundColor: 'var(--color-black)',
    transform: active ? 'scaleX(1)' : 'scaleX(0)',
    transition: 'transform 0.3s ease',
  },
}));

export const TabContent = styled('div')({
  maxWidth: 1088,
  paddingTop: 32,
  margin: '0 auto',
  color: 'var(--color-gray-3)',
  fontWeight: 400,
  lineHeight: '20px',
  fontSize: 16,
  '& h5': {
    color: 'var(--color-black)',
    margin: '0 0 16px 0',
    fontWeight: 700,
    fontSize: 22,
    lineHeight: '28px',
    letterSpacing: 0,
  },
  '& h6': {
    color: 'var(--color-black)',
    margin: '32px 0 16px 0',
    fontWeight: 700,
    fontSize: 22,
    lineHeight: '28px',
    letterSpacing: 0,
  },
});

export const FeaturesList = styled('ul')({
  listStyle: 'none',
  padding: 0,
  margin: 0,

  '& li': {
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
    gap: 16
  },
});

export const ReviewItem = styled('div')({
  padding: '15px 0',
  '&:last-child': {
    borderBottom: 'none',
  },
  '& strong': {
    color: 'var(--color-black)',
    display: 'block',
    marginBottom: '5px',
  },
  '& p': {
    margin: 0,
  },
});

export const VideoWrapper = styled('div')({
  position: 'relative',
  paddingBottom: '56.25%', // 16:9 aspect ratio
  height: 0,
  overflow: 'hidden',
  maxWidth: '100%',
  background: 'var(--color-black)',

  '& iframe': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
});