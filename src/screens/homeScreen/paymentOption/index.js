import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Images from "../../../constant/images";
import { amountSummary, navigateAmount } from "../../../constant/dummyData";
import "../../screens.css";
import { useNavigate } from "react-router-dom";
import CheckBox from "../../../commonComponents/checkBox";
import { Screens } from "../../../constant/routes";
function PaymentComponent() {
  const navigate = useNavigate();
  const handleClicks = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section className="home-banner-section">
        <Container>
          <Row>
            <Col lg={{ span: 7 }}>
              <div className="home-banner-left-content">
                <h4 className="heading-title-banner">Checkout</h4>

                <div className="mt-4 box-cart-container position-relative">
                  <div
                    className="d-flex justify-content-between
                    align-items-center
                  box-cart-container-view"
                    onClick={handleClicks}
                  >
                    <h5 className="user-provider-dummy">payment option</h5>

                    {/* <Button
                      className=" btn-primary-fill-book-border "
                      style={{height: "45px"}}
                      onClick={()=>navigate(Screens.cartDetail)}
                    >
                      Pay ₹1200
                    </Button> */}
                    <Button
                      className=" btn-primary-fill-book-border"
                      style={{ height: "45px" }}
                      onClick={() => navigate(Screens.cartDetail)}
                    >
                      <span className="card-label-text-btn">Pay ₹1200</span>
                    </Button>
                  </div>
                  <div className="mt-4">
                    <CheckBox />
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={{ span: 5 }}>
              <div className="mt-4 box-cart-container position-relative">
                <h5 className="user-provider-dummy">amount summary</h5>
                {amountSummary.map((item, index) => {
                  return (
                    <>
                      <div className="display-view-web-cart mt-2">
                        <p className={item.class}>{item.title}</p>
                        <h6 className={item.class2}>{item.value}</h6>
                      </div>
                    </>
                  );
                })}
                <div className="text-center mt-3">
                  <Button
                    className=" btn-primary-fill-book
                    btn-primary-fill-book-rounded"
                  >
                    Pay ₹1200
                  </Button>
                </div>
                <ul className="px-0 mt-2 mb-0">
                  {navigateAmount.map((item, index) => {
                    return (
                      <>
                        <li className="user-add-card-payment">
                          <span className="user-add-cart-amount-label">
                            <img
                              src={item.image}
                              alt=""
                              className={item.class}
                            />
                            {item.text}
                          </span>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </div>
              <div className="mt-2  text-center">
                <div className="box-cart-success-amount">
                  <div className="box-cart-success-amount-flex">
                    <span className="box-cart-succcess-logo">
                      <img src={Images.Cart3} alt="" className="img-fluid" />
                    </span>
                    <h6 className="box-cart-succcess-label">
                      Easy Cancellation/Returns, Background Verified Service
                      Provide.
                    </h6>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default PaymentComponent;
