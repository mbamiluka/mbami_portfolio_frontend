import React from "react";
import MenuButton from "../atoms/MenuButton";
import { Link } from "react-router-dom";

const NavBar = ({isActive}) => {
  const [isActivated, setIsActivated] = React.useState(false);
  return (
    <nav className={isActivated ? "" : "inactive"}>
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