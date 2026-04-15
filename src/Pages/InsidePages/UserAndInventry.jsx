import style from "./Styles/userAndInventry.module.css"


import au from "../../assets/insidePages/inventry/section2icon/au.png"
import ir from "../../assets/insidePages/inventry/section2icon/ir.png"
import sv from "../../assets/insidePages/inventry/section2icon/sv.png"


import heroImg from "../../assets/allHero/new/inventaryH.webp"


import { Link } from "react-router-dom"


import ara from "../../assets/insidePages/inventry/featuresIcon/ara.png"
import cum from "../../assets/insidePages/inventry/featuresIcon/cum.png"
import esm from "../../assets/insidePages/inventry/featuresIcon/esm.png"
import mls from "../../assets/insidePages/inventry/featuresIcon/mls.png"
import rtic from "../../assets/insidePages/inventry/featuresIcon/rtic.png"
import serpi from "../../assets/insidePages/inventry/featuresIcon/serpi.png"







import co from "../../assets/insidePages/inventry/benefits/co.webp"
import iic from "../../assets/insidePages/inventry/benefits/iic.webp"
import oe from "../../assets/insidePages/inventry/benefits/oe.webp"
import rti from "../../assets/insidePages/inventry/benefits/rti.webp"
import s from "../../assets/insidePages/inventry/benefits/s.webp"



import laptop from "../../assets/section3Laptop/store.webp"

import Accordion from "../../Components/Accordian/Accordian.jsx"

import FooterUpperPart from "../../Components/Footer/FooterUpperPart.jsx"
import FooterLower from "../../Components/Footer/FooterLower.jsx"

import { useEffect, useState } from "react"

import { FaArrowRightLong } from "react-icons/fa6";
import Certificate from "../../Components/Certificate/Certificate.jsx"

const params = new URLSearchParams(window.location.search);
const isEmbed = params.get("embed") === "true";

export default function UserAndInventry() {


    const [isPhone, setIsPhone] = useState(window.innerWidth <= 980);





    useEffect(() => {
        const handleResize = () => {
            setIsPhone(window.innerWidth <= 980); // Update based on screen size
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    const features = [
        {
            key: 1,
            heading: "Centralized User Management",
            desc: "Streamline user access store-wise with customizable roles and permissions.",
            img: cum,
            width: "64px"
        },
        {
            key: 2,
            heading: "Efficient Store Management",
            desc: "Manage multiple stores from one dashboard, tracking performance, inventory, and sales trends for optimized success.",
            img: esm,
            width: "65px"
        },
        {
            key: 3,
            heading: "Real-Time Inventory Control",
            desc: "Get live updates on inventory levels with automated synchronization and low stock alerts to ensure smooth operations.",
            img: rtic,
            width: "54px"
        },
        {
            key: 4,
            heading: "Advanced Reporting and Analytics",
            desc: "Leverage real-time, customizable reports to gain valuable insights into sales, stock turnover, and user activities.",
            img: ara,
            width: "65px"
        },
        {
            key: 5,
            heading: "Multi-Location Support",
            desc: "Manage multiple stores from a central platform, transfer stock between locations, and monitor regional inventory needs.",
            img: mls,
            width: "65px"
        },
        {
            key: 6,
            heading: "Seamless ERP Integration",
            desc: "Sync data across your systems automatically, reducing manual data entry and enhancing operational efficiency.",
            img: serpi,
            width: "63px"
        }
    ];





    const benefits = [
        {
            key: 1,
            heading: "Operational Efficiency",
            desc: "Reduce manual errors, accelerate processes, and free up resources for strategic tasks.",
            img: oe,
        },
        {
            key: 2,
            heading: "Real-Time Insights",
            desc: "Get instant visibility into inventory, store performance, and user activity to make faster decisions.",
            img: rti,
        },
        {
            key: 3,
            heading: "Cost Optimization",
            desc: "Automate restocking and inventory updates to minimize costs, prevent overstocking, and boost profit margins.",
            img: co,

        },
        {
            key: 4,
            heading: "Scalability",
            desc: "Easily manage multiple locations as your business grows with customizable configurations and consistent performance.",
            img: s,
        },
        {
            key: 5,
            heading: "Improved Inventory Control",
            desc: "Accurate, automated inventory management ensures real-time stock updates, enhancing the customer experience.",
            img: iic,
        },


    ];


    const query = [
        {
            key: 1,
            question: "Q : How does the User and Store Inventory Management Portal streamline inventory management?",
            answer: "A : The portal offers real-time inventory updates, automates restocking, and provides centralized visibility of inventory across multiple store locations."
        },
        {
            key: 2,
            question: "Q : Does the system allow management of multiple store locations?",
            answer: "A : Yes, businesses can manage multiple stores from a single platform, transferring stock between locations and tracking regional inventory needs."
        },
        {
            key: 3,
            question: "Q : How does the portal help in tracking store performance?",
            answer: "A : It provides real-time reports on sales, stock turnover, and user activity, giving businesses the insights needed to optimize operations and boost performance."
        },
        {
            key: 4,
            question: "Q : Can I integrate the system with other ERP modules?",
            answer: "A : Yes, the portal seamlessly integrates with other ERP systems, reducing manual data entry and ensuring smooth data flow across functions."
        },
        {
            key: 5,
            question: "Q : How does the portal help reduce inventory costs?",
            answer: "A : The portal automates inventory updates, prevents overstocking, and optimizes restocking processes, reducing unnecessary costs and improving profit margins."
        }
    ];



    const footerUpperText = {

        text1: "Track inventory",
        text2: "",
        text3: "with precision using our robust management system",
        img: laptop
    }











    return (
        <>


            {isPhone ? (
                <section className={`${style.heroSectionConatinerPhone}  `}>

                    <div className={`${style.contentConatinerPhone}`}>

                        <div className={`${style.headingBoxPhone} font4 `}>
                            <div className={`${style.mainHeadingPhone}`}>
                                <span style={{ color: "#012060" }} >USER STORE</span><span style={{ color: "#01B0F1" }} > & INVENTORY</span>
                            </div>
                            <div className={`${style.mainParaPhone}`}>
                                Manage inventory effortlessly with real-time tracking, stock updates, and streamlined procurement processes
                            </div>


                        </div>

                        <div className={`${style.herosectionImgBoxPhone}`}>
                            <img style={{ width: "100%" }} src={heroImg} alt={"room booking"} />
                        </div>


                    </div>

                </section>) : (<section className={`${style.heroSectionConatiner}  `}>


                    <div className={`${style.fadeBackgroundConatiner}`}>

                        <div className={`${style.contentConatiner}`}>

                            <div className={`${style.headingBox} font4 `}>
                                <div className={`${style.mainHeading}`}>
                                    <span style={{ color: "#012060" }} >USER STORE</span><span style={{ color: "#01B0F1" }} > & INVENTORY</span>
                                </div>
                                <div className={`${style.mainPara}`}>
                                    Manage inventory effortlessly with real-time tracking, stock updates, and streamlined procurement processes
                                </div>


                            </div>

                            <div className={`${style.herosectionImgBox}`}>
                                {/* <img style={{ width: "100%" }} src={main} alt="" /> */}
                            </div>

                        </div>

                    </div>

                </section>)}





            <section style={{ backgroundColor: "#f5f5f5" }}>
                <div className={`${style.section2} font4 globalSectionSize`}>








                    <div className={style.section2IconAndName}>

                        <div className={`${style.section2Icon}`}>
                            <img style={{ width: "100%" }} src={sv} alt="" />
                        </div>

                        <div className={`${style.iconName}`}>


                            <div>
                                Stock
                            </div>

                            <div>
                                Visibility
                            </div>
                        </div>

                    </div>

                    <div className={style.section2IconAndName}>
                        <div className={`${style.section2Icon}`}>
                            <img style={{ width: "100%" }} src={au} alt="" />
                        </div>

                        <div className={`${style.iconName} `}>

                            <div>Automated</div>
                            <div>Updates</div>
                        </div>
                    </div>


                    <div className={style.section2IconAndName}>

                        <div className={`${style.section2Icon}`}>
                            <img style={{ width: "100%" }} src={ir} alt="" />
                        </div>

                        <div className={`${style.iconName} `}>



                            <div>Inventory</div>
                            <div>Reports</div>

                        </div>
                    </div>



                </div>
            </section>



            <section>

                <div className={`${style.section3}`}>



                    <div className={`${style.blueBoxSetion3}`}>

                        <div className={`${style.laptopImgSection3}`}>
                            <div className={`${style.laptopImgBox}`} >
                                <img style={{ width: "100%" }} src={laptop} alt="" />
                            </div>
                        </div>


                        <div className={`${style.section3Para} font4`}>
                            <div className={`${style.paragraph}`}>

                                The User and Store Inventory Management Portal <strong className="font2">simplifies the management of users</strong>  who place requests to stores for issuing raw materials, store operator supplies the material as per user request across locations. It <strong className="font2">enhances visibility, automates tracking, and optimizes performance, helping businesses reduce costs and improve efficiency</strong>  .

                            </div>

                        </div>

                        {/* <div style={{overflow : "hidden"}} >
            <div className={`${style.section3Spiral}`}  >
                <img style={{width : "100%" }} src={spiral} alt="" />
            </div>
        </div> */}

                    </div>

                </div>
            </section>





            <section >
                <div className={`${style.section4} globalSectionSize`}>

                    <div className={`${style.keyFeatureHeading} font4`}>Key Features</div>

                    <div className={`${style.featureContainer}`}>

                        {features.map((item) =>
                        (
                            <div key={item.key} className={`${style.featureInnerBox} font4`}>

                                <div className={`${style.headingAndIconFeatures}`}>

                                    <div style={{ width: item.width }}>
                                        <img style={{ width: "100%" }} src={item.img} alt="" />
                                    </div>

                                    <div className={`${style.featureHeading}`}>
                                        <div>
                                            {item.heading}
                                        </div>
                                    </div>
                                    
                                </div>

                                <div className={`${style.featureDesc}`}>
                                    {item.desc}
                                </div>

                            </div>

                        ))}

                    </div>

                </div>
            </section>

            <section className={`${style.requestDemoBtn}`}>

                <Link style={{ color: "white" }} className="linkClass" to={"/form"}>
                    <div style={{ display: "flex", justifyContent: "center" }} className="globalSectionSize">
                        <div className={`${style.demoButton} font1`}>
                            <div > Request a Demo </div>
                            <div className={`${style.demoArrowButton}`}> <FaArrowRightLong /></div>
                        </div>

                    </div>
                </Link>


            </section>



            {/* <section style={{ background: "#f5f5f5" }} >
                <div className={`${style.section5} font4 globalSectionSize`}>


                    <div className={`${style.section5heading} font4`}>Benefits</div>
                    {benefits.map((item, index) =>
                    (

                        index % 2 === 0 ? (<div className='GlobalBenefitBox1'>


                            <div style={{ width: "25%" }}>
                                <img style={{ width: "100%" }} src={item.img} alt="" />
                            </div>

                            <div className='GlobalBenefitTextBox' >
                                <div className={`${style.innerHeadingBenifit}`}>{item.heading}</div>
                                <div className={`${style.innerDescBenifit}`}>{item.desc}</div>
                            </div>


                        </div>) : (<div className='GlobalBenefitBox2'>


                            <div style={{ width: "25%" }}>
                                <img style={{ width: "100%" }} src={item.img} alt="" />
                            </div>

                            <div className='GlobalBenefitTextBox' >
                                <div className={`${style.innerHeadingBenifit}`}>{item.heading}</div>
                                <div className={`${style.innerDescBenifit}`}>{item.desc}</div>
                            </div>


                        </div>)


                    ))}

                </div>
            </section> */}

            <section style={{ background: "#f5f5f5" }} >
                <div className={`${style.section5} font4 globalSectionSize`}>


                    <div className={`${style.benefitSectionHeading} font4`}>Benefits</div>
                    {benefits.map((item, index) =>
                    (

                        index % 2 === 0 ? (<div className='GlobalBenefitBox1'>


                            <div className="GlobalBenefitImgBox" >
                                <img style={{ width: "100%" }} src={item.img} alt="" />
                            </div>

                            <div className='GlobalBenefitTextBox' >
                                <div className={`${style.innerHeadingBenifit}`}>{item.heading}</div>
                                <div className={`${style.innerDescBenifit}`}>{item.desc}</div>
                            </div>


                        </div>) : (<div className='GlobalBenefitBox2'>


                            <div className="GlobalBenefitImgBox">
                                <img style={{ width: "100%" }} src={item.img} alt="" />
                            </div>

                            <div className='GlobalBenefitTextBox' >
                                <div className={`${style.innerHeadingBenifit}`}>{item.heading}</div>
                                <div className={`${style.innerDescBenifit}`}>{item.desc}</div>
                            </div>


                        </div>)


                    ))}

                </div>
            </section>



            <section >
                <div className={`${style.FAQsection} globalSectionSize font4`}>
                    <div className={`${style.FAQHeading}`}>Frequently Asked Questions</div>


                    <div className={style.FAQContainer}>
                        {query.map((item) => (
                            <Accordion key={item.key} question={item.question} answer={item.answer} />
                        ))}
                    </div>

                </div>
            </section>


            <div >
                <Certificate/>
                <FooterUpperPart text1={footerUpperText.text1} text2={footerUpperText.text2} text3={footerUpperText.text3} img={laptop} />
                {!isEmbed &&<FooterLower />}

            </div>

        </>
    )
}
