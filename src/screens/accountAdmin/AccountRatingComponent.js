import React, { useRef, useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Overlay,
  Tooltip,
} from "react-bootstrap";
import Images from "../../constant/images";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../../commonComponents/adminSidebar";
import "../admin.css";
import AdminImages from "../../constant/adminImages";
import { accountRatings, walletListing } from "../../constant/accountDummyData";
import { scheduleBookingStatus } from "../../constant/dummyData";
import AddressUpdateDropdown from "../../commonComponents/AddressUpdateDropdown";
function AccountRatingComponent() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const targets = useRef([]);
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
              <section
                className="user-content-auth-section
              timeline-vertical-detail-container"
              >
                <Container>
                  <Row>
                    <Col lg={{ span: 12 }}>
                      <div className="user-account-language-controller">
                        <h6
                          className="user-power-title
                            user-power-title-repair
                            mb-3 mt-2"
                        >
                          My Rating and Reviews
                        </h6>
                      </div>
                    </Col>

                    {accountRatings.map((item, index) => {
                      return (
                        <>
                          <Col lg={{ span: 6 }} sm={{ span: 12 }}>
                            <div className="repair-time-date-container mb-2">
                              <Card
                                className="admin-sidebar-redirect"
                                style={{ boxShadow: "none", border: "none" }}
                              >
                                <div
                                  className="
                      repair-wallet-flex-container"
                                  style={{ position: "relative" }}
                                >
                                  <div
                                    className="split-ac-flex-left
                              repair-ac-flex-left"
                                  >
                                    <span
                                      className="repair-ac-label-service-wallet
                          repair-ac-label-service"
                                      style={{ height: "100%" }}
                                    >
                                      <img
                                        src={item.image}
                                        className="img-fluid"
                                      />
                                    </span>
                                    <div
                                      className="split-ac-username
                                repair-ac-username"
                                    >
                                      <h6 className="choose-us-title-coupans">
                                        {item.title}
                                      </h6>

                                      <p className="user-account-review-wallet mt-2">
                                        <img
                                          src={item.star}
                                          className="img-fluid mr-3"
                                        />
                                        {item.review}
                                      </p>
                                      <p className="font-weight-normal">
                                        {item.text}
                                      </p>
                                    </div>
                                  </div>

                                  <div className="repair-time-date-label">
                                    <img
                                      ref={(ref) =>
                                        (targets.current[index] = ref)
                                      }
                                      onClick={() => setShow(!show)}
                                      src={AdminImages.Dots}
                                     
                                      className="repair-time-date-wallet-rate"
                                    />
                                    <Overlay
                                      target={targets.current[index]}
                                      show={show}
                                      placement="right"
                                    >
                                      {(props) => (
                                        <Tooltip
                                          id={`overlay-example-${index}`}
                                          {...props}
                                        >
                                          Delete
                                        </Tooltip>
                                      )}
                                    </Overlay>
                                  </div>
                                </div>
                              </Card>
                            </div>
                          </Col>
                        </>
                      );
                    })}
                  </Row>
                </Container>
              </section>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="services-provider-section">
        <Container>
          <AddressUpdateDropdown />
        </Container>
      </section>
    </>
  );
}

export default AccountRatingComponent;
