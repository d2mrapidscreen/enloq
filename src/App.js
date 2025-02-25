import React from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero"; 
import Think from "./components/Think/Think";
import Loader from "./components/Loader/Loader";
import Loaderpoints from "./components/LoaderPoints/LoaderPoints";
import Testimonial from './components/Testimonial/Testimonial';
import Event from './components/Event/Event';


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