import React, { useState } from 'react';
import { LuChevronDown, LuChevronUp } from 'react-icons/lu';

import styled from './accordion.module.scss';

interface AccordionProps {
  title: string;
  content: React.ReactNode;
  id: number;
}

export const Accordion: React.FC<AccordionProps> = ({ title, content, id }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handelToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const arrow = activeIndex ? <LuChevronUp /> : <LuChevronDown />;

  return (
    <div className={styled.title}>
      <div onClick={() => handelToggle(id)} className={styled.text}>
        {title}
        {arrow}
      </div>
      {activeIndex === id && <div className={styled.content}>{content}</div>}
    </div>
  );
};
