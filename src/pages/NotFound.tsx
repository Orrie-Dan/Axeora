import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="notfound">
      <div>
        <h1>Page not found</h1>
        <p className="lede">The page you requested is not part of the AxeOra site.</p>
        <Link className="btn btn-dark" to="/" style={{ marginTop: 24 }}>
          Back home
        </Link>
      </div>
    </div>
  );
}
