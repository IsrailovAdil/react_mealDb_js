import React from 'react';
import {Link} from "react-router-dom";

const MealCard = ({ meals }) => {
    return (
        <div className="block-cards">
            {meals && meals.length > 0 ? (
                meals.map(meal => (
                    <div key={meal.idMeal} className="card">
                        <img src={meal.strMealThumb} className="card-img-top" alt={meal.strMeal}/>
                        <div className="card-body">
                            <h5 className="card-title">{meal.strMeal}</h5>
                            <p className="card-text">Category: {meal.strCategory}</p>
                            <p className="card-text">Кухня: {meal.strArea}</p>
                        <Link className={'btn btn-primary'} to={`/meal/${meal.idMeal}`}>
                            Подробнее
                        </Link>
                        </div>
                    </div>
                ))
            ) : (
                <p>Блюд не найдено</p>
            )}
        </div>
    );
}

export default MealCard;
