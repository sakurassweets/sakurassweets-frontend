import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import classes from './SliderComponent.module.scss';

import { Product } from '../../types/interfaces/Product';
import { Review } from '../../types/interfaces/Review';
import { ProductCard } from '../ProductCard/ProductCard';
import { ReviewCard } from '../ReviewCard.tsx/ReviewCard';

interface SliderProps {
  name: string;
  items: Product[] | Review[];
  marginBottom: number;
  type: string;
  dots: boolean;
  slides: number;
}

interface ArrProps {
  onClick?: () => void;
}

import leftArrowImage from '../../assets/icons/arrowLeft.svg';
import rightArrowImage from '../../assets/icons/arrowRight.svg';

const PrevArrow: React.FC<ArrProps> = (props) => {
  const { onClick } = props;
  return <img src={leftArrowImage} alt="Prev" className={classes.slickPrev} onClick={onClick} height={32} />;
};

const NextArrow: React.FC<ArrProps> = (props) => {
  const { onClick } = props;
  return <img src={rightArrowImage} alt="Next" className={classes.slickNext} onClick={onClick} height={32} />;
};

const SliderComponent: React.FC<SliderProps> = ({ name, items, marginBottom, type, dots, slides }) => {
  const settings = {
    dots: dots,
    infinite: true,
    speed: 500,
    slidesToShow: slides,
    slidesToScroll: slides,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: slides - 1,
          slidesToScroll: slides - 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: slides - 2,
          slidesToScroll: slides - 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={classes.slider_container} style={{ marginBottom: `${marginBottom}px` }}>
      <div className={classes.slider_header}>
        <p className={classes.slider_name}>{name}</p>
        {/* NavLink can be replaced with your routing component */}
        <a href="/catalog" className={classes.slider_link}>
          Всі з категорії
        </a>
      </div>
      <Slider {...settings}>
        {items.map((item, index) =>
          type === 'product' ? (
            <ProductCard product={item as Product} key={index} />
          ) : (
            <ReviewCard review={item as Review} key={index} />
          )
        )}
      </Slider>
    </div>
  );
};

export default SliderComponent;
