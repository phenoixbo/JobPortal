import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import SuccessPopup from "./SuccessPopup";
import "../styles/styles.css";

function JobApplyForm() {
  const [showPopup, setShowPopup] = useState(false);
  const form = useRef();

  const handleApply = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_h8mw427", // Replace with your EmailJS Service ID
      "template_beft8se", // Replace with your EmailJS Template ID
      form.current,
      "rJDTdssmCOjAmhIlB" // Replace with your EmailJS Public Key
    )
    .then(
      (result) => {
        console.log("Email sent:", result.text);
        setShowPopup(true);
      },
      (error) => {
        console.error("Error:", error.text);
      }
    );
  };

  return (
    <div className="apply-form-container">
      <h2>Apply for Job</h2>
      <form ref={form} onSubmit={handleApply}>
        <input type="text" name="user_name" placeholder="Full Name" required />
        <input type="email" name="user_email" placeholder="Email" required />
        <input type="tel" name="user_phone" placeholder="Phone Number" required />
        <input type="file" name="resume" required />
        <button type="submit">Submit Application</button>
      </form>
      {showPopup && <SuccessPopup message="You have successfully applied!" />}
    </div>
  );
}

export default JobApplyForm;
