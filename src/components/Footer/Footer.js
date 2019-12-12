import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="footer">
      <p>Site created by Brennan Neilson</p>
    </div>
  );
};

export default Footer;
