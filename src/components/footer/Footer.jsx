import React from "react";
import classes from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About the App</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque,
            voluptatibus dolores? Dolor asperiores ex iusto ad corrupti ipsa
            esse eligendi facere quibusdam, vero rerum deserunt unde sint nemo
            nobis dolore.
          </p>
        </div>
        <div className={classes.col}>
          <h2>Conatcts</h2>
          <span>Phone: +92 346 3640001</span>
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
