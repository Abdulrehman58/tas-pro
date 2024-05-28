import React, { useState } from "react";
import { Container, Row, Form, Button, Modal } from "react-bootstrap";
import "../../auth.css";
import Images from "../../constant/images";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";
import { Screens } from "../../constant/routes";

function Login() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [phone, setPhone] = useState(""); // Initialize phone state

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <section className="user-content-auth-section text-center">
        <Container fluid>
          <Row style={{ justifyContent: "center" }}>
            <div className="user-content-card-box">
              <div className="user-content-form-box">
                <div className="content-form-left-side">
                  <span className="content-form-auth-logo">
                    <img src={Images.AuthLogo} className="img-fluid" />
                  </span>
                  <div className="content-form-auth-container text-center">
                    <Form className="mt-5 mb-5 form-user-auth-separate-content">
                      <h4
                        className="services-modal-title-main color-theme-dark-font"
                        style={{ fontWeight: "600" }}
                      >
                        Hello & Welcome!
                      </h4>
                      <p
                        className="
                       services-modal-description-otp-section"
                      >
                        Please enter your phone number to sign in.
                      </p>
                      <Form.Group
                        className="mb-2 position-relative text-left"
                        controlId="formBasicEmail"
                      >
                        <Form.Label className="form-control-label text-left">
                          Phone Number
                        </Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="+1-300-555-0399"
                          className="form-control-text-input"
                          value={phone} // Use the phone state here
                          onChange={(e) => setPhone(e.target.value)} // Update phone state on change
                          onClick={handleShow}
                        />
                      </Form.Group>

                      <div className="text-center mt-3">
                        <Button
                          className="btn-primary-fill-book btn-primary-fill-book-rounded btn-primary-fill-book-rounded-modal"
                          style={{ boxShadow: "none" }}
                          onClick={() => navigate(Screens.otpLogin)}
                        >
                          send OTP
                        </Button>
                      </div>
                      <p className="account-signup-helping-text">
                        Don’t have an account?
                        <span
                          className="theme-orange-account"
                          onClick={() => navigate(Screens.signUp)}
                        >
                          {" "}
                          Sign Up
                        </span>
                      </p>
                    </Form>
                  </div>
                </div>
                <div className="content-form-right-side">
                  <span className="content-form-logo-banner">
                    <img src={Images.AuthBanner} className="img-fluid" />
                  </span>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>
      <div className="modal-content-main-container">
        <Modal
          className="modal-content-order-service"
          show={show}
          onHide={handleClose}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <div className="modal-services-body px-4">
              <div className="my-4">
                <h4 className="services-modal-title-main color-theme-dark-font">
                  Login / Signup
                </h4>
                <div className="mt-4">
                  <PhoneInput
                    country={"us"}
                    value={phone}
                    onChange={(phone) => setPhone(phone)}
                  />
                </div>
                <Form className="mt-4 mb-5">
                  <div className="mb-3">
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        className="user-form-check-control"
                        type="checkbox"
                      >
                        <Form.Check.Input
                          style={{ marginTop: "4px" }}
                          type="checkbox"
                        />
                        <Form.Check.Label>
                          <div className="mx-3">
                            <p className="user-provider-label-description">
                             Get order updated on
                              <span className="terms-privacy-alert">
                                {" "}
                                WhatsApp
                              </span>{" "}
                            </p>
                          </div>
                        </Form.Check.Label>
                      </Form.Check>
                    </Form.Group>
                  </div>

                  <div className="text-center mt-4">
                    <Button
                      className="btn-primary-fill-book btn-primary-fill-book-rounded btn-primary-fill-book-rounded-modal"
                     
                    >
                      Proceed
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default Login;
