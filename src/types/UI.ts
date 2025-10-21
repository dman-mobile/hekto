export interface Notification {
  status: 'pending' | 'success' | 'error';
  title: string;
  message: string;
}

export interface UIState {
  cartIsVisible: boolean;
  notification: Notification | null;
}

export interface NotificationProps {
  status: 'pending' | 'success' | 'error';
  title: string;
  message: string;
}