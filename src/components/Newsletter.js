import React from 'react'
import './styles/Newsletter.css'

function Newsletter() {
  return (
    <>
    <section id="newsletter" class="p-4" style={{backgroundColor:"#EDE9FC"}}>
      <div class="d-flex flex-column align-items-center justify-content-center p-5">
          <p class="newsletter-title flex-item mb-3">Wanted to be the first to know about new updates?</p>
          <p class="newsletter-desc flex-item mb-1 mb-md-5 text-center">Get to know the latest industry news, updates, emerging technologies and many more</p>

          <div class="container d-none d-md-block">
            <div class="d-flex flex-row mx-auto justify-content-center">
                <input type="email" class="flex-item form-control mx-2" placeholder="Enter your email address" style={{maxWidth:"50%"}} />
                {/* background-color: #513798; color: #ffffff; padding: 15px 45px; */}
                <button class="flex-item btn" style={{backgroundColor:"#513798", color:"#fff", padding: "15px 45px"}}>Subscribe</button> 
              </div>
            </div>

          <div class="container d-block d-md-none mt-0">
            <div class="row">
              <div class="col-12">
                <input type="email" class="form-control mt-0 mb-3 mx-auto" placeholder="Enter your email address"  style={{maxWidth:"50%"}} />
              </div>
              <div class="col-12 text-center">
                <button class="flex-item btn mx-auto" style={{backgroundColor:"#513798", color:"#fff", padding: "15px 45px"}}>Subscribe</button>
              </div>
              </div>
            </div>
          </div>
    </section>
    </>
  )
}

export default Newsletter