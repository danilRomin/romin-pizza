const Categories = ({value, onClickCategory}) => {

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