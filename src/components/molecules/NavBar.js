import React, {useEffect, useState} from "react";
import MenuButton from "../atoms/MenuButton";
import { Link } from "react-router-dom";

const NavBar = ({isActive}) => {
  const [isActivated, setIsActivated] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);

  const [lastScrollTop, setLastScrollTop] = useState(0);
  const threshold = 2; // Amount of scroll up required to show the nav

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (lastScrollTop > currentScrollPos && lastScrollTop - currentScrollPos > threshold) {
        setIsVisible(true); // Show nav if scrolled up more than threshold
      } else if (currentScrollPos > lastScrollTop && currentScrollPos - lastScrollTop > threshold) {
        setIsVisible(false); // Hide nav if scrolled down more than threshold
      }
      setLastScrollTop(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <nav className={`${isActivated ? "" : "inactive"} ${isVisible ? "" : "hide"}`}>
        <MenuButton 
            isActive={isActivated}
            setIsActive={setIsActivated}
        />
        <div className={`navMenu ${isActivated ? "" : "inactive"}`}>
            <div className="navLinks">
                <Link to={"/"}>Home</Link>
                <Link to={"/experience"}>Experience</Link>
                <Link to={"/project"}>Projects</Link>
                <Link to={"/project"}>Contact</Link>
            </div>
        </div>
    </nav>
  );
};

export default NavBar;