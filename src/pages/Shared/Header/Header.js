import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../assets/places/Logo.png";

const Header = () => {
  return (
    <Navbar
      className="mb-4"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <img className="bg-white me-lg-4" src={Logo} alt="" />
        <Navbar.Brand to="/home">HOTEL SERENA</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              className="text-decoration-none text-white me-2"
              to="/home"
            >
              Home
            </NavLink>
            <NavLink
              className="text-decoration-none text-white me-2"
              to="/packages"
            >
              Packages
            </NavLink>
            <NavLink
              className="text-decoration-none text-white me-2"
              to="/experience"
            >
              Experiences
            </NavLink>
            <NavLink className="text-decoration-none text-white" to="/host">
              Become A Host
            </NavLink>
          </Nav>
          <Nav>
            <NavLink to="/login">
              <button
                type="button"
                className=" btn btn-outline-warning me-lg-2 mb-md-2 mb-lg-0 "
                variant="outline-primary"
                data-mdb-ripple-color="dark"
              >
                Log In
              </button>
            </NavLink>
            <NavLink to="/register">
              <button
                type="button"
                className="btn btn-outline-warning"
                data-mdb-ripple-color="dark"
              >
                Sign Up
              </button>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
