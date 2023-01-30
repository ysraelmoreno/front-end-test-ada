import { ModalContainer, ModalContentContainer } from "./styles";

interface IModalProps {
  children: React.ReactNode;
  isOpen?: boolean;
}

function Modal({ children, isOpen }: IModalProps): JSX.Element {
  return isOpen ? (
    <ModalContainer>
      <ModalContentContainer>{children}</ModalContentContainer>
    </ModalContainer>
  ) : (
    <></>
  );
}

export default Modal;
