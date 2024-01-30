import { useState } from 'react';
import modalImg from '../../assets/img/modal.png';
import { Modal } from '../Common/Modal/Modal';
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
          img={modalImg}
          onModalSwith={switchToRegistration}
          isLogin={formType === FormType.Login}
          onClose={onClose}
        />
      ) : (
        <AuthModaContent
          title={'Реєстрація'}
          buttonTitle={'Зареєструватися'}
          buttonSwithTitle={'Вхід'}
          img={modalImg}
          onModalSwith={switchToLogin}
          onClose={onClose}
        />
      )}
    </Modal>
  );
};
