import React from "react";

function RegisterForm() {
  return (
    <>
      <section className="bg-light py-md-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
              <div className="card border border-light-subtle rounded-3 shadow-sm">
                <div className="card-body p-3 p-md-4 p-xl-5">

                  <h4 className="text-center">Register</h4>
                  <form action="#!">
                    <div className="row gy-2 overflow-hidden">
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control"
                            name="firstName"
                            id="firstName"
                            placeholder="First Name"
                            required
                          />
                          <label htmlFor="firstName" className="form-label">
                            First Name
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control"
                            name="lastName"
                            id="lastName"
                            placeholder="Last Name"
                            required
                          />
                          <label htmlFor="lastName" className="form-label">
                            Last Name
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder="name@example.com"
                            required
                          />
                          <label htmlFor="email" className="form-label">
                            Email
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            type="password"
                            className="form-control"
                            name="password"
                            id="password"
                  
                            placeholder="Password"
                            required
                          />
                          <label htmlFor="password" className="form-label">
                            Password
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            name="iAgree"
                            id="iAgree"
                            required
                          />
                          <label
                            className="form-check-label text-secondary"
                            htmlFor="iAgree"
                          >
                            I agree to the{" "}
                            <a
                              href="#!"
                              className="link-primary text-decoration-none"
                            >
                              terms and conditions
                            </a>
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-grid my-3">
                          <button
                            className="btn btn-primary btn-lg"
                            type="submit"
                          >
                            Sign up
                          </button>
                        </div>
                      </div>
                      <div className="col-12">
                        <p className="m-0 text-secondary text-center">
                          Already have an account?{" "}
                          <a
                            href="/login"
                            className="link-primary text-decoration-none"
                          >
                            Sign in
                          </a>
                        </p>
                        <p className="m-0 text-secondary text-center">
                          <a
                            href="/"
                            className="link-primary text-decoration-none"
                          >
                            Go Back to Home
                          </a>
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RegisterForm;
