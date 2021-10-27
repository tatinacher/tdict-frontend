import * as pages from "./index";

export const routes = [
  {
    component: pages.LoginPage,
    path: "/login",
    title: "Login",
    exact: true,
    isPublic: true,
  },
  {
    component: pages.DictionaryPage,
    path: "/dictionary",
    title: "Dictionary",
    exact: true,
    isPublic: true,
  },
  {
    component: pages.AddWordPage,
    path: "/add-word",
    exact: true,
    title: "Add word",
  },
  {
    component: pages.LogoutPage,
    path: "/logout",
    exact: true,
    title: "Logout",
  },
  {
    component: pages.MainPage,
    path: "/",
    exact: true,
    title: "Home",
    isPublic: true,
  },
];
