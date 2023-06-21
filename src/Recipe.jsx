import React from "react";
import style from "./recipe.module.css";

export const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.card}>
      <div className={style.cardImg}>
        <img className={style.image} src={image} alt="" />
      </div>
      <div className={style.projectInfo}>
        <div className={style.flex}>
          <h3 className={style.projectTitle}>{title}</h3>
        </div>
        <ul className={style.unorderedList}>
          {ingredients.map((ingredient, index) => (
            <li key={`${ingredient.text}_${index}`}>{ingredient.text}</li>
          ))}
        </ul>
        <strong>Calories: <span className={style.calorieCount}>{Number(calories).toFixed(2)}</span></strong>
      </div>
    </div>
  );
};
