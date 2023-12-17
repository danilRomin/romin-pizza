import React, {useEffect, useState} from 'react';
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";

const NotFound = () => {

    // Массив с пиццами
    const [items, setItems] = useState([])

    // Скелетон
    const [isLoading, setIsLoading] = useState(true)

    // Стейт из Categories (пропс родителю)
    const [categoryId, setCategoryId] = useState(0)
    const [sort, setSort] = useState(0)

    useEffect(() => {
        fetch(`https://6576d8e9197926adf62c94c2.mockapi.io/items?category=${categoryId}`)
            // Получить данные в формате json
            .then(res => res.json())
            // Преобразовать в массив для компонента PizzaBlock
            .then(array => {
                setItems(array)
                setIsLoading(false)
            })
    }, [categoryId])

    return (
        <>
            <div className="content__top">
                <Categories value={categoryId} onClickCategory={(data) => setCategoryId(data)}/>
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            {/*{isLoading && "Загрузка..."}*/}
            <div className="content__items">
                {
                    isLoading ? [...new Array(8)].map((skeleton, i) =>
                            <Skeleton key={i}/>
                        )
                        : items.map((pizza, i) =>
                            <PizzaBlock key={i} {...pizza}/>
                        )
                }
            </div>
        </>
    );
};

export default NotFound;