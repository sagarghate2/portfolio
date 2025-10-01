import './Contact.css'
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Contact(){

      const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_2g2au6g",
      "template_8tl01zj",
      form.current,
      "X7vZZy3fzU7gcpwuK"
    )
    .then(
      (result) => {
        alert("Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        alert("Failed to send message. Try again.");
      }
    );
  };

    return(
        <>
         <div className="contact-btn">
            <p>Contact</p>
         </div>

             <div id="contact">
                    <div className="contactOne">
                    <p>CONTACT WITH ME</p>

                      <div className="formSubmission">
                          <div className="padd">
                        <form ref={form} onSubmit={sendEmail}>

                            <div className="query">
                               <p>If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests.</p>
                            </div>

                            <div className="name">
                               <label htmlFor="">Your Name:</label>
                               <input type="text" name='name' id='name' required />
                            </div>

                            <div className="mail">
                                <label htmlFor="">Your Email:</label>
                                <input type="email" name='email' id='mail'required />
                            </div>

                            <div className="message">
                                <label htmlFor="">Your Message:</label>
                               <textarea name="message" id="txtarea" required ></textarea>
                            </div>

                            <div className="btn">
                            <button type='submit'>Send Message</button> </div>
                        </form>
                      </div>
                    </div>
                    </div>

                    <div className="contactTwo">
                      
                      <div className="lineOne">
                                 <span className='atWidth'><FontAwesomeIcon icon={faAt}  /> </span> <span>sagaraghate22@gmail.com</span>
                      </div>
                        <div className="lineTwo">
                           <span className='atWidth'><FontAwesomeIcon icon={faPhone} /> </span> <span> +91 9380362337</span>
                        </div> 
                         <div className="lineThree">
                          <span> <FontAwesomeIcon icon={faLocationDot} /></span> <span> Hyderabad, India</span>
                         </div>
                         <div className="lineLast">
                           <span> <a href="https://github.com/sagarghate2"> <FontAwesomeIcon icon={faGithub} className='ww'/> </a></span>
                           <span> <a href="https://www.linkedin.com/in/sagarghate/"> <FontAwesomeIcon icon={faLinkedin} className='ww'/> </a></span>
                           <span> <a href="https://www.instagram.com/sagarh_ghate/"> <FontAwesomeIcon icon={faInstagram} className='ww'/> </a></span>
                         </div>
                       </div>
             </div>
             <hr />
             <div className="oneLastDance">
              &copy; Developer Portfolio by <a href="https://www.instagram.com/sagarh_ghate/" className='naam'>Sagar Ghate</a>
             </div>
        </>
    )
}