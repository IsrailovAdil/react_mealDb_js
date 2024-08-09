import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const MealList = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        axios('https://www.themealdb.com/api/json/v2/1/randomselection.php')
            .then(({data})=> {
                setMeals(data.meals);
            })
    }, []);
    return (

            <div className={'block-cards'}>
                {meals.map(meal => (
                    <div key={meal.idMeal} className="card">
                        <img src={meal.strMealThumb} className="card-img-top" alt={meal.strMeal}/>
                        <div className="card-body">
                            <h5 className="card-title">{meal.strMeal}</h5>
                            <p className="card-text">Category: {meal.strCategory}</p>
                            <Link className={'btn btn-primary'} to={`/meal/${meal.idMeal}`}>
                                Подробнее
                            </Link>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default MealList;