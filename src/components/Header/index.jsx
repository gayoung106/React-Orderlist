import React from "react";
import "./styles.css";


const Header = () => {
  return (
    <>
      <div className="header-wrap">
 
          <div className="header-items">
          <img className="bars" alt="bars" src="img/bars-solid.png" />
          </div>
          <div className="header-items">
          <img className="logo" alt="shinwon-logo" src="img/logo.png" />
          </div>
          <div className="header-items" id="menu-right">
            <div className="header-items-right">
            <img className="setting" alt="setting" src="img/setting.png" />
            </div>
            <div className="header-items-right">
            <img className="setting" alt="logout" src="img/logout.png" />
            </div>
            <div className="header-items-right">
            <img className="menu-vertical" alt="menu" src="img/menu-vertical.png" />
            </div>
          </div>

      </div>
    </>
  );
};

export default Header;
