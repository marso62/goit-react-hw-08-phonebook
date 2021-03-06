import { lazy } from "react";

export default [
  {
    path: "/login",
    label: "Login",
    exact: true,
    component: lazy(() => import("./views/LoginView")),
    private: false,
    restricted: true,
  },
  {
    path: "/register",
    label: "Register",
    exact: true,
    component: lazy(() => import("./views/RegisterView")),
    private: false,
    restricted: true,
  },
  {
    path: "/contacts",
    label: "Contacts",
    exact: true,
    component: lazy(() => import("./views/ContactsViews")),
    private: true,
    restricted: false,
  },
];
