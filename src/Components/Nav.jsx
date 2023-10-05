import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  const [toggleBtn, setToggleBtn] = useState(true);

  return (
    <div className="container mx-auto text-color-white p-10 flex justify-between items-center">
      <div className="font-bold text-3xl">
        <Link to="/">
          light<span className="text-color-secondary">Code.</span>
        </Link>
      </div>

      <ul className="hidden lg:flex justify-center items-center space-x-6">
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

        <button className="btn">Free Trial</button>
      </ul>

      {/* Mobile Menu*/}

      <div className="lg:hidden cursor-pointer">
        {toggleBtn ? (
          <GiHamburgerMenu
            size={27}
            color="#fff"
            onClick={() => setToggleBtn(!toggleBtn)}
          />
        ) : (
          <div className="bg-color-primary-light h-[100vh] absolute inset-0">
            <IoMdClose
              size={27}
              color="fff"
              onClick={() => setToggleBtn(!toggleBtn)}
              className="mx-[50.4rem] my-[3rem]"
            />
            <ul
              className="flex flex-col space-y-10 py-10 items-center"
              onClick={() => setToggleBtn(!toggleBtn)}
            >
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

              <button className="btn">Free Trial</button>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
