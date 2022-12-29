import React from "react";
import imageIcon from "./assets/images/sticky-notes.png";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { firebaseAuth } from "./firebase-config";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Components/auth";

function Header() {
  const navigate = useNavigate();
  const authContext = useAuth();

  const logout = async () => {
    await signOut(firebaseAuth);
    navigate("/welcome");
  };

  console.log(authContext.user);

  const profileLink = () =>{
    navigate("/profile");
  }

  return (
    <>
      <Navbar className=" header" variant="dark" expand="lg">
        <Container fluid>
          <img src={imageIcon} alt="sticky" />

          <Navbar.Brand className="headerName" href="#home">
            Note-It
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-light-example" />

          <Navbar.Collapse id="navbar-dark-example">
            {authContext.user === undefined ||
            authContext.user === null ? null : (
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavDropdown
                  id="nav-dropdown"
                  title="Welcome"
                  menuVariant="light"
                  align="end"
                >
                  <NavDropdown.Item onClick={profileLink}>
                    {authContext.user.email}
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logout}>Log out</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
