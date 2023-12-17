import React, {useState} from 'react';

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
                    {categories.map((categoryName, i) =>
                        <li
                            key={i}
                            // Передача i(индекса) родителю через входящий пропс
                            onClick={() => onClickCategory(i)}
                            className={value === i ? "active" : undefined}
                        >
                            {categoryName}
                        </li>
                    )}
                </ul>
            </div>
        </>
    );
};

export default Categories;