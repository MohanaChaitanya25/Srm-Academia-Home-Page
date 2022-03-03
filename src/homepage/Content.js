import React from 'react'
import './Content.css'
import img from '/Users/boina/Desktop/home-page/src/images/SRMIST.jpg'
function Content() {
  return (
    <div className='main-content'>
     <div> <img src={img} alt='home' className='content-img' /></div>
      <div>
      <p>
        SRM Academia is the Official Student Portal of
        SRM Faculty of Engineering and Technology<br/> which
        aims at providing a better experience to the students to 
        access the academic web services. The <br/>portal is a gateway 
        to your academic information such
        as attendance, internal marks, timetable, etc.
      </p>
      </div>
    </div>
  )
}

export default Content