import React, { useState } from "react";
import "../styles/Contact.css";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    

    // EmailJS integration
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          Swal.close(); 
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Thank you for contacting me. I will get back to you soon.",
            confirmButtonColor: "#700343",
            confirmButtonText: "OK",
          });
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          Swal.close();
          Swal.fire({
            icon: "error",
            title: "Oops!",
            text: "Something went wrong. Please try again later.",
            confirmButtonColor: "#700343",
            confirmButtonText: "OK",
          });
          console.error("EmailJS error:", error);
        }
      );
  };
  return (
    <section className="contactSection" id="contactMe">
      <div className="contactGrad">
        <div className="outerSectionDiv">
          <div className="upper">
            <p>Let's</p>
            <h3>Connect!</h3>
          </div>

          <div className="lower">
            <div className="left_img">
              <img src="./stack/chat.png" alt="chat" />
            </div>

            <div className="right">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="name"
                  id="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  className="email"
                  id="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="subject"
                  id="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
                <textarea
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <button type="submit" className="send-btn">
                  <div className="svg-wrapper-1">
                    <div className="svg-wrapper">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path
                          fill="currentColor"
                          d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
