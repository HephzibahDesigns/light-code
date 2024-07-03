import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [active, setActive] = useState("/");
  return (
    <Fragment>
      <li className="hoverEffect">
        <Link
          to="/"
          className={active === "/" ? "activeTab" : ""}
          onClick={() => setActive("/")}
        >
          Home
        </Link>
      </li>

      <li className="hoverEffect">
        <Link
          to="/features"
          className={active === "/features" ? "activeTab" : ""}
          onClick={() => setActive("/features")}
        >
          Features
        </Link>
      </li>

      <li className="hoverEffect">
        <Link
          to="/testimonials"
          className={active === "/testimonials" ? "activeTab" : ""}
          onClick={() => setActive("/testimonials")}
        >
          Testimonials
        </Link>
      </li>

      <li className="hoverEffect">
        <Link
          to="/pricing"
          className={active === "/pricing" ? "activeTab" : ""}
          onClick={() => setActive("/pricing")}
        >
          Pricing
        </Link>
      </li>

      <li className="hoverEffect">
        <Link
          to="/blog"
          className={active === "/blog" ? "activeTab" : ""}
          onClick={() => setActive("/blog")}
        >
          Blog
        </Link>
      </li>

      <li className="hoverEffect">
        <Link
          to="/contact"
          className={active === "/contact" ? "activeTab" : ""}
          onClick={() => setActive("/contact")}
        >
          Contact
        </Link>
      </li>

      <button className="btn" type="button">
        Free Trial
      </button>
    </Fragment>
  );
};

export default Menu;
