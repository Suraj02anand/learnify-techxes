import React, { useState } from 'react'
import './styles/Posts.css'

function Posts() {
  
  const [index , setIndex] = useState(0);

  function onNavClick(){
    console.log('first')
  }
  
  function handleClick(){
    console.log('first')
  }

  return (
    <>
        <section id="posts">
        <div className="navs d-none d-md-flex flex-row p-3 text-center align-items-center justify-content-center justify-content-lg-start">
                <a onClick={handleClick} className="self-nav-items flex-item text-decoration-none mx-1">All</a>
                <a className="self-nav-items flex-item text-decoration-none mx-1">Data Analytics</a>
                <a onClick={handleClick} className="self-nav-items flex-item text-decoration-none mx-1">Design</a>
                <a onClick={handleClick} className="self-nav-items flex-item text-decoration-none mx-1">Software Development</a>
                <a onClick={handleClick} className="self-nav-items flex-item text-decoration-none mx-1">Data Analytics</a>
                <a onClick={handleClick} className="self-nav-items flex-item text-decoration-none mx-1">Cyber Security</a>
        </div>

        <div className="d-flex mx-3">
          <p className="h5 my-3 p-2 featured-post" onNavClick={onNavClick}>Featured Post</p>
        </div>

        <div className="p-3">
            <div className="card shadow-sm" style={{borderRadius: "20px 20px 0px 0px"}}>
                <img className="img-fluid card-img-top card-img-1" src={require('../assets/classroom.jpg')} alt="" style={{borderRadius:"20px 20px 0px 0px"}} />
                <div className="card-body">
                    <p className="card-text course-type my-0 fst-italic">Design</p>
                    <h5 className="card-title">How UX research plays an important role in the design process</h5>
                    <p className="card-text mb-0">To call user research an important part of a UX design prcoess might seem obvious. Read more to know exactly what your users need.</p>

                    <div className="d-flex flex-row">
                      <img className="flex-item my-auto rounded-circle" src="./assets/profile-2.png" alt="" style={{height:"30px", width:"30px"}} />
                      <div className="d-flex flex-column">
                        <p className="mx-3 align-self-center mb-0 flex-item mt-3 align-self-center justify-content-evenly">Jayakumar N</p>
                        <p className="mx-3 flex-item opacity-50">Feb 24 2022</p>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Posts