import React, { useState } from "react";
import "../css/Header.css";
import { PiBasketDuotone } from "react-icons/pi";
import { CgDarkMode } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { useDispatch, useSelector } from "react-redux";
import { setDrawer } from "../redux/slices/basketSlice";

function Header() {
  const [theme, setTheme] = useState(false);

  const navigate = useNavigate();

  const dispath = useDispatch();

  const { products } = useSelector((store) => store.basket);

  const changeTheme = () => {
    const root = document.getElementById("1");

    if (theme) {
      root.style.backgroundColor = "#fff";
      root.style.color = "#282828";
    } else {
      root.style.backgroundColor = "#282828";
      root.style.color = "#fff";
    }
    setTheme(!theme);
  };
  return (
    <div
      style={{
        display: "flex",
        filexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom: "10px",
      }}
    >
      <div className="flex-row">
        <img
          className="logo"
          onClick={() => navigate("/")}
          src="./src/images/logo.png"
        />
        <p className="logo-text" onClick={() => navigate("/")}>
          Owl Wear
        </p>
      </div>

      <div className="flex-row">
        <input
          className="seacrh-input"
          type="text"
          placeholder="Bir şeyler ara"
        />
        <div className="icons">
          <Badge
            onClick={() => dispath(setDrawer())}
            badgeContent={products.length}
            color="warning"
          >
            <PiBasketDuotone />
          </Badge>

          <CgDarkMode style={{ marginLeft: "10px" }} onClick={changeTheme} />
        </div>
      </div>
    </div>
  );
}

export default Header;
