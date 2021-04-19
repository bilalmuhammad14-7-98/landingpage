import React from "react";
import {
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
  Col,
  Row,
  Container,
  NavDropdown,
} from "react-bootstrap";

const NavbarPage = () => {
  return (
    <div>
      <Navbar
        style={{ backgroundColor: "#094F94" }}
        collapseOnSelect
        expand="lg"
      >
        <Navbar.Brand  style={{ color: "white", fontWeight: "bolder" }} href="#home">Event Diary Application</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link  style={{ color: "orange", fontWeight: "bold" }} href="#features">Features</Nav.Link>
            <Nav.Link  style={{ color: "orange", fontWeight: "bold" }} href="#pricing">Pricing</Nav.Link>
            <NavDropdown style={{ color: "orange", fontWeight: "bold" }} title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Beauty</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Venue</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Rent a Car</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Photography
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Dress</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Food</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>

          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

          </div>
  );
};

export default NavbarPage;
