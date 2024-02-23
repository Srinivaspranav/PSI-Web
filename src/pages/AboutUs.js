import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';
import '../Style/AboutUs.css';


const NavBar = () => (
  <nav className='nav'>
        <div className='logo'>
      <img
        alt="Logo"
        src="https://cdn.discordapp.com/attachments/1205756212445192263/1207363674990313562/Dr.Palamsetty_Innovations123.png?ex=65df600b&is=65cceb0b&hm=d8811294349ee35313077b961c60da34b5a054821e87fd435d7ed27f448f3c38&" 
        style={{ height: '30px', width: '100px' }}  
      />
    </div>
    <ul className='navUl'>
      <li className= 'navLi'><Link to="/">Home</Link></li>
      <li className='navLi'><Link to="/programmes">Our Programmes</Link></li>
      <li className='navLi'><Link to="/clubs">Clubs</Link></li>
      <li className='navLi'><Link to="/about">About Us</Link></li>
      <li className='navLi'><Link to="/contact">Contact Us</Link></li>
    </ul>
    <div className='loginButton'>Login</div>
  </nav>
);

const AboutSection = () => (
  <div className='aboutSection'>
    <div>
      <h1 className='introductionHeading'>Introduction</h1>
      <p className='introductionContent'>Andhra University is not just one of the oldest educational institutions in the country, but is also the first to be conceived as a residential and teaching-cum-affiliating University, mainly devoted to post-graduate teaching and research.

The people of the State have an emotional attachment to the institution, since it came into being after a prolonged and collective struggle of the Telugu elite for a University in the educationally backward northern Circars and Ceded districts of the erstwhile Madras Presidency.

Andhra University was constituted in the year 1926 by the Madras Act of 1926. The 97-year-old institution is fortunate to have Sir C.R. Reddy as its founder Vice-Chancellor, as the steps taken by this visionary proved to be fruitful in the long run.</p>
    </div>
  </div>
);

const ImageSection = ({ src, alt }) => (
  <div>
    <img style={{ width: '100%', height: '268px' }} src={src} alt={alt} />
  </div>
);

const OurWorksSection = () => (
  <div className='ourWorksSection'>
    <h2>Our Works</h2>
    <div className='worksContainer'>
      <div className='work'>
        <ImageSection src="https://via.placeholder.com/150x150" alt="Work 1" />
      </div>
      <div className='work'>
        <ImageSection src="https://via.placeholder.com/150x150" alt="Work 2" />
      </div>
      <div className='work'>
        <ImageSection src="https://via.placeholder.com/150x150" alt="Work 3" />
      </div>
      <div className='work'>
        <ImageSection src="https://via.placeholder.com/150x150" alt="Work 4" />
      </div>
      <div className='work'>
        <ImageSection src="https://via.placeholder.com/150x150" alt="Work 5" />
      </div>
      <div className='work'>
        <ImageSection src="https://via.placeholder.com/150x150" alt="Work 6" />
      </div>
    </div>
  </div>
);

const OurFounderWordsSection = () => (
  <div className='OurFounderWordsSection'>
    <div className='OurFounderWordsContent'>
      <h2>Our Founder's Words</h2>
      <p className='OurFounderWordsParagraph'>The primary goal of education is to give the youth the training they need to become efficient citizens in this Republic. We must remember that intelligence is not enough. Intelligence plus character - that is the goal of true education.</p>
    </div>
    <div className='OurFounderWordsImageContainer'>
      <img className='OurFounderWordsImage' src="https://via.placeholder.com/600x400" alt="Our Founder's Words" />
    </div>
  </div>
);

const OurVisionSection = () => (
  <div className='OurVisionSection'>
    <div className='OurVisionImageContainer'>
      <img className='OurVisionImage' src="https://via.placeholder.com/600x400" alt="Our Vision" />
    </div>
    <div className='OurVisionContent'>
      <h2>Our Vision</h2>
      <p className='OurVisionParagraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod justo quis dolor sagittis hendrerit. Nulla facilisi. Suspendisse ut condimentum ante. Fusce sed sapien tristique, mattis urna sed, feugiat magna.</p>
    </div>
  </div>
);

const OurMissionSection = () => (
  <div className='OurMissionSection'>
    <div className='OurMissionContent'>
      <h2>Our Mission</h2>
      <p className='OurMissionParagraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod justo quis dolor sagittis hendrerit. Nulla facilisi. Suspendisse ut condimentum ante. Fusce sed sapien tristique, mattis urna sed, feugiat magna.</p>
    </div>
    <div className='OurMissionImageContainer'>
      <img className='OurMissionImage' src="https://via.placeholder.com/600x400" alt="Our Mission" />
    </div>
  </div>
);

const ValuesSection = () => (
  <div className='ourValuesSection'>
    <h2>Our Values</h2>
    <div className='valuesContainer'>
      <div className='value'>
        <div className='circle'></div>
        <h3>Value 1</h3>
      </div>
      <div className='value'>
        <div className='circle'></div>
        <h3>Value 2</h3>
      </div>
      <div className='value'>
        <div className='circle'></div>
        <h3>Value 3</h3>
      </div>
      <div className='value'>
        <div className='circle'></div>
        <h3>Value 4</h3>
      </div>
      <div className='value'>
        <div className='circle'></div>
        <h3>Value 5</h3>
      </div>
      <div className='value'>
        <div className='circle'></div>
        <h3>Value 6</h3>
      </div>
    </div>
  </div>
);

const MethodologySection = () => (
  <div className='aboutSection'>
    <h1 className='MethodologyHeading'>Our Methodlogy</h1>
    <p className='MethodlogyContent'>Andhra University is not just one of the oldest educational institutions in the country, but is also the first to be conceived as a residential and teaching-cum-affiliating University, mainly devoted to post-graduate teaching and research. The people of the State have an emotional attachment to the institution, since it came into being after a prolonged and collective struggle of the Telugu elite for a University in the educationally backward northern Circars and Ceded districts of the erstwhile Madras Presidency. Andhra University was constituted in the year 1926 by the Madras Act of 1926. The 97-year-old institution is fortunate to have Sir C.R. Reddy as its founder Vice-Chancellor, as the steps taken by this visionary proved to be fruitful in the long run.</p>
  </div>
);

const ApproachSection = () => (
  <div className='aboutSection'>
    <h1 className='MethodologyHeading'>Our Approach</h1>
    <p className='MethodlogyContent'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod justo quis dolor sagittis hendrerit. Nulla facilisi. Suspendisse ut condimentum ante. Fusce sed sapien tristique, mattis urna sed, feugiat magna.</p>
  </div>
);

const Footer = () => (
  <footer className='footer' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '30px',backgroundColor:' #053047' }}>
    <div style={{ marginRight: 'auto', textAlign: 'left' }}>
      <h2 style={{ marginBottom: '5px' }}>Contact Us</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li>• Company Name: ABC Corporation</li>
        <li>• Email: info@abccorp.com</li>
        <li>• Phone: (555) 123-4567</li>
        <li>• Address: 123 Main Street, Cityville, State, 12345</li>
      </ul>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: 'auto', textAlign: 'left'}}>
      
      <h2 style={{ marginBottom: '10px' }}>Menu</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li>• Home</li>
        <li>• About Us</li>
        <li>• Partners</li>
        <li>• Clubs</li>
        <li>• Contact Us</li>
      </ul>
    </div>
    <div style={{ textAlign: 'center' ,display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
      <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#ccc', marginBottom: '10px' }}></div>
      <p>Follow us on</p>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#ccc', marginRight: '5px' }}></div>
        <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#ccc', marginRight: '5px' }}></div>
        <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#ccc', marginRight: '5px' }}></div>
      </div>
    </div>
  </footer>
);

const AboutUs = () => (
  <div className='app'>
    <NavBar />
    <AboutSection />
    <OurWorksSection />
    <OurFounderWordsSection />
    <OurVisionSection />
    <OurMissionSection />
    <ValuesSection />
    <MethodologySection />
    <ApproachSection />
    <Footer />
  </div>
);

export default AboutUs;