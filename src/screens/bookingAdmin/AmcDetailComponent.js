import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Accordion,
  Button,
  Modal,
  Table,
} from "react-bootstrap";
import Images from "../../constant/images";
import { CleaningCarousel } from "../../commonComponents/CleaningCarousel";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../../commonComponents/adminSidebar";
import {
  amcBoxAccordion,
  amcDetailDrop,
  amcScheduleRow,
  couponsContent,
  scheduleHomeCard,
} from "../../constant/dummyData";
import { Screens } from "../../constant/routes";
import SelectFormModal from "../../commonComponents/Models/SelectForm";
import AddressModal from "../../commonComponents/Models/AddressModal";
import NewAddressModal from "../../commonComponents/Models/NewAddress";
import AddressUpdateDropdown from "../../commonComponents/AddressUpdateDropdown";

function AmcDetailComponent({ scheduleHomeCards }) {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = React.useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [shows, setShows] = useState(false);

  const handleCloseOne = () => setShows(false);
  const handleShowOne = () => setShows(true);
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [showThirdModal, setShowThirdModal] = useState(false);

  const handleFirstModalContinue = () => {
    setShowFirstModal(false);
    setShowSecondModal(true);
  };

  const handleSecondModalContinue = () => {
    setShowSecondModal(false);
    setShowThirdModal(true);
  };
  const handleThirdModalContinue = () => {};
  const handleClicks = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <section className="home-banner-section">
        <Container>
          <Row>
            <Col lg={{ span: 12 }}>
              <div className="user-home-profile-content">
                <p className="user-fome-content-link">
                  <span className="user-home-content-label">
                    <img src={Images.Sidebar1} className="img-fluid" />
                  </span>
                  Home | <span className="color-theme-orange">Profile</span>
                </p>
              </div>
            </Col>
            <Col
              lg={{ span: 3 }}
              md={{ span: 3 }}
              sm={{ span: 6 }}
              xs={{ span: 12 }}
            >
              <AdminSidebar />
            </Col>
            <Col lg={{ span: 9 }}>
              <Row>
                <Col lg={{ span: 6 }} sm={{ span: 12 }}>
                  <div
                    className=" amc-detail-booking-service
                  timeline-vertical-detail-container"
                  >
                    {amcBoxAccordion.map((accordionItem, accordionIndex) => {
                      return (
                        <Accordion key={accordionIndex} defaultActiveKey="1">
                          <Accordion.Item className="mb-4" eventKey="1">
                            <Accordion.Header>
                              <div className="company-user-training-sub">
                                <div className="company-user-listing-right">
                                  <h6 className="choose-us-title-username mb-0">
                                    {accordionItem.heading}
                                  </h6>
                                </div>
                              </div>
                            </Accordion.Header>
                            <Accordion.Body>
                              <div className="booking-user-training-body mb-4">
                                {accordionItem.amcDetailDrop?.map(
                                  (detailItem, detailIndex) => {
                                    return (
                                      // <div
                                      //   key={detailIndex}
                                      //   className="user-booking-cart-detial mb-3"
                                      // >
                                      <Row>
                                        <Col
                                          lg={{ span: 4 }}
                                          md={{ span: 4 }}
                                          sm={{ span: 6 }}
                                          xs={{ span: 6 }}
                                        >
                                          <h6 className="user-booking-amount-title choose-banner-paragraph-blue font-weight-500 min-width-100">
                                            {detailItem.one}
                                          </h6>
                                        </Col>
                                        <Col
                                          lg={{ span: 6 }}
                                          md={{ span: 6 }}
                                          sm={{ span: 6 }}
                                          xs={{ span: 6 }}
                                        >
                                          <h6 className="user-booking-amount-title font-weight-400">
                                            {detailItem.two}
                                          </h6>
                                        </Col>
                                        <Col
                                          lg={{ span: 2 }}
                                          md={{ span: 2 }}
                                          sm={{ span: 6 }}
                                          xs={{ span: 6 }}
                                        >
                                          <h6 className="user-booking-amount-title font-weight-600">
                                            {detailItem.three}
                                          </h6>
                                        </Col>
                                      </Row>
                                    );
                                  }
                                )}
                                <Row className="mt-5">
                                  <Col
                                    lg={{ span: 4 }}
                                    md={{ span: 4 }}
                                    sm={{ span: 6 }}
                                    xs={{ span: 6 }}
                                  ></Col>
                                  <Col
                                    lg={{ span: 6 }}
                                    md={{ span: 6 }}
                                    sm={{ span: 6 }}
                                    xs={{ span: 6 }}
                                  >
                                    <h6 className="user-booking-amount-title font-weight-600">
                                      {accordionItem.amount}
                                    </h6>
                                  </Col>
                                  <Col
                                    lg={{ span: 2 }}
                                    md={{ span: 2 }}
                                    sm={{ span: 6 }}
                                    xs={{ span: 6 }}
                                  >
                                    <h6 className="user-booking-amount-title font-weight-600">
                                      {accordionItem.value}
                                    </h6>
                                  </Col>
                                </Row>
                                {/* <div className="user-booking-cart-detial mb-3"></div> */}
                                <Row>
                                  <Col
                                    lg={{ span: 4 }}
                                    md={{ span: 4 }}
                                    sm={{ span: 6 }}
                                    xs={{ span: 6 }}
                                  ></Col>
                                  <Col
                                    lg={{ span: 6 }}
                                    md={{ span: 6 }}
                                    sm={{ span: 6 }}
                                    xs={{ span: 6 }}
                                  >
                                    <h6 className="user-booking-amount-title font-weight-500">
                                      {accordionItem.amount1}
                                    </h6>
                                  </Col>
                                  <Col
                                    lg={{ span: 2 }}
                                    md={{ span: 2 }}
                                    sm={{ span: 6 }}
                                    xs={{ span: 6 }}
                                  >
                                    <h6 className="user-booking-amount-title font-weight-500">
                                      {accordionItem.value1}
                                    </h6>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col
                                    lg={{ span: 4 }}
                                    md={{ span: 4 }}
                                    sm={{ span: 6 }}
                                    xs={{ span: 6 }}
                                  ></Col>
                                  <Col
                                    lg={{ span: 6 }}
                                    md={{ span: 6 }}
                                    sm={{ span: 6 }}
                                    xs={{ span: 6 }}
                                  >
                                    <p className="user-content-card-text-repair">
                                      {accordionItem.amount2}
                                    </p>
                                  </Col>
                                  <Col
                                    lg={{ span: 2 }}
                                    md={{ span: 2 }}
                                    sm={{ span: 6 }}
                                    xs={{ span: 6 }}
                                  >
                                    <p className="user-content-card-text-repair">
                                      {accordionItem.value2}
                                    </p>
                                  </Col>
                                </Row>
                              </div>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      );
                    })}
                    <Accordion defaultActiveKey="2">
                      <Accordion.Item className="mb-4" eventKey="2">
                        <Accordion.Header>
                          <div className="company-user-training-sub">
                            <div className="company-user-listing-right">
                              <h6 className="choose-us-title-username mb-0">
                                AMC Schedule
                              </h6>
                            </div>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
                          <div className="booking-user-training-body mb-4">
                            <Row className="mb-3">
                              <Col
                                lg={{ span: 4 }}
                                md={{ span: 4 }}
                                sm={{ span: 6 }}
                                xs={{ span: 6 }}
                              >
                                <h6 className="user-booking-amount-title font-weight-600">
                                  Status
                                </h6>
                              </Col>
                              <Col
                                lg={{ span: 6 }}
                                md={{ span: 6 }}
                                sm={{ span: 6 }}
                                xs={{ span: 6 }}
                              >
                                <h6 className="user-booking-amount-title font-weight-600">
                                  Upcoming Date
                                </h6>
                              </Col>
                              <Col
                                lg={{ span: 2 }}
                                md={{ span: 2 }}
                                sm={{ span: 6 }}
                                xs={{ span: 6 }}
                              >
                                <h6 className="user-booking-amount-title font-weight-600">
                                  Details
                                </h6>
                              </Col>
                            </Row>
                            {amcScheduleRow.map((item, index) => {
                              return (
                                <>
                                  <Row className="mb-2">
                                    <Col
                                      lg={{ span: 4 }}
                                      md={{ span: 4 }}
                                      sm={{ span: 6 }}
                                      xs={{ span: 6 }}
                                    >
                                      <p className={item.class}>{item.text1}</p>
                                    </Col>
                                    <Col
                                      lg={{ span: 6 }}
                                      md={{ span: 6 }}
                                      sm={{ span: 6 }}
                                      xs={{ span: 6 }}
                                    >
                                      <p className={item.class}>{item.text2}</p>
                                    </Col>
                                    <Col
                                      lg={{ span: 2 }}
                                      md={{ span: 2 }}
                                      sm={{ span: 6 }}
                                      xs={{ span: 6 }}
                                    >
                                      <span className={item.class2}>
                                        {item.img}
                                      </span>
                                    </Col>
                                  </Row>
                                </>
                              );
                            })}
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                    <Accordion defaultActiveKey="2">
                      <Accordion.Item className="mb-4" eventKey="2">
                        <Accordion.Header>
                          <div className="company-user-training-sub">
                            <div className="company-user-listing-right">
                              <h6 className="choose-us-title-username mb-0">
                                Billing Status
                              </h6>
                            </div>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
                          <div className="booking-user-training-body mb-4">
                            <Row className="mb-2">
                              <Col
                                lg={{ span: 3 }}
                                md={{ span: 3 }}
                                sm={{ span: 6 }}
                                xs={{ span: 6 }}
                              >
                                <h6 className="user-booking-amount-title font-weight-600">
                                  Period
                                </h6>
                              </Col>
                              <Col
                                lg={{ span: 4 }}
                                md={{ span: 4 }}
                                sm={{ span: 6 }}
                                xs={{ span: 6 }}
                              >
                                <h6 className="user-booking-amount-title font-weight-600">
                                  Billing Date.
                                </h6>
                              </Col>
                              <Col
                                lg={{ span: 2 }}
                                md={{ span: 2 }}
                                sm={{ span: 6 }}
                                xs={{ span: 6 }}
                              >
                                <h6 className="user-booking-amount-title font-weight-600">
                                  AMT
                                </h6>
                              </Col>
                              <Col
                                lg={{ span: 3 }}
                                md={{ span: 3 }}
                                sm={{ span: 6 }}
                                xs={{ span: 6 }}
                              >
                                <h6 className="user-booking-amount-title font-weight-600">
                                  status
                                </h6>
                              </Col>
                            </Row>
                            {/* <div className="user-booking-cart-detial mb-3"></div> */}
                            <Row className="mb-2">
                              <Col
                                lg={{ span: 3 }}
                                md={{ span: 3 }}
                                sm={{ span: 6 }}
                                xs={{ span: 6 }}
                              >
                                <h6 className="user-booking-amount-title font-weight-400 flex-one">
                                  Q1
                                </h6>
                              </Col>
                              <Col
                                lg={{ span: 4 }}
                                md={{ span: 4 }}
                                sm={{ span: 6 }}
                                xs={{ span: 6 }}
                              >
                                <h6 className="user-booking-amount-title font-weight-400 flex-one">
                                  12/12/23
                                </h6>
                              </Col>
                              <Col
                                lg={{ span: 2 }}
                                md={{ span: 2 }}
                                sm={{ span: 6 }}
                                xs={{ span: 6 }}
                              >
                                <h6 className="user-booking-amount-title font-weight-400 flex-one">
                                  ₹990
                                </h6>
                              </Col>
                              <Col
                                lg={{ span: 3 }}
                                md={{ span: 3 }}
                                sm={{ span: 6 }}
                                xs={{ span: 6 }}
                              >
                                <p className="user-off-percent mb-0 flex-one">
                                  paid
                                  <span className="">
                                    <img
                                      src={Images.PdfIcon}
                                      className="img-fluid mx-2"
                                    />
                                  </span>
                                </p>
                              </Col>
                            </Row>
                            {/* <div className="user-booking-cart-detial mb-3"></div> */}
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </Col>
                <Col lg={{ span: 6 }} sm={{ span: 12 }}>
                  <div
                    className="timeline-vertical-detail-container
                    repair-time-date-card"
                  >
                    <div className="flex-box-content-status-result">
                      <p
                        className="
                      user-content-card-text-ref mb-0"
                      >
                        Ref: TAS/AMC2223/000222
                      </p>
                      <span className="pending-approve-label bg-status-completed">
                        Running
                      </span>
                    </div>
                    <div className="repair-time-date-label"></div>
                    <div className=" user-account-time-container mb-3">
                      <h6 className="user-account-detail-timer">Start Date:</h6>
                      <h6 className="user-account-detail-timer color-red-theme">
                        <span className="label-view-calendar">
                          <img
                            src={Images.CalendarFill}
                            className="img-fluid"
                          />
                        </span>
                        Tuesday, 12 March 2024
                      </h6>
                    </div>
                    <div className=" user-account-time-container">
                      <h6 className="user-account-detail-timer">End Date:</h6>
                      <h6 className="user-account-detail-timer color-red-theme">
                        <span className="label-view-calendar">
                          <img
                            src={Images.CalendarFill}
                            className="img-fluid"
                          />
                        </span>
                        Tuesday, 11 March 2025
                      </h6>
                    </div>
                    <h6
                      className="user-power-title
                            user-power-title-repair-refer
                            mb-2 mt-3"
                    >
                      Shipping Details
                    </h6>
                    <div
                      className="mt-3 user-account-time-container
                   "
                    >
                      <h6
                        className="user-power-title
                            user-power-title-repair-refer
                            mb-2 mt-0"
                      >
                        Mr. Tikesh Dewangan
                      </h6>
                    </div>
                    <h6 className="user-content-title-light font-weight-500 mb-2">
                      Office No. 201m Atlantis Corporate Park, Ring Road No. 1
                      Telibandha, Raipur
                    </h6>
                    <h6 className="user-content-title-light font-weight-500">
                      C.N. : +91 72747799900
                    </h6>

                    <div className="text-center mt-3"
                    onClick={handleClicks}>
                      {/* <Button
                        className=" btn-primary-fill-book
                    btn-primary-fill-book-rounded
                    button-primary-transparent-gradiant-linear mb-4"
                        onClick={showFirstModal}
                        style={{ padding: "0px", height: "50px" }}
                      >
                        Re-Schedule
                      </Button> */}
                      <Button
                        className=" btn-primary-fill-book-border
                        btn-primary-fill-book-border-detial-fixed"
                        onClick={showFirstModal}
                      >
                        <span className="card-label-text-btn">Re-Schedule</span>
                      </Button>
                      <Button
                        className=" btn-primary-fill-book
                    btn-primary-fill-book-rounded"
                        onClick={() => navigate(Screens.chatAdmin)}
                        style={{ padding: "0px", height: "50px" }}
                      >
                        Raise Complaint
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="services-provider-section">
        <Container>
         <AddressUpdateDropdown />
        </Container>
      </section>
      <div className="modal-content-main-container">
        <Modal
          className="modal-content-order-service"
          show={show}
          onHide={handleClose}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <div className="modal-services-body px-4">
              <div className="mt-3">
                <h4
                  className=" color-theme-dark-font
                  font-weight-600 mb-4"
                >
                  Split AC (1.5 Ton *2)
                </h4>
                <div
                  style={{ border: "1px solid #E1E1E1", borderRadius: "10px" }}
                >
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>S.N</th>
                        <th>Make</th>
                        <th>Serial No.</th>
                        <th>Model No.</th>
                        <th>Age</th>
                        <th>Images</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Voltas</td>
                        <td>CAS11111</td>
                        <td>ERWT1111</td>
                        <td>5y</td>
                        <td className="text-center">
                          <span className="">
                            <img src={Images.PdfIcon} className="img-fluid" />
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
        <Modal
          className="modal-content-order-service"
          show={shows}
          onHide={handleCloseOne}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <div className="modal-services-body px-4">
              <div className="my-4 text-center">
                <h4
                  className=" color-theme-dark-font
                  font-weight-600 my-4"
                >
                  Please Call the Below Number
                </h4>
                <h6 className="user-check-contact-number">+1 555 6337275</h6>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
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
    </>
  );
}

export default AmcDetailComponent;
