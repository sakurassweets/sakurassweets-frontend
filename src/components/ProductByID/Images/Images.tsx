import React from 'react';
import { Image } from '../../../types/interfaces/Product';
import classes from './Images.module.scss';

interface ImagesProps {
  images: Image[];
}

export const Images: React.FC<ImagesProps> = ({ images = [] }) => {
  console.log('Images', images);

  const secondaryImages = images.length === 1 ? Array(5).fill(images[0]) : images;

  return (
    <div className={classes.wrapper}>
      <ul>
        {images.map((img, index) => (
          <li key={index}>
            <img className={classes.main_img} src={img.image} alt={'Product image'} width={734} height={547} />
          </li>
        ))}
      </ul>
      <ul className={classes.secondary_wrapper}>
        {secondaryImages.map((img, index) => (
          <li key={index}>
            <img className={classes.main_img} src={img.image} alt={'Product image'} width={120} height={120} />
          </li>
        ))}
      </ul>
    </div>
  );
};
