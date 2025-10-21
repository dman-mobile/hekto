import { ConfirmationModalProps } from '@/types/Cart';
import { ButtonBig, ButtonText } from '../ui/Button.styles';
import { ModalBackdrop, ModalContent } from './Cart.styles';


export default function ConfirmationModal({
  title,
  message,
  onClose,
  onConfirm,
}: ConfirmationModalProps) {
  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <h3>{title}</h3>
        <p>{message}</p>
        <div>
          <ButtonText onClick={onClose}>Cancel</ButtonText>
          <ButtonBig onClick={onConfirm}>Confirm</ButtonBig>
        </div>
      </ModalContent>
    </ModalBackdrop>
  );
}