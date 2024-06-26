import ReactPaginate from 'react-paginate';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';

import clases from './pagination.module.scss';

export const Pagination = ({
  pageCount,
  handlePageClick,
}: {
  pageCount: number;
  handlePageClick: (event: { selected: number }) => void;
}) => {
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
