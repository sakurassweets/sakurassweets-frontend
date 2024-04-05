import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import clases from './CatalogProducts.module.scss';
import { useAppDispatch, useAppSelector } from '../../../redux/hook';
import { fetchAllProductsThunk } from '../../../redux/products/operations';
import { Items } from './Items/Items';
import Select from 'react-select';
import customStyles from '../helpers/helper';

export const PaginatedItems = ({ itemsPerPage }) => {
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
    const endOffset = Math.min(itemOffset + itemsPerPage, filteredProducts.length);
    setCurrentItems(filteredProducts.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filteredProducts.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, products, selectedOption]);

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
