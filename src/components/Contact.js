import { useState } from 'react';
import { TextField } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";
import styles from "../style/Contact.module.css";
import ct1 from "../Assets/vector-15.svg"
import { notification } from 'antd';
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const openNotification = (type, message, description) => {
    notification[type]({
      message,
      description,
    });
  };

  const handleSend = async () => {
    const formData = { name, email, message };

    try {
      const response = await fetch('https://portfolio-backend-35sr.onrender.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        openNotification('success', 'Email sent Successful', 'Your Email has been sent successfully.');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        console.error('Failed to send email');
        openNotification('error', 'Email sent Failed', 'There was an error during Email sending.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className={styles.contact} data-scroll-to="contactContainer">
      <div className={styles.about}>
        <div className={styles.contact1}>Contact</div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.getInTouchParent}>
          <div className={styles.getInTouch}>Get in touch</div>
          <TextField
            className={styles.frameChild}
            color="error"
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ "& .MuiInputBase-root": { height: "66px" }, width: "400px" }}
          />
          <TextField
            className={styles.frameChild}
            color="error"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ "& .MuiInputBase-root": { height: "66px" }, width: "400px" }}
          />
        </div>
        <TextField
          className={styles.frameInner}
          color="error"
          label="Message"
          variant="outlined"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          sx={{ "& .MuiInputBase-root": { height: "129px" }, width: "864px" }}
        />
        <button className={styles.sendWrapper} onClick={handleSend}>
          <div className={styles.send}>SEND</div>
        </button>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.eMailParent}>
          <div className={styles.getInTouch}>E-mail :</div>
          <div className={styles.trlalethgmailcom}>trlaleth@gmail.com</div>
        </div>
        <div className={styles.eMailParent}>
          <div className={styles.getInTouch}>Phone :</div>
          <div className={styles.trlalethgmailcom}>
            +916383649494
            <span className={styles.iconSpacing}></span>
            <a href="https://github.com/laleth" target="_blank" rel="noopener noreferrer">
              <GitHub className={styles.socialIcon} />
            </a>
            <span className={styles.iconSpacing}></span>
            <a href="https://www.linkedin.com/in/LalethTR" target="_blank" rel="noopener noreferrer">
              <LinkedIn className={styles.socialIcon} />
            </a>
          </div>
        </div>
      </div>
      <img className={styles.contactChild} alt="" src={ct1} />
    </div>
  );
};

export default Contact;
