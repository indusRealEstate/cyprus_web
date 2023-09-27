"use client";
import { useEffect, useState } from "react";
import PaginationMUI from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Pagination = ( { count, onPageChange } ) =>
{
  // console.log( count );
  const totalPages = Math.ceil( count / 6 );


  const getPageNumber = ( number ) =>
  {
    onPageChange( number );
  }

  return (
    <>
      <Stack spacing={ 2 }>
        <PaginationMUI count={ totalPages } variant="outlined" shape="rounded" onChange={ ( event, value ) => getPageNumber( value ) } />
      </Stack>
    </>
  );
};

export default Pagination;
