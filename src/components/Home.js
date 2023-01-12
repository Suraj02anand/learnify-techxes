import React from 'react'
import './styles/Home.css'

function Home() {
  return (
    <>
        <section id="home" class="p-3" style={{backgroundColor:"#dedbec"}}>
        <div class="d-flex flex-column align-items-center justify-content-center p-5 text-center">
            <p class="main-title flex-item mb-3 fw-bold">Tech Conversations</p>
            <p class="main-desc flex-item">Get to know the latest industry news, updates, emerging technologies and many more</p>
        </div>
    </section>  
    </>
    )
}

export default Home