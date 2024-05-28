import Button from "react-bootstrap/Button";
import { Container, Form } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import "./navbar.css";
import { Screens } from "../../constant/routes";
import Images from "../../constant/images";
import InputGroupComponent from "../../commonComponents/InputGroup";

function NavbarComponent() {
  const navigate = useNavigate();
  return (
    <Navbar expand="lg" className=" bg-navbar-container">
      <Container>
        <Navbar.Brand>
          <span
            className="user-navbar-logo"
            onClick={() => navigate(Screens.Home)}
          >
            <img src={Images.Logo} />
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="navbar-collapse-content"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <InputGroupComponent />
          </Nav>
          <Nav className="">
            <div className="user-form-contact-list">
              <span className="contact-phone-list">
                <img src={Images.Contact} className="img-fluid" />
              </span>
              <p className="contact-phone-text">7447-0000-45</p>
            </div>
            <div className=" position-relative">
              <Form.Select
                aria-label="Default select example"
                className="form-control-input-content 
          form-control-input-user"
                onClick={() => navigate(Screens.authLogin)}
              >
                <option value="1">Login</option>
              </Form.Select>
              <span className="user-location-label-account">
                <img src={Images.HeadUser} className="img-fluid-label-content" />
              </span>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
