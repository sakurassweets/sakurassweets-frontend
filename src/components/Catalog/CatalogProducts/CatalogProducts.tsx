import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import clases from './CatalogProducts.module.scss';
import { useAppDispatch, useAppSelector } from '../../../redux/hook';
import { fetchAllProductsThunk } from '../../../redux/products/operations';
import { Items } from './items/items';
import Select from 'react-select';
import { customStyles } from '../helpers/selectorStyles';
import { useSelector } from 'react-redux';
import { Pagination } from '../../Common/Pagination/Pagination';

interface RootState {
  filterForCatalog: {
    byPriceFrom: number;
    byPriceTo: number;
    byRatingFrom: number;
    byRatingTo: number;
    byCategory: string[];
  };
}

interface Product {
  price: number;
  rating: number;
  product_type: string;
  discount: string;
  title: string;
}

export const PaginatedItems = ({ itemsPerPage }: { itemsPerPage: number }) => {
  const { products } = useAppSelector((state) => state.products);
  const priceFrom: number = useSelector((state: RootState) => state.filterForCatalog.byPriceFrom);
  const priceTo: number = useSelector((state: RootState) => state.filterForCatalog.byPriceTo);
  const ratingFrom: number = useSelector((state: RootState) => state.filterForCatalog.byRatingFrom);
  const ratingTo: number = useSelector((state: RootState) => state.filterForCatalog.byRatingTo);
  const category: string[] = useSelector((state: RootState) => state.filterForCatalog.byCategory);

  const options: {
    label: string;
    value: string;
  }[] = [
    { label: 'Спочатку дорожче', value: 'price' },
    { label: 'За популярністю', value: 'popular' },
    { label: 'За назвою', value: 'byname' },
    { label: 'Спочатку знижки ', value: 'discount' },
  ];

  const [currentItems, setCurrentItems] = useState<Product[]>([]);
  const [pageCount, setPageCount] = useState<number>(0);
  const [itemOffset, setItemOffset] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<{ label: string; value: string } | null>(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllProductsThunk());
  }, [dispatch]);

  useEffect(() => {
    const filteredProducts = applyFilter(products);
    const filteredData = itemsFilter(filteredProducts);
    const endOffset = Math.min(itemOffset + itemsPerPage, filteredData.length);
    setCurrentItems(filteredData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filteredData.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, products, selectedOption, priceFrom, priceTo, ratingFrom, ratingTo, category]);

  const itemsFilter = (products: Product[]): Product[] => {
    return products
      .filter((item) => {
        return +item.price >= priceFrom && +item.price <= priceTo;
      })
      .filter((item) => {
        return +item.rating >= ratingFrom && +item.rating <= ratingTo;
      })
      .filter((item) => {
        return (
          +item.price >= priceFrom &&
          +item.price <= priceTo &&
          +item.rating >= ratingFrom &&
          +item.rating <= ratingTo &&
          (category.length === 0 || category.includes(item.product_type))
        );
      });
  };

  const applyFilter = (products: Product[]): Product[] => {
    if (!selectedOption) return products;
    switch (selectedOption.value) {
      case 'price':
        return products.slice().sort((b, a) => a.price - b.price);
      case 'popular':
        return products.slice().sort((b, a) => a.rating - b.rating);
      case 'byname':
        return products.slice().sort((a, b) => {
          const firstLetterA = a.title.charAt(0).toLowerCase();
          const firstLetterB = b.title.charAt(0).toLowerCase();
          if (firstLetterA < firstLetterB) return -1;
          if (firstLetterA > firstLetterB) return 1;
          return 0;
        });
      case 'discount':
        return products.slice().sort((b, a) => parseInt(a.discount.split('%')[0]) - parseInt(b.discount.split('%')[0]));
      default:
        return products;
    }
  };
  const handlePageClick = (event: { selected: number }): void => {
    const newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, itemOffset]);

  return (
    <div className={clases.catalog__wrapper}>
      <Select defaultValue={selectedOption} onChange={setSelectedOption} options={options} styles={customStyles} />
      <Items currentItems={currentItems} />
      <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
    </div>
  );
};
