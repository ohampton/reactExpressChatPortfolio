import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'



// const data = [

//   {
//     avatar: AVTR1,
//     name: 'Adalyn Belle',
//     review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sit nobis, soluta ipsam vel accusantium exercitationem id alias cumque aut tempore odio repudiandae facere incidunt iusto necessitatibus quasi facilis? Itaque, natus nisi, quisquam cupiditate et eum assumenda autem dicta iure excepturi ad porro! Quaerat quae consequatur, quo numquam vel ad!'
//   },
//   {
//     avatar: AVTR2,
//     name: 'Edward Maddox',
//     review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sit nobis, soluta ipsam vel accusantium exercitationem id alias cumque aut tempore odio repudiandae facere incidunt iusto necessitatibus quasi facilis? Itaque, natus nisi, quisquam cupiditate et eum assumenda autem dicta iure excepturi ad porro! Quaerat quae consequatur, quo numquam vel ad!'
//   },
//   {
//     avatar: AVTR3,
//     name: 'KP Rutland',
//     review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sit nobis, soluta ipsam vel accusantium exercitationem id alias cumque aut tempore odio repudiandae facere incidunt iusto necessitatibus quasi facilis? Itaque, natus nisi, quisquam cupiditate et eum assumenda autem dicta iure excepturi ad porro! Quaerat quae consequatur, quo numquam vel ad!'
//   },
//   {
//     avatar: AVTR4,
//     name: 'Bridget Fischer',
//     review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sit nobis, soluta ipsam vel accusantium exercitationem id alias cumque aut tempore odio repudiandae facere incidunt iusto necessitatibus quasi facilis? Itaque, natus nisi, quisquam cupiditate et eum assumenda autem dicta iure excepturi ad porro! Quaerat quae consequatur, quo numquam vel ad!'
//   },
// ]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials__container">
          <article className="testimonial">
            <div className="client__avatar">
              <img src={AVTR1} alt="" />
            </div>
          <h5 className='client__name'>
            <small className='client__review'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique beatae aut eveniet officiis exercitationem odio culpa, asperiores error? Temporibus sunt, nesciunt provident eos cupiditate, dignissimos dolorum quos totam, ipsa delectus officiis possimus culpa a eius alias autem nisi saepe? Cum ut dolor magnam officia error ipsam id corporis est provident?
            </small>
          </h5>
          </article>
          <article className="testimonial">
            <div className="client__avatar">
              <img src={AVTR2} alt="" />
            </div>
          <h5 className='client__name'>
            <small className='client__review'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique beatae aut eveniet officiis exercitationem odio culpa, asperiores error? Temporibus sunt, nesciunt provident eos cupiditate, dignissimos dolorum quos totam, ipsa delectus officiis possimus culpa a eius alias autem nisi saepe? Cum ut dolor magnam officia error ipsam id corporis est provident?
            </small>
          </h5>
          </article>
          <article className="testimonial">
            <div className="client__avatar">
              <img src={AVTR3} alt="" />
            </div>
          <h5 className='client__name'>
            <small className='client__review'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique beatae aut eveniet officiis exercitationem odio culpa, asperiores error? Temporibus sunt, nesciunt provident eos cupiditate, dignissimos dolorum quos totam, ipsa delectus officiis possimus culpa a eius alias autem nisi saepe? Cum ut dolor magnam officia error ipsam id corporis est provident?
            </small>
          </h5>
          </article>
          {/* <article className="testimonial">
            <div className="client__avatar">
              <img src={AVTR4} alt="" />
            </div>
          <h5 className='client__name'>
            <small className='client__review'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique beatae aut eveniet officiis exercitationem odio culpa, asperiores error? Temporibus sunt, nesciunt provident eos cupiditate, dignissimos dolorum quos totam, ipsa delectus officiis possimus culpa a eius alias autem nisi saepe? Cum ut dolor magnam officia error ipsam id corporis est provident?
            </small>
          </h5>
          </article> */}
  
      </div>

    </section>
  )
}

export default Testimonials