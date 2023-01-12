import React from 'react'

function Footer() {
  return (
    <>
    <footer>
    <div class="container-fluid p-5" style={{color:"#ffffffcf",backgroundColor:"#4B328F"}}>
      <div class="row p-2">
        <div class="col-12 col-lg-5  p-3 ">
                    {/* <!-- Content --> */}
                    <h6 class="text-uppercase fw-bold text-center text-lg-start mb-4 mb-md-2">Learnify</h6>
                    <p class="mb-4 text-center text-lg-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum repellendus nobis qui velit suscipit. Consectetur mollitia laudantium alias iure consequuntur.</p>
                    <div class="d-flex icons flex-row align-items-center justify-content-center justify-content-lg-start my-5 ">
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-twitter ms-4"></i>
                        <i class="fab fa-google ms-4"></i>
                        <i class="fab fa-instagram ms-4"></i>
                        <i class="fab fa-github ms-4"></i>
                    </div>
          
        </div>
        <div class="col-12 col-lg-7 ">
          <div class="row text-start p-3">
            {/* <!-- Company --> */}
            <div class="col-12 col-md-6 col-lg-3 my-3 my-lg-0 text-center text-lg-start">
              <h6 class="mb-3 footer-titles">Company</h6>
                <p class="text-reset mb-1">About Us</p>
                <p class="text-reset mb-1">Job Board</p>
                <p class="text-reset mb-1">Become a Mentor</p>
                <p class="text-reset mb-1">Our Comunitymb-1</p>
            </div>
            <div class="col-12 col-md-6 col-lg-3 my-3 my-lg-0 text-center text-lg-start">
              <h6 class="mb-3 footer-titles">Offered Courses</h6>
              <p class="text-reset mb-1">About Us</p>
              <p class="text-reset mb-1">Job Board</p>
              <p class="text-reset mb-1">Become a Mentor</p>
              <p class="text-reset mb-1">Our Comunity</p>
            </div>
            <div class="col-12 col-md-6 col-lg-3 my-3 my-lg-0 text-center text-lg-start">
              <h6 class="mb-3 footer-titles">Resources</h6>
              <p class="text-reset mb-1">About Us</p>
              <p class="text-reset mb-1">Job Board</p>
              <p class="text-reset mb-1">Become a Mentor</p>
              <p class="text-reset mb-1">Our Comunity</p>
            </div>
            <div class="col-12 col-md-6 col-lg-3 my-3 my-lg-0 text-center text-lg-start">
              <h6 class="mb-3 footer-titles">More</h6>
              <p class="text-reset mb-1">About Us</p>
              <p class="text-reset mb-1">Job Board</p>
              <p class="text-reset mb-1">Become a Mentor</p>
              <p class="text-reset mb-1">Our Comunity</p>
            </div>
          </div>
        </div>

        <div class="col-12 mt-5">
          <div class="d-flex align-items-center justify-content-center">
            <p>© 2022. All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
    </>
  )
}

export default Footer