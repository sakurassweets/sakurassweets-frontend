import React from 'react';
import { Image } from '../../../types/interfaces/Product';
import classes from './Images.module.scss';

interface ImagesProps {
  images: Image[];
}

export const Images: React.FC<ImagesProps> = ({ images }) => {
  console.log('Images', images);

  return (
    <div className={classes.wrapper}>
      {images.map((img, key) => (
        <li key={key}>
          <img className={classes.main_img} src={img.image} alt={'Product image'} width={734} height={547} />
        </li>
      ))}
    </div>
  );
};
