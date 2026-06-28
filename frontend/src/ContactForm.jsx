import { useState } from 'react';

export default function ContactForm() {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    setResult("Sending....");
    
    const formData = new FormData(event.target);
    formData.append("access_key", "19dc9c5e-7458-4a5e-863d-87238e65933d");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setStatus("success");
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        setStatus("error");
        setResult(data.message || "Error");
      }
    } catch (error) {
      setStatus("error");
      setResult("Something went wrong.");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      {status === "success" && <div className="form-success">{result}</div>}
      {status === "error" && <div className="form-error">{result}</div>}
      <div className="form-group">
        <input name="name" placeholder="Your Name" required />
      </div>
      <div className="form-group">
        <input name="email" type="email" placeholder="Email Address" required />
      </div>
      <div className="form-group">
        <input name="subject" placeholder="Subject" required />
      </div>
      <div className="form-group">
        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
      </div>
      <button type="submit" className="btn btn-gold" disabled={status === "loading"} style={{ marginTop: 4 }}>
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
