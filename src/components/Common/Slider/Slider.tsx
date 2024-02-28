import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../redux/hook';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';

import { Product } from '../../../types/interfaces/Product';
import { Review } from '../../../types/interfaces/Review';
import { ReviewCard } from '../ReviewCard/ReviewCard';
import { ProductCard } from '../ProductCard/ProductCard';
import { SkeletonProductCard } from '../Skeleton/SkeletonProductCard';
import { ROUTERS } from '../../../constants/routers';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classes from './Slider.module.scss';

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

const PrevArrow: React.FC<ArrProps> = (props) => {
  const { onClick } = props;
  return <LuChevronLeft className={classes.slider__prev} onClick={onClick} />;
};

const NextArrow: React.FC<ArrProps> = (props) => {
  const { onClick } = props;
  return <LuChevronRight className={classes.slider__next} onClick={onClick} />;
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
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { isLoading, error, products } = useAppSelector((state) => state.products);

  return (
    <section>
      <div className="container">
        <div className={classes.slider} style={{ marginBottom: `${marginBottom}px` }}>
          <div className={classes.slider__title_wrapper}>
            <p className={classes.slider__title}>{name}</p>
            {/* NavLink can be replaced with your routing component */}
            <Link to={ROUTERS.CATALOG} className={classes.slider__link}>
              Бачити все
            </Link>
          </div>
          <Slider {...settings}>
            {isLoading || error || !products.length
              ? Array.from({ length: 4 }).map((_, index) => <SkeletonProductCard key={index} />)
              : items.map((item, index) =>
                  type === 'product' ? (
                    <ProductCard product={item as Product} key={index} />
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
