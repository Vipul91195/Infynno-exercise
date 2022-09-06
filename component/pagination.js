import React from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCardata } from '../slice/slice';
import { global } from 'styled-jsx/css';



export default function Pagination({ totalCount }) {
    const dispatch = useDispatch();
    // const totalCount = useSelector((state) => state.autodigg.count);
    // console.log(totalCount)
    const handlePageClick = (e) => {
        dispatch(fetchCardata({ page: e.selected + 1 }));
    }
    return (
        <>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={Math.ceil(totalCount / 20)}
                previousLabel="<"
                marginPagesDisplayed={1}
                activeLinkClassName="active"
            />
        </>
    );
}
