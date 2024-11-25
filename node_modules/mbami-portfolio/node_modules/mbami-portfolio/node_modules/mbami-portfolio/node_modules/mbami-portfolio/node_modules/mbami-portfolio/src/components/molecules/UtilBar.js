import React, { useState, useEffect } from 'react';

const UtilBar = ({children}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const threshold = 2; // Amount of scroll up required to show the utilBar

  useEffect(() => {
	const handleScroll = () => {
	  const currentScrollPos = window.pageYOffset;
	  if (lastScrollTop > currentScrollPos && lastScrollTop - currentScrollPos > threshold) {
		setIsVisible(true); // Show utilBar if scrolled up more than threshold
	  } else if (currentScrollPos > lastScrollTop && currentScrollPos - lastScrollTop > threshold) {
		setIsVisible(false); // Hide utilBar if scrolled down more than threshold
	  }
	  setLastScrollTop(currentScrollPos);
	};

	window.addEventListener('scroll', handleScroll);

	return () => {
	  window.removeEventListener('scroll', handleScroll);
	};
  }, [lastScrollTop]);

  return (
	<div className={`utilBar ${isVisible ? "" : "hide"}`}>
	  {children}
	</div>
  );
};

export default UtilBar;