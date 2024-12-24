import { motion } from "framer-motion";
import { useRef } from "react";  // Import useRef hook
import "./contact.css";
import emailjs from '@emailjs/browser';

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const formRef = useRef();  // Define formRef correctly

  const sendEmail = (e) => {
    e.preventDefault();  // Prevent default form submission

    emailjs
      .sendForm('service_akjii1j', 'template_jmirg7i', formRef.current, 'Q2IcDs8am8PDgcSoj')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);  // Success callback
        },
        (error) => {
          console.log('FAILED...', error.text);  // Error callback
        }
      );
  };

  return (
    <motion.div className="contact" variants={variants} initial="initial" whileInView="animate">
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let's Work Together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>chetsdesai123@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>Dharwad dist</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Ph no</h2>
          <span>1234567</span>
        </motion.div>
      </motion.div>
      <motion.div className="formContainer" variants={variants}>
       <motion.form ref={formRef} onSubmit={sendEmail}>
  <input type="text" required placeholder="Name" name="name" />
  <input type="email" required placeholder="Email" name="email" />
  <textarea rows={8} placeholder="Message" name="message"></textarea>
  <div type="submit" className="button">Submit</div> {/* Make sure the button is a submit button */}
</motion.form>

      </motion.div>
    </motion.div>
  );
};

export default Contact;
