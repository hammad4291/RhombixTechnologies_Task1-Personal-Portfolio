import React, { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: "", message: "" });
      } else {
        setStatus("Failed to send message");
      }
    } catch (err) {
      setStatus("Error occurred while sending");
    }
  };

  return (
    <section id="contact" className="otherSections" style={{paddingBottom:"6rem"}}>
      <h2 className="text-center text-white w-100 headings">Contact</h2>
      <p>
        Have a project in mind or want to connect? Feel free to drop a message
        below!
      </p>
      <form
        className="contact-form"
        onSubmit={handleSubmit}
        style={{ maxWidth: "600px", margin: "auto" }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          onChange={handleChange}
          value={formData.name}
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          onChange={handleChange}
          value={formData.message}
        ></textarea>
        <button type="submit">Send Message</button>
        {status && (
          <p style={{ color: "white", marginTop: "10px" }}>{status}</p>
        )}
      </form>
            <div className="social-links" style={{ paddingTop:"2rem", display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
        <a href="https://wa.me/923155681694" target="_blank" rel="noopener noreferrer" className="icon-link">
          <img src="./public/images/WhatsApp.png" alt="WhatsApp" />
          +92 315 5681694
        </a>
        <a href="https://www.linkedin.com/in/muhammad-hammad-ali-6a3134325/" target="_blank" rel="noopener noreferrer" className="icon-link">
          <img src="./public/images/Linkedin.png" alt="LinkedIn" />
        </a>
        <a href="https://www.instagram.com/m_hammad.ali?igsh=MWFzcHY1MHBrcWFsdQ==" target="_blank" rel="noopener noreferrer" className="icon-link">
          <img src="./public/images/Instagram.png" alt="Instagram" />
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
