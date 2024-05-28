import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import { useState } from "react";
import Images from "../../constant/images";

function CancellationModal(props) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [contact, setContact] = useState("");

  const handleContinue = () => {
    props.onContinue();
  };

  return (
    <Modal {...props} size="md" centered>
      {/* <Modal.Header closeButton /> */}
      <Modal.Body>
        <div className="modal-services-body px-4">
          <div className="text-center mt-3">
            <div className="mb-3">
              <span className="img-label-order">
                <img src={Images.IconTick} className="img-fluid" />
              </span>
            </div>
            <h4 className="services-modal-title-main mb-4">
              {props.title}
            </h4>
            <p className="services-modal-description mb-3">
              {props.description}
            </p>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default CancellationModal;
