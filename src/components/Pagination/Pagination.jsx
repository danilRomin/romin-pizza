import React from 'react';
import classes from "./Pagination.module.css"
import ReactPaginate from "react-paginate";

const Pagination = ({onChangePage}) => {

    return (

        <div>
            <ReactPaginate
                className={classes.pagination}
                breakLabel="..."
                nextLabel=">"
                onPageChange={(page) => onChangePage(page.selected + 1)}
                pageRangeDisplayed={8}
                pageCount={2}
                previousLabel="<"
                renderOnZeroPageCount={null}
            />
        </div>
    );
};

export default Pagination;