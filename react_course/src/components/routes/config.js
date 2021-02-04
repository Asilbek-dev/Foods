import Foods from "../foods";
import Login from "../login";
import NotFound from "../not-found.jsx";
import Register from "../register";

export const routes = [
  {
    path: "/foods",
    component: Foods,
    exact: true,
  },
  //   {
  //     path: "/foods/:foodId",
  //     component: FoodDetail,
  //     exact: true,
  //   },
  {
    path: "/login",
    component: Login,
    exact: false,
  },
  {
    path: "/register",
    component: Register,
    exact: false,
  },
  {
    path: "/not-found",
    component: NotFound,
    exact: false,
  },
  {
    from: "/",
    redirect: "/foods",
    exact: true,
  },
  {
    redirect: "/not-found",
    exact: true,
  },
];
