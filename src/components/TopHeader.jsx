import { FaPhone, FaEnvelope, FaFacebook, FaInstagram } from "react-icons/fa";

const TopHeader = () => {
  return (
    <>
      <div className="border-b border-gray-300 bg-white w-full px-8">
        <div className="max-w-screen-xl mx-auto ">
          <div className="flex flex-col lg:flex-row justify-between items-stretch ">
            {/* Left Section */}
            <ul className="flex flex-wrap items-center text-sm text-gray-800 font-medium divide-x divide-gray-300">
              <li className="flex items-center pr-4 py-3">
                <FaPhone className="text-[#A7727D]  mr-2" />
                +9100000000, 000000000
              </li>
              <li className="flex items-center pl-4 py-3">
                <FaEnvelope className="text-[#A7727D] mr-2" />
                infotech@gmail.com
              </li>
            </ul>

            {/* Right Section */}
            <div className="bg-[#F8EAD8] flex items-center justify-between gap-6 px-6 py-3  lg:w-auto">
              <div className="flex items-center space-x-4">
                <a href="#" className="text-gray-800 hover:text-[#A7727D]">
                  <FaFacebook />
                </a>
                <a href="#" className="text-gray-800 hover:text-[#A7727D]">
                  <FaInstagram />
                </a>
              </div>
              <div className="text-white  tracking-wider text-sm text-center">
                <h4 className="text-black ">Hotels </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;

//npm install react-icons
