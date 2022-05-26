import React from 'react'
import "./About"
import './about.css'
import OZ from '../../assets/oscarProfile2.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {FiFolder} from 'react-icons/fi'



const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={OZ} alt="Oz Hampton" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2 Years Experience</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small> 100 Clients</small>
            </article>
            <article className='about__card'>
              <FiFolder className='about__icon'/>
              <h5>Projects</h5>
              <small>10 Completed Projects</small>
            </article>
           </div>
          
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio quibusdam optio itaque praesentium, ex esse voluptatibus. Harum laudantium ratione explicabo voluptatibus voluptate sapiente pariatur, eligendi repudiandae, unde, dicta quia nam.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>

      </div>
    </section>
  )
}

export default about