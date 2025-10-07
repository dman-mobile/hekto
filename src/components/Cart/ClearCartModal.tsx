import { ButtonBig, ButtonText } from '../ui/Button.styles';
import { ModalBackdrop, ModalContent } from './Cart.styles';

interface ClearCartModalProps {
  onClose: () => void;
  onConfirm: () => void;
}

export default function ClearCartModal({ onClose, onConfirm }: ClearCartModalProps) {
  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <h3>Clear Cart?</h3>
        <p>Are you sure you want to remove all items from your shopping cart?</p>
        <div>
          <div>
            <ButtonText onClick={onClose}>Cancel</ButtonText>
          </div>
          <div>
            <ButtonBig onClick={onConfirm} color="red">Confirm</ButtonBig>
          </div>
        </div>
      </ModalContent>
    </ModalBackdrop>
  );
}