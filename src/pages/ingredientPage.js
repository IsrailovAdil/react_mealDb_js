import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const IngredientPage = () => {
    const { ingredient } = useParams();
    const [meal, setMeal] = useState([]);

    useEffect(() => {
        console.log(`Fetching data for ingredient: ${ingredient}`);
        axios(`https://www.themealdb.com/api/json/v2/1/filter.php?i=${ingredient}`)
            .then(({ data }) => {
                setMeal(data.meals || []);

            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [ingredient]);

    console.log(meal)



    return (


        <div>
            <h1 className={'text-ingredient'}>Блюды с ингридиентам: {ingredient}.</h1>
            <h5 className={'text-ingredient'}> Количества: {meal.length} </h5>
       <div className='block-cards-ing'>
           {meal.map(meal => (
               <div key={meal.idMeal} className="card">
                   <img src={meal.strMealThumb} className="card-img-top" alt={meal.strMeal}/>
                   <div className="card-body">
                       <h5 className="card-title">{meal.strMeal}</h5>
                       <Link className={'btn btn-primary'} to={`/meal/${meal.idMeal}`}>
                           Подробнее
                       </Link>
                   </div>
               </div>
           ))}
       </div>
        </div>
    );
};

export default IngredientPage;