import React from "react";
import "./Sidebar.css";
import {  Link } from "react-router-dom";

// TODO: 添加 加号图标
export default function Sidebar() {
  return (
    <div className="Sidebar">
        <div className="user-info"></div>
        <div className="link-group">
          <div className="tables">
            <h3>数据表</h3>
            <Link to="/tables/add-table">添加数据表</Link>
            <Link to="/tables/kucun">库存</Link>
          </div>
        </div>
        <div className="logo">
          <h1 className="company-name">Pink Smooth</h1>
        </div>
    </div>
  );
}
