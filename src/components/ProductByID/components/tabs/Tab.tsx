import { forwardRef } from 'react';
import { Product } from '../../../../types/interfaces/Product';
import { Button } from '../../../Common/Buttons';
import { Reviews, Description } from '../../index';
import classes from './tab.module.scss';

interface TabsProps {
  product: Product;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Tab = forwardRef<HTMLDivElement, TabsProps>(({ product, activeTab, setActiveTab }, ref) => {
  const tabs = [
    { id: 'description', title: 'Опис', content: <Description product={product} /> },
    { id: 'reviews', title: 'Відгуки', content: <Reviews ref={ref} /> },
  ];

  return (
    <>
      <div className={classes.tabs_wrapper} ref={ref}>
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={activeTab === tab.id ? classes.tabs__isActive : classes.tabs__secondary}
          >
            {tab.title}
          </Button>
        ))}
      </div>
      {tabs.map(({ id, content }) => activeTab === id && <div key={id}>{content}</div>)}
    </>
  );
});
