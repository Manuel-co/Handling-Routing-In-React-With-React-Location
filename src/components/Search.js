import axios from "axios";
import { React, useState } from "react";
import Results from "./Results";

const Search = () => {
  const [searchItem, setSearchItem] = useState("");
  const [results, setResults] = useState([]);
  const app_id = "05a78797";
  const app_key = "f02ba4dc6c90bcc93de0e6b21b4bde7e";
  const getFood = async () => {
    try {
      const res = await axios("https://api.edamam.com/api/recipes/v2", {
        params: {
          type: "public",
          q: searchItem,
          app_id: app_id,
          app_key: app_key,
        },
      });
      setResults(res.data.hits);
      console.log(res.data.hits);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container text-center">
      <div className=" pt-4">
        <div className=" mb-6">
          <h1 className="text-4xl text-blue-600 font-bold">
            Search For Food Recipes
          </h1>
        </div>
        <div className=" flex justify-center items-center gap-5">
          <input
            className=" px-2 py-1 border-2 border-blue-600 rounded-md outline-none"
            type="text"
            name="food"
            value={searchItem}
            onChange={(e) => {
              setSearchItem(e.target.value);
            }}
          />
          <button
            className=" px-5 py-2 rounded-md bg-blue-600 text-white font-medium"
            onClick={() => {
              getFood();
            }}
          >
            Search
          </button>
        </div>
      </div>
      <Results results={results}/>
    </div>
  );
};

export default Search;
