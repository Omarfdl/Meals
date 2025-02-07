import React from "react";
import styles from "./MealDetails.module.scss";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export default function MealDetails() {
  let { mealId } = useParams();
  let Ingredient = "strIngredient";
  let Measure = "strMeasure";
  let ingredientArray = [];
  let measureArray = [];

  for (let i = 1; i <= 20; i++) {
    ingredientArray[i] = Ingredient + i;
    measureArray[i] = Measure + i;
  }

  function getMealDetails() {
    return axios.get(
      `https://themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    );
  }
  let { data, error, isLoading, isError, refetch } = useQuery({
    queryKey: ["Meal"],
    queryFn: getMealDetails,
  });

  const meal = data?.data?.meals?.[0];
  // const validIngred = !meal
  //   ? null
  //   : Object.keys(meal).filter((key) => meal[key] != null && meal[key] != "");
  // console.log(validIngred);
  // console.log(meal);

  return (
    <>
      <section>
        <h2 className={styles.mealName}>{meal?.strMeal}</h2>
        <div className={styles.Meal}>
          <div className={styles.mealContent}>
            <div>
              <img
                className={styles.mealImg}
                src={meal?.strMealThumb}
                alt={meal?.strMeal}
              />
              <div className={styles.mealBtns}>
                <a target="_blank" href={meal?.strYoutube}>
                  <button className={styles.youtubeBtn}>
                    <i className="fa-brands fa-youtube"></i>
                    Youtube
                  </button>
                </a>
                <a target="_blank" href={meal?.strSource}>
                  <button className={styles.sourceBtn}>
                    <i className="fa-solid fa-globe"></i>
                    Source
                  </button>
                </a>
              </div>

              <div className={styles.ingredients}>
                <h2>Ingredients</h2>
                {ingredientArray.map((ingredient, index) =>
                  meal?.[ingredient] && meal?.[measureArray[index]] ? (
                    <div className={styles.mealDetails} key={index}>
                      <span>{meal?.[ingredient]}:</span>{" "}
                      <span>{meal?.[measureArray[index]]}</span>
                    </div>
                  ) : null
                )}
              </div>
            </div>

            <div className={styles.mealDesc}>{meal?.strInstructions}</div>
          </div>
        </div>
      </section>
    </>
  );
}
