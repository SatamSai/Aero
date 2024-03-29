import React from "react";
import { Container, Wrapper, Logo } from "./NavBar.styles";
import LogoImg from "../../assets/Logo.png";
import { Navbar, Nav } from "react-bootstrap";

function index(props) {
  return (
    <div>
      <Container>
        <Wrapper>
          <Navbar variant="dark" expand="lg" style={{ width: "100%" }}>
            <Navbar.Brand>
              <a href="/">
                <Logo src={LogoImg} />
              </a>
            </Navbar.Brand>
            <Navbar.Toggle style={{ height: "55px", width: "55px" }} />
            <Navbar.Collapse style={{ justifyContent: "flex-end" }}>
              <Nav>
                <Nav.Link
                  href="/ourteam"
                  style={{ fontSize: "18px", padding: "10px 16px" }}>
                  Our Team
                </Nav.Link>
                <Nav.Link
                  href="/aboutus"
                  style={{ fontSize: "18px", padding: "10px 16px" }}
                >
                  About Us
                </Nav.Link>
                <Nav.Link
                  href="/events"
                  style={{ fontSize: "18px", padding: "10px 16px" }}
                >
                  Events
                </Nav.Link>
                <Nav.Link
                  href="/competitions"
                  style={{ fontSize: "18px", padding: "10px 16px" }}
                >
                  Competitions
                </Nav.Link>
                <Nav.Link
                  href="/sponsors"
                  style={{ fontSize: "18px", padding: "10px 16px" }}
                >
                  Sponsors
                </Nav.Link>
                <Nav.Link
                  href="/contact"
                  style={{ fontSize: "18px", padding: "10px 16px" }}
                >
                  Contact
                </Nav.Link>
                <Nav.Link
                  href="/aerozone"
                  style={{ fontSize: "18px", padding: "10px 16px" }}
                >
                  Aerozone
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Wrapper>
      </Container>
    </div>
  );
}

export default index;
