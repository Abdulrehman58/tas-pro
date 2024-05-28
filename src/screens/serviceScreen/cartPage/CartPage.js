import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Accordion,
  FormControl,
} from "react-bootstrap";
import Images from "../../../constant/images";
import {
  couponsContent,
  countCartBoxRow,
  amountSummary,
  navigateAmount,
} from "../../../constant/dummyData";
import { CleaningCarousel } from "../../../commonComponents/CleaningCarousel";
import "../../screens.css";
import { useNavigate } from "react-router-dom";
import SelectFormModal from "../../../commonComponents/Models/SelectForm";
import AddressModal from "../../../commonComponents/Models/AddressModal";
import NewAddressModal from "../../../commonComponents/Models/NewAddress";
import TermsModal from "../../../commonComponents/Models/TermsModal";
import { Screens } from "../../../constant/routes";

function CartComponent() {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = React.useState(false);
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [showThirdModal, setShowThirdModal] = useState(false);
  const [showFourthModal, setShowFourthModal] = useState(false);

  const handleFirstModalContinue = () => {
    setShowFirstModal(false);
    setShowSecondModal(true);
  };

  const handleSecondModalContinue = () => {
    setShowSecondModal(false);
    setShowThirdModal(true);
  };
  const handleThirdModalContinue = () => {
    setShowThirdModal(false);
    setShowFourthModal(true);
  };

  const handleFourthModalContinue = () => {
    // Handle any logic you need for the third modal continue action
  };

  const [countCartBoxRows, setCountCartBoxRows] = useState(countCartBoxRow);
  const [num, setNum] = useState(0);

  const incNum = () => {
    if (num < 10) {
      setNum(num + 1);
    }
  };

  const decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };

  const handleChange = (e) => {
    setNum(e.target.value);
  };

  const removeRow = (indexToRemove) => {
    setCountCartBoxRows((prevRows) => {
      const updatedRows = [...prevRows];
      updatedRows.splice(indexToRemove, 1);
      setNum(0); // Reset the quantity state
      return updatedRows;
    });
  };

  // let [num, setNum] = useState(0);
  // let incNum = () => {
  //   if (num < 10) {
  //     setNum(Number(num) + 1);
  //   }
  // };
  // let decNum = () => {
  //   if (num > 0) {
  //     setNum(num - 1);
  //   }
  // };
  // let handleChange = (e) => {
  //   setNum(e.target.value);
  // };
  return (
    <>
      <section className="home-banner-section">
        <Container>
          <Row>
            <Col lg={{ span: 7 }}>
              <div className="home-banner-left-content">
                <h4 className="heading-title-banner">Cart Summary</h4>

                <div className="mt-4 box-cart-container position-relative">
                  <h5 className="user-provider-dummy">Customer Details</h5>
                  <div
                    className="d-flex justify-between
                  box-cart-container-view"
                  >
                    <div className="">
                      <h6 className="user-provider-name">
                        Mr Tikesh Dewangan
                        <span className="user-provider-label-home">home</span>
                      </h6>
                      <p className="user-provider-label-description">
                        Office No 201, atlantis Corporate Park, Ring Road
                        No.1,Telibandha, Raipur 492001
                        <br />
                        +91 7247799900
                        <span className=" mx-3">
                          <img src={Images.Cart1} alt="" />
                        </span>
                      </p>
                    </div>

                    <Button
                      className=" btn-primary-fill-book-border"
                      style={{ height: "45px" }}
                      onClick={() => setShowFirstModal(true)}
                    >
                      <span className="card-label-text-btn">
                        change address
                      </span>
                    </Button>
                  </div>
                </div>
                <div className="mt-4 box-cart-container position-relative">
                  <h5 className="user-provider-dummy">Customer Details</h5>
                  {countCartBoxRows.map((item, index) => {
                    return (
                      <div className="cart-amount-split-box" key={index}>
                        <h6 className="cart-amount-split-left">{item.title}</h6>
                        <div className="input-group input-group-form-box mx-2 my-2">
                          <div className="input-group-prepend">
                            <button
                              className="btn btn-outline-primary btn-outline-primary-increment"
                              type="button"
                              onClick={decNum}
                            >
                              {item.minus}
                            </button>
                          </div>
                          <input
                            type="text"
                            className="form-control-content-text text-center"
                            value={num} // Use num as the value here
                            onChange={handleChange}
                          />
                          <div className="input-group-prepend">
                            <button
                              className="btn btn-outline-primary btn-outline-primary-increment"
                              type="button"
                              onClick={incNum}
                            >
                              {item.plus}
                            </button>
                          </div>
                        </div>
                        <div className="split-ac-flex-right mx-2 my-2">
                          <h6 className="split-ac-title-small">{item.text}</h6>
                          <span className="font-weight-normal">
                            {item.text2}
                          </span>
                        </div>
                        <span
                          className="img-content-remove-row mx-2 my-2"
                          onClick={() => removeRow(index)}
                        >
                          <img src={item.image} alt="" />
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Col>
            <Col lg={{ span: 5 }}>
              <div className="timeline-vertical-detail-container">
                <div
                  className="
                company-detail-content-alert
                company-detail-content-dropdown mt-5
                btn-primary-fill-book-border"
                  style={{ height: "auto", width: "auto" }}
                >
                  <Accordion defaultActiveKey="0">
                    {couponsContent.map((item, index) => {
                      return (
                        <>
                          <Accordion.Item className="" eventKey={item.key}>
                            <Accordion.Header>
                              <div className="company-user-training-sub">
                                <span className="company-user-listing-label">
                                  <img src={item.image} className="img-fluid" />
                                </span>
                                <div className="company-user-listing-right">
                                  <h6 className="choose-us-title-username">
                                    {item.title}
                                  </h6>
                                  <p className="choose-us-description mb-0">
                                    {item.helpingText}
                                  </p>
                                </div>
                              </div>
                            </Accordion.Header>
                            <Accordion.Body>
                              <div className="company-user-training-sub mb-4">
                                <span className="company-user-listing-label">
                                  <img
                                    src={item.percent}
                                    className="img-fluid"
                                  />
                                </span>
                                <div className="company-user-listing-right">
                                  <h6 className="choose-us-title-coupans">
                                    {item.subTitle}
                                  </h6>
                                  <p className="choose-us-description mb-0">
                                    {item.text}
                                  </p>
                                </div>
                              </div>
                              <div className="company-user-training-sub mb-4">
                                <span className="company-user-listing-label">
                                  <img
                                    src={item.percent}
                                    className="img-fluid"
                                  />
                                </span>
                                <div className="company-user-listing-right">
                                  <h6 className="choose-us-title-coupans">
                                    {item.subTitle}
                                  </h6>
                                  <p className="choose-us-description mb-0">
                                    {item.text}
                                  </p>
                                </div>
                              </div>
                            </Accordion.Body>
                          </Accordion.Item>
                        </>
                      );
                    })}
                  </Accordion>
                </div>
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
                    btn-primary-fill-book-rounded
                    btn-primary-fill-amount-submit"
                      onClick={() => setShowFirstModal(true)}
                    >
                      continue
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
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="service-home-section">
        <Container>
          <div className="mt-2 user-multi-services-slides">
            <Row>
              <Col lg={{ span: 12 }}>
                <div
                  className="mt-2 user-multi-services-slides
                user-multi-services-cleaning-first"
                >
                  <h4 className="user-heading-title mb-2">
                    Frequently Added together
                  </h4>
                  <CleaningCarousel />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <SelectFormModal
        show={showFirstModal}
        onHide={() => setShowFirstModal(false)}
        onContinue={handleFirstModalContinue}
      />
      <AddressModal
        show={showSecondModal}
        onHide={() => setShowSecondModal(false)}
        onContinue={handleSecondModalContinue}
      />
      <NewAddressModal
        show={showThirdModal}
        onHide={() => setShowThirdModal(false)}
        onContinue={handleThirdModalContinue}
      />
      <TermsModal
        show={showFourthModal}
        onHide={() => setShowFourthModal(false)}
        onContinue={handleFourthModalContinue}
        screen={Screens.amcpaymentOption}
      />
    </>
  );
}

export default CartComponent;
