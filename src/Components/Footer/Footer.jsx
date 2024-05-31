import React from "react";
import Image from "next/image";
import logo from "../.././app/assets/logo.png";

export default function Footer() {
  return (
    <>
      <section className="overflow-hidden bg-gradient relative flex flex-col items-center">
        <div className="full rounded-xl font-sans font-bold ">
         
      <footer className="footer">
          <div className="footer-content">
            <div className="footer-section about">
              <Image src={logo} alt="Logo" className="logo" />
              <p>
                We are on a mission to help aspirants in managing all the
                studies without stressing over it :)
              </p>
              <div className="social-icons">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </div>
            <div className="footer-section links">
              <h2>Company</h2>
              <a href="#">About Us</a>
              <a href="#">Teach at Leadlly</a>
              <a href="#">Contact Us</a>
            </div>
            <div className="footer-section links">
              <h2>Legal</h2>
              <a href="#">Refund Policy</a>
              <a href="#">Privacy policy</a>
              <a href="#">Terms & Conditions</a>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="circle"></div>
            <p>All Copyright are reserved to Leadlly.in</p>
          </div>
        </footer>
        </div>
      </section>
        </>

  )
}