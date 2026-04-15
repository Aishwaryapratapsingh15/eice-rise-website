import style from "./Styles/pos.module.css"

import heroImg from "../../assets/allHero/new/posH.webp"
import icon1 from "../../assets/insidePages/pos/posPage/section3/icon1.png"
import icon2 from "../../assets/insidePages/pos/posPage/section3/icon2.png"
import icon3 from "../../assets/insidePages/pos/posPage/section3/icon3.png"

import { Link } from "react-router-dom"

// features
import ips from "../../assets/insidePages/pos/posPage/feature/ips.png"
import it from "../../assets/insidePages/pos/posPage/feature/it.png"
import kds from "../../assets/insidePages/pos/posPage/feature/kds.png"
import oc from "../../assets/insidePages/pos/posPage/feature/oc.png"
import plp from "../../assets/insidePages/pos/posPage/feature/plp.png"
import rtmm from "../../assets/insidePages/pos/posPage/feature/rtmm.png"
import rtsr from "../../assets/insidePages/pos/posPage/feature/rtsr.png"
import tm from "../../assets/insidePages/pos/posPage/feature/tm.png"
import ufi from "../../assets/insidePages/pos/posPage/feature/ufi.png"

// benifits

import b1 from "../../assets/insidePages/pos/posPage/benefit/b1.webp"
import b2 from "../../assets/insidePages/pos/posPage/benefit/b2.webp"
import b3 from "../../assets/insidePages/pos/posPage/benefit/b3.webp"
import b4 from "../../assets/insidePages/pos/posPage/benefit/b4.webp"
import b5 from "../../assets/insidePages/pos/posPage/benefit/b5.webp"



import laptop from "../../assets/section3Laptop/pos2.webp"
import Accordion from "../../Components/Accordian/Accordian.jsx"


import FooterLower from "../../Components/Footer/FooterLower.jsx"
import FooterUpperPart from "../../Components/Footer/FooterUpperPart.jsx"

import { useState, useEffect } from "react"

import { FaArrowRightLong } from "react-icons/fa6";
import Certificate from "../../Components/Certificate/Certificate.jsx"


const params = new URLSearchParams(window.location.search);
const isEmbed = params.get("embed") === "true";


export default function Pos() {


    const [isPhone, setIsPhone] = useState(window.innerWidth <= 980);





    useEffect(() => {
        const handleResize = () => {
            setIsPhone(window.innerWidth <= 980); 
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    const features = [
        {
            key: 1,
            heading: "User-Friendly Interface",
            desc: "Enjoy an intuitive, tablet-based POS system that allows staff to quickly and efficiently manage orders, reducing wait times and improving service quality.",
            img: ufi,
            width: "54px",
        },
        {
            key: 2,
            heading: "Real-Time Menu Management",
            desc: "Easily update the menu with daily specials, seasonal items, and pricing changes. Reflect these updates instantly across all devices to ensure consistent information.",
            img: rtmm,
            width: "54px",
        },
        {
            key: 3,
            heading: "Order Customization",
            desc: "Enable guests to customize their orders with specific preferences, such as dietary restrictions or ingredient substitutions, ensuring a personalized dining experience.",
            img: oc,
            width: "54px",
        },
        {
            key: 4,
            heading: "Table Management",
            desc: "Visually manage table assignments, seating, and reservations with a dynamic table layout. Optimize table turnover and seating arrangements for better service flow.",
            img: tm,
            width: "54px",
        },
        {
            key: 5,
            heading: "Integrated Payment Solutions",
            desc: "Accept multiple payment methods, including credit/debit cards, UPI, mobile wallets, and contactless payments. Split bills or apply discounts seamlessly at checkout.",
            img: ips,
            width: "54px",
        },
        {
            key: 6,
            heading: "Inventory Tracking",
            desc: "Automatically track ingredient usage and monitor stock levels in real time. Get low-stock alerts to ensure timely replenishment and avoid service disruptions.",
            img: it,
            width: "54px",
        },
        {
            key: 7,
            heading: "Kitchen Display System (KDS) Integration",
            desc: "Orders are directly sent to the kitchen display system, streamlining communication between the wait staff and kitchen team for faster, error-free order preparation.",
            img: kds,
            width: "54px",
        },
        {
            key: 8,
            heading: "Promotions and Loyalty Programs",
            desc: "Easily set up special offers, happy hours, and loyalty programs to engage customers and drive repeat business. Track customer preferences for targeted promotions.",
            img: plp,
            width: "54px",
        },
        {
            key: 9,
            heading: "Real-Time Sales Reporting",
            desc: "Access detailed sales reports and analytics to gain insights into daily revenue, top-selling items, and customer preferences, helping you make informed business decisions.",
            img: rtsr,
            width: "54px",
        }
    ];




    const benefits = [
        {
            key: 1,
            heading: "Enhanced Customer Satisfaction",
            desc: "Streamlines the ordering process with a user-friendly interface, reducing wait times and improving service quality, leading to higher customer satisfaction.",
            img: b1,

        },
        {
            key: 2,
            heading: "Operational Efficiency",
            desc: "Real-time menu updates and automated order management significantly reduce manual work, ensuring smooth operations across all dining outlets.",
            img: b2,

        },
        {
            key: 3,
            heading: "Personalized Dining Experience",
            desc: "Customizable orders allow guests to specify dietary restrictions or preferences, providing a personalized dining experience that boosts customer loyalty.",
            img: b3,

        },
        {
            key: 4,
            heading: "Optimized Resource Utilization",
            desc: "Dynamic table management and real-time inventory tracking enable better management of seating arrangements, stock levels, and ingredient usage, optimizing resource utilization.",
            img: b4,

        },

        {
            key: 5,
            heading: "Data-Driven Decision Making",
            desc: "Real-time sales reporting and analytics provide valuable insights into customer preferences, top-selling items, and daily performance, enabling data-driven business decisions",
            img: b5,


        }
    ];











    const query = [
        {
            question: "Q : How does the Dining (POS) module handle split bills or group payments?",
            answer: "A: The Dining (POS) module offers an intuitive split-billing feature, allowing guests to divide payments among multiple parties or payment methods seamlessly."
        },
        {
            question: "Q : Can the module manage menu customization and promotions in real-time?",
            answer: "A : Absolutely. The system allows real-time updates to menus, pricing, and promotional offers, ensuring your dining services are always up-to-date and aligned with your marketing strategies."
        },
        {
            question: "Q : Does the Dining (POS) module support table reservations and service tracking?",
            answer: "A : Yes, the module includes features for managing table reservations and tracking service status, helping staff deliver timely and personalized guest experiences."
        },
        {
            question: "Q : What analytics and reporting capabilities does the Dining (POS) module offer?",
            answer: "A : The system provides detailed insights into sales trends, popular menu items, and customer preferences through customizable reports, empowering data-driven decision-making."
        }
    ];


    const footerUpperText = {

        text1: 'Revolutionize',
        text2: "",
        text3: 'your dining experience.',
        img: laptop
    }





    return (
        <>


            {isPhone ? (
                <section className={`${style.heroSectionConatinerPhone}  `}>

                    <div className={`${style.contentConatinerPhone}`}>

                        <div className={`${style.headingBoxPhone} font4 `}>
                            <div className={`${style.mainHeadingPhone}`}>
                                <span style={{ color: "#012060" }} >DINING</span><span style={{ color: "#01B0F1" }} > (POS)</span>
                            </div>
                            <div className={`${style.mainParaPhone}`}>
                                Simplify your dining operations with a robust POS system designed for quick billing, smooth transactions, and enhanced customer satisfaction.
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
                                    <span style={{ color: "#012060" }} >DINING</span><span style={{ color: "#01B0F1" }} > (POS)</span>
                                </div>
                                <div className={`${style.mainPara}`}>
                                    Simplify your dining operations with a robust POS system designed for quick billing, smooth transactions, and enhanced customer satisfaction.
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
                            <img style={{ width: "100%" }} src={icon1} alt="" />
                        </div>

                        <div className={`${style.iconName} `}>

                            <div> Effortless</div>
                            <div> Operations</div>
                        </div>
                    </div>



                    <div className={style.section2IconAndName}>

                        <div className={`${style.section2Icon}`}>
                            <img style={{ width: "100%" }} src={icon2} alt="" />
                        </div>

                        <div className={`${style.iconName} `}>



                            <div> Personalized</div>
                            <div>Experience</div>

                        </div>
                    </div>



                    <div className={style.section2IconAndName}>

                        <div className={`${style.section2Icon}`}>
                            <img style={{ width: "100%" }} src={icon3} alt="" />
                        </div>

                        <div className={`${style.iconName}`}>


                            <div>
                                Smart
                            </div>

                            <div>
                                Insights
                            </div>
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

                                The <strong className="font2">Dining (POS)</strong>  module of EICE Rise ERP is designed to revolutionize the food and beverage services in your hospitality establishment. It offers a robust, user-friendly Point of Sale (POS) system tailored for <strong className="font2" >Restaurants, Cafes, Bars, and Banquet services</strong> . Whether you are managing a <strong className="font2">single restaurant or multiple dining outlets</strong> , this module provides a seamless, integrated experience that enhances operational efficiency and customer satisfaction
                            </div>

                        </div>
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

                                    <div style={{ width: "44px" }}>
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

            {/* 
            <div >
                <Footer3 />

            </div> */}

            <div >
                <Certificate/>
                <FooterUpperPart text1={footerUpperText.text1} text2={footerUpperText.text2} text3={footerUpperText.text3} img={footerUpperText.img} />
                {!isEmbed && <FooterLower />}

            </div>

        </>
    )
}
