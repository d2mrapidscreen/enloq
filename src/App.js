import React from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero"; 
import Think from "./components/Think/Think";
import Loader from "./components/Loader/Loader";
import Loaderpoints from "./components/LoaderPoints/LoaderPoints";
import Testimonial from './components/Testimonial/Testimonial';
import Event from './components/Event/Event';
import Applications from './components/Sections/Applications';
import SupportServices from './components/Sections/SupportServices';
import Feature from './components/Feature/Feature';
import FeatureTransparentFullWidth from './components/FeatureTransparentFullWidth/FeatureTransparentFullWidth';
import ImageRow from "./components/ImageRow/ImageRow";
import Gallery from "./components/Gallery/Gallery";
import ModelsGallery from "./components/Gallery/ModelsGallery";
import { ThinkElectricSection, EnloqLoadersSection } from './components/InfoSection/Sections';

// Image imports
import loaderBucketImage from './assets/images/Loader_raised_bucket_from_rear.jpg';
import loaderBucketTransparentBkgImage from './assets/images/Loader_raised_bucket_to_ute.jpg';
import loaderQuickHitchImage from './assets/images/Loader_quick_hitch.png';


import smallBodyIcon from './assets/images/icon_small_body.png';
import flexibleMobilityIcon from './assets/images/icon_flexible_mobility.png'
import securitySystemIcon from './assets/images/icon_security_system.png'
import quickChangeIcon from './assets/images/icon_quick_change.png'
import euroQuickHitchLogo from './assets/images/EQH_logo.png'

import kneeControllerImage from './assets/images/Knee_controller.png'
import tractorLightImage from './assets/images/Light_closeup.png'
import dashboardImage from './assets/images/EV_dashbrd.png'
import enloqTagline from './assets/images/enloq-tagline.png';


function App() {
  const handleFindOutMore = () => {
    // Handle button click action
    console.log('Find out more clicked');
  };

 
  return (
    <div className="App">
      <Navigation />
      <Hero /> 

{/*       <Think />
 */}      
      <ThinkElectricSection />

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
          { src: kneeControllerImage, alt: 'Easy Control Image' },
          { src: tractorLightImage, alt: 'Lighting Image' },
          { src: dashboardImage, alt: 'Dashboard Image' }
        ]} 
        imagesPerRow={3}
      />

      {/* Gallery images are configured within the component code */}
      <Gallery />

      <FeatureTransparentFullWidth
        title="Quick Coupler Standard"
        content="The Enloq® models are equipped with a hydraulic Euro quick coupler as standard. This makes it possible to change attachments safely and within seconds from within the cab."
        image={loaderQuickHitchImage}
        textPosition="left"
/*         imageCaption="Shown: EL800 Series at Hunter Valley Vineyards"
 */        icons={[euroQuickHitchLogo, securitySystemIcon, quickChangeIcon]}
      />

      <SupportServices />

      <ModelsGallery 
        imagesPerRow={4}
        backgroundColor="#f0f0f0"
        title="THE ENLOQ RANGE"
        titleHighlight="RANGE"
        content="Explore our complete range of high-performance machines designed for various applications."
      />

      <ImageRow
        headerImage={{ 
          src: enloqTagline, 
          alt: '100% Electric + 100% Work' 
        }}
        introSections={[
          {
            title: "THE FUTURE IS ELECTRIC",
            content: "The demand for compact electric EV equipment is an unstoppable trend. With Enloq Loaders®, our goal to be a global, reliable partner with expertise in the design and development of electric equipment. We are aimed at developing an electric version in different sizes for each category of wheel loaders, all terrain forklifts and material dumpers."
          },
          {
            title: "DIRECT SUPPORT",
            content: "At Enloq Loaders® we like to be close to our customers and provide the machines, service and parts that you demand. All supported by a team of experts from the head office of Enloq loaders® in West Gosford, NSW, Australia."
          }
        ]}
        images={[
          { src: kneeControllerImage, alt: 'Easy Control Image' },
          { src: tractorLightImage, alt: 'Lighting Image' },
          { src: dashboardImage, alt: 'Dashboard Image' }
        ]}
        imagesPerRow={3}
      />

      <EnloqLoadersSection />

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