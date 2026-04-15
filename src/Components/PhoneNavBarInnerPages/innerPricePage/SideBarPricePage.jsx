


import styles from "./sideBarPricePage.module.css"

import { Link } from "react-router-dom"

import clubIcon from "../../../assets/DropDown/pricingSuites/clubIcon.png"
import enterpriseIcon from "../../../assets/DropDown/pricingSuites/enterIcon.png"
import inventaryIcon from "../../../assets/DropDown/pricingSuites/inventaryIcon.png"
import posIcon from "../../../assets/DropDown/pricingSuites/posIcon.png"
import frontDeskIcon from "../../../assets/DropDown/pricingSuites/frontIcon.png"
import banquetIcon from "../../../assets/DropDown/pricingSuites/banquetIcon.png"
import vanillaIcon from "../../../assets/DropDown/pricingSuites/vanillaIcon.png"


import { IoIosArrowForward } from "react-icons/io";
import RequestButton from "../../requestDemoButton/RequestButton"
import ContactUs from "../../contactUs/ContactUs"
import { useDispatch } from "react-redux"
import { setShowSideBarPge, toggleNavBarIcon, toggleSideBar } from "../../../redux/slice"


export default function SideBarPricePage() {

    const priceItem1 = [

        {
            key: 1,
            title: "Enterprise",
            title2: "Suite",
            description: "Optimize operations with full-scale control",
            icon: enterpriseIcon,
            path: "enterprise-suite",
        },
        {
            key: 2,
            title: "Club",
            title2: "Suite",
            description: "Engage members with seamless management",
            icon: clubIcon,
            path: "club-suite",

        },

        {
            key: 3,
            title: "Inventory",
            title2: "Suite",
            description: "Simplify inventory and procurement workflows",
            icon: inventaryIcon,
            path: "inventory-suite",
        },
        {
            key: 4,
            title: "POS",
            title2: "Suite",
            description: "Streamline sales and transactions effortlessly",
            icon: posIcon,
            path: "pos-suite",
        },

        {
            key: 5,
            title: "Front Desk",
            title2: "Suite",
            description: "Elevate guest experiences from check-in to billing",
            icon: frontDeskIcon,
            path: "frontdesk-suite",
        },
        {
            key: 6,
            title: "Banquet",
            title2: "Suite",
            description: "Manage events and finances flawlessly",
            icon: banquetIcon,
            path: "banquet-suite",

        },
        {
            key: 7,
            title: "Vanilla",
            title2: "Suite",
            description: "All-in-one solution for versatile operations",
            icon: vanillaIcon,
            path: "vanilla-suite",
        },


    ]



    const dispatch = useDispatch()


    const handleHomeButton = () => {
        dispatch(setShowSideBarPge("Home"))

    }

    const handlePriceItems = () => {
        dispatch(toggleSideBar())

    }

    const handleRequestBtn = () => {
        dispatch(toggleSideBar())

    }

    return (
        <>

            <div className={`${styles.mainPriceContainer}`}>



                <div className={`${styles.breadScrum}`} style={{ padding: "0px 20px" }}>

                    <div onClick={handleHomeButton}>
                        Home
                    </div>

                    <div className={`${styles.arrowSign}`}>
                        <IoIosArrowForward />
                    </div>

                    <div style={{ fontWeight: "600" }}>
                        Pricing
                    </div>

                </div>

                <div className={`${styles.priceNavItemContainer}`} >



                    <div className={`${styles.priceNavItemSubContainer} font1`}>

                        {priceItem1.map((item) =>
                        (
                            <Link className="linkClass" key={item.key} to={item.path}>
                                <div onClick={handlePriceItems} className={`${styles.priceDetailBox}`}>
                                    <div className={`${styles.priceIcon}`}>
                                        <img className={`${styles.iconSize}`} src={item.icon} alt={item.title} />
                                    </div>
                                    <div className={`${styles.titleHeading} font3`}>

                                        <div>{item.title} {item.title2}</div>

                                    </div>

                                </div>
                            </Link>

                        ))}

                    </div>




                </div>
                <div className={`${styles.requestonButton}`} onClick={handleRequestBtn}  >
                    <RequestButton />
                </div>


                <div className={`${styles.ContactUsBox}`}>
                    <ContactUs />
                </div>


            </div>

        </>
    )
}












