import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Images from "../../constant/images";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../../commonComponents/adminSidebar";
import { itemCollection } from "../../constant/dummyData";
import { Screens } from "../../constant/routes";
import {
  accountListActivity,
  accountListing,
} from "../../constant/accountDummyData";
import "../admin.css";
import AddressModal from "../../commonComponents/Models/AddressModal";
import AddressUpdateDropdown from "../../commonComponents/AddressUpdateDropdown";

function AccountHomeComponent({}) {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleItemClick = (item) => {
    console.log("Clicked item:", item); // Check if item is logged correctly
    if (item.toLowerCase() === "saved address") {
      // Adjusted here
      setIsModalOpen(true);
      console.log("Modal should be open");
    } else if (item.link) {
      navigate(item.link);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleClick = () => {
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
            <Col lg={{ span: 3 }}>
              <AdminSidebar />
            </Col>
            <Col lg={{ span: 9 }}>
              <Row>
                <Col lg={{ span: 6 }} sm={{ span: 12 }} xs={{ span: 12 }}>
                  <div className="repair-time-date-container timeline-vertical-detail-container">
                    <h6
                      className="user-power-title
                            user-power-title-repair
                            mb-4"
                    >
                      Account Settings
                    </h6>
                    <ul className="px-0">
                      {accountListing.map((item, index) => (
                        <li
                          key={index}
                          className="account-home-base-listing mb-3"
                          //  onClick={() => handleItemClick(item.text)}
                          onClick={() => navigate(item.link)}
                        >
                          <div className="account-home-profile-edit">
                            <div className="account-home-base-container">
                              <span className="repair-ac-label-service-account">
                                <img
                                  src={item.image}
                                  className="img-fluid"
                                  alt="Account Image"
                                />
                              </span>
                              <div className="split-ac-username repair-ac-username">
                                <h6 className="account-edit-home-heading">
                                  {item.text}
                                </h6>
                              </div>
                            </div>
                            <div>{item.toggle}</div>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <h6
                      className="user-power-title
                            user-power-title-repair
                            mb-4 mt-4"
                    >
                      My Activity
                    </h6>
                    <ul className="px-0">
                      {accountListActivity.map((item, index) => {
                        return (
                          <>
                            <li
                              key={index}
                              className="account-home-base-listing mb-3"
                              onClick={() => navigate(item.link)}
                            >
                              <div className="account-home-profile-edit"
                              onClick={handleClick}>
                                <div className="account-home-base-container">
                                  <span
                                    className="
                          repair-ac-label-service-account"
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
                                    <h6 className="account-edit-home-heading">
                                      {item.text}
                                    </h6>
                                  </div>
                                </div>
                                <div className="">{item.toggle}</div>
                              </div>
                            </li>
                          </>
                        );
                      })}
                    </ul>
                    <div
                      className="mt-5
                    btn-primary-rounded-account-container-lg"
                    >
                      {/* <Button
                        className=" btn-primary-fill-book
                    btn-primary-rounded-account
                    button-primary-transparent mb-4"
                        onClick={() => navigate(Screens.authLogin)}
                      >
                        Logout
                      </Button> */}
                      <Button
                        className=" btn-primary-fill-book-border mb-4"
                        style={{ height: "45px", width: "100%" }}
                        onClick={() => navigate(Screens.authLogin)}
                      >
                        <span className="card-label-text-btn">Logout</span>
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col lg={{ span: 6 }} sm={{ span: 12 }} xs={{ span: 12 }}>
                  <div className="timeline-vertical-detail-container">
                    <div className="user-account-profile-view mt-4">
                      <span className="">
                        <img src={Images.AccountUser} className="img-fluid" />
                      </span>
                      <h6 className="account-edit-profile-heading mt-4 mb-2">
                        Danial Austin
                      </h6>
                      <p className="account-label-profile-description">
                        danialaustin007@gmail.com
                      </p>
                    </div>
                    <div
                      className="mt-4 flex-rounded-account
                    "
                    >
                      <span
                        className="btn-primary-rounded-account-container-lg"
                        style={{ margin: "6px 10px" }}
                      >
                        {/* <Button
                          className=" btn-primary-fill-book
                    btn-primary-rounded-account
                    button-primary-transparent"
                          style={{ flex: "1" }}
                        >
                          My bookings
                        </Button> */}
                        <Button
                          className=" btn-primary-fill-book-border mb-4"
                          style={{ height: "45px", flex: "1" }}
                        >
                          <span className="card-label-text-btn">
                            My bookings
                          </span>
                        </Button>
                      </span>
                      <span
                        className="btn-primary-rounded-account-container-lg"
                        style={{ margin: "6px 10px" }}
                      >
                        {/* <Button
                          className=" btn-primary-fill-book
                    btn-primary-rounded-account
                    button-primary-transparent"
                          style={{ flex: "1" }}
                          onClick={() => navigate(Screens.accountrefer)}
                        >
                          Help Center
                        </Button> */}
                        <Button
                          className=" btn-primary-fill-book-border mb-4"
                          style={{ height: "45px", flex: "1" }}
                          onClick={() => navigate(Screens.chatAdmin)}
                        >
                          <span className="card-label-text-btn">
                          Help Center
                          </span>
                        </Button>
                      </span>
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
      {isModalOpen && <AddressModal onClose={handleCloseModal} />}
    </>
  );
}

export default AccountHomeComponent;
