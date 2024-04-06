import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import clases from './CatalogProducts.module.scss';
import { useAppDispatch, useAppSelector } from '../../../redux/hook';
import { fetchAllProductsThunk } from '../../../redux/products/operations';
import { Items } from './Items/Items';
import Select from 'react-select';
import customStyles from '../helpers/helper';
import { useSelector } from 'react-redux';

export const PaginatedItems = ({ itemsPerPage }) => {
  const priceFrom: number = useSelector((state) => state.filterForCatalog.byPriceFrom);
  const priceTo: number = useSelector((state) => state.filterForCatalog.byPriceTo);
  const ratingFrom: number = useSelector((state) => state.filterForCatalog.byRatingFrom);
  const ratingTo: number = useSelector((state) => state.filterForCatalog.byRatingTo);
  const category = useSelector((state) => state.filterForCatalog.byCategory);

  const options: [{ label: string; value: string }] = [
    { label: 'Спочатку дорожче', value: 'price' },
    { label: 'За популярністю', value: 'popular' },
    { label: 'За назвою', value: 'byname' },
    { label: 'Спочатку знижки ', value: 'discount' },
  ];

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllProductsThunk());
  }, [dispatch]);

  const { products } = useAppSelector((state) => state.products);
  useEffect(() => {
    const filteredProducts = applyFilter(products);
    const filteredData = itemsFilter(filteredProducts);
    const endOffset = Math.min(itemOffset + itemsPerPage, filteredData.length);
    setCurrentItems(filteredData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filteredData.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, products, selectedOption, priceFrom, priceTo, ratingFrom, ratingTo, category]);

  const itemsFilter = (products) => {
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

  const applyFilter = (products) => {
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
        return products.slice().sort((b, a) => parseInt(a.discount.split('%')) - parseInt(b.discount.split('%')));
      default:
        return products;
    }
  };
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);
  };

  return (
    <div className={clases.catalog__wrapper}>
      <Select defaultValue={selectedOption} onChange={setSelectedOption} options={options} styles={customStyles} />
      <Items currentItems={currentItems} />
      <ReactPaginate
        nextLabel={<LuChevronRight />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel={<LuChevronLeft />}
        pageClassName={clases.pageitem}
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName={clases.pagination}
        activeClassName={clases.active}
        renderOnZeroPageCount={null}
      />
    </div>
  );
};
