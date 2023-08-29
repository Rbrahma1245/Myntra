import React from 'react'
import Navbar from './Navbar'
import img2 from "../Images/img2.jpg"

import discussion from "../Images/discussion.jpg"
import offer from "../Images/offer.jpg"
function About() {
  return (
    <div>


      <div style={{ position: 'relative' }}>
        <h1 style={{ position: 'absolute', top: '40%', left: '10%', color: 'white' }}>About</h1>
        <img src={img2} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />

      </div>


      <div className='flex-container' style={{ backgroundColor: '#282828', display: 'flex', height:400 }}>
        <div className="w-75" style={{ textAlign: 'right', alignItems:'center', display:'flex', justifyContent:'end' }}>
          <img src={discussion} width={450} height={300} />
        </div>

        <div className='w-100' style={{ color: 'white', marginTop: 20, padding: "15px 80px" }}>
          <h4>Our mission</h4>
          <br />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus corrupti quis commodi veniam, possimus ab nisi ullam consequatur repudiandae ipsam sapiente perspiciatis hic sequi quidem voluptatem accusamus laboriosam voluptatum perferendis modi delectus placeat, tempore aspernatur! Ipsam quos deleniti cum adipisci! Laudantium ad sunt voluptatem similique placeat laboriosam beatae fugit. Quisquam!</p>

        </div>

      </div>




      <div style={{ backgroundColor: '#141414', display: 'flex', position: 'relative', height: '350px' }}>

        <div className='w-50' style={{ color: 'white', marginTop: 20, padding: "15px 80px", zIndex: 9 }}>
          <h3 style={{ fontFamily: 'Garamond' }}>Start your E-Commerce journey with RB STORE today and join the thousands of satisfied customers who have already discovered the power of buying and selling online.</h3>
          <br />
        </div>

        <div style={{ position: 'absolute', top: 10, left: '50%' }}>
          <img src={offer} width={400} height={300}  />
        </div>






      </div>








    </div>
  )
}

export default About