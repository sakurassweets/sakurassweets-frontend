import clases from './pagination.module.scss';
import ReactPaginate from 'react-paginate';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';

export const Pagination = ({ pageCount, handlePageClick }) => {
  return (
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
  );
};
