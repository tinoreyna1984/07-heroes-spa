import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { DcPage, HeroesRoutes, MarvelPage } from "../heroes";
import { Navbar } from "../ui";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute>
          }
        />
        <Route
          path="login/*"
          element={
            <PublicRoute>
              <Routes>
                <Route path="/*" element={<LoginPage />} />
              </Routes>
            </PublicRoute>
          }
        />
      </Routes>
    </>
  );
};
