import React from "react";
import "../styles/About.css"
import dish5 from "../assets/dish5.jpg";

const About = () => {
  return (
      <div className="About">
        <img src={dish5} alt="Dish 5" className="dish5"/>
       <h1>Welcome to the resturant that Provides Happiness with Every Bite</h1>
       <p> We are an East African owned and operated restaurant, serving authentic dishes that capture 
        the rich flavors of East Africa. Our welcoming ambiance aims to make you feel at home as you savor our  
        meals with your loved ones. Sunyu means happiness in Luganda. Come and experience the joy of our delightful cuisine!
      </p>
      </div>
    
  );
};

export default About;