import styles from "./Styles/inventary.module.css"



import { Link } from "react-router-dom"



import inentry from "../../assets/Hospitality/allPageIcon/store.png"

import vendor from "../../assets/Hospitality/allPageIcon/purchase.png"


import heroimg from "../../assets/pricing/suitHeroSection/inventaryP.webp"
import { useEffect, useState } from "react"
import { FaArrowRightLong } from "react-icons/fa6";
import FooterLower from "../../Components/Footer/FooterLower"
import Certificate from "../../Components/Certificate/Certificate"


export default function Inventary() {


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
              serviceName: "USER STORE & INVENTORY",
              icon: inentry,
              path: "/userstore-inventry",
              key: 8
          },
  
          {
              serviceName: "PURCHASE & VENDOR PORTAL",
              icon: vendor,
              path: "/purchase-vendor",
              key: 9
          },
  
          
      ]

    const whyToChooseUs = [
        {
            key: "enhanced-control",
            title: "1. Enhanced Control",
            description: "Monitor and manage inventory levels with precision, ensuring smooth operations."
        },
        {
            key: "optimized-procurement",
            title: "2. Optimized Procurement",
            description: "Strengthen vendor relationships and streamline the purchase process to save time and reduce costs."
        },
        {
            key: "real-time-updates",
            title: "3. Real-Time Updates",
            description: "Stay informed with live inventory status and automated notifications for low stock or delayed deliveries."
        },
        {
            key: "cost-effective",
            title: "4. Cost-Effective",
            description: "Minimize waste, reduce overstocking, and ensure resource allocation aligns with business needs."
        }
    ];

    return (
        <>
            {isPhone && (<section className={`${styles.heroSectionHeadingPhone}`}>
                <span className="font2" style={{ color: "#01B0F1" }} >Inventory</span>    <span className="font3" style={{ color: "#012060" }} >Suite</span>
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


{!isPhone && ( <section className={`${styles.heroSectionHeading}`}>
                <span className="font2" style={{ color: "#01B0F1" }} >Inventory</span>    <span className="font3" style={{ color: "#012060" }} >Suite</span>
            </section>)}

           

            <section className={`${styles.overviewSection}`}>
                <div className={`${styles.overviewBox} globalBlueOverviewSection`}>


                    {/* <div className={`${styles.overviewEyeImgSize}`}>
                        <img style={{ width: "100%" }} src={eyeImg} alt="" />
                    </div> */}

                    <div className={`${styles.overviewPara} font1`}>

                        The Inventory Suite is designed to <strong className="font2">streamline stock and supply chain management</strong> , ensuring businesses maintain optimal inventory levels while fostering strong vendor relationships. This suite is ideal for organizations looking to <strong className="font2">enhance operational efficiency and minimize waste</strong>  through advanced tracking and management tools.

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
                    <div className={`${styles.chooseUsHeading} font3`}>Why Choose Inventory Suite ?</div>
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

