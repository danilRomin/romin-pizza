import classes from "./Pagination.module.css"
import ReactPaginate from "react-paginate";
import {useDispatch} from "react-redux";
import {setCurrentPage} from "../../redux/slices/filterSlice";


const Pagination = () => {

    const dispatch = useDispatch()

    const onChangePage = (page) => {
        dispatch(setCurrentPage(page.selected + 1))
    }

    return (

        <div>
            <ReactPaginate
                className={classes.pagination}
                breakLabel="..."
                nextLabel=">"
                onPageChange={onChangePage}
                pageRangeDisplayed={8}
                pageCount={2}
                previousLabel="<"
                renderOnZeroPageCount={null}
            />
        </div>
    );
};

export default Pagination;