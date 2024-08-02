import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="banner">
          <div className="left">TeBastian Hospitality</div>
          <div className="right">
            <p>Main Branch- Andheri, Mumbai, 400010</p>
            <p>Open: 10 AM - 11 PM</p>
          </div>
        </div>
        <div className="banner">
          {/* <div className="left">
            <p>Developed By Saurabh</p>
          </div> */}
          <div className="right">
            <p>© All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
