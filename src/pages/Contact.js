import React from "react";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <>
  
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contact.jpg.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 >CONTACT US</h1>
          <p className="text-justify mt-2"  style={{ fontStyle:"oblique"}}>
            any query and info about prodduct feel free to call anytime we 24X7
            vaialible
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@ecommerceapp.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 0092-3456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 1111-0000-0110 (toll free)
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;