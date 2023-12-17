import React from 'react';
import classes from "../../components/NotFoundBlock/NotFoundBlock.module.scss"


const NotFoundBlock = () => {
    return (
        <div className={classes.root}>
            <span>😔</span>
            <h2>Ничего не найдено</h2>
            <p>К сожалению, данная страница отсутствует</p>
        </div>
    );
};

export default NotFoundBlock;