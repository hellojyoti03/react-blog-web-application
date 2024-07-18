import React, {useState, useEffect} from "react";
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = 3; // Number of course items, adjust as needed

  useEffect(() => {
      const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
      }, 3000); // Interval to switch items, adjust as needed

      return () => clearInterval(interval);
  }, []); // Run effect once on component mount

  const getClassName = (index) => {
      if (index === currentIndex) return 'active';
      if (index === (currentIndex + 1) % totalItems) return 'next';
      if (index === (currentIndex - 1 + totalItems) % totalItems) return 'prev';
      return ''; // Default case
  };

  return (
      <nav id="course-carousel">
          {Array.from({ length: totalItems }).map((_, index) => (
              <div key={index} className={`course-item ${getClassName(index)}`}>
                  Course {index + 1}
              </div>
          ))}
      </nav>
  );
};

export default Carousel;