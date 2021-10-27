import * as React from "react";
import { Link } from "react-router-dom";

interface NavigationProps {
  title: string;
  path: string;
}

export const Header: React.FC<{ navigation: NavigationProps[] }> = ({
  navigation,
}) => (
  <nav className="bg-green-500 h-17 shadow-md pl-6">
    <ul className="flex content-center">
      {navigation.map(({ path, title }: NavigationProps) => (
        <li className="text-white p-6" key={path}>
          <Link to={path}>{title}</Link>
        </li>
      ))}
    </ul>
  </nav>
);
