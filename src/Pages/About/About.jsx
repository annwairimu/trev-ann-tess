import React from 'react';
import './About.css'; // Import the CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <h1 style={{textDecoration: "underline"}}>About Us</h1>
      <div className="paragraphs-container">
        <p>
          I am a highly motivated full-stack Software Engineer with a strong ambition to succeed. I thrive in dynamic environments and possess a diverse range of skills that make me a well-rounded developer.
        </p>
        <p>
          However, my skills go beyond technical expertise. I possess a strong set of soft skills that contribute to my success as a developer. Collaboration is a key strength of mine, as I thrive in team environments and enjoy working closely with colleagues to brainstorm ideas and find innovative solutions. Communication is another skill that I value, as it enables effective collaboration and ensures clarity in project requirements and expectations.
        </p>
        <p>
          In terms of hard skills, I excel in front-end development using React and JavaScript. With these technologies, I have built responsive and interactive web applications that deliver exceptional user experiences. Additionally, my expertise extends to back-end development utilizing Ruby, Sinatra, and Rails. I have successfully developed robust server-side applications, leveraging the power of these frameworks to handle complex business logic and data management. Furthermore, I am proficient in working with databases, having experience with both SQLite and Postgres, ensuring efficient data storage and retrieval for my applications.
        </p>
        <p>
          Overall, I am passionate about building innovative web applications and leveraging my technical skills alongside my strong communication, collaboration, and problem-solving abilities. I am excited to contribute my skills and creativity to projects that make a real impact, and I am committed to continuous learning and growth in the ever-evolving field of software engineering.
        </p>
      </div>
    </div>
  );
}

export default About;
