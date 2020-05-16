import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import {  StorageIcon, ProductIcon } from "../icon";

const links = [
  {
    to: "/tables/storage",
    icon: StorageIcon,
    title: "库存"
  },
  {
    to: "/tables/products",
    icon: ProductIcon,
    title: "款号"
  }
];

// TODO: 添加 加号图标
export default function Sidebar() {
  // console.log(Cloth)
  // console.log(useParams());
  return (
    <div className="Sidebar">
      <div className="link-group">
        {links.map(({ to, icon, title }) => (
          <NavLink key={to} to={to} activeClassName="active-link">
            {icon}
            <h3>{title}</h3>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
