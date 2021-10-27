import * as React from "react";
import { Button, Input } from "@ui";
import { Link } from "react-router-dom";

export const LoginPage: React.FC = () => (
  <div className="flex flex-col justify-center items-center h-screen">
    <div className="p-3 text-6xl text-blue-700 font-extrabold">TDict 🇬🇧</div>
    <div className="flex flex-col max-w-sm">
      <Input type="text" name="login" placeholder="login" />
      <Input type="password" name="password" placeholder="password" />
      <Button name="user" text="Login" />
      <Link to="/" className="text-green-600 text-center pt-3">
        Go Home
      </Link>
    </div>
  </div>
);
