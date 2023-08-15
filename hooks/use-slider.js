import { useState } from 'react';

export const useSlider = function () {
  const [currentSlide, setCurrentSlide] = useState(0);

  function prevSlide(arrayLength) {
    setCurrentSlide((curIndex) =>
      curIndex === 0 ? arrayLength - 1 : curIndex - 1
    );
  }

  function nextSlide(arrayLength) {
    setCurrentSlide((curIndex) =>
      curIndex === arrayLength - 1 ? 0 : curIndex + 1
    );
  }

  return { currentSlide, prevSlide, nextSlide };
};
