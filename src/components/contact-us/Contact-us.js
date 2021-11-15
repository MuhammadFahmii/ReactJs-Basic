import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addContactUs } from "../stores/contactUsSlice";
import "./Contact-us.css";

export default function ContactUs() {
  const dispatch = useDispatch();
  const initialState = {
    fullname: "",
    email: "",
    phone: 0,
    nationality: "",
    message: "",
  };
  const fullnameRegex = /^[A-Za-z]*$/;
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const nohandphoneRegex =
    /^[+]?[(]?[0-9]{2}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,9}$/;

  const [data, setData] = useState(initialState);
  const [errorMassage, setErrorMassage] = useState("");
  const handleChange = (e) => {
    if (e.target.id === "fullname") {
      setData({ ...data, fullname: e.target.value });
      fullnameRegex.test(e.target.value)
        ? setErrorMassage("")
        : setErrorMassage("Fullname harus berupa huruf");
    } else if (e.target.id === "email") {
      setData({ ...data, email: e.target.value });
      emailRegex.test(e.target.value)
        ? setErrorMassage("")
        : setErrorMassage("Format email tidak sesuai");
    } else if (e.target.id === "phone") {
      setData({ ...data, phone: e.target.value });
      nohandphoneRegex.test(e.target.value)
        ? setErrorMassage("")
        : setErrorMassage("No Handphone harus terdiri dari 9-14 angka");
    }
  };
  return (
    <>
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-4 side-image">
            <img class="contactUs-logo" src="assets/logo-ALTA.png" alt="" />
          </div>
          <div class="col-sm-8">
            <form>
              <h2>Contact Us</h2>
              <div class="mb-3">
                <label for="fullname" class="form-label">
                  Full Name <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="fullname"
                  placeholder="Your Full Name Here"
                  onChange={handleChange}
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">
                  Email address <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="example@domain.com"
                  onChange={handleChange}
                />
              </div>
              <div class="mb-3">
                <label for="phone" class="form-label">
                  Phone Number <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="phone"
                  placeholder="08573890xxxxx"
                  onChange={handleChange}
                />
              </div>
              <div class="mb-3">
                <label for="nationality" class="form-label">
                  Nationality
                </label>
                <select
                  name="nationality"
                  id="nationality"
                  class="form-select"
                  onChange={(e) =>
                    setData({ ...data, nationality: e.target.value })
                  }
                >
                  <option value="select">Select</option>
                  <option value="indonesia">Indonesian</option>
                  <option value="america">American</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="message" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  placeholder="Leave a message here"
                  id="message"
                  onChange={(e) =>
                    setData({ ...data, message: e.target.value })
                  }
                ></textarea>
              </div>
              <p style={{ color: "red" }}>{errorMassage}</p>
              <div>
                <Link to="/" type="button" className="btn btn-danger mx-2">
                  Kembali
                </Link>
                <Link
                  to="/review-message"
                  type="button"
                  className="btn btn-primary"
                  onClick={(e) => dispatch(addContactUs(data))}
                >
                  Submit
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
