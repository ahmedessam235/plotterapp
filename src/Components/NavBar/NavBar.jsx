import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";
function NavBar() {
  return (
    <div className="plotter-nav-bar">
      <Navbar className="justify-content-center" bg="dark" variant="dark">
        <Navbar.Brand>Plotter</Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default NavBar;
