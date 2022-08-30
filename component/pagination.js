import ReactPaginate from 'react-paginate';
import { global } from 'styled-jsx/css';


import React from 'react'

export default function Pagination() {
    return (
        <>

            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                // onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={40}
                previousLabel="<"
                marginPagesDisplayed={1}
            // renderOnZeroPageCount={null}
            />
        </>
    );
}
