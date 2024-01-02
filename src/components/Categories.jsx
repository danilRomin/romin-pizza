import {useDispatch, useSelector} from "react-redux"; // useSelector = useContext
import { decrement } from "../redux/slices/filterSlice"

const Categories = ({value, onClickCategory}) => {

    const filter = useSelector((state) => state.filter.value)
    const dispatch = useDispatch()

    const categories = [
        "Все",
        "Мясные",
        "Вегетарианские",
        "Гриль",
        "Острые",
        "Закрытые"
    ]

    return (
        <>
            <div className="categories">
                <ul>
                    {
                        categories.map((category, i) =>
                            <li
                                key={i}
                                onClick={() => onClickCategory(i)}
                                className={value === i ? "active" : undefined}
                            >
                                {category}
                            </li>
                        )
                    }
                </ul>
            </div>
        </>
    );
};

export default Categories;