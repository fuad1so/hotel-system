import React from "react";

const Footer = (props) => {
  return (
    <footer>
      <ul>
          {
          // eslint-disable-next-line no-undef
          props.ContactInfo.map((item) =>(
            <li className="footer-li" >{item}</li>
          ))}
      </ul>
    </footer>
  );
}
export default Footer;