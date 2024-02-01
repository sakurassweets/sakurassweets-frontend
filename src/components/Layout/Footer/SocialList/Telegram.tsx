import classes from './SocialSVG.module.scss';
import classNames from 'classnames';

export const Telegram: React.FC = () => {
  return (
    <svg
      width="31"
      height="32"
      viewBox="0 0 31 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames(classes.social__svg)}
    >
      <path
        d="M0.833252 15.9999C0.833252 17.926 1.21262 19.8332 1.94969 21.6126C2.68675 23.392 3.76709 25.0089 5.12902 26.3708C6.49094 27.7327 8.10779 28.8131 9.88723 29.5502C11.6667 30.2872 13.5739 30.6666 15.4999 30.6666C17.426 30.6666 19.3332 30.2872 21.1126 29.5502C22.892 28.8131 24.5089 27.7327 25.8708 26.3708C27.2327 25.0089 28.3131 23.392 29.0501 21.6126C29.7872 19.8332 30.1666 17.926 30.1666 15.9999C30.1666 14.0739 29.7872 12.1667 29.0501 10.3872C28.3131 8.60779 27.2327 6.99094 25.8708 5.62902C24.5089 4.26709 22.892 3.18675 21.1126 2.44969C19.3332 1.71262 17.426 1.33325 15.4999 1.33325C13.5739 1.33325 11.6667 1.71262 9.88723 2.44969C8.10779 3.18675 6.49094 4.26709 5.12902 5.62902C3.76709 6.99094 2.68675 8.60779 1.94969 10.3872C1.21262 12.1667 0.833252 14.0739 0.833252 15.9999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.9348 8.51709L20.7035 24.5247L13.9389 17.5829L5.92725 15.9052L21.9348 8.51709Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.9526 16.9534L12.1565 23.9036L16.5626 20.2534"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.9319 17.5492L16.4986 15.4958"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
