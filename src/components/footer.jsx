import React from "react";
import "./footer.css";
import Logo from "./logo";
import NavLink from "./navlink";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_content">
        <div className="footer_top">
          <div className="footer_col footer_brand">
            <Logo />
            <p className="footer_desc">
              Precision advocacy for modern legal challenges. Trusted by industry
              leaders worldwide.
            </p>
          </div>

          <div className="footer_col">
            <div className="footer_title">Practice Areas</div>
            <ul className="footer_list">
              <NavLink navstyle="navstyle3" href="#home" text="Corporate Law"/>
              <NavLink navstyle="navstyle3" href="#home" text="Intellectual Property"/>
              <NavLink navstyle="navstyle3" href="#home" text="Litigation"/>
              <NavLink navstyle="navstyle3" href="#home" text="Advisory"/>
            </ul>
          </div>

          <div className="footer_col">
            <div className="footer_title">Company</div>
            <ul className="footer_list">
             <NavLink navstyle="navstyle3" href="#home" text="About"/>
              <NavLink navstyle="navstyle3" href="#home" text="Services"/>
              <NavLink navstyle="navstyle3" href="#home" text="Team"/>
              <NavLink navstyle="navstyle3" href="#home" text="Process"/>
            </ul>
          </div>

          <div className="footer_col">
            <div className="footer_title">Contact</div>
            <div className="footer_contact">
              <p className="footer_text">123 Legal Avenue, Suite 400</p>
              <p className="footer_text">New York, NY 10001</p>

              <a className="footer_link" href="mailto:hello@harrington.law">
                hello@harrington.law
              </a>
              <a className="footer_link" href="">
                +1 (555) 123-4567
              </a>
            </div>
          </div>
        </div>

        <hr className="footer_line" />

        <div className="footer_bottom">
          <p className="footer_copy">© 2026 Harrington & Associates. All rights reserved.</p>

          <div className="footer_legal">
            <a className="footer_link" href="#privacy">Privacy Policy</a>
            <a className="footer_link" href="#terms">Terms of Service</a>
            <a className="footer_link" href="#disclaimer">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;