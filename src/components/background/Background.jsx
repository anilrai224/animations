import React, { useState, useEffect } from 'react';
import './background.scss';

const Background = () => {
  const images = ['https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2','https://images.pexels.com/photos/547114/pexels-photo-547114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 5000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const backgroundImage = `url(${images[currentImageIndex]})`;

  return (
    <div
      className='background'
      style={{
        backgroundImage,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '500px',
        transition: '2s ease-in-out',
      }}
    ></div>
  );
};

export default Background;
