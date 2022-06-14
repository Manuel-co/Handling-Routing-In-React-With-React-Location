import "./App.css";
import { React, useState } from "react";
import Login from "./components/Login";
import { Router, Outlet, ReactLocation } from "@tanstack/react-location";
import FoodSearch from "./FoodSearch";
import Protected from "./components/Protected";
import axios from "axios";
import Details from "./components/Details";



function App() {
  const [protectedPage, setProtectedPage] = useState(false);
  const app_id = "05a78797";
  const app_key = "f02ba4dc6c90bcc93de0e6b21b4bde7e";
  const searchItem = "cheese";
  const getProtection = (protect) => {
    setProtectedPage(protect);
    console.log(protectedPage);
  };
  
  
  const routes = [
    {
      path: "/",
      element: <Login getProtection={getProtection} />,
    },
    {
      path: "/search",
      element: (
        <Protected isLoggedIn={protectedPage}>
          <FoodSearch />
        </Protected>
      ),
    },
    {
      path: "/results",
      element: <Details/>,
      loader: async () => ({
        teams: await axios("https://api.edamam.com/api/recipes/v2", {
          params: {
            type: "public",
            q: searchItem,
            app_id: app_id,
            app_key: app_key,
          },
        }),
      }),
      pendingElement: <div>Getting your food order...</div>,
      pendingMs: 1000 * 0.5
    },
  ];

 
  // const protectedPage = true;

  const location = new ReactLocation();
  return (
    <Router routes={routes} location={location}>
      <div className="">
        <Outlet />
      </div>
    </Router>
  );
}

export default App;
