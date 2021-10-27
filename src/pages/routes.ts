import * as pages from "./index";

export const routes = [
  {
    component: pages.LoginPage,
    path: "/login",
    title: "Login",
    exact: true,
  },
  {
    component: pages.MainPage,
    path: "/",
    exact: true,
    title: "Home",
  },
];
