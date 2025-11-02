import Footer from "../components/Footer";
import WhatsApppop from "../components/Whatsapppop";

const rooms = [
  {
    title: "Premium King Room",
    price: "₹1,000",
    size: "40 ft",
    capacity: "Max 4 persons",
    bed: "Queen Beds",
    services: "Wifi, Television, Bathroom,...",
    image: "room-1.png",
  },
  {
    title: "Standard Room",
    price: "₹1,500",
    size: "20 ft",
    capacity: "Max 2 persons",
    bed: "Single Beds",
    services: "Wifi, Television, Bathroom,...",
    image: "room-2.jpg",
  },
  {
    title: "Garden Suite",
    price: "₹900",
    size: "30 ft",
    capacity: "Max 4 persons",
    bed: "King Beds",
    services: "Wifi, Television, Bathroom,...",
    image: "room-3.png",
  },
  {
    title: "Luxury Suite",
    price: "₹12,000",
    size: "45 ft",
    capacity: "Max 5 persons",
    bed: "King Beds",
    services: "Wifi, Television, Minibar,...",
    image: "room-b4.png",
  },
  {
    title: "Deluxe Room",
    price: "₹8,700",
    size: "28 ft",
    capacity: "Max 3 persons",
    bed: "Queen Beds",
    services: "Wifi, Television, Bathroom,...",
    image: "room-1.png",
  },
  {
    title: "Family Suite",
    price: "₹11,500",
    size: "50 ft",
    capacity: "Max 6 persons",
    bed: "2 Queen Beds",
    services: "Wifi, Television, Kitchen,...",
    image: "room-2.jpg",
  },
];

const RoomCard = () => {
  return (
    <>
      <div className="p-6 bg-white min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="border shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <img
                src={room.image}
                alt={room.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-serif">{room.title}</h3>
                <p className="text-2xl text-[#8d5655] font-bold mt-1">
                  {room.price}
                  <span className="text-sm font-normal text-black">
                    {" "}
                    /Per night
                  </span>
                </p>
                <div className="mt-4 text-sm space-y-1">
                  <p>
                    <span className="font-semibold">Size:</span> {room.size}
                  </p>
                  <p>
                    <span className="font-semibold">Capacity:</span>{" "}
                    {room.capacity}
                  </p>
                  <p>
                    <span className="font-semibold">Bed:</span> {room.bed}
                  </p>
                  <p>
                    <span className="font-semibold">Services:</span>{" "}
                    {room.services}
                  </p>
                </div>
                <button className="mt-4 text-sm font-semibold tracking-wide border-t-2 border-[#8d5655] pt-2 hover:text-[#8d5655] transition-all">
                  MORE DETAILS
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RoomCard;
