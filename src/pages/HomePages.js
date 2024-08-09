import React, {useEffect, useState} from 'react';
import Header from "../Сomponents/Header";
import MealCard from "../Сomponents/MealCard";
import Footer from "../Сomponents/Footer";
import axios from "axios";
import {Link} from "react-router-dom";
import MealList from "../Сomponents/MealList";

const HomePages = () => {


    return (
        <div>
            <Header/>
         <MealList/>
            <Footer/>
        </div>
    );
};

export default HomePages;