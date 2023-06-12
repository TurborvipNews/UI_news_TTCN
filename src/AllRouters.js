import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Category from "./pages/Category";
import NewsDetail from "./pages/NewsDetail";
import App from "./App";
import Forbidden from "./pages/Forbidden";
import axios from "axios";
import { useLayoutEffect } from "react";
import { useStore, actions } from "./store";
import Loading from "./component/Loading/Loading";
import SignUp from "./pages/SignUp";
import ChangePassPage from "./pages/ChangePassPage";
import ForgotPass from "./component/ForgotPass/ForgotPass";
import Admin from "./pages/Admin";

function AllRouters() {
  const [state, dispatch] = useStore();
  useLayoutEffect(() => {
    let userData = JSON.parse(localStorage.getItem("user"))
      ? JSON.parse(localStorage.getItem("user"))
      : false;
    let token = localStorage.getItem("accessToken");
    if (userData && token) {
      axios({
        method: "post",
        url: "http://localhost:1337/checkauth",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        data: {
          idUser: userData.id,
        },
      })
        .then(async (res) => {
          if (res.data.status === 202) {
            if (res.data.data === 1) {
              console.log("auth sửa cái globalstate");
              await dispatch(actions.setAuthUser(true));
            } else {
              await dispatch(actions.setAuthUser(false));
            }
          }
        })
        .catch((error) => console.log(error));
    } else {
      dispatch(actions.setAuthUser(false));
    }
  }, [dispatch]);
  const routerRender = (auth) => {
    if (auth === 3) {
      return <Route path="*" element={<Loading />}></Route>;
    } else if (auth) {
      return (
        <>
          {/* <Route path="/category" element={<Category />}>
            <Route path=":idCategory"></Route>
          </Route>
          <Route path="/news" element={<NewsDetail />}>
            <Route path=":idNews"></Route>
          </Route>
          <Route path="/" element={<App />}></Route>
          <Route path="/changepass" element={<ChangePassPage />}></Route>
          <Route path="*" element={<NotFound />}></Route> */}
        </>
      );
    } else {
      return <Route path="*" element={<Forbidden />}></Route>;
    }
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/forgotpass" element={<ForgotPass />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/category" element={<Category />}>
            <Route path=":idCategory"></Route>
          </Route>
          <Route path="/news" element={<NewsDetail />}>
            <Route path=":idNews"></Route>
          </Route>
          <Route path="/" element={<App />}></Route>
          <Route path="/changepass" element={<ChangePassPage />}></Route>
          <Route path="*" element={<NotFound />}></Route>

          {routerRender(state.auth)}
        </Routes>
      </Router>
    </>
  );
}

export default AllRouters;
