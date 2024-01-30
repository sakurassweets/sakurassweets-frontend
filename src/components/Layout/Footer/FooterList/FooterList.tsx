import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import classes from './FooterList.module.scss';

interface Props {
  content: {
    header: string;
    items: Array<{
      text: string;
      to?: string;
    }>;
  };
}

export const FooterList: React.FC<Props> = ({ content }) => {
  return (
    <>
      <h2 className={classNames(classes.subtitle)}>{content.header}</h2>
      <ul className={classes.list}>
        {content.items.map((item: { text: string; to?: string }, index: number) => (
          <li
            key={index}
            className={classNames({
              [classes.list__item]: !item.to && index % 2 === 0,
            })}
          >
            {item.to ? <NavLink to={item.to}>{item.text}</NavLink> : <p>{item.text}</p>}
          </li>
        ))}
      </ul>
    </>
  );
};
