import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../admin.css";
import {
  userAccountList,
  walletListing,
} from "../../constant/accountDummyData";
import { Screens } from "../../constant/routes";
import AdminImages from "../../constant/adminImages";
import AddressUpdateDropdown from "../../commonComponents/AddressUpdateDropdown";
function BlogsComponent() {
  const navigate = useNavigate();
  const handleClicks = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const cardSections = new Array(5).fill().map((_, index) => (
    <div key={index} className="blogs-salary-education-card my-4">
      <span className="blogs-education-label">
        <img src={AdminImages.Career2} className="img-fluid" alt="Career" />
      </span>
      <div className="blogs-education-profile-section">
        <h6 className="blogs-education-profile-heading">
          <span className="font-gradiant-text">Education</span>
          <span className="blogs-education-profile-label">OCT 27,2024</span>
        </h6>
        <p className="listing-card-label-paragraph text-left mt-3 mb-1">
          What is Salary Range?
        </p>
        <p
          className="font-weight-normal
        font-weight-normal-blog-text mb-2 mt-2"
        >
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered...
        </p>
        <ul className="my-0 px-0">
          {userAccountList.map((item, itemIndex) => (
            <li key={itemIndex} className="listing-card-label-content-user">
              <span className="listing-card-label-user">
                <img src={item.image} className="img-fluid" alt={item.text} />
              </span>
              {item.text}
            </li>
          ))}
        </ul>
        {/* <h6
          className="blogs-education-profile-heading blogs-education-profile-underline mt-2"
          onClick={() => navigate(Screens.blogDetail)}
        >
          Read More
        </h6> */}
        <span className="" style={{ cursor: "pointer" }}
        onClick={handleClicks}>
          <img
            onClick={() => navigate(Screens.blogDetail)}
            src={AdminImages.Readmore}
            className="img-fluid"
          />
        </span>
      </div>
    </div>
  ));
  return (
    <>
      <section className="open-positions-card-section "
      style={{marginTop: "0rem", paddingTop: "6rem"}}>
        <Container>
          <Row>
            <Col lg={{ span: 12 }}>
              <h4 className="heading-title-banner mb-2">Our Blogs</h4>
              <p
                className="heading-text-repair-area
              heading-text-repair-career
              text-left"
              >
                There are many variations of passages of Lorem Ipsum
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={{ span: 8 }} md={{ Span: 8 }} sm={{ span: 12 }}>
              <div>{cardSections}</div>
            </Col>
            <Col lg={{ span: 4 }} md={{ Span: 4 }} sm={{ span: 12 }}>
              <div className="">
                <h4 className="heading-title-banner mb-2">Categories</h4>
                <p
                  className="heading-text-repair-area
              heading-text-repair-career
              text-left"
                  style={{ lineHeight: "33px", color: "#666666" }}
                >
                  Education
                  <br />
                  Information
                  <br />
                  interview
                  <br />
                  Learn
                  <br />
                  Skill
                  <br />
                  Speaking
                </p>
              </div>
              <div className="mt-5">
                <img src={AdminImages.BlogsCard1} className="img-fluid" />
              </div>
              <div className="mt-5">
                <img src={AdminImages.BlogsCard2} className="img-fluid" />
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
    </>
  );
}

export default BlogsComponent;
