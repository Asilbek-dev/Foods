import AddedInput from "../common/added-input";
import FoodDetail from "../food-detail";
import Foods from "../foods";
import FoodForm from "../forms/food";
import Login from "../login";
import NotFound from "../not-found.jsx";
import Register from "../register";

export const routes = [
  {
    path: "/",
    component: Foods,
    exact: true,
    child: [
      {
        path: "/food-detail",
        component: FoodDetail,
        exact: true,
      },
      
    ],
  },
  {
    path: "/foods/:foodId",
    component: FoodForm,
    exact: true,
  },
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
    path: "/added-input",
    component: AddedInput,
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
