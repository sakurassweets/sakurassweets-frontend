import { LuCheck, LuX } from 'react-icons/lu';
import classes from './toast.module.scss';
import { TypeOptions } from 'react-toastify';

export declare type ToastType = 'success' | 'error';

interface CustomIconProps {
  type: TypeOptions;
}

export const CustomIcon = (props: CustomIconProps) => {
  const iconClassName = `${classes.toast__icon} ${classes[`toast__icon--${props.type}`]}`;

  switch (props.type) {
    case 'success':
      return <LuCheck className={iconClassName} />;
    case 'error':
      return <LuX className={iconClassName} />;

    default:
      return undefined;
  }
};
