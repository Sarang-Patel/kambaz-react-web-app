import { Button } from "react-bootstrap";

export default function FillBlank() {
  return (
    <div className="fillblank-question mb-3">
      <p>Enter your question. Enter various possible answers.</p>

      <h6>Question:</h6>
      <textarea rows={3} style={{ maxWidth: "500px", width: "100%" }} />
      <h6>Answers:</h6>
      <div
        className="d-flex mb-2 mb-3"
        style={{ maxWidth: "500px", width: "100%" }}
      >
        <input
          type="text"
          className="form-control"
          style={{ border: "1px solid gray" }}
          placeholder="Possible answer"
        />
      </div>
      <div
        className="d-flex mb-2 mb-3"
        style={{ maxWidth: "500px", width: "100%" }}
      >
        <input
          type="text"
          className="form-control"
          style={{ border: "1px solid gray" }}
          placeholder="Possible answer"
        />
      </div>
      <Button variant="secondary" style={{ borderRadius: 0 }}>
        Add Option
      </Button>
    </div>
  );
}
