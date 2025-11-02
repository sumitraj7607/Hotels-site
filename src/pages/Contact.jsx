import React from "react";
import Footer from "../components/Footer";
import WhatsApppop from "../components/Whatsapppop";

const ContactPage = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    window.Email.send({
      Host: "#",
      Username: "#",
      Password: "#",
      To: "apur.rosales.swu@phinmaed.com",
      From: "apur.rosales.swu@phinmaed.com",
      Subject: "Inquiry",
      Body: `Name: ${name}<br>Email: ${email}<br>Message: ${message}`,
    }).then(() => {
      alert("Your inquiry has been sent. Thank you!");
      e.target.reset();
    });
  };

  const submitNewsletter = (e) => {
    e.preventDefault();
    alert("Subscribed to newsletter!");
    e.target.reset();
  };

  return (
    <>
      <section className="py-12 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Contact Info</h2>
            <p className="mb-6 text-gray-600">
              We are here for you. Please let us know how we can help.
            </p>
            <table className="text-gray-700">
              <tbody>
                <tr>
                  <td className="font-semibold pr-4 py-2">Address:</td>
                  <td>
                    Location 
                  </td>
                </tr>
                <tr>
                  <td className="font-semibold pr-4 py-2">Phone:</td>
                  <td>+91 000000000 , +910000000 ,00000000</td>
                </tr>
                <tr>
                  <td className="font-semibold pr-4 py-2">Email:</td>
                  <td>infotech@gmail.com</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={sendEmail} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="border border-[#F8EAD8] p-3 w-full rounded"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="border border-[#F8EAD8] p-3 w-full rounded"
                />
              </div>
              <textarea
                name="message"
                placeholder="How can we help you?"
                className="border border-[#F8EAD8] p-3 w-full h-32 rounded"
              ></textarea>
              <button
                type="submit"
                className="bg-[#A7727D] hover:bg-[#A7727D]/50 text-white px-6 py-2 rounded transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Extra Info */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {/* <div>
          <h3 className="text-xl font-semibold mb-2">Check-in & Check Out</h3>
          <p className="text-gray-600">
            We hope you’ve enjoyed your stay from start to finish.
            <br />
            <br />
            <strong>Check-in:</strong> 2:30 PM<br />
            <strong>Check-out:</strong> 11:30 AM
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Taxis / Grab / Maxim</h3>
          <p className="text-gray-600">
            The journey to and from the resort is no more than a 3-hour drive from the City of Cebu and costs
            approximately between PHP 700 and PHP 900.
          </p>
        </div> */}
        </div>
      </section>
    </>
  );
};

export default ContactPage;
