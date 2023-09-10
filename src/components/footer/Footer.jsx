import React from "react";
import classes from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About the App</h2>
          <p>
            This is My Hackathon Project on Next js and i am using Next-auth for
            authentication and bcrypt , using React-Toastify for errors and
            Cloudinary for images and MongoDB for database
          </p>
        </div>
        <div className={classes.col}>
          <h2>Conatcts</h2>
          <span>Phone: +92 346 3640001</span>
          <span>Roll NO: WMA-71320</span>
          <span>GitHub: https://github.com/FahadKhanKabooro</span>
        </div>
        <div className={classes.col}>
          <h2>Location</h2>
          <span>Country: Pakistan</span>
          <span>Province: Sindh</span>
          <span>Current Loacation: Hydrabad</span>
        </div>
      </div>
      Footer
    </footer>
  );
}
