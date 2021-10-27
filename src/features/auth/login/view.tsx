import * as React from "react";
import { Button, Input } from "@ui";
import { Link, Redirect } from "react-router-dom";
import { reflect } from "@effector/reflect";

import {
  $username,
  $password,
  $token,
  handleUserChange,
  handlePasswordChange,
  handleSubmit,
} from "./model";

interface LoginFormProps {
  user: string;
  password: string;
  onSubmit: () => void;
  onUserChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  token: string;
}

export const Login: React.FC<LoginFormProps> = ({
  user,
  password,
  onSubmit,
  onUserChange,
  onPasswordChange,
  token,
}) => {
  if (token !== "") {
    return <Redirect to="/" />;
  }
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="p-3 text-6xl text-blue-700 font-extrabold">TDict 🇬🇧</div>
      <form className="flex flex-col max-w-sm" onSubmit={onSubmit}>
        <Input
          name="login"
          onChange={onUserChange}
          placeholder="login"
          type="text"
          value={user}
        />
        <Input
          name="password"
          onChange={onPasswordChange}
          placeholder="password"
          type="password"
          value={password}
        />
        <div className="flex flex-col justify-center pb-6">
          <Button name="user" text="Login" type="submit" />
        </div>
        <Link to="/" className="text-green-600 text-center ">
          Go Home
        </Link>
      </form>
    </div>
  );
};

export const LoginForm = reflect({
  view: Login,
  bind: {
    onPasswordChange: handlePasswordChange,
    onSubmit: handleSubmit,
    onUserChange: handleUserChange,
    password: $password,
    user: $username,
    token: $token,
  },
});

handleSubmit.watch((event) => {
  event.preventDefault();
});
