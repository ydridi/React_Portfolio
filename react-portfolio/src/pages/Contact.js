import React from "react";
import Container from "../components/Container";
import Title from "../components/Title"; 

function Contact() {
  return (
    <div>
         <Container>
           <Title children="Contact Information" />
           <p>Linked In Profile: <a href="https://www.linkedin.com/in/yassine-dridi-2381903a">Yassine Dridi</a></p>
           <p>Resume: <a href="https://drive.google.com/file/d/1Xf12v8iLPzcapQPyUCU7-_moXCyZPu3Q/view?usp=sharing">Click here for my resume</a></p> 
           <p>Github link: <a href="https://github.com/ydridi">ydridi</a></p>
           <p>Please address all inquiries to the following:</p> 
           <p>Yassine Dridi<br />
           540.550.7667<br />
           dridiy@zentech.com</p>
      </Container>
    </div>
  );
}

export default Contact;