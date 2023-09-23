import React from "react";
import "./content.css";

function Content(){
    const images = [
        { src: "./image-1.jpg", alt: "slide 1" },
        { src: "./image-2.jpg", alt: "slide 2" },
        { src: "./image-3.png", alt: "slide 2" }
      ];
    const imagestl={
        padding: "0px",
        height: "300px",
        width: "500px",
        borderRadius: "8px",
    }
    const content={
        maxWidth: "100%", 
        display: "flex",
        margin: "30px 0px 15px 15px",
    }
    const para={
        padding: "20px",
        fontSize: "1.35rem",
        color : "#000000",
        textAlign: "justify",
    }
    return (
        <div className="main-1">
        <div className="heading">
            <h1>Assistance Provided</h1>
        </div>
        <div className="heading2">
            <h3>Immediate Assistance at Your Fingertips</h3>
        </div>
        <div className="content" style={content}>
        <img
          style={imagestl}
          src={images[2].src}
          alt={images[2].alt}
        />
        <p style={para}>
        When emergencies strike, every second counts. Our web application connects individuals with nearby rescue agencies at the touch of a button. Whether you need help during a natural disaster or come across a man-made crisis, our platform allows you to swiftly locate the nearest rescue agencies. You can also report incidents directly through the application, ensuring a rapid response from the right authorities. Your safety and the well-being of your community are our top priorities, and we're here to facilitate quick and effective communication during times of need.
        </p>
        </div>
        <div className="heading2">
            <h3>Collaborative Agency Networking</h3>
        </div>
        <div className="content" style={content}>
        <img
          style={imagestl}
          src={images[0].src}
          alt={images[0].alt}
        />
        <p style={para}>
        In times of crisis, finding the right assistance quickly is paramount. Our web application simplifies the process by providing rescue agencies with a powerful tool to effortlessly locate and connect with other agencies. With a few clicks, you can access a comprehensive database of registered agencies, pinpointing their exact locations on an interactive map. Our advanced filters allow you to narrow down your search based on specific criteria, ensuring that you can swiftly identify the agencies best suited to respond to your needs. Streamline your coordination efforts and enhance disaster response by leveraging our intuitive platform."
        </p>
        </div>
        <br></br>
        <div className="heading2">
            <h3>Seamless Activity Tracking</h3>
        </div>
        <div className="content" style={content}>
        <p style={para}>
        Keeping a detailed record of your agency's activities is essential for effective coordination and resource management. Our web application provides a user-friendly platform for rescue agencies to effortlessly log and maintain records of their operations, responses, and achievements. Say goodbye to cumbersome paperwork and spreadsheets. Our streamlined digital system not only simplifies data entry but also offers robust tools for data analysis and reporting. With easy access to historical data, agencies can make informed decisions, optimize resource allocation, and improve their overall disaster response capabilities. Empower your team with efficient data maintenance, making it a breeze to track and document your agency's vital activities.
        </p>
        <img
          style={imagestl}
          src={images[1].src}
          alt={images[1].alt}
        />
        </div>
        </div>
    )

}

export default Content;