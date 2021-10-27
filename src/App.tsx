import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { routes } from "@routes";
import { $token } from "@features/auth";
import { reflect } from "@effector/reflect";

const AuthProvider: React.FC<any> = ({
  component: Component,
  isAuthorized,
  isPublicComponent,
}: any) => {
  if (isPublicComponent || (isAuthorized && !isPublicComponent)) {
    return <Component isAuth={isAuthorized} />;
  } else {
    return <Redirect to="/" />;
  }
};

export const Application = ({ token }: { token: string }) => {
  return (
    <Router>
      <Switch>
        {routes.map(({ path, component, isPublic }) => (
          <Route key={path} path={path}>
            <AuthProvider
              isAuthorized={token !== ""}
              component={component}
              isPublicComponent={isPublic}
            />
          </Route>
        ))}
      </Switch>
    </Router>
  );
};

export const App = reflect({
  view: Application,
  bind: {
    token: $token,
  },
});
