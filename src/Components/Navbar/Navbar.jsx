import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

import logo from '../../assets/logo/logo.svg';
import ProductDrop from '../NavDropDown/ProductDrop';
import PricingDrop from '../NavDropDown/PricingDrop';

export default function Navbar() {

        const location = useLocation(); // ✅ important
    const params = new URLSearchParams(location.search);
    const isEmbed = params.get("embed") === "true"
    if (isEmbed) return null;
    const navItems = [
        {
            navName: "PRODUCTS",
            id: 1,
            dropdown: <ProductDrop />,
            style: (styles.dropDownContainerProduct)

        },
        {
            navName: "PRICING",
            id: 2,
            dropdown: <PricingDrop />,
            style: (styles.dropDownContainerPricing)


        },
        {
            navName: "ABOUT US",
            id: 3,
            path: "https://www.eicetechnology.com/About"

        },

        {
            navName: "BLOGS",
            id: 4,
            path: "https://www.eicetechnology.com/Resources"

        }
    ]


    const [activeDropdown, setActiveDropdown] = useState()


    const handleMouseEnter = (index) => {
        setActiveDropdown(index);
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    };

    return (
        <div onMouseLeave={() => { handleMouseLeave() }} className={styles.navigationContainer}>
            <div className={styles.navigationItemBox}>

                <div className={`${styles.eiceRiseLogoBox}`}>
                    <Link to={"/"}>
                        <img className={`${styles.eiceRiseLogo}`} src={logo} alt="eice technology" />
                    </Link>

                </div>

                <div className={`${styles.navigationIcon} `}>

                    <div>
                        <Link onMouseEnter={handleMouseLeave} className={`${styles.homeNav} font1 linkClass`} to={"/"}>
                            HOME
                        </Link>
                    </div>

                    {navItems.map((item) =>
                    (<div key={item.id} style={{ position: "relative" }}>
                        <div className={`${styles.navNameAndArrow}`} key={item.id} onMouseEnter={() => { handleMouseEnter(item.id) }} style={{ display: "flex" }}>

                            {item.dropdown && (<div>
                                <div className={`${styles.navName} font1 linkClass`}>
                                    {item.navName}
                                </div>
                            </div>)}


                            {item.path && (
                                <Link to={item.path} className={`${styles.navName} font1 linkClass`} target='_blank'>
                                    <div  >
                                        {item.navName}
                                    </div>
                                </Link>

                            )}


                            {item.dropdown && (<div style={{ display: "flex", alignItems: "center", paddingTop: "2px" }}>
                                {item.id == activeDropdown ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </div>)}




                        </div>

                        {item.dropdown && (<div className={item.style} onClick={handleMouseLeave} onMouseLeave={() => { handleMouseLeave() }} >
                            {item.id == activeDropdown ? item.dropdown : ""}
                        </div>)

                        }

                    </div>
                    ))}




                </div>


                <div style={{display : "flex" , gap : "0px 1rem"}}>
                    <div onMouseEnter={handleMouseLeave} className={`${styles.contactUsBtn} font1 `}>
                        <Link to={"/form"} style={{ textDecoration: "none", color: "white" }}>
                            Request a Demo
                        </Link>



                    </div>
                    {/* <div className={`${styles.contactUsBtn} font1 `}>
                        <Link to={"https://onelogin.eicetechnology.com/"} target='_blank' style={{ textDecoration: "none", color: "white" }}>
                            Application Login
                        </Link>
                    </div> */}
                </div>



            </div>
        </div>
    );
}
