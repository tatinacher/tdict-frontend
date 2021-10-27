import { profile } from "@assets";
import * as React from "react";
import { Link } from "react-router-dom";

interface NavigationProps {
  title: string;
  path: string;
}

export const Header: React.FC<{ navigation: NavigationProps[] }> = ({
  navigation,
}) => (
  <nav
    className="bg-green-500 h-17 shadow-md pl-6 flex justify-center"
    style={{ width: "100%" }}
  >
    <div
      className="flex justify-betweens"
      style={{ maxWidth: "1024px", width: "100%" }}
    >
      <ul className="flex content-center">
        {navigation.map(({ path, title }: NavigationProps) => (
          <li className="text-white p-6" key={path}>
            <Link to={path}>{title}</Link>
          </li>
        ))}
      </ul>
      <ul>
        <li className="pr-6">
          <a href="https://tdict-django.herokuapp.com/">
            <img src={profile} alt="profile" />
          </a>
        </li>
      </ul>
    </div>
  </nav>
);
