import { LuCheck } from 'react-icons/lu';
import { RiAlertFill } from 'react-icons/ri';
import { TypeOptions } from 'react-toastify';

import classes from './toast.module.scss';

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
      return (
        <>
          <RiAlertFill className={iconClassName} />
        </>
      );

    default:
      return undefined;
  }
};
