import React from 'react';
import './Home.css';
import Homeimage from "./images/Homeimage.jpg"

function Home() {
  return (
    <div>
      <div className='home-banner'>
        <div className="home-banner-img">
          <image src={Homeimage} alt='Banner'/>
        </div>
        
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
      </div>
      );
  }

export default Home;