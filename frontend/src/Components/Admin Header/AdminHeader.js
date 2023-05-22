import React from 'react'
import { Link } from "react-router-dom";
import { AiOutlineDingding } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import './AdminHeader.css'
import { logout } from "../../actions/userAction";
import { Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";

function AdminHeader() {

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const dispatch = useDispatch();

    const logoutHandler = () => {
      dispatch(logout());
    };

  return (
    <Navbar bg="dark" expand="lg" variant="dark" className="navbar">
      <Navbar.Brand className="brand">
        <Link to="/customer-home" className="homenavbar-logo">
          OCMS <AiOutlineDingding />
        </Link>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="navItem">
        <Nav className="m-auto">
          <Form inline></Form>
        </Nav>

        {userInfo ? (
          <>
            <Nav>
              <Nav.Link href="/admin-dash">Dashboard</Nav.Link>

              <NavDropdown title={userInfo?.name} id="basic-nav-dropdown">
                <NavDropdown.Item href="/profile" style={{ color: "black" }}>
                  MyProfile
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item
                  onClick={logoutHandler}
                  style={{ color: "black" }}
                >
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </>
        ) : (
          <Nav>
            {" "}
            <Nav.Link>
              <Link to="/admin-dash" className="homenav-links">
                Dashboard
              </Link>
            </Nav.Link>
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default AdminHeader