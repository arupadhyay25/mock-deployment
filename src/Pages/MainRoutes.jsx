import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import ReqAuth from "../Components/ReqAuth";
import DataPage from "./DataPage";
import { UsersPage } from "./UsersPage";
import { Admin } from "./Admin";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<UsersPage />} />;
      <Route
        path="/admin"
        element={
          <ReqAuth>
            <Admin />
          </ReqAuth>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export default MainRoutes;
