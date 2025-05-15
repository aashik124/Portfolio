// src/components/Header.js
import React from "react";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  return (
    <header style={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>
      <h1>My Portfolio</h1>
      <DarkModeToggle />
    </header>
  );
};

export default Header;
