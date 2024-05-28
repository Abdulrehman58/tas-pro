import React, { useState } from "react";
import { Container, Row, Col, Button, Accordion, Modal } from "react-bootstrap";
import Images from "../../../constant/images";
import {
  acRepairArea,
  cartWarranty,
  comapnyTraining,
  couponsContent,
  servicesTexts,
  servicesTextsTwo,
  splitAcProfile,
} from "../../../constant/dummyData";
import CarouselBanner from "../../../commonComponents/CarouselBanner";
import { CleaningCarousel } from "../../../commonComponents/CleaningCarousel";
import "../../screens.css";
import ApplicancesModal from "../../../commonComponents/AppliancesModal";
import { useNavigate } from "react-router-dom";
import { SplitAc } from "../../../commonComponents/SplitAc";
import { CustomerProfile } from "../../../commonComponents/CustomerProfile";
import { AcBrands } from "../../../commonComponents/AcBrands";
import FaqsComponent from "../../../component/faqs/Faqs";
import { Screens } from "../../../constant/routes";
import AddressUpdateDropdown from "../../../commonComponents/AddressUpdateDropdown";

function ServiceScreen() {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = React.useState(false);
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClicks = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  
  return (
    <>
      <section
        className="services-provider-section
      services-provider-section-view-link"
        style={{ paddingTop: "5.4rem", backgroundColor: "#eae8e8" }}
      >
        <Container>
          <h5 className="user-provider-dummy ">
            <span onClick={() => navigate("")}>Home </span>
            <span onClick={() => navigate("")}>/ AC & Appliance Repair </span>
            <span onClick={() => navigate("")}>/ AC Repair</span>
          </h5>
        </Container>
      </section>
      <section
        className="home-banner-section
      "
        style={{ paddingTop: "1rem" }}
      >
        <Container>
          <Row>
            <Col lg={{ span: 5 }}>
              <div className="home-banner-left-content">
                <h4 className=" heading-title-banner-fixed">
                  Best Air Condition (AC) Repair Service in Raiour
                </h4>
                <p className="choose-us-description">
                  <span className="choose-us-star-data">
                    <img src={Images.Star} className="img-fluid " />
                  </span>
                  <span className="text-bold-dark-black">4.5</span>{" "}
                  {" {480 reviews}"}
                  <span
                    className="color-theme-orange"
                    style={{ fontWeight: 600 }}
                  >
                    {" "}
                    |{" "}
                  </span>
                  <span className="text-bold-dark-black"> 5785 </span>
                  {" {Bookings in Raipur}"}
                </p>
                <div className="mt-5 box-cart-container position-relative">
                  <span className="box-cart-main-label-mark">
                    <img src={Images.Mark} className="img-fluid" />
                    TAS<span className="color-theme-orange">Pro </span>{" "}
                    <span className="mx-1">Cover</span>
                  </span>
                  <div
                    className="box-cart-content-container"
                    onClick={handleShow}
                  >
                    <div className="cart-box-left">
                      <span className="choose-us-star-data">
                        <img src={Images.Badge} className="img-fluid " />
                      </span>
                      <span className="choose-us-star-warranty">
                        30 days unconditional warranty
                      </span>
                    </div>
                    <div className="cart-box-right">
                      <img src={Images.ArrowRight} className="img-fluid" />
                    </div>
                  </div>
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
                            <span className="user-modal-taspro-warranty">
                              <img src={Images.Mark} className="img-fluid" />
                              TAS
                              <span className="color-theme-orange">
                                Pro{" "}
                              </span>{" "}
                              <span className="mx-1">Cover</span>
                            </span>
                            <p className="choose-us-description">
                              End-to-end service protection
                            </p>
                            <div className="user-form-content-warranty-card">
                              <h5 className="empty-logo-title">
                                30 days warranty on repairs
                              </h5>
                              <p className="choose-us-description">
                                Free repair if the same issue arises
                              </p>
                              <p className="choose-us-description">
                                One click hassle free claims
                              </p>
                              <p className="choose-us-description">
                                Up-to 10,000 cover if anything is damaged during
                                repair
                              </p>
                            </div>
                          </div>
                        </div>
                      </Modal.Body>
                    </Modal>
                  </div>
                  <div
                    className="box-cart-content-container"
                    onClick={() => navigate(Screens.rateCard)}
                  >
                    <div className="cart-box-left">
                      <span className="choose-us-star-data">
                        <img src={Images.Cart} className="img-fluid " />
                      </span>
                      <span className="choose-us-star-warranty">
                        Standrad rate card no hidden charges
                      </span>
                    </div>
                    <div className="cart-box-right">
                      <img src={Images.ArrowRight} className="img-fluid" />
                    </div>
                  </div>
                  {/* {cartWarranty.map((item, index) => {
                    return (
                      <>
                        <div
                          className="box-cart-content-container"
                          onClick={() => navigate(item.link)}
                        >
                          <div className="cart-box-left">
                            <span className="choose-us-star-data">
                              <img src={item.image} className="img-fluid " />
                            </span>
                            <span className="choose-us-star-warranty">
                              {item.text}
                            </span>
                          </div>
                          <div className="cart-box-right">
                            <img src={item.arrow} className="img-fluid" />
                          </div>
                        </div>
                      </>
                    );
                  })} */}
                </div>
              </div>
            </Col>
            <Col lg={{ span: 7 }}>
              <div
                className="user-banner-content-slide
              user-banner-content-slide-updated mt-2"
              >
                <CarouselBanner />
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={{ span: 7 }}>
              <div
                className="mt-4 user-multi-services-slides 
              user-multi-services-split
              user-multi-services-split-gap-updated"
                onClick={handleClick}
              >
                <SplitAc />
              </div>
              <div className="user-services-content-fixed-height">
                {splitAcProfile.map((item, index) => {
                  return (
                    <>
                      <div className=" split-ac-service-box-container mb-3">
                        <h4 className="heading-title-banner">{item.title}</h4>
                        <div className="split-ac-flex-container mt-4">
                          <div className="split-ac-flex-left">
                            <div className="position-relative"
                            onClick={handleClicks}>
                              <span
                                className="split-ac-label-service"
                                style={{ position: "relative", zIndex: "-1" }}
                              >
                                <img src={item.image} className="img-fluid" />
                              </span>
                              {/* <Button
                              className=" btn-primary-fill-book"
                              onClick={()=>navigate(Screens.amcserviceCart)}
                            >
                              {item.button}
                            </Button> */}
                              <Button
                                className=" btn-primary-fill-book-border
                              btn-primary-fill-book
                              btn-primary-fill-book-fixed"
                                onClick={() => navigate(Screens.amcserviceCart)}
                              >
                                <span className="card-label-text-btn">
                                  {item.button}
                                </span>
                              </Button>
                            </div>
                            <div className="split-ac-username">
                              <span className="user-date-warranty">
                                {item.warranty}
                              </span>
                              <h6
                                className="user-power-title
                            user-power-title-fixings"
                              >
                                {item.heading}
                              </h6>
                              <p className="user-content-card-text mb-3">
                                <span className="user-content-star-rate">
                                  <img src={item.star} className="img-fluid" />
                                </span>
                                {item.rate}
                              </p>
                              <p className="user-content-time-estimate mb-3">
                                <span className="user-content-star-rate">
                                  <img src={item.time} className="img-fluid" />
                                </span>
                                {item.estimation}
                              </p>
                            </div>
                          </div>
                          <div
                            className="split-ac-flex-right
                        split-ac-flex-right-fixings"
                          >
                            <h6 className="split-ac-title-small">
                              {item.amount1}{" "}
                              <span className="font-weight-normal">
                                {item.amount2}
                              </span>
                            </h6>
                            <p className="user-off-percent">{item.off}</p>
                          </div>
                        </div>
                        <ul className="px-3 mt-3">
                          <li className="user-split-paragraph">{item.text1}</li>
                          <li className="user-split-paragraph">{item.text2}</li>
                        </ul>
                        <h6 className="user-details-more-split">
                          {item.detail}
                        </h6>
                      </div>
                    </>
                  );
                })}
              </div>
            </Col>
            <Col lg={{ span: 5 }}>
              <div
                className="mt-4 box-cart-container
                company-detail-content-empty text-center"
              >
                <span className="box-cart-empty-label">
                  <img src={Images.EmptyIcon} className="img-fluid" />
                </span>
                <h5 className="empty-logo-title">Your Cart is empty</h5>
                <p className="choose-us-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  iaculis mauris pharetra, tincidunt odio non, sodales libero.
                  Aliquam a risus vel lectus lobortis ultricies at a enim.
                </p>
              </div>
              <div
                className=" box-cart-container
                company-detail-content-empty"
              >
                <h5 className="empty-logo-title mb-1 mt-1">
                  Why TASPro Company?
                </h5>
                <ul className="px-0">
                  {comapnyTraining.map((item, index) => {
                    return (
                      <>
                        <li key={index} className="company-user-training">
                          <span className="company-user-listing-label">
                            <img src={item.image} className="img-fluid" />
                          </span>
                          <p className="contact-phone-text">{item.text}</p>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </div>
              <div
                className="
                company-detail-content-alert
                company-detail-content-dropdown
                company-detail-content-empty
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
                                <img src={item.percent} className="img-fluid" />
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
                                <img src={item.percent} className="img-fluid" />
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
            </Col>
          </Row>
        </Container>
      </section>
      <section className="application-packages-section mt-3">
        <Container className="application-customers-review-container">
          <Row>
            <Col lg={{ span: 12 }}>
              <div className="text-right">
                <h5 className="user-service-customers-title">
                  What our Customers Say?
                </h5>
                <p
                  className="user-content-card-text mb-3
                text-white text-capitalize"
                >
                  <span className="user-content-star-rate">
                    <img src={Images.Star} className="img-fluid" />
                  </span>
                  4.5(12m reviews)
                </p>
              </div>
              <div
                className="mt-4 user-multi-services-slides 
              user-multi-services-split user-multi-services-customer
              user-multi-services-customer-covered"
              >
                <CustomerProfile />
              </div>
              <div className="my-4 mx-5">
                <h4 className="user-view-form-detail-reviews">
                  Vew All Reviews{">>"}
                </h4>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="application-packages-section mt-3">
        <Container>
          <Row>
            <Col lg={{ span: 12 }}>
              <div
                className="application-brands-covered 
              user-multi-services-slides  user-multi-services-split"
              >
                <h4 className="heading-title-banner mb-2">
                  We covered AC Brand
                </h4>
                <AcBrands />
              </div>
            </Col>
            <Col lg={{ span: 12 }}>
              {acRepairArea.map((item, index) => {
                return (
                  <>
                    <div className="user-ac-repair-areas mb-3">
                      <h4 className="heading-title-banner mb-2">
                        {item.title}
                      </h4>
                      <p className="heading-text-repair-area">{item.text}</p>
                    </div>
                  </>
                );
              })}
            </Col>
            <Col lg={{ span: 12 }}>
              <div className="user-ac-repair-areas mb-3">
                <h4 className="heading-title-banner mb-2">
                  Frequently Asked Questions (FAQ)?
                </h4>
                <div className="user-fixed-faqs-accordions">
                  <FaqsComponent />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="service-home-section">
        <Container>
          <div className=" user-multi-services-slides">
            <Row>
              <Col lg={{ span: 12 }}>
                <div
                  className="mt-1 user-multi-services-slides
                user-multi-services-cleaning-first"
                >
                  <h4 className="user-heading-title mb-2">
                    You may like our other services
                  </h4>
                  <CleaningCarousel />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section className="on-demand-service-section mt-2 ">
        <Container>
          <Row>
            <Col lg={{ span: 12 }}>
              <div className="on-demands-services-detail">
                <h5 className="choose-us-title mb-2">
                  On-demand Services we offer in Raipur Chhattisgarh
                </h5>
                {servicesTexts.map((item, index) => {
                  return (
                    <div key={index}>
                      <h6 className="demands-services-subtite">{item.title}</h6>
                      <p className="choose-us-paragraph mb-2">
                        {item.text.split(/(\s*\|\s*)/).map((textSegment, i) => (
                          <span key={i} className="hoverable-text">
                            {textSegment}
                          </span>
                        ))}
                      </p>
                    </div>
                  );
                })}
                <h5 className="choose-us-title mb-2">
                  AMC Services we offer in Raipur Chhattisgarh
                </h5>
                {servicesTextsTwo.map((item, index) => {
                  return (
                    <>
                      <h6 className="demands-services-subtite">{item.title}</h6>
                      <p className="choose-us-paragraph mb-2">
                        {item.text.split(/(\s*\|\s*)/).map((textSegment, i) => (
                          <span key={i} className="hoverable-text">
                            {textSegment}
                          </span>
                        ))}
                      </p>
                    </>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="services-provider-section">
        <Container>
          <AddressUpdateDropdown />
        </Container>
      </section>
      <ApplicancesModal
        link={Screens.service}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default ServiceScreen;
