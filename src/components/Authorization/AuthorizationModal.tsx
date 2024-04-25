import { useState } from 'react';
import { Modal, ModalImage } from '../Common/index';
import { AuthModaContent } from './AuthorizationModalContent';
import { FormType } from '../../enums/auth.enum';

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ open, onClose }) => {
  const [formType, setFormType] = useState(FormType.Login);

  const switchToLogin = () => {
    setFormType(FormType.Login);
  };

  const switchToRegistration = () => {
    setFormType(FormType.Registration);
  };

  return (
    <Modal onClose={onClose} open={open}>
      {formType === 'login' ? (
        <AuthModaContent
          title={'Вхід'}
          buttonTitle={'Увійти'}
          buttonSwithTitle={'Зареєструватися'}
          onModalSwith={switchToRegistration}
          isLogin={formType === FormType.Login}
          onClose={onClose}
        />
      ) : (
        <AuthModaContent
          title={'Реєстрація'}
          buttonTitle={'Зареєструватися'}
          buttonSwithTitle={'Вхід'}
          onModalSwith={switchToLogin}
          onClose={onClose}
        />
      )}
      <ModalImage />
    </Modal>
  );
};
