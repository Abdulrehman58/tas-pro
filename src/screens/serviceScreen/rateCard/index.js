import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import "../../screens.css";
import ApplicancesModal from "../../../commonComponents/AppliancesModal";
import { useNavigate } from "react-router-dom";
import TableForm from "../../../commonComponents/TableForm";
import { Screens } from "../../../constant/routes";

function RateCardComponent() {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <section className="home-banner-section">
        <Container>
          <Row>
            <Col
              lg={{ span: 8 }}
              md={{ span: 8 }}
              sm={{ span: 12 }}
              xs={{ span: 12 }}
            >
              <div className="home-banner-left-content">
                <h4 className="heading-title-banner">Rate Card</h4>
                <div className="home-rate-card-box mt-5">
                  <div className="text-center">
                    <div className="labour-charges-appliances">
                      <h6 className="rate-card-label">
                        Labour Chares are capped at ₹499 per appliance
                      </h6>
                    </div>
                  </div>
                  <div className="accordion-table-cart mt-4">
                    <Accordion defaultActiveKey="1">
                      <Accordion.Item className="mb-4" eventKey="1">
                        <Accordion.Header>
                          <h6
                            className="heading-title-banner-faq 
                          heading-title-part-faq mb-4"
                          >
                            Electrical Parts
                          </h6>
                        </Accordion.Header>
                        <Accordion.Body>
                          <TableForm />
                         
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <ApplicancesModal link={Screens.service} show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default RateCardComponent;
