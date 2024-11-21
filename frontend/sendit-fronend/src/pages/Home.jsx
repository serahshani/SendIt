import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const navigate = useNavigate()

  const handleOrderNow = () => {
    navigate('/login')
  }

  return (
    <div className='home-page'>
      <div className='hero'>
        <h1>SendIT</h1>
        <p>Your reliable courier service for parcel delivery.</p>
        <button onClick={handleOrderNow}>Order Now</button>
      </div>
      {/* Info Container */}
      <div className='info-container'>
        {/* About Section */}
        <section className='about container'>
          <div className='section-titles'>
            <h2 className='section-title'>About Us</h2>
            <p>
              At SendIT, we pride ourselves on providing fast and reliable
              delivery services. Our team is dedicated to ensuring your packages
              arrive safely and on time, every time.
            </p>
          </div>
        </section>

        {/* Services Section */}

        <section className='services container'>
          <h2 className='section-title'>Our Services</h2>
          <div className='section-titles'>
            <h2 className='section-title'>Same-Day Delivery</h2>
            <h2 className='section-title'>International Shipping</h2>
            <h2 className='section-title'>Package Tracking</h2>
            <h2 className='section-title'>Insurance Options</h2>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className='testimonials container'>
          <h2>What Our Customers Say</h2>
          <div className='testimonial'>
            <p>
              "SendIT has transformed the way we send parcels. Their service is
              quick and dependable!" - Jane Doe
            </p>
          </div>
          <div className='testimonial'>
            <p>
              "I love how easy it is to track my deliveries. Highly recommend!"
              - John Smith
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className='contact container'>
          <h2>Contact Us</h2>
          <p>
            If you have any questions or need assistance, feel free to reach
            out!
          </p>
          <ul>
            <li>Email: support@sendit.com</li>
            <li>Phone: +123 456 7890</li>
          </ul>
        </section>
      </div>

      {/* Footer Section */}
      <footer className='footer'>
        <div className='social-links'>
          <a
            href='https://facebook.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            Facebook
          </a>
          <a
            href='https://twitter.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            Twitter
          </a>
          <a
            href='https://instagram.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            Instagram
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} SendIT. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Home
