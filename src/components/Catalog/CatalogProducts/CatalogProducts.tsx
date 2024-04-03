import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import clases from './CatalogProducts.module.scss';
import { useAppDispatch, useAppSelector } from '../../../redux/hook';
import { fetchAllProductsThunk } from '../../../redux/products/operations';
import { Items } from './Items/Items';
import Select from 'react-select';

export const PaginatedItems = ({ itemsPerPage }) => {
  const options: [{ label: string; value: string }] = [
    { label: 'Спочатку дорожче', value: 'price' },
    { label: 'За популярністю', value: 'popular' },
    { label: 'За назвою', value: 'byname' },
    { label: 'Спочатку новинки', value: 'new' },
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

  const multProducts = Array.from({ length: 9 }, () => products).flat();

  useEffect(() => {
    const endOffset = Math.min(itemOffset + itemsPerPage, multProducts.length);
    setCurrentItems(multProducts.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(multProducts.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, products]);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);
  };

  return (
    <div className={clases.catalog__wrapper}>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        className={clases.select__wrapper}
        classNamePrefix="custom_select"
      />
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
