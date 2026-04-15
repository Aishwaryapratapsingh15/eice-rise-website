import styles from "./Styles/banquet.module.css"

import { Link } from "react-router-dom"



import account from "../../assets/Hospitality/allPageIcon/Account.png"

import banquet from "../../assets/Hospitality/allPageIcon/Banquet.png"


import heroimg from "../../assets/pricing/suitHeroSection/banquetP.webp"


import { FaArrowRightLong } from "react-icons/fa6";
import FooterLower from "../../Components/Footer/FooterLower"

import { useEffect, useState } from "react"
import Certificate from "../../Components/Certificate/Certificate"



export default function Banquet() {



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
            serviceName: "BANQUET &",
            serviceName2: "BILLING",
            icon: banquet,
            path: "/banquet-billing",
            key: 3
        },

       

        {
            serviceName: "ACCOUNT & ",
            serviceName2: "FINANCE",
            icon: account,
            path: "/account-finance",
            key: 5
        },

        

        

        
    ]

    const whyToChooseUs = [
        {
            key: 1,
            title: "1. Enhanced Member Experience",
            description: "Provide a premium experience to members with tailored features."
        },
        {
            key: 2,
            title: "2. Operational Efficiency",
            description: "Simplify workflows with a consolidated set of modules designed specifically for clubs."
        },
        {
            key: 3,
            title: "3. Financial Accuracy",
            description: "Monitor and manage accounts with ease to ensure transparent and accurate financial records."
        },
        {
            key: 4,
            title: "4. Scalable Solution",
            description: "Whether you're running a single club or a chain of locations, the Club Suite adapts to your needs."
        }
    ];


    return (
        <>

            {isPhone && (<section className={`${styles.heroSectionHeadingPhone}`}>
                <span className="font2" style={{ color: "#01B0F1" }} >Banquet</span>    <span className="font3" style={{ color: "#012060" }} >Suite</span>
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
                <span className="font2" style={{ color: "#01B0F1" }} >Banquet</span>    <span className="font3" style={{ color: "#012060" }} >Suite</span>
            </section>)}



            <section className={`${styles.overviewSection}`}>
                <div className={`${styles.overviewBox} globalBlueOverviewSection`}>


                    {/* <div className={`${styles.overviewEyeImgSize}`}>
                        <img style={{ width: "100%" }} src={eyeImg} alt="" />
                    </div> */}

                    <div className={`${styles.overviewPara} font1`}>

                        The <strong className="font2">Banquet Suite is perfect for venues hosting events of all sizes</strong> . Manage event <strong className="font2">bookings, billing, and financial records</strong>  seamlessly with this dedicated suite, ensuring client satisfaction every time.

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
                    <div className={`${styles.chooseUsHeading} font3`}>Why Choose Banquet Suite ?</div>


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
