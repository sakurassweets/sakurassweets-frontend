import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import classes from './FooterList.module.scss';
import { FooterListItem } from '../../../definitions';

interface FooterListProps {
  content: FooterListItem;
}

export const FooterList: React.FC<FooterListProps> = ({ content }) => {
  return (
    <li className={classNames(classes.list)}>
      <h2 className={classNames(classes.subtitle)}>{content.header}</h2>
      <ul className={classes.list_item}>
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
    </li>
  );
};
