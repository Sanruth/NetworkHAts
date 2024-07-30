import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'


const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // formData.append("access_key", "a33f5b1b-f130-41f3-bf4b-49bf06d7d028");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message
                <img src={msg_icon} alt="" />
            </h3>
            <p>
                Feel Free to contact  us  and find our contact 
            information below. Your feedback ,  and suggestions are 
            important to us as we strive to provide exceptinal service to our 
            college community
            </p>
            
            <ul>
                <li><img src={mail_icon} alt="" />hello@NetworkHats.com.np</li>
                <li> <img src={phone_icon} alt="" />+977 9851240433</li>
                <li><img src={location_icon} alt="" /> Setopul, Kathmandu</li>

            
            </ul>
            
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}> 
                <label > Your Name</label>
                <input type="text" name='name'  placeholder='Enter Your NAme' required/>
                <label>Email</label>
                <input type="text" name='Email' placeholder='Enter Your  Email' required />
                <label>Subject</label>
                <input type="text" name='Subject' placeholder='Enter Your Subject' required/>
                <label>Write Your message</label>
                <textarea name="message" rows="6" placeholder='Enter Your message' required> </textarea>
                <button type='submit' className='btn dark-btn '><span>Submit Now</span> <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
      
    </div>
  )
}

export default Contact;