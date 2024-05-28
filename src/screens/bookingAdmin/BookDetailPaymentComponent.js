import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import Images from "../../constant/images";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../../commonComponents/adminSidebar";
import { itemCollection, timelineDetail } from "../../constant/dummyData";
import SelectFormModal from "../../commonComponents/Models/SelectForm";
import AddressModal from "../../commonComponents/Models/AddressModal";
import NewAddressModal from "../../commonComponents/Models/NewAddress";
import { Screens } from "../../constant/routes";
import MapComponent from "../../commonComponents/MapComponent";
import CancelBookingModal from "../../commonComponents/Models/CancelBookingModal";
import CancellationModal from "../../commonComponents/Models/CancellationModal";
import BookOrderCancel from "../../admin/BookOrderCancel";
import AddressUpdateDropdown from "../../commonComponents/AddressUpdateDropdown";

function BookDetailPaymentComponent({ scheduleHomeCards }) {
  const navigate = useNavigate();
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [showThirdModal, setShowThirdModal] = useState(false);
  const [showFourthModal, setShowFourthModal] = useState(false);
  const [showFifthModal, setShowFifthModal] = useState(false);

  const handleFirstModalContinue = () => {
    setShowFirstModal(false);
    setShowSecondModal(true);
  };

  const handleSecondModalContinue = () => {
    setShowSecondModal(false);
    setShowFifthModal(true);
  };
  const handleThirdModalContinue = () => {
    setShowThirdModal(false);
    setShowFourthModal(true);
  };
  const handleFifthModalContinue = () => {};
  let [num, setNum] = useState(0);
  let incNum = () => {
    if (num < 10) {
      setNum(Number(num) + 1);
    }
  };
  let decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };
  let handleChange = (e) => {
    setNum(e.target.value);
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
            <Col lg={{ span: 3 }}>
              <AdminSidebar />
            </Col>
            <Col lg={{ span: 9 }}>
              <Row>
                <Col lg={{ span: 6 }} sm={{ span: 12 }} xs={{ span: 12 }}>
                  <div className="repair-time-date-container">
                    <ul className="px-0">
                      <li
                        className="repair-time-date-card
                      repair-time-date-card-detail"
                      >
                        <Card className="admin-sidebar-redirect">
                          <div
                            className="user-coupan-apply-section
                      repair-ac-flex-container"
                            style={{
                              border: "none",
                              paddingBottom: "0px",
                              alignItems: "flex-start",
                            }}
                          >
                            <div
                              className="split-ac-flex-left
                              repair-ac-flex-left"
                            >
                              <span
                                className="
                          repair-ac-label-service"
                              >
                                <img
                                  src={Images.Summary1}
                                  className="img-fluid"
                                />
                              </span>
                              <div
                                className="split-ac-username
                                repair-ac-username"
                              >
                                <h6
                                  className="user-power-title
                            user-power-title-repair"
                                >
                                  AC Repair
                                </h6>

                                <p
                                  className="user-content-card-text
                            user-content-card-text-repair mb-1"
                                >
                                  Less / No Cooling
                                </p>
                                <h6 className="user-account-detail-summary">
                                  ₹299.00
                                </h6>
                              </div>
                            </div>
                            <div
                              className="input-group input-group-form-box mx-2 my-2"
                              style={{ border: "none", boxShadow: "none" }}
                            >
                              <div className="input-group-prepend">
                                <Button
                                  className="btn btn-outline-primary
                        btn-outline-primary-increment"
                                  type="button"
                                  onClick={decNum}
                                >
                                  -
                                </Button>
                              </div>
                              <FormControl
                                type="text"
                                className="form-control-content-text text-center"
                                value={num}
                                onChange={handleChange}
                              />
                              <div className="input-group-prepend">
                                <Button
                                  className="btn btn-outline-primary
                        btn-outline-primary-increment"
                                  type="button"
                                  onClick={incNum}
                                >
                                  +
                                </Button>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </li>
                    </ul>
                    <div className="mx-3">
                      <Card
                        className="admin-sidebar-redirect
                      mt-5 "
                      >
                        <div
                          className="user-coupan-apply-section
                      repair-ac-flex-container
                      repair-ac-flex-container-percent
                      "
                        >
                          <div
                            className="split-ac-flex-left
                              repair-ac-flex-left"
                          >
                            <span
                              className="
                          repair-ac-label-service
                          repair-ac-label-service-percent"
                            >
                              <img
                                src={Images.PercentCircle}
                                className="img-fluid"
                              />
                            </span>
                            <div
                              className="split-ac-username
                                repair-ac-username"
                            >
                              <h6
                                className="user-power-title
                            user-power-title-repair"
                              >
                                Coupons & Offers
                              </h6>
                            </div>
                          </div>
                          <div className="repair-time-date-label">
                            <span
                              className="pending-approve-label
                              pending-approve-label-offers"
                              style={{
                                backgroundColor: "transparent",
                                display: "inline-block",
                                width: "100%",
                              }}
                            >
                              3 Offers
                              <img
                                src={Images.ArrowAlert}
                                className="img-fluid mx-3 mr-0"
                              />
                            </span>
                          </div>
                        </div>
                      </Card>
                      <div
                        className="customer-detail-content
                    repair-time-date-card mx-0"
                      >
                        <h6
                          className="user-power-title
                            user-power-title-repair
                            mb-2 mt-5"
                        >
                          Customer Details
                        </h6>
                        <div
                          className="mt-3 user-account-time-container
                   "
                        >
                          <h6
                            className="user-power-title
                            user-power-title-repair
                            mb-4 mt-2"
                          >
                            Tikesh Dewangan
                          </h6>
                          <span className="user-detail-customer-edit">
                            <img src={Images.EditDot} className="img-fluid" />
                          </span>
                        </div>
                        <h6 className="user-content-title-light">
                          Office No. 201m Atlantis Corporate Park, Ring Road No.
                          1 Telibandha, Raipur
                        </h6>
                        <h6 className="user-content-title-light">
                          C.N. : +91 72747799900
                        </h6>
                      </div>

                      <div className=" my-4">
                        <h6
                          className="user-power-title
                            user-power-title-repair
                            mb-3 mt-5"
                        >
                          Service Provider
                        </h6>
                        <div className="user-coupan-apply-section">
                          <div className="user-chat-profile-view">
                            <span
                              className="
                          repair-ac-label-service-summary"
                            >
                              <img
                                src={Images.Summary2}
                                className="img-fluid"
                              />
                            </span>
                            <div
                              className="split-ac-username
                                repair-ac-username"
                            >
                              <h6
                                className="choose-us-title-coupans
                            mb-0"
                              >
                                Tom Latham
                              </h6>
                            </div>
                          </div>
                          <div className="text-center">
                            <span className="user-account-detial-contact">
                              <img src={Images.ChatBox} className="img-fluid" />
                              <img src={Images.Calling} className="img-fluid" />
                            </span>
                          </div>
                        </div>
                      </div>
                      <p
                        className="user-content-card-text-repair
                      mb-2"
                      >
                        <span className="user-account-detial-contact">
                          <img src={Images.Location} className="img-fluid" />
                        </span>
                        Time squre NYC, Manhattan
                      </p>
                      <div className="">
                        <MapComponent />
                      </div>
                      <div className="user-coupan-apply-section my-4">
                        <h6
                          className="user-power-title
                            user-power-title-repair
                           "
                        >
                          Advance Payment Summary
                        </h6>
                        <span className="user-account-detial-contact">
                          <img
                            src={Images.Summary3}
                            className="img-fluid user-account-detial-download"
                          />
                        </span>
                      </div>
                      <div className="admin-sidebar-redirect">
                        {itemCollection.map((item, index) => {
                          return (
                            <>
                              <div
                                className="mt-2 user-account-time-container
                    border-bottom-container"
                              >
                                <p className="user-account-detail-timer">
                                  {item.label}
                                </p>
                                <h6
                                  className="user-account-detail-timer"
                                  style={{ fontWeight: 600 }}
                                >
                                  {item.amount}
                                </h6>
                              </div>
                            </>
                          );
                        })}
                      </div>

                      <Card
                        className="admin-sidebar-redirect
                      mt-5 "
                      >
                        <div
                          className="user-coupan-apply-section
                      repair-ac-flex-container
                      repair-ac-flex-container-percent
                      "
                        >
                          <div
                            className="split-ac-flex-left
                              repair-ac-flex-left"
                          >
                            <img
                              src={Images.Summary4}
                              className="img-fluid
                                user-account-detial-download
                                mr-3"
                            />
                            <h6
                              className=" user-power-title
                            user-power-title-repair
                            mb-0"
                            >
                              Help Center
                            </h6>
                          </div>
                          <div className="repair-time-date-label">
                            <img
                              src={Images.ArrowAlert}
                              className="img-fluid mx-3 mr-0
                              "
                            />
                          </div>
                        </div>
                      </Card>

                      <div className="timeline-vertical-detail-container mt-4 mb-2">
                        <h6
                          className="user-power-title
                            user-power-title-repair
                            mb-2 mt-5"
                        >
                          Work Status
                        </h6>
                        <ul class="timeline">
                          {timelineDetail.map((item, index) => {
                            return (
                              <>
                                <li class="timeline-inverted mb-4" key={index}>
                                  <div class={item.badge}>
                                    <img
                                      src={item.tick}
                                      className="img-fluid"
                                    />
                                  </div>
                                  <div class={item.class}>
                                    <p className={item.paragraph}>
                                      {item.text}
                                    </p>
                                  </div>
                                </li>
                              </>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={{ span: 6 }} sm={{ span: 12 }} xs={{ span: 12 }}>
                  <h6
                    className="user-power-title
                            user-power-title-repair
                            mb-4 mt-4"
                  >
                    Payment Summary
                  </h6>
                  <div className="admin-sidebar-redirect">
                    {itemCollection.map((item, index) => {
                      return (
                        <>
                          <div
                            className="mt-2 user-account-time-container
                    border-bottom-container"
                          >
                            <p className="user-account-detail-timer">
                              {item.label}
                            </p>
                            <h6
                              className="user-account-detail-timer"
                              style={{ fontWeight: 600 }}
                            >
                              {item.amount}
                            </h6>
                          </div>
                        </>
                      );
                    })}
                  </div>
                  <div className=" mt-5">
                    <Button
                      className=" btn-primary-fill-book
                    btn-primary-fill-book-rounded
                    button-primary-transparent mb-4"
                      onClick={setShowFirstModal}
                    >
                      Reschedule
                    </Button>
                    <Button
                      className=" btn-primary-fill-book
                    btn-primary-fill-book-rounded"
                      onClick={setShowThirdModal}
                    >
                      Cancel Booking
                    </Button>
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
      <AddressModal
        show={showFirstModal}
        onHide={() => setShowFirstModal(false)}
        onContinue={handleFirstModalContinue}
      />

      <NewAddressModal
        show={showSecondModal}
        onHide={() => setShowSecondModal(false)}
        onContinue={handleSecondModalContinue}
      />
      <CancelBookingModal
        show={showThirdModal}
        onHide={() => setShowThirdModal(false)}
        onContinue={handleThirdModalContinue}
      />
      <CancellationModal
        show={showFourthModal}
        onHide={() => setShowFourthModal(false)}
        onContinue={handleSecondModalContinue}
        title="Booking Canceled"
        description="Your Booking has been cancelled "
      />
      <SelectFormModal
        show={showFifthModal}
        onHide={() => setShowFifthModal(false)}
        onContinue={() => navigate(Screens.bookOrderCancel)}
      />
    </>
  );
}

export default BookDetailPaymentComponent;
