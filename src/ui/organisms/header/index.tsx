import { profile } from "@assets";
import * as React from "react";
import { Link } from "react-router-dom";

interface NavigationProps {
  title: string;
  path: string;
}

export const Header: React.FC<{
  navigation: NavigationProps[];
  isAuth: boolean;
}> = ({ navigation, isAuth }) => (
  <nav
    className="bg-green-500 h-17 shadow-md pl-6 flex justify-center"
    style={{ width: "100%" }}
  >
    <div
      className="flex justify-between"
      style={{ maxWidth: "1024px", width: "100%" }}
    >
      <ul className="flex content-center">
        {navigation.map(({ path, title }: NavigationProps) => (
          <li className="text-white p-6" key={path}>
            <Link to={path}>{title}</Link>
          </li>
        ))}
      </ul>
      <ul className="flex content-center">
        <li className="pr-6 flex" style={{ alignItems: "center" }}>
          <UserInfo isAuth={isAuth} />
        </li>
      </ul>
    </div>
  </nav>
);

export const UserInfo: React.FC<{ isAuth: boolean }> = ({ isAuth }) => {
  if (isAuth) {
    return (
      <Link to="/logout" style={{ display: "flex" }}>
        <div className="text-white">Logout</div>
      </Link>
    );
  }

  return (
    <Link to="/login">
      <img src={profile} alt="profile" />
    </Link>
  );
};
