import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import HomePage from "../pages/home/HomePage";
import LoginPage from "../pages/loginPage/LoginPage";
import SearchInput from "../pages/searchInput/SearchInput";
import BurgerMenu from "../pages/burgerMenu/BurgerMenu";
import Buttons from "../pages/buttons/Buttons";

function RouterPage() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="searchinput" element={<SearchInput />} />
          <Route path="burger" element={<BurgerMenu />} />
          <Route path="buttons" element={<Buttons />} />
        </Route>
      </Routes>
    </div>
  );
}

export default RouterPage;
