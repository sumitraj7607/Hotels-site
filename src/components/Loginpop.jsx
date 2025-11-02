import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
const Loginpopup = ({ setIsPopupOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/5 backdrop-blur-xs flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 relative  w-[90%] max-w-md shadow-lg">
        <div
          onClick={() => {
            setIsPopupOpen(false);
          }}
          className="absolute right-5  top-5"
        >
          <RxCross2 size={25} />
        </div>
        <h2 className="text-2xl font-bold mb-4">Login and get 10% discount</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-[#9F8772] hover:bg-[#A7727D] border border-[#f9f5e7] text-white rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Loginpopup;
