// Admin
import Login from '../pages/User/Login'
// User
import Home from "../pages/User/Home";
import NewsDetail from "../pages/User/NewsDetail";
import Category from "../pages/User/Category";



export const publicRoute = [
  { path: "/", component: Home },
  { path: "/news", component: NewsDetail, param:"idNews" },
  { path: "/categories", component: Category,param:"fieldCategory"},


];
