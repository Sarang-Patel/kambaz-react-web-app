import { Button } from "react-bootstrap";

export default function TrueFalse() {
  return (
    <div className="truefalse-question mb-3">
      <p>Enter your question. Select either True/False as correct ans.</p>

      <h6>Question:</h6>
      <textarea rows={3} style={{ maxWidth: "500px", width: "100%" }} />
      <h6>Answers:</h6>
      <div
        className="d-flex mb-2 mb-3"
        style={{ maxWidth: "500px", width: "100%" }}
      >
        <input type="radio" name="trueFalse" />
        <label
          className="form-control ms-2"
          style={{ border: "1px solid gray" }}
        >
          True
        </label>
      </div>
      <div
        className="d-flex mb-2 mb-3"
        style={{ maxWidth: "500px", width: "100%" }}
      >
        <input type="radio" name="trueFalse" />
        <label
          className="form-control ms-2"
          style={{ border: "1px solid gray" }}
        >
          False
        </label>
      </div>
      <Button variant="secondary" style={{ borderRadius: 0 }}>
        Add Option
      </Button>
    </div>
  );
}
