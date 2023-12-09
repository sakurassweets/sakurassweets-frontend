import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import classes from './FooterList.module.scss';

interface Props {
  content: {
    header: string;
    items: Array<{
      text: string;
      to: string;
    }>;
  };
}

export const FooterList: React.FC<Props> = ({ content }) => {
  return (
    <div>
      <h2 className={classNames(classes.footerList_header)}>{content.header}</h2>
      <ul>
        {content.items.map((item: { text: string; to: string }, index: number) => (
          <li key={index} className={classNames(classes.footerList_item)}>
            <NavLink to={item.to}>{item.text}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
