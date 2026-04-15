



import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollUp = () => {
    const location = useLocation();

    useEffect(() => {
        
        window.scrollTo({ top: 0, left: 0 });

       
        const scrollableContainer = document.querySelector(".scrollable-container");
        if (scrollableContainer) {
            scrollableContainer.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }
    }, [location.pathname]); 

    return null;
};

export default ScrollUp;
