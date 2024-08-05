import React, {useEffect, useState} from 'react';
import axios from "axios";

const MealCard = () => {

    const [meals, setMeals] = useState([]);

    useEffect(() => {
        axios('https://www.themealdb.com/api/json/v2/1/randomselection.php')
            .then(({data})=> {
                setMeals(data.meals);
            })
    }, []);




    return (
        <div>

        {/*<div>*/}
        {/*    <ModalForm show={showModal} handleClose={handleCloseModal}>*/}
        {/*        <div className="modal" id="mealModal">*/}
        {/*            <div className="modal-dialog modal-xl">*/}
        {/*                <div className="modal-content">*/}
        {/*                    <div className="modal-header bg-dark">*/}
        {/*                        <h5 className="modal-title text-white" id="modalTitle"></h5>*/}
        {/*                        <button type="button" className="btn-close btn-close-white"*/}
        {/*                                onClick="closeModal()"></button>*/}
        {/*                    </div>*/}
        {/*                    <div className="modal-body">*/}
        {/*                        <img id="modalImage" src="" alt="Cocktail Image" style="width: 40%;"/>*/}
        {/*                        <ul id="modalIngredients" className="ingredient-list"></ul>*/}
        {/*                    </div>*/}
        {/*                    <div className="instruction-block">*/}
        {/*                        <h4>Cooking instructions</h4>*/}
        {/*                        <span id="instruction-meal"></span>*/}
        {/*                        <p>Ссылка на YouTube :<a id="youTube"></a></p>*/}
        {/*                    </div>*/}


        {/*                    <div className="modal-footer">*/}
        {/*                        <button type="button" className="btn btn-secondary" onClick="closeModal()">Close*/}
        {/*                        </button>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*    </ModalForm>*/}
        {/*</div>*/}
            <div className={'block-cards'}>
                {meals.map(meal => (
                    <div key={meal.idMeal} className="card">
                        <img src={meal.strMealThumb} className="card-img-top" alt={meal.strMeal}/>
                        <div className="card-body">
                            <h5 className="card-title">{meal.strMeal}</h5>
                            <p className="card-text">Category: {meal.strCategory}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );


};

export default MealCard;