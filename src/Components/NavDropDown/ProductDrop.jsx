import styles from "./styles/productdrop.module.css"
import { Link } from "react-router-dom"
import { FaArrowRightLong } from "react-icons/fa6";


// icon drop down

import account from "../../assets/DropDown/account.png"
import banwuet from "../../assets/DropDown/banquet.png"
import dinning from "../../assets/DropDown/dinning.png"
import food from "../../assets/DropDown/food.png"
import inventary from "../../assets/DropDown/invent.png"
import member from "../../assets/DropDown/member.png"
import pay from "../../assets/DropDown/pay.png"
import room from "../../assets/DropDown/room.png"
import vendor from "../../assets/DropDown/vendor.png"
import emp from "../../assets/DropDown/emp.png"



export default function ProductDrop() {


    const product1 = [
        {
            key: 1,
            title: "Room Booking",
            description: "Streamline guest reservations",
            icon: room,
            path: "room-booking",

        },
        {
            key: 2,
            title: "Dining (POS)",
            description: "Simplify your dining operations",
            icon: dinning,
            path: "pos-dining",
        },
        {
            key: 3,
            title: "Banquet & Billing",
            description: "Manage events with ease",
            icon: banwuet,
            path: "banquet-billing",
        },
        {
            key: 4,
            title: "Member Suite",
            description: "Build a thriving member community",
            icon: member,
            path: "member-suite",
        },

    ]

    const product2 = [
        {
            key: 5,
            title: "Accounts & Finances",
            description: "Gain full financial control",
            icon: account,
            path: "account-finance",
        },
        {
            key: 6,
            title: "Employee Suite",
            description: "Empower with centralized access",
            icon: emp,
            path: "employee-suite",

        },
        {
            key: 7,
            title: "PayRoll",
            description: "Simplify payroll processing",
            icon: pay,
            path: "payroll",
        },
        {
            key: 8,

            title: "Purchase & Vendor Portal",
          
             description: "Optimize vendor management",
            icon: vendor,
           
            path: "purchase-vendor",
        },

    ]

    const product3 = [
        {
            key: 9,
            title: "User, Store & Inventory",
             description: "Manage inventory effortlessly",
            icon: inventary,
             path: "userstore-inventry",
        },
        {
            key: 10,
            title: "Food & Beverage Cost Analysis",
            description: "Boost profit accuracy",
            icon: food,
            path: "food-cost",
        },

    ]



    return (
        <>

            <div className={`${styles.mainDropDownContainer}`}>

                <div className={`${styles.productConatiner} font1`}>

                    {product1.map((item) =>
                    (
                        <Link  className="linkClass" key={item.key} to={item.path}>
                            <div  className={`${styles.productDetailBox}`}>
                                <div className={`${styles.productIcon}`}>
                                    <img className={`${styles.iconSize}`} src={item.icon} alt={item.title} />
                                </div>
                                <div className={`${styles.titleHeading} font3`}>{item.title}</div>
                                <div className={`${styles.titeDesc} font1`} >{item.description} </div>
                            </div>
                        </Link>

                    ))}

                </div>

                <div className={`${styles.productConatiner} font1`} >

                    {product2.map((item) =>
                    (

                        <Link className="linkClass" key={item.key} to={item.path}>
                            <div className={`${styles.productDetailBox}`} >
                                <div className={`${styles.productIcon}`}>
                                    <img className={`${styles.iconSize}`} src={item.icon} alt={item.title} />
                                </div>
                                <div className={`${styles.titleHeading} font3`}>{item.title}</div>
                                <div className={`${styles.titeDesc} font1`} >{item.description} </div>
                            </div>
                        </Link>

                    ))}

                </div>

                <div className={`${styles.productConatiner} `}>

                    {product3.map((item) =>
                    (
                        <Link className="linkClass"  key={item.key} to={item.path}>
                            <div  className={`${styles.productDetailBox}`}>
                                <div className={`${styles.productIcon}`} >
                                    <img className={`${styles.iconSize}`} src={item.icon} alt={item.title} />
                                </div>
                                <div className={`${styles.titleHeading} font3`}>{item.title}</div>
                                <div className={`${styles.titeDesc} font1`} >{item.description} </div>
                            </div>
                        </Link>

                    ))}

                </div>


                <div className={`${styles.requestDemo} font1 `}>
                    <div>
                        <Link to={"/form"} style={{ textDecoration: "none", color: "white" }}>
                            Request a Demo
                        </Link>
                    </div>

                    <div className={`${styles.arrowStyle} font2`} > <FaArrowRightLong /></div>

                </div>


            </div>

        </>
    )
}
