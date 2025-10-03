import { NotificationProps } from "@/types/UI";
import { Body, NotificationContainer, Title } from "./Notification.styles";

const Notification = (props: NotificationProps) => {
  return (
    <NotificationContainer>
      <Title>{props.title}</Title>
      <Body>{props.message}</Body>
    </NotificationContainer>
  );
};

export default Notification;