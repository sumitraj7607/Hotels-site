import React from 'react';
// import './clouds.css'; // Import external CSS

const clouds = [
  { src: 'cloud1.png', delay: '1' },
  { src: 'cloud2.png', delay: '2' },
  { src: 'cloud3.png', delay: '3' },
  { src: 'cloud4.png', delay: '4' },
  { src: 'cloud5.png', delay: '5' },
];

const CloudSlider = () => {
  return (
    <div className="relative h-[20vh] overflow-hidden  z-0">
      {clouds.map((cloud, index) => (
        <img
          key={index}
          src={cloud.src}
          alt={`Cloud ${index + 1}`}
          className={`absolute top-0 left-0 w-[250px] sm:w-[300px] cloud cloud${cloud.delay}`}
        />
      ))}
    </div>
  );
};

export default CloudSlider;
