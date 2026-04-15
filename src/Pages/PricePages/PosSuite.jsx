import styles from "./Styles/posSuite.module.css"



import { Link } from "react-router-dom"


import account from "../../assets/Hospitality/allPageIcon/Account.png"
import pos from "../../assets/Hospitality/allPageIcon/POS.png"

import heroimg from "../../assets/pricing/suitHeroSection/posP.webp"
import { useEffect, useState } from "react"
import { FaArrowRightLong } from "react-icons/fa6";
import FooterLower from "../../Components/Footer/FooterLower"
import Certificate from "../../Components/Certificate/Certificate"


export default function PosSuite() {



    const [isPhone, setIsPhone] = useState(window.innerWidth <= 440);

    useEffect(() => {
        const handleResize = () => {
            setIsPhone(window.innerWidth <= 440); // Update based on screen size
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

     const services = [
          
   
           {
               serviceName: "DINING",
               serviceName2 : "(POS)",
               icon: pos,
               path: "/pos-dining",
               key: 2
           },
   
          
   
           {
               serviceName: "ACCOUNT & ",
               serviceName2 : "FINANCE" ,
               icon: account,
               path: "/account-finance",
               key: 5
           },
   
           
   
           
       ]

    const whyToChooseUs = [
        {
            key: "streamlined-transactions",
            title: "1. Streamlined Transactions",
            description: "Speed up billing processes with intuitive POS systems."
        },
        {
            key: "financial-precision",
            title: "2. Financial Precision",
            description: "Ensure accurate and up-to-date financial management for your business."
        },
        {
            key: "scalability",
            title: "3. Scalability",
            description: "Supports businesses of all sizes with easy integration and customization options."
        }
    ];

    return (
        <>
            {isPhone && (<section className={`${styles.heroSectionHeadingPhone}`}>
                <span className="font2" style={{ color: "#01B0F1" }} >POS</span>    <span className="font3" style={{ color: "#012060" }} >Suite</span>
            </section>)}




            {isPhone ? (<section className={`${styles.heroImgSectionPhone}`}>
                <div className={`${styles.heroImgBoxPhone}`}>
                    {/* <img style={{ width: "100%" }} src={heroimg} alt="banquet Suite" /> */}
                </div>
            </section>) : (<section className={`${styles.heroImgSection}`}>
                <div className={`${styles.heroImgBox}`}>
                    <img style={{ width: "100%" }} src={heroimg} alt="banquet Suite" />
                </div>
            </section>)}


            {!isPhone && (<section className={`${styles.heroSectionHeading}`}>
                <span className="font2" style={{ color: "#01B0F1" }} >POS</span>    <span className="font3" style={{ color: "#012060" }} >Suite</span>
            </section>)}


            <section className={`${styles.overviewSection}`}>
                <div className={`${styles.overviewBox} globalBlueOverviewSection`}>


                    {/* <div className={`${styles.overviewEyeImgSize}`}>
                        <img style={{ width: "100%" }} src={eyeImg} alt="" />
                    </div> */}

                    <div className={`${styles.overviewPara} font1`}>

                        The POS Suite is tailored for <strong className="font2">seamless point-of-sale operations and robust financial oversight</strong> . Perfect for businesses requiring streamlined billing and real-time transaction tracking, this suite ensures  <strong className="font2">operational efficiency and accurate financial management</strong> .


                    </div>

                </div>
            </section>


            <section className={`${styles.section2} `}>



                <div className={`${styles.moduleboxAndHeading}  globalSectionSize `} >

                    <div className={`${styles.moduleIncludedHeading} font4`}>Modules Included</div>

                    <div className={`${styles.servicesBox} `}>


                        {services.map((item) =>
                        (
                            <Link className="linkClass" key={item.key} to={item.path}>

                                <div className={`${styles.iconAndTextBox} `}>

                                    <div className={styles.imgBox} >
                                        <img src={item.icon} alt="" />
                                    </div>
                                    <div className={`${styles.serviceName} font1`}>
                                                                            <div>  {item.serviceName}</div>
                                                                            <div>  {item.serviceName2}</div>
                                    
                                                                        </div>

                                </div>

                            </Link>

                        ))}
                    </div>

                </div>






            </section>



            <section className={`${styles.requestDemoBtn}`}>

                <Link to={"/form"} className="linkClass">
                    <div style={{ display: "flex", justifyContent: "center" }} className="globalSectionSize">
                        <div className={`${styles.demoButton} font1`}>
                            <div > Request for Pricing </div>
                            <div className={`${styles.demoArrowButton}`}> <FaArrowRightLong /></div>
                        </div>

                    </div>
                </Link>

            </section>


            <section>
                <div className={`${styles.whyChooseSection} globalSectionSize`}>
                    <div className={`${styles.chooseUsHeading} font3`}>Why Choose POS Suite ?</div>
                    <div className={`${styles.titleAndDescBox}`}>

                        {whyToChooseUs.map((item) =>

                            <div className="font4" key={item.key} >

                                <span className={`${styles.titleHeading}`}>{item.title} : </span>
                                <span className={`${styles.titleDesc}`}>{item.description}</span>


                            </div>
                        )}


                    </div>
                </div>

            </section>

            <div>
                <Certificate/>
                <FooterLower />
            </div>

        </>
    )
}
