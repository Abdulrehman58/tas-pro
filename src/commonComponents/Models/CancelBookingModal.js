import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import { useState } from "react";
import Images from "../../constant/images";

function CancelBookingModal(props) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [contact, setContact] = useState("");

  const handleContinue = () => {
    props.onContinue();
  };

  return (
    <Modal {...props} size="md" centered>
      <Modal.Header closeButton />
      <Modal.Body>
        <div className="modal-services-body px-4">
          <div className="text-center mt-3">
            <h4 className="services-modal-title-main color-theme-dark-font">
              Cancel Booking
            </h4>
            <p className="services-modal-description">
              We're sorry to hear that you need to cancel your booking. Please
              let us know the reason for the cancellation by selecting one of
              the options below. Your feedback helps us improve our services.
            </p>
          </div>
          <Form className="mt-4 mb-5">
            <Form.Group className="mb-3" controlId="formGridEmail">
              <Form.Select
                aria-label="Default select example"
                className="form-control-text-input
                form-control-text-cancellation"
              >
                <option>Cancellation Reason</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
              <Form.Control
                placeholder="Please Describe Reason"
                as="textarea"
                className="form-control-text-input
                form-control-text-cancellation"
                rows={5}
                style={{ height: "auto" }}
              />
            </Form.Group>

            <div className="text-center mt-3">
              <Button
                className="btn-primary-fill-book btn-primary-fill-book-rounded btn-primary-fill-book-rounded-modal"
                onClick={handleContinue}
              >
                 Cancel Booking
              </Button>
            </div>
          </Form>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default CancelBookingModal;
