import { Button } from "react-bootstrap";

export default function MCQ() {
  return (
    <div className="mcq-question my-3">
      <p>Enter your question and choices. Select one as the correct ans.</p>

      <h6>Question:</h6>
      <textarea rows={3} style={{ maxWidth: "500px", width: "100%" }} />
      <h6>Answers:</h6>
      <div
        className="d-flex mb-2 mb-3"
        style={{ maxWidth: "500px", width: "100%" }}
      >
        <input type="radio" />
        <input
          type="text"
          className="form-control ms-2"
          style={{ border: "1px solid gray" }}
        />
      </div>
      <div
        className="d-flex mb-2 mb-3"
        style={{ maxWidth: "500px", width: "100%" }}
      >
        <input type="radio" />
        <input
          type="text"
          className="form-control ms-2"
          style={{ border: "1px solid gray" }}
        />
      </div>
      <div
        className="d-flex mb-2 mb-3"
        style={{ maxWidth: "500px", width: "100%" }}
      >
        <input type="radio" />
        <input
          type="text"
          className="form-control ms-2"
          style={{ border: "1px solid gray" }}
        />
      </div>
      <Button variant="secondary" style={{ borderRadius: 0 }}>
        Add Option
      </Button>
    </div>
  );
}
