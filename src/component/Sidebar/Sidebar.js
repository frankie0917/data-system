import React from "react";
import "./Sidebar.css";
import { NavLink, useParams } from "react-router-dom";

import TableChartIcon from "@material-ui/icons/TableChart";
import IconButton from "@material-ui/core/IconButton";

// TODO: 添加 加号图标
export default function Sidebar() {
  console.log(useParams());
  return (
    <div className="Sidebar">
      <div className="link-group">
        <NavLink to="/tables/kucun" activeClassName="active-link">
            <svg viewBox="0 0 1024 1024">
              <path
                d="M936.672 193.216l-226.88-64a32 32 0 0 0-40.256 25.504A159.296 159.296 0 0 1 512 288c-30.56 0-56.16-13.12-79.296-27.296a32 32 0 0 0-33.44 54.56C428.896 333.44 465.44 352 512 352a223.104 223.104 0 0 0 212.096-152.288L896 248.224v224.736l-121.728-24.352A32.032 32.032 0 0 0 736 480v352a32 32 0 0 1-32 32H320c-17.632 0-32-14.336-32-32V448a31.936 31.936 0 0 0-38.272-31.36L128 440.96V248.128l200.8-57.376a32 32 0 0 0-17.568-61.536l-224 64C73.472 197.152 64 209.728 64 224v256a31.936 31.936 0 0 0 38.272 31.36L224 487.04V832c0 52.928 43.072 96 96 96h384c52.928 0 96-43.072 96-96v-312.96l121.728 24.352c9.44 1.92 19.2-0.544 26.56-6.624 7.392-6.112 11.712-15.168 11.712-24.768V224a32 32 0 0 0-23.328-30.784zM320 768a32 32 0 0 0 32 32h320a32 32 0 1 0 0-64H352a32 32 0 0 0-32 32z"
                p-id="1752"
              ></path>
            </svg>
          <h3>库存</h3>
        </NavLink>
      </div>
    </div>
  );
}
