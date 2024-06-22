import React from "react";
import Footer from "../molecules/Footer";
import NavBar from "../molecules/NavBar";

const MainContent = ({children}) => {
    const [isActivated, setIsActivated] = React.useState(false);
    return (
        <div className="MainContent">
            <NavBar
                isActivated={isActivated}
                setIsActivated={setIsActivated}
            />
            {children}
            <Footer />
        </div>
    );
};

export default MainContent;