import React from 'react';
import classNames from 'classnames';
import { PresentationItem } from './presentationItem/PresentationItem';
import pic1 from '../../../../assets/img/presentationPic1.jpg';
import pic2 from '../../../../assets/img/presentationPic2.jpg';
import pic3 from '../../../../assets/img/presentationPic3.jpg';

import classes from './presentation.module.scss';

const TYPE = {
  BIG: 'big',
  SMALL: 'small',
};

export const Presentation: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <div className={classNames(classes.presentation_mainContainer)}>
          <PresentationItem
            header="ЯПОНСЬКІ  НОВИНКИ"
            text="Унікальний вибір традиційних та сучасних смаколиків"
            img={pic1}
            type={TYPE.BIG}
          />
          <div className={classNames(classes.presentation_secondaryContainer)}>
            <PresentationItem text="Унікальний вибір" img={pic2} type={TYPE.SMALL} />
            <PresentationItem text="Унікальний вибір традиційних та сучасних смаколиків" img={pic3} type={TYPE.SMALL} />
          </div>
        </div>
      </div>
    </section>
  );
};
