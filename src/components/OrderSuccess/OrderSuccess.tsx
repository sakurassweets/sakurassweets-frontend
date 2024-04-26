import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Button } from '../Common/Buttons';
import { Modal, ModalImage } from '../Common/index';

import classes from './orderSuccess.module.scss';

interface OrderSuccessProps {
  onClose: () => void;
  open: boolean;
}

export const OrderSuccess: React.FC<OrderSuccessProps> = ({ onClose, open }) => {
  return (
    <Modal onClose={onClose} open={open}>
      <div className={classes.wrapper}>
        <h2>Ваше замовлення успішно оформлено!</h2>
        <p>
          Ми надіслали вам на пошту інформацію щодо замовлення. Для перевірки статусу вашого замовлення перейдіть у
          Акаунт {'>'} Мої замовлення
        </p>
        <Button
          onClick={() =>
            toast.info('Cторінка в розробці', {
              icon: '🚀',
            })
          }
        >
          Перевірити статус замовлення
        </Button>
        <Link to={'/'}>На головну</Link>
      </div>
      <ModalImage />
    </Modal>
  );
};
