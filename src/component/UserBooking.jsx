import React from "react";
import img1 from "../asset/image/hotel (1).jpg";

function UserBooking() {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 mx-auto bg-grey1 p-3">
            <h4 className="text-center bg-green2 py-3">Your Booking List</h4>

            <div className="card card-body mb-3">
              <div className="d-flex justify-content-between">
                <div>
                  <p>
                    <strong>Booking Code : </strong> #GFAGL45
                  </p>
                  <p>
                    <strong>Price : </strong> $899
                  </p>
                  <p>
                    <strong>Total Guest : </strong> 3
                  </p>
                </div>

                <div>
                  <p>
                    <strong>Check In Date : </strong> 12/4/2024
                  </p>
                  <p>
                    <strong>Check Out Date : </strong> 12/4/2024
                  </p>
                </div>
              </div>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores harum rerum fugiat nam exercitationem nesciunt
                accusantium perferendis esse dolorum nostrum corporis neque, in,
                ipsam iste, reiciendis veniam voluptatum ullam quod?
              </p>
              <img src={img1} alt="" className="w-100 ht-125" />
            </div>

            <div className="card card-body mb-3">
              <div className="d-flex justify-content-between">
                <div>
                  <p>
                    <strong>Booking Code : </strong> #GFAGS45
                  </p>
                  <p>
                    <strong>Price : </strong> $899
                  </p>
                  <p>
                    <strong>Total Guest : </strong> 3
                  </p>
                </div>

                <div>
                  <p>
                    <strong>Check In Date : </strong> 12/4/2024
                  </p>
                  <p>
                    <strong>Check Out Date : </strong> 12/4/2024
                  </p>
                </div>
              </div>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores harum rerum fugiat nam exercitationem nesciunt
                accusantium perferendis esse dolorum nostrum corporis neque, in,
                ipsam iste, reiciendis veniam voluptatum ullam quod?
              </p>
              <img src={img1} alt="" className="w-100 ht-125" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserBooking;
