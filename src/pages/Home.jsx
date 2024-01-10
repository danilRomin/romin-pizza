import React, {useContext, useEffect, useState} from 'react';
import Categories from "../components/Categories";
import Sort from "../components/Sort/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Pagination from "../components/Pagination/Pagination";
import {SearchContext} from "../App";
import {useDispatch, useSelector} from "react-redux";
import {setCategoryId} from "../redux/slices/filterSlice"
import axios from "axios";

const Home = () => {

    const {searchValue} = useContext(SearchContext)
    const dispatch = useDispatch()

    // Вытаскивание стейтов из redux (вместо useState)
    const {categoryId, sort, currentPage,} = useSelector(state => state.filter)
    const onClickCategory = (id) => {
        dispatch(setCategoryId(id)) // Передача активной категории при клике
    }

    // Массив с пиццами
    const [items, setItems] = useState([])

    // Скелетон
    const [isLoading, setIsLoading] = useState(true)

    // Стейт из Categories (пропс родителю)
    // const [categoryId, setCategoryId] = useState(0)
    // const [sortType, setSortType] = useState({
    //     name: "популярности", sortProperty: "rating"
    // })

    // Сортировка по возрастанию/убыванию
    const [categoryDirection, setCategoryDirection] = useState("asc")
    const [categoryClicked, setCategoryClicked] = useState(true)
    const changeDirection = () => {
        setCategoryClicked(prev => !prev)
        setCategoryDirection(categoryClicked ? "desc" : "asc")
    }

    useEffect(() => {
        setIsLoading(true)
        const sortBy = sort.sortProperty
        const order = categoryDirection
        const category = categoryId > 0 ? `category=${categoryId}` : ""
        const search = searchValue ? `&search=${searchValue}` : ""

        axios.get(`https://6576d8e9197926adf62c94c2.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`)
            .then((res) => {
                setItems(res.data)
                setTimeout(() => {
                    setIsLoading(false)
                }, 100)
            })
    }, [categoryId, sort.sortProperty, categoryDirection, searchValue, currentPage])

    // Поиск
    const pizzas = items.map((pizza, i) => <PizzaBlock key={i} {...pizza}/>)

    const skeletons = [...new Array(8)].map((skeleton, i) => <Skeleton key={i}/>)

    return (
        <>
            <div className="content__top">
                <Categories value={categoryId} onClickCategory={onClickCategory}/>
                <Sort changeDirection={changeDirection}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            {/*{isLoading && "Загрузка..."}*/}
            <div className="content__items">
                {isLoading ? skeletons : pizzas}
            </div>
            <Pagination currentPage={currentPage}/>
        </>
    );
};

export default Home;