import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../components/footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-left">
          <h1 className="footer-logo">
            BONKERS <br /> CORNER
          </h1>
          <div className="social-icons">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-x"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-pinterest"></i>
          </div>
        </div>

        
        <div className="footer-column">
          <h4>SHOP</h4>
          <ul>
            <li>Best Sellers</li>
            <li>Special Prices</li>
            <li>SpongeBob</li>
            <li>tokidoki</li>
            <li>Disney</li>
            <li>Marvel</li>
            <li>New Arrivals</li>
            <li>Signature</li>
          </ul>
        </div>

        
        <div className="footer-column">
          <h4>TRENDING</h4>
          <ul>
            <li>ACOSTA Collection</li>
            <li>Anime Collection</li>
            <li>Oversized T-shirt</li>
            <li>Oversized Shirt</li>
            <li>Bottoms for Women</li>
            <li>Bottoms for Men</li>
            <li>Sweatshirts & Hoodies</li>
            <li>Jacket</li>
          </ul>
        </div>

        
        <div className="footer-column">
          <h4>INFO</h4>
          <ul>
            <li>Sale - Terms & Conditions</li>
            <li>Terms & Conditions</li>
            <li>Stores Near Me</li>
            <li>Blogs</li>
            <li>FAQs</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Returns and Exchange Policy</li>
            <li>Offers and Deals</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;