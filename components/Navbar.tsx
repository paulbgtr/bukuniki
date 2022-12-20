import { Container, Nav, Navbar as NavbarBS } from "react-bootstrap";

const Navbar = () => {
  return (
    <NavbarBS variant="dark">
      <Container>
        <NavbarBS.Brand href="/">bukuniki</NavbarBS.Brand>
      </Container>
    </NavbarBS>
  );
};

export default Navbar;
