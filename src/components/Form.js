import React from "react";
import { useFormik } from "formik";
import "./form.css";
import * as yup from "yup";

function Form() {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      gender: "",
      birthDate: "",
      address: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: yup.object({
      fullName: yup
        .string()
        .max(30, "Name can't be more than 30 characters")
        .required("Required"),
      email: yup.string().email("Invalid Email Address").required("Required"),
      phone: yup
        .string()
        .matches(/^01[0125][0-9]{8}$/, "Invalid Phone Number")
        .required("Required"),
      address: yup
        .string()
        .max(100, "Can't exceed 100 characters")
        .required("Required"),
    }),
  });

  console.log(formik.touched);

  return (
    <>
      <nav className="sticky-top">
        <div className="navbar pb-0 bg-whit e">
          <div className="container">
            <a href="./" className="navbar-brand fs-3 text-primary">
              /zero
            </a>
            <form
              className="d-flex w-50 position-relative d-none d-md-block"
              role="search"
            >
              <input
                className="form-control me-2 border-primary rounded-pill"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn text-primary position-absolute last"
                type="submit"
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
            <div>
              <button
                className="btn btn-outline-primary rounded-pill px-3 mx-lg-3 d-none d-md-inline-block"
                data-bs-toggle="modal"
                data-bs-target="#sign_in"
              >
                sign in
              </button>
              <button
                className="btn btn-outline-primary rounded-pill px-3 mx-lg-3 d-none d-md-inline-block"
                data-bs-toggle="modal"
                data-bs-target="#sign_up"
              >
                sign up
              </button>
            </div>
            <div>
              <button
                className="btn btn-outline-primary border border-1 d-sm-none"
                data-bs-toggle="modal"
                data-bs-target="#sign_in"
              >
                <i className="fa-solid fa-right-to-bracket"></i>
              </button>
              <button className="btn btn-outline-primary border border-1 d-sm-none">
                <i
                  className="fa-solid fa-user-plus"
                  data-bs-toggle="modal"
                  data-bs-target="#sign_up"
                ></i>
              </button>
              <button
                className="btn btn-outline-primary d-sm-none border border-1"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fa-solid fa-bars"></i>
              </button>
            </div>
          </div>
          <div className="bg-primary w-100">
            <div className="container">
              <div className="navbar-expand-md w-100 d-md-block" id="navbarNav">
                <ul className="navbar-nav justify-content-evenly">
                  <li className="nav-item">
                    <a className="nav-link text-light" href="./">
                      Antiques
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-light" href="./">
                      PC & Laptop
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-light" href="./">
                      Mobile & Tablet
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-light" href="./">
                      Console games
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-light" href="./">
                      Cameras
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-light" href="./">
                      Home Appliances
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* ////////////////////////////////////////// */}
      <div>
        <div
          className="modal fade bg-black bg-opacity-75"
          id="sign_up"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header bg-primary">
                <h5 className="modal-title text-light">Sign Up</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body p-5">
                <form action="">
                  <div className="mb-3">
                    <label htmlFor="user_name" className="form-label">
                      User Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="user_name"
                      placeholder="Enter user name"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="E-mail"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="tel" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="tel"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Password_1" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="Password_1"
                      placeholder="Password"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Password_2" className="form-label">
                      Confirm password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="Password_2"
                      placeholder="confirm password"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary form-control"
                  >
                    Sign Up
                  </button>
                  <div className="form-text">
                    Already has an account?
                    <a
                      href="./"
                      className="text-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#sign_in"
                      style={{ cursor: "pointer" }}
                    >
                      Sign In
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade bg-black bg-opacity-75"
          id="sign_in"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header bg-primary">
                <h5 className="modal-title text-light">Sign In</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body p-5">
                <form action="">
                  <div className="mb-3">
                    <label htmlFor="user_name" className="form-label">
                      Email address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="user_name"
                      aria-describedby="emailHelp"
                      placeholder="Enter user name or email"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Password_sign_in" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="Password_sign_in"
                      placeholder="Password"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary form-control"
                  >
                    Sign In
                  </button>
                  <div id="emailHelp" className="form-text">
                    Don't have an account?
                    <a
                      href="./"
                      className="text-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#sign_up"
                      style={{ cursor: "pointer" }}
                    >
                      Sign Up
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- content --> */}

      <div className="main row container">
        {/* <!-- left Bar --> */}

        <div className="col-2 border shadow bg-light d-flex flex-row justify-content-center pt-5">
          <div className="position-fixed d-flex flex-column gap-3">
            <a
              className="fs-5 text-decoration-none border-bottom border-primary"
              href="profile.html"
            >
              Profile
            </a>
            <a className="fs-5 text-decoration-none" href="wishlist.html">
              Wishlist
            </a>
            <a className="fs-5 text-decoration-none" href="cart.html">
              Cart
            </a>
            <a className="fs-5 text-decoration-none" href="userAds.html">
              Your Ads.
            </a>
          </div>
        </div>

        {/* <!-- Profile --> */}
        <div className="col-10 ps-5">
          <div className="d-flex flex-column gap-2 ps-5 ms-5">
            <h2 className="pt-5 fs-1 text-primary">Your Profile Information</h2>
            <br />
            <form onSubmit={formik.handleSubmit}>
              <label>Full Name:</label>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullName}
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="input border-1 border bg-light rounded p-2 w-100"
              />
              {formik.touched.fullName && formik.errors.fullName ? (
                <p>{formik.errors.fullName}</p>
              ) : null}
              <label>E-mail Address:</label>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                type="email"
                name="email"
                placeholder="your e-mail"
                className="input border-1 border bg-light rounded p-2 col-12"
              />
              {formik.touched.email && formik.errors.email ? (
                <p>{formik.errors.email}</p>
              ) : null}
              <label>Phone Number:</label>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                type="tel"
                name="phone"
                placeholder="01012345678"
                className="input border-1 border bg-light rounded p-2 col-12"
              />
              {formik.touched.phone && formik.errors.phone ? (
                <p>{formik.errors.phone}</p>
              ) : null}
              <div>
                <br />
                <label>Gender:</label>
                <input
                  onChange={formik.handleChange}
                  type="radio"
                  name="gender"
                  value="Male"
                  className="ms-5"
                />
                <label htmlFor="male">Male</label>
                <input
                  onChange={formik.handleChange}
                  type="radio"
                  name="gender"
                  value="Female"
                  className="ms-3"
                />
                <label htmlFor="female">Female</label>
              </div>
              <br />
              <label>Birth Date:</label> <br></br>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.birthDate}
                type="date"
                name="birthDate"
                className="input border-1 border bg-light rounded p-2 col-12"
              />
              <label>Your Address:</label>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address}
                type="text"
                name="address"
                placeholder="your Address"
                className="input border-1 border bg-light rounded p-2 col-12"
              />
              {formik.touched.address && formik.errors.address ? (
                <p>{formik.errors.address}</p>
              ) : null}
              <div id="save_reset">
                <div className="container d-flex flex-row gap-3 justify-content-end mt-3 mb-5">
                  <button className="btn bg-danger text-white w-25">
                    Reset
                  </button>
                  <button
                    type="submit"
                    className="btn bg-primary text-white w-25"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
