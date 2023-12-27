import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="min-h-[65vh] bg-color-primary-dark px-8 py-12">
      <div className="flex justify-center items-start">
        <div
          className="w-full lg:flex lg:justify-around lg:items-start lg:flex-row 
        md:flex md:flex-wrap md:justify-between md:items-start"
        >
          <div className="flex justify-center items-start flex-col ">
            <h1 className="text-xl font-bold text-color-secondary">
              About App
            </h1>

            <p className="w-68 py-4 font-normal text-base lg:text-lg lg:w-80 md:w-72">
              This should be used to tell a story and include Any Testimonials
              you might have about the Product or Service for your Client
            </p>

            <div className="text-left">
              <h2 className="text-lg py-4">Follow Us On:</h2>
            </div>
          </div>

          <div className="flex justify-center items-start flex-col">
            <h1 className="text-xl font-bold text-color-secondary">
              Quick Links
            </h1>

            <ul className="py-6 space-y-4">
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
            </ul>
          </div>

          <div className="lg:flex justify-center items-start flex-col">
            <h1 className="text-xl font-bold text-color-secondary">Help</h1>

            <ul className="py-6 space-y-4">
              <li className="hoverEffect">
                <Link to="#">About Us</Link>
              </li>

              <li className="hoverEffect">
                <Link to="#">Partners</Link>
              </li>

              <li className="hoverEffect">
                <Link to="#">Career</Link>
              </li>

              <li className="hoverEffect">
                <Link to="#">Reviews</Link>
              </li>

              <li className="hoverEffect">
                <Link to="#">Terms and Conditions</Link>
              </li>

              <li className="hoverEffect">
                <Link to="#">Help</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-center items-start">
            <h1 className="text-xl font-bold text-color-secondary">
              NewsLetter
            </h1>
            <p className="w-60 text-base lg:w-80 py-4 font-normal lg:text-lg">
              Subscribe to our Weekly NewsLetter, to get more infomations on our
              daily updates
            </p>
            <div className="py-6">
              <input
                type="text"
                placeholder="Enter Email Address"
                className="px-1 py-3 text-color-gray outline-none lg:px-8 lg:py-3 rounded-s-md sm:px-8 sm:py-3 md:px-6 md:py-3"
              />
              <button className="px-4 py-3 rounded-e-full  bg-color-secondary hover:bg-[#ed6927] ease-in duration-200 cursor-pointer">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <h1 className="pt-24 text-lg">
          2023 &copy; LightCode. All Rights Reserved
        </h1>
      </div>
    </div>
  );
};

export default Footer;
