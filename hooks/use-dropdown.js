import { useState } from 'react';

export function useDropdown() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = function () {
    setIsVisible((currVisibility) => (currVisibility === true ? false : true));
  };

  return {
    isVisible,
    toggleVisibility,
  };
}
