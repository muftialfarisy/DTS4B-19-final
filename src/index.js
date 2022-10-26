import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Route,
  Routes,
  RouterProvider,
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import SeriesList from "./containers/SeriesList";
import MoviesList from "./containers/MoviesList";
import Detail from "./components/Detail";
import Tentang from "./containers/Tentang";
import PemainList from "./containers/PemainList";
import Favorites from "./containers/Favorites";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/ForgotPassword";
import DetailMovies from "./components/DetailMovies";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      {/* <Route path="login" element={<Login />} /> */}
      <Route
        path="login"
        element={
          <PrivateRoute loginOnly={false}>
            <Login />
          </PrivateRoute>
        }
      />
      <Route path="register" element={<Register />} />
      <Route path="forgot" element={<ForgotPassword />} />
      <Route path="series" element={<SeriesList />}></Route>
      <Route path="/series/:id" element={<Detail />} />
      <Route path="movies" element={<MoviesList />} />
      <Route path="/movies/:id" element={<DetailMovies />} />
      <Route path="favorite" element={<Favorites />} />
    </Route>
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
