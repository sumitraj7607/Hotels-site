import React from "react";
import Footer from "../components/Footer";
import WhatsApppop from "../components/Whatsapppop";

const AboutUs = () => {
  return (
    <>
      <div className="pt-20 bg-gray-100">
        {/* Breadcrumb Section */}
        <div className="w-full px-4 py-10 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-serif font-semibold text-black mb-4">
              About US
            </h1>

            {/* Breadcrumb */}
            <nav className="text-sm md:text-base text-gray-600 flex justify-center gap-2">
              <span className="text-[#d4766c] font-medium">Home</span>
              <span className="text-gray-400">›</span>
              <span className="text-gray-400">About Us</span>
            </nav>
          </div>
        </div>

        {/* About Us Video Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <video
                className="w-full h-[50vh] object-cover"
                autoPlay
                loop
                muted
              >
                <source src="rishikesh.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        {/* About Us Content Section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="lg:w-1/2">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Welcome To Rishikesh, Uttarakhand
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco .

                 
                </p>
              </div>
              <div className="lg:w-1/2">
                <ul className="space-y-2 text-gray-700">
                  {[
                    "Luxurious Accommodations",
                    "Exclusive use of the entire beach house",
                    "24/7 Exceptional service",
                    "Ideal location",
                    "Delicious dining options",
                    "Relaxation and recreation",
                    "Infinity pool with kiddie pool",
                    "Billiard table, mahjong & game table",
                    "KTV Room",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <i className="text-green-500 mr-2">✔</i> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <span className="text-[#d4766c] font-semibold uppercase">
                Our Gallery
              </span>
              <h2 className="text-3xl font-bold text-gray-800">
                Discover Our Services
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <img
                    src="src\assets\Image\img2.jpg"
                    alt="Clean and Spacious"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0  bg-opacity-50 text-white p-4">
                    <h3 className="text-lg font-semibold">
                      Clean and Spacious
                    </h3>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <img
                      src="src\assets\Image\img19.jpg"
                      alt="Luxury"
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute bottom-0 left-0 bg-opacity-50 text-white p-3">
                      <h3 className="text-sm font-semibold">Luxury</h3>
                    </div>
                  </div>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <img
                      src="src\assets\Image\img7.jpg"
                      alt="Excellence"
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute bottom-0 left-0  bg-opacity-50 text-white p-3">
                      <h3 className="text-sm font-semibold">Excellence</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-full rounded-lg overflow-hidden">
                <img
                  src="src\assets\Image\img9.jpg"
                  alt="Aesthetic Quality"
                  className="object-cover w-full h-full"
                />
                <div className="absolute bottom-0 left-0  bg-opacity-50 text-white p-4">
                  <h3 className="text-lg font-semibold">Aesthetic Quality</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
