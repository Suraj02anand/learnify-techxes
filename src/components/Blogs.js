import React from 'react'
import './styles/Blogs.css'

function Blogs() {
  return (
    <>
    <section id="all-blogs">
      <div class="container-fluid">
        <p class="title p-2 all-blog-posts mt-4 mb-1">All Blog Posts</p>
      </div>

      {/* <!-- Blog posts --> */}

      <div class="container-fluid p-4">
        <div class="row">
          {/* <!-- Repeatable Component --> */}
          <div class="col-12 col-sm-6 col-md-4 p-2 p-lg-3 ">
                {/* <!-- Single Card --> */}
                <div class="card shadow" style={{borderRadius:"30px 30px 0px 0px"}}>
                  <img class="img-fluid card-img-top card-img-1" src={require('../assets/post-img.jpg')} alt="" style={{borderRadius:"30px 30px 0px 0px"}} />
                  <div class="card-body">
                      <p class="card-text course-type">Software Development</p>
                      <h5 class="card-title">Lorem ipsum dolor sit amet consectetur.</h5>
                      <p class="card-text mb-1">Lorem ipsum dolor sit Lorem ipsum dolor sit ame Lorem ipsum dolor sit.</p>
                      <div class="d-flex flex-row">
                        <img class="flex-item my-auto align-items-center justify-content-center rounded-circle" src={require(`../assets/profile-2.png`)} alt="" style={{height:"20px" , width:"20px"}}  />
                        <div class="d-flex flex-column">
                          <p class="mx-3 mb-0 flex-item align-items-center justify-content-center fw-bold mt-3">Jayakumar N</p>
                          <p class="mx-3 flex-item align-items-center justify-content-center opacity-50">Feb 24 2022</p>
                        </div>
                      </div>
                  </div>
              </div>
              {/* <!-- Single Card Ends --> */}
          </div>
          {/* <!-- Component Ends --> */}

          
      </div>
    </div>

    <div class="d-flex align-items-center justify-content-center my-5">
      <button class="flex-item btn" style={{backgroundColor:"#513798",padding:"15px 50px;", color:"#ffffff"}}>Load More</button>
    </div>
  </section>
    </>

  )
}

export default Blogs