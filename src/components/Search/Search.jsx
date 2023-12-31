import React, {useContext} from 'react';
import classes from "./Search.module.css"
import {SearchContext} from "../../App";

const Search = () => {

    const {searchValue, setSearchValue} = useContext(SearchContext)

    return (

        <div className={classes.root}>
            <input
                value={searchValue}
                onChange={event => setSearchValue(event.target.value)}
                className={classes.input} placeholder="Поиск пиццы..."
            />
            {
                searchValue &&
                <svg
                    onClick={() => setSearchValue("")}
                    className={classes.clearBtn}
                    width="20" height="20" viewBox="0 0 20 20" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6.28033 5.21967C5.98744 4.92678 5.51256 4.92678 5.21967 5.21967C4.92678 5.51256 4.92678 5.98744 5.21967 6.28033L8.93934 10L5.21967 13.7197C4.92678 14.0126 4.92678 14.4874 5.21967 14.7803C5.51256 15.0732 5.98744 15.0732 6.28033 14.7803L10 11.0607L13.7197 14.7803C14.0126 15.0732 14.4874 15.0732 14.7803 14.7803C15.0732 14.4874 15.0732 14.0126 14.7803 13.7197L11.0607 10L14.7803 6.28033C15.0732 5.98744 15.0732 5.51256 14.7803 5.21967C14.4874 4.92678 14.0126 4.92678 13.7197 5.21967L10 8.93934L6.28033 5.21967Z"
                        fill="#0F172A"/>
                </svg>
            }
        </div>
    );
};

export default Search;