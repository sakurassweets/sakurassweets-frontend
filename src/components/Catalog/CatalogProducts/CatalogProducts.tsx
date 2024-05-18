import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Select from 'react-select';
import { useAppDispatch, useAppSelector } from '../../../redux/hook';
import { fetchAllProductsThunk } from '../../../redux/products/operations';
import { Product } from '../../../types/interfaces/Product';
import { Pagination } from '../../Common/Pagination/Pagination';
import { Items } from './Items/Items';

import { customStyles } from '../helpers/selectorStyles';
import clases from './CatalogProducts.module.scss';

export const PaginatedItems = ({ itemsPerPage }: { itemsPerPage: number }) => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const { products } = useAppSelector((state) => state.products);
  const filter = useAppSelector((state) => state.filterForCatalog);
  const [currentItems, setCurrentItems] = useState<Product[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [selectedOption, setSelectedOption] = useState<{ label: string; value: string } | null>(null);

  const options = [
    { label: 'Спочатку дорожче', value: 'price' },
    { label: 'За популярністю', value: 'popular' },
    { label: 'За назвою', value: 'byname' },
    { label: 'Спочатку знижки', value: 'discount' },
  ];

  useEffect(() => {
    dispatch(fetchAllProductsThunk());
  }, [dispatch]);

  useEffect(() => {
    // Combine filter and sort logic into a single function
    const filteredAndSortedProducts = products
      .filter((product) => {
        return (
          Number(product.price) >= filter.byPriceFrom &&
          Number(product.price) <= filter.byPriceTo &&
          product.rating >= filter.byRatingFrom &&
          product.rating <= filter.byRatingTo &&
          (filter.byCategory.length === 0 || filter.byCategory.includes(product.product_type))
        );
      })
      .sort((a, b) => {
        switch (selectedOption?.value) {
          case 'price':
            return Number(b.price) - Number(a.price);
          case 'popular':
            return b.rating - a.rating;
          case 'byname':
            return a.title.localeCompare(b.title);
          case 'discount':
            return parseInt(b.discount.split('%')[0], 10) - parseInt(a.discount.split('%')[0], 10);
          default:
            return 0;
        }
      });

    // Calculate current items and page count
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(filteredAndSortedProducts.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filteredAndSortedProducts.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, products, selectedOption, filter]);

  const handlePageClick = (event: { selected: number }): void => {
    setItemOffset(event.selected * itemsPerPage);
  };

  // Scroll to the top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, itemOffset]);

  return (
    <div className={clases.catalog__wrapper}>
      <Select
        value={selectedOption}
        onChange={(newValue) => setSelectedOption(newValue as { label: string; value: string } | null)}
        options={options}
        styles={customStyles}
        placeholder={selectedOption?.label || 'Спочатку дорожче'}
        aria-label="Оберіть варіант фільтрації"
      />
      <Items currentItems={currentItems} />
      <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
    </div>
  );
};
