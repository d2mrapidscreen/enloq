import React from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero"; 
import Think from "./components/Think/Think";
import Loader from "./components/Loader/Loader";
import Loaderpoints from "./components/LoaderPoints/LoaderPoints";
import Testimonial from './components/Testimonial/Testimonial';
import Event from './components/Event/Event';
import Applications from './components/Applications/Applications';
import Feature from './components/Feature/Feature';
import FeatureTransparentFullWidth from './components/FeatureTransparentFullWidth/FeatureTransparentFullWidth';
import ImageRow from "./components/ImageRow/ImageRow";


// Image imports
import loaderBucketImage from './assets/images/Loader_raised_bucket_from_rear.jpg';
import loaderBucketTransparentBkgImage from './assets/images/Loader_raised_bucket_to_ute.jpg';

import smallBodyIcon from './assets/images/icon_small_body.png';
import flexibleMobilityIcon from './assets/images/icon_flexible_mobility.png'
import securitySystemIcon from './assets/images/icon_security_system.png'


function App() {
  const handleFindOutMore = () => {
    // Handle button click action
    console.log('Find out more clicked');
  };

 
  return (
    <div className="App">
      <Navigation />
      <Hero /> 
      <Think />
      <Loader />
      <Loaderpoints />
    
      <Testimonial 
        quote="We see a big financial gain with near zero hourly running costs and with no emissions, we are not breathing diesel particulates from owning electric machines anymore. Its better for our staff"
        author="Tony"
        company="Hunter Winery"
        buttonText="FIND OUT MORE"
        onButtonClick={handleFindOutMore}
      />

   
      <Event />
      <Applications />

      <Feature 
        title="SAFE AND"
        subtitle="COMFORTABLE. WORK ALL DAY"
        content="Enloq Loaders® are equipped standard with a safety cabin roof ROP's/FOP's (Roll Over Protection, Falling Object Protection) safety belts and in-seat sensors to reduce operator risk. The EL800s spacious and accessible cab is designed for optimal ease of use. The steering column is adjustable in depth and equipped with an LCD screen where all necessary information can be read easily. While using the multifunction joystick, the operator can position the seat with lumbar support making it ergonomically comfortable for all-day operation. Important controls are within easy reach and next to the joystick."
        backgroundColor="#4CAF50"
        textPosition="left"
        image={loaderBucketImage}
        showImage={true}
      />

      <FeatureTransparentFullWidth
        title="BUILT FOR TOUGH CONDITIONS"
        content="Designed for Australian conditions, Enloq Loaders® are built tough with superior power and extended battery life. The electric motors deliver precise control in all terrains, while the smart power management system optimizes energy usage for all-day operation."
        image={loaderBucketTransparentBkgImage}
        textPosition="right"
/*         imageCaption="Shown: EL800 Series at Hunter Valley Vineyards"
 */        icons={[smallBodyIcon, flexibleMobilityIcon]}
      />

      <ImageRow 
        images={[
          { src: smallBodyIcon, alt: 'Image description' },
          { src: flexibleMobilityIcon, alt: 'Image description' },
          { src: securitySystemIcon, alt: 'Image description' },
          { src: smallBodyIcon, alt: 'Image description' },
          { src: flexibleMobilityIcon, alt: 'Image description' },
          { src: securitySystemIcon, alt: 'Image description' }
        ]} 
        imagesPerRow={6}
      />

      <Testimonial 
        quote="Within minutes of a test run we were convinced on the The Wombat. The machine is powerful and quiet and you have a lot of power available immediately. With two different drive modes, its quick to unload a trailer and bring to where it's needed. Fits through a gate and is better than using a shovel and wheelbarrow, we can save days of labor"
        author="Blake"
        company="Wolf Plumbing"
        buttonText="FIND OUT MORE"
        onButtonClick={handleFindOutMore}
      />

      <section className="contact">
        <h2>FOOTER TO BE ADDED</h2>
      </section>
    </div>
  );
}

export default App;