import Tooltip from "./Tooltip";
import { Link } from "react-router";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white p-10 mt-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div>
            <Link to="/">
              {" "}
              <img
                src="Logo.svg"
                alt="Logo"
                className="w-22 rounded-xl"
              />
            </Link>
            <p className="mt-4 text-gray-300">
              Welcome to tech hub, your go-to place for
              unforgettable events.
            </p>
            <div className="mt-4 space-y-2 text-gray-400">
              <p className="flex items-center">
                📍 Location
              </p>
              <p className="flex items-center">
                📧 infotech@gmail.com
              </p>
              <p className="flex items-center">
                📞 +9100000000  +9100000000  00000000
              </p>
            </div>
          </div>

          {/* Middle Section */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
              <ul className="space-y-1 text-gray-300">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/AboutUs"}>About Us</Link>
                </li>

                <li>
                  <Link to={"/Contact"}>Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-3">Services</h2>
              <ul className="space-y-1 text-gray-300">
                <li>
                  <a href="#">Raft the Ganges</a>
                </li>
                <li>
                  <a href="#">Engagement Events</a>
                </li>
                <li>
                  <a href="#">Experience Rafting</a>
                </li>
                <li>
                  <a href="#">Sangeet Ceremony</a>
                </li>
                <li>
                  <a href="#">Camping Experience</a>
                </li>
                <li>
                  <a href="#">Pool Parties</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Location</h2>
            {/* <iframe
            className="rounded-2xl"
            src=""
            allowfullscreen="#"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe> */}
            <iframe
              src="#"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <Tooltip />
      </footer>
    </>
  );
};

export default Footer;
