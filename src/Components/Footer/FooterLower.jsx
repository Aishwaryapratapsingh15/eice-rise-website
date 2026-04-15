import styles from "./footer.module.css"
import logo from '../../assets/logo/logo.svg';

import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

import { FaInstagram } from "react-icons/fa6";

import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";


import { IoLogoWhatsapp } from "react-icons/io";
import { MdPhone } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import cmi from "../../assets/cert/cmi3.png"




export default function FooterLower() {
            
    return (

        <>
            <div className={`${styles.footerNavigationBox}`}>

                <div className={`${styles.footerInnerBox} globalSectionSize`}>

                    <div className={`${styles.eiceLogoAndSocialMediaBox} font1 `}>

                        <div  className={styles.whiteLogoBox}>
                            <img className={styles.whiteLogo} src={logo} alt="eice tech" />
                            <img className={styles.whiteLogo} src={cmi} alt="eice tech" />
                        </div>

                        <div className={`${styles.footerParagraph} `}>
                            Delivering innovative ERP solutions since 2010. Simplifying operations, enhancing efficiency, and empowering businesses worldwide.
                        </div>

                        <div className={`${styles.socialMediaSection}`}>
                            <div className={`${styles.followUsHeading}`}>
                                Follow us
                            </div>


                            <div className={`${styles.socialMediaContainer}`}>

                                <div>
                                    <Link to={"https://www.linkedin.com/company/eice-technology/posts/?feedView=all&viewAsMember=true"}>
                                        <FaLinkedin size={30} className="blueTextGlobalClass" />
                                    </Link>

                                </div>

                                <div>
                                    <Link to={"https://twitter.com/EiceTech24"}>
                                        <FaSquareXTwitter size={30} className="blueTextGlobalClass" />
                                    </Link>

                                </div>

                                <div>
                                    <Link to={"https://www.instagram.com/eicetechnology24/?next=%2F"}>
                                        <FaInstagram size={30} className="blueTextGlobalClass" />
                                    </Link>

                                </div>

                                <div>
                                    <Link to={"https://www.facebook.com/Eicetechnology/"}>
                                        <FaFacebookSquare size={30} className="blueTextGlobalClass" />
                                    </Link>

                                </div>



                            </div>
                        </div>



                    </div>








                    <div className={`${styles.contactContainer}`}>

                        <div className={`${styles.getInTouchBox} font1`}>

                            <div className={`${styles.getInTouchHeading} font1`}> GET IN TOUCH :</div>

                            {/* <div className={`${styles.logoAndDetailBox}`}>
                                <div > <IoLogoWhatsapp /> </div>
                                <div className={`${styles.contactDetails}`} style={{paddingBottom : "4px"}}> +91-987185200</div>
                            </div> */}

                            <div className={`${styles.logoAndDetailBox}`}>

                                <div>
                                    <MdPhone />
                                </div>
                                <div className={`${styles.contactDetails}`} style={{ paddingBottom: "4px" }}>
                                    +91 120 311 0836
                                </div>
                            </div>
                            <div className={`${styles.logoAndDetailBox}`}>
                                <div>
                                    <IoMail />
                                </div>

                                <div className={`${styles.contactDetails}`} style={{ paddingBottom: "4px" }}>
                                    info@eicetechnology.com
                                </div>
                            </div>



                        </div>

                        {/* <div className={`${styles.addressContainer}`}>

                            <div className={`${styles.indiaOffice}`}>

                                <div className={`${styles.countryName} font1`}>
                                    INDIA
                                </div>

                                <div className={`${styles.location1} font1`}>
                                6th floor, Platina Heights,C-24, Sector 62, Noida, Uttar Pradesh 201301
                                </div>

                            </div>

                            <div className={`${styles.usOffice}`}>

                                <div>
                                    <div className={`${styles.countryName} font1`} >
                                        UNITED
                                    </div>
                                    <div className={`${styles.countryName } font1`} >
                                        STATES
                                    </div>
                                </div>


                                <div className={`${styles.location2} font1`} >
                                    440 Cobia Drive
                                    #901 Katy , Texas
                                    77494
                                </div>

                            </div>

                        </div> */}

                        <div className={`${styles.addressFontSize} font1`} style={{display : "flex" , flexDirection : "column" , rowGap : "1rem" , marginTop : "0.7rem"}}>

                            <div style={{ display: "flex",  flexDirection: "column" }}>
                                <div style={{fontWeight : "600"}}>
                                    INDIA OFFICE :
                                </div>

                                <div title="click on address to see in google map">
                                    <a   className="linkClassWhite" target="_blank" href="https://maps.app.goo.gl/zFBJBfiQLJ9KkSkD7">6th floor, Platina Heights , C-24, Sector 62, Noida, Uttar Pradesh 201301</a>
                                    {/* <Link className="linkClassWhite" to={"https://maps.app.goo.gl/zFBJBfiQLJ9KkSkD7"}>6th floor, Platina Heights , C-24, Sector 62, Noida, Uttar Pradesh 201301</Link> */}
                                   
                                </div>
                            </div>

                            <div style={{ display: "flex",  flexDirection: "column" }}>
                                <div style={{fontWeight : "600"}}>
                                    UNITED STATES OFFICE :
                                </div>

                                <div>
                                   11011 Richmond Ave, Suite 715, Houston, TX 77042
                                </div>
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

                    <div style={{ fontWeight: "bold" }}>
                        Terms & Conditions
                    </div>
                </div>


            </div>
        </>
    )
}
