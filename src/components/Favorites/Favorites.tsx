import { FavStub } from './stub/FavStub';
import classes from './favorites.module.scss';
import { useEffect, useState } from 'react';
import { LuXCircle } from 'react-icons/lu';
import { ProductCard } from '../Common';
import { Product } from '../../types/interfaces/Product';
import { Button } from '../Common/Buttons';

export const FavoritesPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favourites');
    if (storedFavorites) {
      setProducts(JSON.parse(storedFavorites));
    }
  }, []);

  const clearLocalStorage = () => {
    localStorage.clear();
    setProducts([]);
  };

  return (
    <section className="section">
      <div className="container">
        <div className={classes.fav}>
          <div className={classes.fav__wrapper}>
            <h2 className={classes.fav__title}>
              Список бажань <span className={classes.fav__amount}>{products.length} продуктів</span>
            </h2>

            {products.length ? (
              <Button className={classes.fav__btn} onClick={clearLocalStorage}>
                <LuXCircle />
                Очистити список бажань
              </Button>
            ) : null}
          </div>

          {!products.length ? (
            <FavStub />
          ) : (
            <ul className={classes.fav__list}>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};
