import React from "react";

function Paginate() {
  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center">
            <nav aria-label="...">
              <ul className="pagination">
                <li className="page-item disabled">
                  <a className="page-link" href="/">
                    Previous
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/">
                    1
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="/">
                    2 <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Paginate;
