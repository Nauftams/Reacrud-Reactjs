import React from "react";
import "./Navbar.css";
import { Container, Navbar, Form, FormControl, Button, Image } from "react-bootstrap";
import Monarch from "./logo192.png";

const NavbarComp = () => {
  return (
    <Navbar expand="lg" variant="dark" bg="dark">
      <Container>
        <Navbar.Brand href="#" className="title">
          <Image src={Monarch} height="54px" width="64px"></Image> Reacrud
        </Navbar.Brand>
        <Form className="d-flex">
          <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
          <Button variant="outline-secondary">Search</Button>
        </Form>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
