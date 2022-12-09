import React from 'react';
import './Home.css';
// import bannerimg from '../img/jump-fitness-workout1.png';
import { Link } from "react-router-dom"

function Home() {
  return (
    <div>
      <div className='home-banner'>
        
      </div>
      {/* ==STATEMENT== */}
      <div className='info-cont'>
        <div className='info-cont-header'>
          <h1>Welcome To Adventure Travel</h1>
          <p>
          We offer the best safari experience in East Africa ranging from
           mountain climbing to wild animals viewing in national parks. 
           Our services include small group joining tours, 
           solo join in tour and budget camping safaris. 
          </p>
        </div>
        <div className='info-cont-cards'>
          <div className='info-cont-card'>
            <i class='fa-solid fa-dumbbell'></i>
            <h1>TOUR Vacation</h1>
            <p>
            Amazing Experiences. Tours, Attractions + More. Hidden Gems. Cheap Flights. Best Places to Eat. Fun Things to Do. Vacation Rentals. Amenities: Free Wi-Fi, Swimming Pool, Free Breakfast, Free Parking, Fitness Center
            </p>
          </div>
          <div className='info-cont-card'>
            <i class='fa-solid fa-file-pen'></i>
            <h1>PEOPLE</h1>
            <p>
            PROMOTING CULTURAL DIVERSITY AND PROTECTION OF INDIGENOUS PEOPLE
            </p>
          </div>
          <div className='info-cont-card'>
            <i class='fa-solid fa-shower'></i>
            <h1>Spending time outdoors reduces stress</h1>
            <p>
            There’s a reason why there’s a smile on everyone’s face after they’ve come back from an active adventure – because they’re happier for it! All the stresses of life just melt away as you embark among some of the most stunning sceneries in the world.
            </p>
          </div>
          <div className='info-cont-card'>
            <i class='fa-solid fa-fingerprint'></i>
            <h1>Travel increases your self-awareness</h1>
            <p>
            A bi-product of travel is raising your self-awareness and it’s one of the most beneficial parts of taking on an adventurous trip overseas.
            </p>
          </div>
        </div>
      </div>
     
      {/* ==PROGRESS== */}
      {/* ==PRICING== */}
       <div className='pricing'>
        <div className='pricing-header'>
          <h1>OUR PRICING PLANS</h1>
          <p>
            Fitness Arena strives to ensure that all clients receive affordable
            yet quality experience at the gym <br /> facility. Looking forward
            to hosting you.
          </p>
        </div>
        <div className='pricing-cards'>
          <div className='pricing-card'>
            <section className='pricing-card-package'>MONTHLY PACKAGE</section>
            <br />
            
             <p>
              PERSONAL TRAINING <br /> NUTRITIONAL GUIDANCE <br /> SPECIALIZED
              WORKOUTS
            </p>
            <Link to='/signup'>
              <button type='button'>Sign Up</button>
            </Link>
          </div>
          <div className='pricing-card' style={{backgroundColor: "black", border: "1px solid red", scale: "1.3"}}>
            <section className='pricing-card-package'>
              QUARTERLY PACKAGE
            </section>
            <br />
            
            <p>
              PERSONALIZED TRAINING <br /> NUTRITIONAL GUIDANCE <br />{' '}
              SPECIALIZED WORKOUTS
            </p>
            <Link to='/signup'>
              <button type='button'>Sign Up</button>
            </Link>
          </div>
          <div className='pricing-card'>
            <section className='pricing-card-package'>1 YEAR PACKAGE</section>
            <br />
            
            <p>
              UNLIMITED GYM ACCESS <br /> PERSONALIZED TRAINING <br /> NUTRITIONAL GUIDANCE
            </p>
            <Link to='/signup'>
              <button type='button'>Sign Up</button>
            </Link>
          </div>
        </div> 
      </div>
    
      {/* ==PRICING== */ }
    </div>
  );
}

export default Home;