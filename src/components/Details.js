import { useMatch } from "@tanstack/react-location";
import React from "react";

const Details = () => {
  const { data } = useMatch();

  const food = data.teams.data.hits[0];

  return (
    <div className=" h-screen flex justify-center items-center">
      <div>
        <img src={food.recipe.images.SMALL.url} alt="food"></img>
        <h1 className=" font-bold text-2xl">{food.recipe.label}</h1>
        <h2 className=" text-4xl text-blue-600">Ingredients</h2>
        {food.recipe.ingredients.map((ingredient) => (
          <p className="text-2xl" key={ingredient.food}>{ingredient.food}</p>
        ))}
      </div>
    </div>
  );
};

export default Details;
