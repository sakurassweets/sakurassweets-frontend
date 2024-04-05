import React from 'react';
import { Image } from '../../../../types/interfaces/Product';
import defaultImage from '../../../../assets/img/no-image.png';
import classes from './images.module.scss';

interface ImagesProps {
  images: Image[];
}

export const Images: React.FC<ImagesProps> = ({ images = [] }) => {
  return (
    <div className={classes.wrapper}>
      {images.length > 0 ? (
        <img className={classes.main_img} src={images[0].image} alt={'Product image'} width={734} height={547} />
      ) : (
        <img src={defaultImage} alt="default Image" width={734} height={547} />
      )}

      <ul className={classes.secondary_wrapper}>
        {images.map((img, index) => (
          <li key={index}>
            <img className={classes.main_img} src={img.image} alt={'Product image'} width={120} height={120} />
          </li>
        ))}
      </ul>
    </div>
  );
};
