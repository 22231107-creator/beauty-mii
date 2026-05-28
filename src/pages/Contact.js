function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Email: hello@beautybymii.com</p>
        <p>Phone: +961 76 123 456</p>
        <p>Beirut, Lebanon</p>
      </div>
      <div className="contact-form">
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Your full name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Your email address" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" rows="5" placeholder="Write your message here..."></textarea>

          <div className="form-buttons">
            <input type="submit" value="Send Message" />
            <input type="reset" value="Reset Form" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;