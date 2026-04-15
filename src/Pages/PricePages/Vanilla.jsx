import styles from "./Styles/vanilla.module.css"



import { Link } from "react-router-dom"


import pos from "../../assets/Hospitality/allPageIcon/POS.png"
import banquet from "../../assets/Hospitality/allPageIcon/Banquet.png"

import food from "../../assets/Hospitality/allPageIcon/Food.png"
import inentry from "../../assets/Hospitality/allPageIcon/store.png"


import heroimg from "../../assets/pricing/suitHeroSection/vanillaP.webp"

import { useEffect, useState } from "react"
import { FaArrowRightLong } from "react-icons/fa6";
import FooterLower from "../../Components/Footer/FooterLower"
import Certificate from "../../Components/Certificate/Certificate"


export default function Vanilla() {


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
            serviceName2: "(POS)",
            icon: pos,
            path: "/pos-dining",
            key: 2
        },

        {
            serviceName: "BANQUET &",
            serviceName2: "BILLING",
            icon: banquet,
            path: "/banquet-billing",
            key: 3
        },

       

        

        {
            serviceName: "USER STORE & INVENTORY",
            icon: inentry,
            path: "/userstore-inventry",
            key: 8
        },

       

        {
            serviceName: "FOOD & BEVERAGE COST ANALYSIS",
            icon: food,
            path: "/food-cost",
            key: 10
        }
    ]

    const whyToChooseUs = [
        {
            key: "comprehensive-functionality",
            title: "1. Comprehensive Functionality",
            description: "A one-stop solution for all essential business operations."
        },
        {
            key: "efficiency-boost",
            title: "2. Efficiency Boost",
            description: "Automates processes for better productivity and time savings."
        },
        {
            key: "cost-optimization",
            title: "3. Cost Optimization",
            description: "Helps reduce overheads and improve profitability through actionable insights."
        }
    ];

    return (
        <>
            {isPhone && (<section className={`${styles.heroSectionHeadingPhone}`}>
                <span className="font2" style={{ color: "#01B0F1" }} >Vanilla</span>    <span className="font3" style={{ color: "#012060" }} >Suite</span>
            </section>
            )}

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
                <span className="font2" style={{ color: "#01B0F1" }} >Vanilla</span>    <span className="font3" style={{ color: "#012060" }} >Suite</span>
            </section>)}


            <section className={`${styles.overviewSection}`}>
                <div className={`${styles.overviewBox} globalBlueOverviewSection`}>


                    {/* <div className={`${styles.overviewEyeImgSize}`}>
                        <img style={{ width: "100%" }} src={eyeImg} alt="" />
                    </div> */}

                    <div className={`${styles.overviewPara} font1`}>
                        The Vanilla Suite is a <strong className="font2">versatile and comprehensive suite</strong>  that  <strong className="font2"> empowers businesses with inventory control, financial management</strong>, procurement, and operational cost tracking. <strong className="font2">Ideal for diverse industries</strong> , it offers the perfect blend of essential modules for efficient operations.

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


            <section className={`${styles.whyChooseSection} globalSectionSize`}>

                <div className={`${styles.chooseUsHeading} font3`}>Why Choose Vanilla Suite ?</div>

                <div className={`${styles.titleAndDescBox}`} >

                    {whyToChooseUs.map((item) =>

                        <div className="font4" key={item.key} >

                            <span className={`${styles.titleHeading}`}>{item.title} : </span>
                            <span className={`${styles.titleDesc}`}>{item.description}</span>


                        </div>
                    )}


                </div>

            </section>

            <div>
                <Certificate/>
                <FooterLower />
            </div>

        </>
    )
}

