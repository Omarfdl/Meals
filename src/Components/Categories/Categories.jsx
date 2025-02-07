import React, { useState } from "react";
import styles from "./Categories.module.scss";
import { useQuery } from "@tanstack/react-query";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();

  const handleCategoryChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCategory(selectedValue);
    navigate(`/category/${selectedValue}`);
  };

  function getCategory() {
    return axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`);
  }

  let { data, error, isLoading, isError } = useQuery({
    queryKey: ["Category"],
    queryFn: getCategory,
    staleTime: 30000,
  });
  // console.log(data?.data);

  if (isLoading) {
  }

  if (isError) {
  }

  return (
    <>
      <div className={styles.categoriesContainer}>
        {/* Select for Small Screens */}
        <select
          className={styles.selectMenu}
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">All</option>
          {data?.data?.categories.map((category) => (
            <option key={category.idCategory} value={category.strCategory}>
              {category.strCategory}
            </option>
          ))}
        </select>

        {/* Categories for Big Screens */}
        <div className={styles.categoriesContainer}>
          <div className={styles.row}>
            <NavLink
              to={`/`}
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              <div className={styles.category}>
                <span>All</span>
              </div>
            </NavLink>
            {data?.data?.categories.map((category) => (
              <NavLink
                key={category.idCategory}
                to={`/category/${category.strCategory}`}
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                <div className={styles.category}>
                  <span>{category.strCategory}</span>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
