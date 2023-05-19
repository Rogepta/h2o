import * as React from "react";
import s from "./Navbar.module.css";
import logo from "../../assets/Group.svg";
import iconOne from "../../assets/img_1.svg";
import iconTwo from "../../assets/img_2.svg";
import iconThree from "../../assets/img_3.svg";
import iconFour from "../../assets/img_4.svg";
import iconFive from "../../assets/img_5.svg";
import iconSix from "../../assets/img_6.svg";
import iconSeven from "../../assets/img_7.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={s.navbar}>
      <div className={s.navbar__elements}>
        <div className={s.navbar__elements__logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={s.navbar__elements__element}>
          <div className={s.links}>
            <Link to="/calendar">
              <img src={iconOne} alt="calendar" />
            </Link>

            <Link to="/daily">
              <img src={iconTwo} alt="daily" />
            </Link>

            <Link to="/basket">
              <img src={iconThree} alt="basket" />
            </Link>

            <Link to="/employee">
              <img src={iconFour} alt="employee" />
            </Link>

            <Link to="/pastry">
              <img src={iconFive} alt="pastry" />
            </Link>

            <Link to="/diagrams">
              <img src={iconSix} alt="diagrams" />
            </Link>

            <Link to="/settings">
              <img src={iconSeven} alt="settings" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
