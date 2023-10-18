import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <Fragment>
      <li className="hoverEffect">
        <Link to="/">Home</Link>
      </li>

      <li className="hoverEffect">
        <Link to="/features">Features</Link>
      </li>

      <li className="hoverEffect">
        <Link to="/testimonials">Testimonials</Link>
      </li>

      <li className="hoverEffect">
        <Link to="/pricing">Pricing</Link>
      </li>

      <li className="hoverEffect">
        <Link to="/blog">Blog</Link>
      </li>

      <li className="hoverEffect">
        <Link to="/contact">Contact</Link>
      </li>

      <button className="btn" type="button">
        Free Trial
      </button>
    </Fragment>
  );
};

export default Menu;
