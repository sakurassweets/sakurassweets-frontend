import React from 'react';
import classNames from 'classnames';
import classes from './PresentationItem.module.scss';

import { ShowBtn } from '../showBtn/ShowBtn';

interface Props {
  header?: string;
  text: string;
  img: string;
  type: string;
}

export const PresentationItem: React.FC<Props> = ({ header, text, img, type }) => {
  return (
    <div
      className={classNames(classes.presentationItem_mainContainer)}
      style={{
        height: type === 'big' ? '586px' : '281px',
        width: type === 'big' ? '954px' : '302px',
        alignItems: type === 'big' ? 'center' : 'flex-end',
        backgroundImage: `url(${img})`,
        borderRadius: type === 'big' ? '24px' : '8px',
        padding: type === 'big' ? '85px' : '16px',
      }}
    >
      <div>
        <h2 className={classNames(classes.presentationItem_header)}>{header}</h2>
        <p
          className={classNames(classes.presentationItem_text)}
          style={{
            fontWeight: type === 'big' ? '400' : '600',
            fontSize: type === 'big' ? '24px' : '20px',
            lineHeight: type === 'big' ? '1.5' : '1.3',
          }}
        >
          {text}
        </p>
        <ShowBtn type={type} />
      </div>
    </div>
  );
};
