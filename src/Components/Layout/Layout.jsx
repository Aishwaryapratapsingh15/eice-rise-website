
import styles from "./Layout.module.css"

import { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import PhoneNavigationbar from '../PhoneNavigationBar/PhoneNavigationbar';
import { Outlet, useLocation } from 'react-router-dom';
import ScrollUp from "../ScrollUp/ScrollUp";

export default function Layout() {
const location = useLocation();
// const isEmbed =
//   new URLSearchParams(location.search).get("embed") === "true" ||
//   sessionStorage.getItem("isEmbed") === "true";
const [isEmbed, setIsEmbed] = useState(() => {
  const param = new URLSearchParams(window.location.search).get("embed");
  const stored = sessionStorage.getItem("isEmbed");

  return param === "true" || stored === "true";
});

    const [isPhone, setIsPhone] = useState(window.innerWidth <= 1160);


    useEffect(() => {
        const handleResize = () => {
            setIsPhone(window.innerWidth <= 1160); // Update based on screen size
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

//     useEffect(() => {
//   const param = new URLSearchParams(location.search).get("embed");

//   if (param === "true") {
//     sessionStorage.setItem("isEmbed", "true");
//   }
//         const sendHeight = () => {
//             window.parent.postMessage(
//                 {
//                     type: "SET_HEIGHT",
//                     height: document.body.scrollHeight + 20,
//                 },
//                 "*"
//             );
//         };

//         sendHeight();

//         window.addEventListener("resize", sendHeight);

//           const observer = new ResizeObserver(() => {
//     sendHeight();
//   });

//   observer.observe(document.body);


//         return () => { window.removeEventListener("resize", sendHeight);
//             observer.disconnect();
//     };
// }, [location]);
useEffect(() => {
  const param = new URLSearchParams(location.search).get("embed");

  if (param === "true") {
    sessionStorage.setItem("isEmbed", "true");
    setIsEmbed(true);
  }
  const sendHeight = () => {
            window.parent.postMessage(
                {
                    type: "SET_HEIGHT",
                    height: document.body.scrollHeight + 20,
                },
                "*"
            );
        };

        sendHeight();

        window.addEventListener("resize", sendHeight);

          const observer = new ResizeObserver(() => {
    sendHeight();
  });

  observer.observe(document.body);


        return () => { window.removeEventListener("resize", sendHeight);
            observer.disconnect();
    };
}, [location]);
    return (
        <>
        <ScrollUp/>
            {!isEmbed && ( isPhone ? (<div className={styles.phoneNavBar}>
                    <PhoneNavigationbar />
                </div>)

                    :

                    (<div className={styles.LaptopNavBar}>
                        <Navbar />
                    </div>)
                    )}
            <Outlet />
        </>
    )
}
