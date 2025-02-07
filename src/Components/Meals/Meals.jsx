import React, { useEffect, useState } from "react";
import styles from "./Meals.module.scss";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import MealDetails from "../MealDetails/MealDetails";

export default function Meals() {
  let { meal } = useParams();

  function getMeals() {
    return axios.get(
      `https://themealdb.com/api/json/v1/1/filter.php?c=${meal}`
    );
  }

  let { data, error, isLoading, isError, refetch } = useQuery({
    queryKey: ["Meals"],
    queryFn: getMeals,
    staleTime: 30000,
  });

  if (isLoading) {
  }

  if (isError) {
    return error;
  }

  // useEffect to fetch data when path changes
  useEffect(() => {
    refetch();
  }, [meal]);

  return (
    <>
      <div className={styles.row}>
        {data?.data?.meals?.map((meal) => (
          <div className={styles.inner} key={meal.idMeal}>
            <img className={styles.mealImg} src={meal.strMealThumb} alt="" />
            <h3>{meal.strMeal.split(" ").slice(0, 2).join(" ")}</h3>
            <Link className={styles.linkBtn} to={`/mealdetails/${meal.idMeal}`}>
              <button className={styles.mealBtn}>View Recipe</button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
