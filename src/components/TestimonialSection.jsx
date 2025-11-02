import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RotatingMarquee from "./RotatingMarquee";

const testimonials = [
  {
    name: "Hari",
    text: "Whether Haridwar or Rishikesh is 'better' depends on your priorities: Haridwar is known for its religious significance and vibrant Ganga Aarti, while Rishikesh is famed for its yoga, spirituality, and adventure activities like white-water rafting.",
    rating: 4.5,
  },
  {
    name: "Rishi",
    text: "Whether Haridwar or Rishikesh is 'better' depends on your priorities: Haridwar is known for its religious significance and vibrant Ganga Aarti, while Rishikesh is famed for its yoga, spirituality, and adventure activities like white-water rafting.",
    rating: 4.5,
  },
  {
    name: "We are",
    text: "Whether Haridwar or Rishikesh is 'better' depends on your priorities: Haridwar is known for its religious significance and vibrant Ganga Aarti, while Rishikesh is famed for its yoga, spirituality, and adventure activities like white-water rafting.",
    rating: 5,
  },
  {
    name: "Sumit R.",
    text: "Whether Haridwar or Rishikesh is 'better' depends on your priorities: Haridwar is known for its religious significance and vibrant Ganga Aarti, while Rishikesh is famed for its yoga, spirituality, and adventure activities like white-water rafting.",
    rating: 5,
  },
  {
    name: "Raj R.",
    text: "Whether Haridwar or Rishikesh is 'better' depends on your priorities: Haridwar is known for its religious significance and vibrant Ganga Aarti, while Rishikesh is famed for its yoga, spirituality, and adventure activities like white-water rafting.",
    rating: 4.5,
  },
  {
    name: "Ravi",
    text: "Whether Haridwar or Rishikesh is 'better' depends on your priorities: Haridwar is known for its religious significance and vibrant Ganga Aarti, while Rishikesh is famed for its yoga, spirituality, and adventure activities like white-water rafting.",
    rating: 4.5,
  },
];

const StarRating = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const half = rating % 1 >= 0.5;

  for (let i = 0; i < fullStars; i++)
    stars.push(<i key={i} className="text-yellow-400 text-lg fas fa-star"></i>);
  if (half)
    stars.push(
      <i
        key="half"
        className="text-yellow-400 text-lg fas fa-star-half-alt"
      ></i>
    );
  while (stars.length < 5)
    stars.push(
      <i
        key={`empty-${stars.length}`}
        className="text-gray-300 text-lg fas fa-star"
      ></i>
    );
  return <div className="flex justify-center gap-1">{stars}</div>;
};

const TestimonialSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
  };

  return (
    <>
      <section className="bg-gray-100 py-20" id="testimonials">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#d4766c] uppercase font-semibold tracking-wide">
              Testimonials
            </span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2">
              What Customers Say?
            </h2>
          </div>
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-center px-6">
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {testimonial.text}
                </p>
                <div className="flex flex-col items-center">
                  <h5 className="text-xl font-semibold text-gray-900">
                    {testimonial.name}
                  </h5>
                  <StarRating rating={testimonial.rating} />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default TestimonialSection;

//npm install react-slick slick-carousel
