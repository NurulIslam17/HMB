import React from 'react'
import img1 from "../asset/image/hotel (1).jpg";

function RoomDetailDesc() {
  return (
    <>
      <div className="container my-5">
         <div className="row">
            <div className="col-md-6 mx-auto">

               <div className="card card-body">
                  <h4 className='bg-green1 text-center text-light py-2'>Room Details</h4>
                  <img src={img1} className='w-100' alt="" />
                  <h6 className='text-center mt-2'>Room Name</h6>
                  <h6 className='text-center'>Price : $200/Night</h6>
                  <h5 className='mt-3'>Existing Booking </h5>
                  <hr />

                  <p className='d-flex justify-content-between'><strong>Booking Number 1 :</strong> <span> Check-in : 2024-05-22 Out : 2024-05-23</span></p>
                  <hr />
                  <p className='d-flex justify-content-between'><strong>Booking Number 2 :</strong> <span> Check-in : 2024-05-22 Out : 2024-05-23</span></p>
                  <hr />

                  <a href="/" className='btn bg-green1 text-light'>Book Now</a>
      
               </div>

            </div>
         </div>
      </div>
    </>
  )
}

export default RoomDetailDesc