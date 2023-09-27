"use client";
import { useEffect, useState } from "react";

const Pagination = ( { count, onPageChange } ) =>
{
  const totalPages = count;
  const [ page, setPage ] = useState();
  const [ currentPage, setCurrentPage ] = useState( 0 ); // Current active page
  // onPageChange( page );

  const handlePrevious = () =>
  {
    setCurrentPage( ( prevPage ) => prevPage - 1 );
  };

  const handleNext = () =>
  {
    setCurrentPage( ( prevPage ) => prevPage );
  };

  const renderPaginationItems = () =>
  {
    const paginationItems = [];

    paginationItems.push(
      <li className="page-item" key="previous">
        <button
          className="page-link"
          onClick={ handlePrevious }
          disabled={ currentPage === 1 }
        >
          <span className="fas fa-angle-left" />
        </button>
      </li>
    );

    for ( let page = 1; page <= totalPages; page++ )
    {

      paginationItems.push(
        <li
          className={ `page-item ${currentPage === page - 1 ? "active" : ""}` }
          aria-current={ currentPage === page - 1 ? "page" : undefined }
          key={ page }
        >
          <button className="page-link" onClick={ () => setPage( page - 1 ) }>
            { page }
          </button>
        </li>
      );
    }

    paginationItems.push(
      <li className="page-item" key="next">
        <button
          className="page-link"
          onClick={ handleNext }
          disabled={ currentPage === totalPages }
        >
          <span className="fas fa-angle-right" />
        </button>
      </li>
    );

    return paginationItems;
  };

  return <ul className="page_navigation mt20">{ renderPaginationItems() }</ul>;
};

export default Pagination;
