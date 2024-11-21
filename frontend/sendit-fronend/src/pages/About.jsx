
import './About.css'

const About = () => {
  return (
    <div className='about-page'>
      <h2>About SENDIT</h2>
      <p>
        Welcome to sendit, your reliable partner for all your delivery needs.
      </p>
      <p>
        Our mission is to provide a fast and efficient delivery service for our
        customers.
      </p>
      <p>Experience seamless shipping and tracking with us!</p>

      {/* Add the "Why Choose Us?" section here */}
      <section className='features'>
        <h2>Why Choose Us?</h2>
        <div className='feature'>
          <h3>Fast Delivery</h3>
          <p>
            We ensure that your packages reach their destination quickly and
            safely.
          </p>
        </div>
        <div className='feature'>
          <h3>Reliable Service</h3>
          <p>Count on us for dependable delivery services every time.</p>
        </div>
        <div className='feature'>
          <h3>Real-Time Tracking</h3>
          <p>
            Stay informed with our real-time tracking system for all shipments.
          </p>
        </div>
      </section>
    </div>
  )
}

export default About
