import { Modal, Form, Button } from "react-bootstrap";
import { useState } from "react";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import "react-datepicker/dist/react-datepicker.css";
import Images from "../../constant/images";

function SelectFormModal(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notes, setNotes] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleContinue = () => {
    props.onContinue(); // Call the parent component's continue handler
  };

  return (
    <Modal
      className="modal-content-order-service"
      {...props}
      size="md"
      centered
    >
      <Modal.Header closeButton />
      <Modal.Body>
        <div className="modal-services-body px-2">
          <Form className="mt-4 mb-5">
            <Form.Group
              className="mb-3 position-relative"
              controlId="formBasicEmail"
            >
              <Form.Label className="form-control-label">
                Select Date
              </Form.Label>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy"
                className="form-control-text-input"
                placeholderText="Select Date"
              />
              <img src={Images.Calendar} className="img-fluid-view-effect" />
              {/* <Form.Control
                placeholder="Select Date"
                className="form-control-text-input"
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy"
              />
              <img src={Images.Calendar} className="img-fluid-view-effect" /> */}
            </Form.Group>
            <Form.Group
              className="mb-3 position-relative"
              controlId="formBasicPassword"
            >
              <Form.Label className="form-control-label">
                Select Time Slot
              </Form.Label>
              <TimePicker
                value={selectedTime}
                onChange={(time) => setSelectedTime(time)}
                className="form-control-text-input"
                disableClock={true}
              />
              <img src={Images.TimeClock} className="img-fluid-view-effect" />
              {/* <Form.Control
                placeholder="Time"
                className="form-control-text-input"
                value={selectedTime}
                onChange={(time) => setSelectedTime(time)}
                format="HH:mm"
                disableClock={true}
              />
              <img src={Images.TimeClock} className="img-fluid-view-effect" /> */}
            </Form.Group>
            <Form.Group
              className="mb-5"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label
                className="form-control-label
              form-control-label-notes"
              >
                Special Notes
              </Form.Label>
              <Form.Control
                placeholder="Write here"
                as="textarea"
                className="form-control-text-input"
                rows={5}
                style={{ height: "auto" }}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </Form.Group>
            <div className="text-center mt-3">
              <Button
                className="btn-primary-fill-book btn-primary-fill-book-rounded btn-primary-fill-book-rounded-modal"
                onClick={handleContinue}
              >
                Continue
              </Button>
            </div>
          </Form>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default SelectFormModal;
