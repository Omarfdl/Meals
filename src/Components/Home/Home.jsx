import React from "react";
import styles from "./Home.module.scss";
import Categories from "../Categories/Categories";
import Meals from "./../Meals/Meals";
import MealDetails from "../MealDetails/MealDetails";

export default function Home() {
  return (
    <section className="">
      <h1>Learn, Cook, Eat Your Food</h1>
      <div>
        <Categories></Categories>
      </div>
      <div>
        <Meals></Meals>
      </div>
    </section>
  );
}
