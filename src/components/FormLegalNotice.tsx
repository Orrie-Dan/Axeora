import { Link } from "react-router-dom";

export default function FormLegalNotice() {
  return (
    <p className="form-legal">
      By submitting this form you agree to our <Link to="/privacy">Privacy Notice</Link> and{" "}
      <Link to="/terms">Website Terms of Use</Link>. Do not include classified, citizen, or
      operationally sensitive information.
    </p>
  );
}
