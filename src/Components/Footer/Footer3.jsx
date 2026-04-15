import styles from "./footer.module.css"
import footerRoomLaptop from "../../assets/insidePages/pos/posPage/FooterPos.webp"

import { FaArrowRightLong } from "react-icons/fa6";


import logo from '../../assets/logo/logo.svg';


import { FaDiscord } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer3() {

    const navItems = [
        'Home',
        'About Us',
        'Products',
        'Room Booking',
        'Dining (POS)',
        'Banquet & Billing',
        'Membership Portal',
        'Accounts & Finance',
        'Pricing',
        'Blogs'
    ];

    return (
        <>

            <div  className={`${styles.footerMainBoxUpper} `}>

                <div style={{ width: "50%" }}>

                    <div  >
                        {/* <span style={{ fontSize: "46px" }} className="font2 blueTextGlobalClass" > "Streamline <span className="font1" style={{ color: "black"  , fontWeight : "600"}}> bookings 
                        effortlessly"</span> 
                        
                        </span> */}

                        <div style={{ fontSize: "46px" }}> <span className="font2 blueTextGlobalClass">"Revolutionize </span> 
                        <span style={{fontWeight : "700"}} className="font1"> your dining</span>  </div>
                        <div style={{ fontSize: "46px"  , fontWeight : "700"}} className="font1">experience."</div>
                    </div>



                    <div className={`${styles.demoButton} font1`}>
                        <div > Request a Demo </div>
                        <div className={`${styles.demoArrowButton}`}> <FaArrowRightLong /></div>
                    </div>

                </div>

                <div className={`${styles.footerLaptopImg}`} >
                    <img style={{ width: "100%" }} src={footerRoomLaptop} alt="" />
                </div>

            </div>


          



            <div className={`${styles.footerNavigationBox}`}>

<div className={`${styles.footerInnerBox} globalSectionSize`}>

    <div className={`${styles.eiceLogoAndSocialMediaBox} font1 `}>

        <div>
            <img className={styles.logoWhite} src={logo} alt="" />
        </div>

        <div className={`${styles.footerParagraph}`}>
            Delivering innovative ERP solutions since 2010. Simplifying operations, enhancing efficiency, and empowering businesses worldwide.
        </div>

        <div style={{ fontWeight: "600", marginTop: "20px" }}>
            Follow us

            <div style={{ display: "flex", gap: "0px 20px", marginTop: "15px" }}>

                <div>
                    <FaLinkedin size={30} className="blueTextGlobalClass" />
                </div>

                <div>
                    <FaSquareXTwitter size={30} className="blueTextGlobalClass" />
                </div>

            </div>
        </div>



    </div>




    <div style={{ color: "white" }} >

        <div style={{ fontWeight: "bold" }} className="blueTextGlobalClass font1">Get In Touch</div>

        <div className={`${styles.footerPoints}`}>

            <div>

                <div className={`${styles.footerPointsSubheading} font1`}>Email :</div>
                <div className="font4">info@eicetechnology.com</div>

            </div>
            <div>

                <div className={`${styles.footerPointsSubheading} font1 `}>Phone no :</div>
                <div className="font4"> 0120 435 5910</div>

            </div>
            <div>

                <div className={`${styles.footerPointsSubheading} font1`}>Address (India) :</div>
                <div className="font4">B-8 Second Floor   </div>
                <div className="font4"> Sec-60, Noida 201301</div>

            </div>
            <div>

                <div className={`${styles.footerPointsSubheading} font1`}>Address (USA) :</div>
                <div className="font4">440 Cobia Drive, #901 </div>
                <div className="font4">katy, Texas 77494</div>

            </div>


        </div>
    </div>

</div>
</div>




<div className={`${styles.copyRightSectionBox} font4  `}  >
<div className={`${styles.copyRightSectionInnerBox} globalSectionSize `}>
    <div >
        ©2024 EICE Technologies Pvt. Ltd. All rights reserved.
    </div>

    <div>
        Terms & Conditions
    </div>
</div>


</div>






        </>
    )
}
