import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="not-found-wrapper">
      <h1 className="not-found">404</h1>
      <p>
        <Link to="/">Go back to Home Page</Link>
      </p>
    </div>
  );
}
