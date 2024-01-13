import React from 'react';
import {Link} from "react-router-dom";

const EmptyCart = () => {
    return (

        <div className="content">
            <div className="container container--cart">
                <div className="cart cart--empty">
                    <h2>Корзина пустая <icon>😕</icon></h2>
                    <p>
                        Ваша корзина пока пуста. Выберите вкусные товары и добавьте их сюда, чтобы оформить заказ.
                    </p>
                    <img src="/img/empty-cart.png" alt="Empty cart"></img>
                    <Link to="/" className="button button--black">
                        <span>Вернуться назад</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default EmptyCart;