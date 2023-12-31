import React, {useContext, useEffect, useState} from 'react';
import Categories from "../components/Categories";
import Sort from "../components/Sort/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Pagination from "../components/Pagination/Pagination";
import {SearchContext} from "../App";


const Home = () => {

    const {searchValue, setSearchValue} = useContext(SearchContext)

    // Текущая страница
    const [currentPage, setCurrentPage] = useState(1)

    // Массив с пиццами
    const [items, setItems] = useState([])

    // Скелетон
    const [isLoading, setIsLoading] = useState(true)

    // Стейт из Categories (пропс родителю)
    const [categoryId, setCategoryId] = useState(0)
    const [sortType, setSortType] = useState({
        name: "популярности", sortProperty: "rating"
    })

    // Сортировка по возрастанию/убыванию
    const [categoryDirection, setCategoryDirection] = useState("asc")
    const [categoryClicked, setCategoryClicked] = useState(true)
    const changeDirection = () => {
        setCategoryClicked(prev => !prev)
        setCategoryDirection(categoryClicked ? "desc" : "asc")
    }

    useEffect(() => {
        setIsLoading(true)
        const sortBy = sortType.sortProperty
        const order = categoryDirection
        const category = categoryId > 0 ? `category=${categoryId}` : ""
        const search = searchValue ? `&search=${searchValue}` : ""

        fetch(`https://6576d8e9197926adf62c94c2.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`
        )

            // Получить данные в формате json
            .then(res => res.json())
            // Преобразовать в массив items для компонента PizzaBlock
            .then(array => {
                setItems(array)
                setTimeout(() => {
                    setIsLoading(false)
                }, 100)
            })
    }, [categoryId, sortType, categoryDirection, searchValue, currentPage])

    // Поиск
    const pizzas = items.map((pizza, i) => <PizzaBlock key={i} {...pizza}/>)

    const skeletons = [...new Array(8)].map((skeleton, i) => <Skeleton key={i}/>)

    return (
        <>
            <div className="content__top">
                <Categories value={categoryId} onClickCategory={(data) => setCategoryId(data)}/>
                <Sort value={sortType} onClickSort={(data) => setSortType(data)} changeDirection={changeDirection}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            {/*{isLoading && "Загрузка..."}*/}
            <div className="content__items">
                {isLoading ? skeletons : pizzas}
            </div>
            <Pagination onChangePage={(page) => setCurrentPage(page)}/>
        </>
    );
};

export default Home;