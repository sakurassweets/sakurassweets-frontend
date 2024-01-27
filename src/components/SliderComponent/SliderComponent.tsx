import React from 'react';
import Slider from 'react-slick';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import classes from './SliderComponent.module.scss';

import { TestProduct } from '../../types/interfaces/Product';
import { Review } from '../../types/interfaces/Review';
import { ReviewCard } from '../ReviewCard.tsx/ReviewCard';
import ProductCard from '../ProductCard/ProductCard';

interface SliderProps {
  name: string;
  items: TestProduct[] | Review[];
  marginBottom: number;
  type: string;
  dots: boolean;
  slides: number;
}

interface ArrProps {
  onClick?: () => void;
}

const PrevArrow: React.FC<ArrProps> = (props) => {
  const { onClick } = props;
  return <LuChevronLeft className={classes.slickPrev} onClick={onClick} />;
};

const NextArrow: React.FC<ArrProps> = (props) => {
  const { onClick } = props;
  return <LuChevronRight className={classes.slickNext} onClick={onClick} />;
};

const SliderComponent: React.FC<SliderProps> = ({ name, items, marginBottom, type, dots, slides }) => {
  const settings = {
    dots: dots,
    infinite: true,
    speed: 1000,
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
    <section>
      <div className="container">
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
                <ProductCard product={item as TestProduct} key={index} />
              ) : (
                <ReviewCard review={item as Review} key={index} />
              )
            )}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default SliderComponent;
