import React from 'react';
import style from "./recipe.module.css";
const Recipe = ({title,calories,image,ingredients}) => {
    return (
        <div className={style.recipe}>
            <h1 >{title}</h1>
            <h2 className={style.recipeTitle}>Recipe</h2>
            <ol>
                {ingredients.map(ingredients=>
                    <li>{ingredients.text}</li>
                    )}
            </ol>
            
            <img src={image} alt="" />
       </div>
    );
};

export default Recipe;