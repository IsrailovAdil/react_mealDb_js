import React, {useEffect, useState} from 'react';
import Header from "../Сomponents/Header";
import Footer from "../Сomponents/Footer";
import axios from "axios";
import MealCard from "../Сomponents/MealCard";

const Search = () => {
    const [meals, setMeals] = useState([]);
    const[searchValue, setSearchValue] = useState("");


    useEffect(() => {
        const handleSearch = setTimeout(() => {
            axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
                .then(({data})=>setMeals(data.meals))
        },1500)

return ()=>clearTimeout(handleSearch);

    },[searchValue]);


    return (
        <div>
            <Header/>
            <div className="container1">
                <input type="text" placeholder="Search..."
                       className="search" aria-label="Search"
                       onChange={e=>setSearchValue(e.target.value)}/>
                <button className="search-btn" >Search</button>
            </div>
<MealCard meals={meals}/>
            <Footer/>
        </div>
    );
};

export default Search;