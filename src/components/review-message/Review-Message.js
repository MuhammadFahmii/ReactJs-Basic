import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Review-Message.css";
export default function ReviewMessage() {
  const { payload } = useSelector((state) => state.contactUs.contactUs);
  if (payload === undefined) return <div>Data not Found</div>;
  return (
    <>
      <div class="d-flex justify-content-center mt-5">
        <div id="content">
          <div class="row mt-5">
            <div class="col-4 mx-5">
              <p>Full Name</p>
              <p>Email Address</p>
              <p>Phone Number</p>
              <p>Nationality</p>
            </div>
            <div class="col">
              <p>: {payload.fullname} </p>
              <p>: {payload.email}</p>
              <p>: {payload.phone}</p>
              <p>: {payload.nationality}</p>
            </div>
          </div>
          <p class="mx-5">{payload.message}</p>
          <h3 class="mx-5">Thanks for contacting us!</h3>
          <h3 class="mx-5">We will be in touch with you shortly</h3>
          <Link
            to="/"
            class="mx-5 btn btn-primary rounded-pill"
            id="reviewButton"
          >
            Home
          </Link>
        </div>
      </div>
    </>
  );
}
