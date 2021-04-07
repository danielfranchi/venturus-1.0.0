import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import "./Header.css";

const Header = () => {
  const [menuHome, setMenuHome] = useState(false);

  const header = () => {
    setMenuHome(true);
  };

  return (
    <header className="header">
      <h2 onClick={header} className="pointer">
        Squad Management Tool
      </h2>

      <div className="headerUser">
        <span>Daniel Franchi</span>
        <p>DF</p>
      </div>

      {menuHome !== false && <Redirect to="/" />}
    </header>
  );
};

export default Header;
