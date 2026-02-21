import React from "react";
import "./contactform.css";

const Contactform = () => {
  return (
    <form className="form_box">
      <div className="form_grid">
        <div className="form_field">
          <label className="form_label">Full Name</label>
          <input className="form_input" type="text" placeholder="James Harrington" />
        </div>

        <div className="form_field">
          <label className="form_label">Email Address</label>
          <input className="form_input" type="email" placeholder="you@company.com" />
        </div>

        <div className="form_field">
          <label className="form_label">Phone Number</label>
          <input className="form_input" type="tel" placeholder="+1 (555) 000-0000" />
        </div>

        <div className="form_field">
          <label className="form_label">Practice Area</label>
          <select className="form_select" defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            <option>Corporate Law</option>
            <option>Intellectual Property</option>
            <option>Litigation &amp; Defense</option>
            <option>Advisory Services</option>
          </select>
        </div>

        <div className="form_field form_full">
          <label className="form_label">Brief Description</label>
          <textarea
            className="form_textarea"
            placeholder="Briefly describe your legal matter and how we can assist you..."
          />
        </div>
      </div>

      <p className="form_note">
        All communications are strictly confidential and protected by attorney-client
        privilege.
      </p>

      <button className="form_btn" type="submit">
        <span>Request Consultation</span>
        <span className="form_icon">&rarr;</span>
      </button>
    </form>
  );
};

export default Contactform;
