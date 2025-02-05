import { FaCheckCircle, FaCircle } from "react-icons/fa";

export default function GreenCheckmark() {
  return (
    <span className="d-inline-flex align-items-center position-relative">
      <FaCircle className="text-white fs-6" />
      <FaCheckCircle className="text-success fs-6 position-absolute" />
    </span>
  );
}
