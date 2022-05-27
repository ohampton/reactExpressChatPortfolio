import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/oscarDance.jpeg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/steph3.jpeg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Oscar Dance Site',
    github: 'https://ohampton.github.io/myPortfolio/',
    demo: 'https://ohampton.github.io/myPortfolio/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Personal Chat App',
    github: 'https://ohampton.github.io/chatApp/',
    demo: 'https://ohampton.github.io/chatApp/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Score Keeping App',
    github: 'https://ohampton.github.io/scoreKeeping/',
    demo: 'https://ohampton.github.io/scoreKeeping/'
  },
  // {
  //   id: 4,
  //   image: IMG4,
  //   title: 'Oscar Dance Site',
  //   github: 'https//github.com',
  //   demo: 'https//github.com'
  // },
  // {
  //   id: 5,
  //   image: IMG5,
  //   title: 'Oscar Dance Site',
  //   github: 'https//github.com',
  //   demo: 'https//github.com'
  // },
  // {
  //   id: 6,
  //   image: IMG6,
  //   title: 'Oscar Dance Site',
  //   github: 'https//github.com',
  //   demo: 'https//github.com'
  // },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
            <a href={github} className='btn'>GitHub</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </div>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio


