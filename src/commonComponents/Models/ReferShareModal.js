import { Row, Col, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { modalService } from "../../constant/dummyData";
import {
  modalReferShare,
  sharePlatfoam,
} from "../../constant/accountDummyData";
import Images from "../../constant/images";

function ReferShareModal(props) {
  const navigate = useNavigate();
  const handleContinue = () => {
    props.onContinue();
  };
  const handleClicks = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="modal-content-main-container">
      <Modal
        className="modal-content-order-service"
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="modal-services-body text-center">
            <h4 className="services-modal-title-refer">share</h4>
            <div className="services-modal-refer-view">
              <p className="services-modal-refer-text">
                https://www.figma.com/file/cSkqYkiSpzSXdwai
                Xd2FZJ/Net-Card?type=design&node-3BS6NB-1
              </p>
              <img src={Images.Copy} className="img-fluid-content-refer" />
            </div>
            <Row>
              {modalReferShare.map((item, index) => {
                return (
                  <>
                    <Col
                      lg={{ span: 3 }}
                      md={{ span: 3 }}
                      sm={{ span: 4 }}
                      xs={{ span: 6 }}
                      onClick={handleClicks}
                    >
                      <div
                        className="user-modal-services-item
                        user-modal-services-item-refer"
                        onClick={() => navigate(props.link)}
                      >
                        <img
                          src={item.image}
                          className="img-fluid-content-idea-friend"
                        />
                        <p className="user-service-name-small font-500">
                          {item.text}
                        </p>
                      </div>
                    </Col>
                  </>
                );
              })}
            </Row>
            <ul className="px-0 user-share-platfoam-order">
              {sharePlatfoam.map((item, index) => {
                return (
                  <>
                    <li className="user-share-platfoam-listing">
                      <img
                        src={item.image}
                        className="img-fluid-content-share-friend"
                      />
                      <p className="user-service-name-small font-500">
                        {item.text}
                      </p>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ReferShareModal;
