import React from "react";

function Footer() {
  return (
    <footer className="page-footer">
    <div className="container">
      <div className="row">
        <div className="col l8 s12">
          <h5 className="white-text">Resonanz</h5>
          <p className="grey-text text-lighten-4">
          Our purpose is to build a state-of-the-art software platform to enable and economically incentivize producers and consumers of electricity to go 100% renewable. Our aim is to empower renewables through cutting-edge and highly customer-centered technology. We are currently developing our P³ platform in close cooperation with our trusted partners and will update this space in the coming months.
          </p>
        </div>
        <div className="col l4  s12">
          <h5 className="white-text">Links</h5>
          <ul>
            <li><a className="grey-text text-lighten-3" href="#!">Home</a></li>
            <li><a className="grey-text text-lighten-3" href="#!">About Us</a></li>
            <li><a className="grey-text text-lighten-3" href="#!">Career</a></li>
            <li><a className="grey-text text-lighten-3" href="#!">Services</a></li>
            <li><a className="grey-text text-lighten-3" href="#!">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
      © 2019 Copyright www.Resonanz.io
      </div>
    </div>
  </footer>
  );
}

export default Footer;