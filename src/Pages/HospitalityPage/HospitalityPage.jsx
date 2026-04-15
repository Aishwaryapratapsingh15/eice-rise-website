import styles from "./Hospitality.module.css"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import allLaptop from "../../assets/Hospitality/allLaptop.webp"

import account from "../../assets/Hospitality/allPageIcon/Account.png"
import pos from "../../assets/Hospitality/allPageIcon/POS.png"
import banquet from "../../assets/Hospitality/allPageIcon/Banquet.png"
import emp from "../../assets/Hospitality/allPageIcon/Employee.png"
import food from "../../assets/Hospitality/allPageIcon/Food.png"
import inentry from "../../assets/Hospitality/allPageIcon/store.png"
import member from "../../assets/Hospitality/allPageIcon/Member.png"
import pay from "../../assets/Hospitality/allPageIcon/PAyscale.png"
import room from "../../assets/Hospitality/allPageIcon/Room.png"
import vendor from "../../assets/Hospitality/allPageIcon/purchase.png"

import vimg from "../../assets/insidePages/vimg.webp"

import FooterLower from "../../Components/Footer/FooterLower"
import FooterUpperPart from "../../Components/Footer/FooterUpperPart"



import c3 from "../../assets/Hospitality/customer/c1.png"
import c2 from "../../assets/Hospitality/customer/c2.png"
import c1 from "../../assets/Hospitality/customer/c3.png"


import and from "../../assets/caseStudy/android.webp"
import iic from "../../assets/caseStudy/IIC.webp"
import durga from "../../assets/caseStudy/durga.webp"

import cl1 from "../../assets/Hospitality/clients/c1.png";
import cl2 from "../../assets/Hospitality/clients/c2.png";
import cl3 from "../../assets/Hospitality/clients/c3.png";
import cl4 from "../../assets/Hospitality/clients/c4.png";
import cl5 from "../../assets/Hospitality/clients/c5.png";
import cl6 from "../../assets/Hospitality/clients/c6.png";
import cl7 from "../../assets/Hospitality/clients/c7.png";
import cl8 from "../../assets/Hospitality/clients/c8.png";
import cl9 from "../../assets/Hospitality/clients/c9.png";
import cl10 from "../../assets/Hospitality/clients/c10.png";
import cl11 from "../../assets/Hospitality/clients/c11.png";
import cl12 from "../../assets/Hospitality/clients/c12.png";
import cl13 from "../../assets/Hospitality/clients/c13.png";
import cl14 from "../../assets/Hospitality/clients/c14.png";
import cl15 from "../../assets/Hospitality/clients/c15.png";
import cl16 from "../../assets/Hospitality/clients/c16.png";
import cl17 from "../../assets/Hospitality/clients/c17.png";
import cl18 from "../../assets/Hospitality/clients/c18.png";
import cl19 from "../../assets/Hospitality/clients/c19.png";
import cl20 from "../../assets/Hospitality/clients/c20.png";
import cl21 from "../../assets/Hospitality/clients/c21.png";
import cl22 from "../../assets/Hospitality/clients/c22.png";
import cl23 from "../../assets/Hospitality/clients/c23.png";
import cl24 from "../../assets/Hospitality/clients/c24.png";
import cl25 from "../../assets/Hospitality/clients/c25.png";
import cl26 from "../../assets/Hospitality/clients/c26.png";
import cl27 from "../../assets/Hospitality/clients/c27.png";
import cl28 from "../../assets/Hospitality/clients/c28.png";
import cl29 from "../../assets/Hospitality/clients/c29.png";
import cl30 from "../../assets/Hospitality/clients/c30.png";




import clientHeadIcon from "../../assets/Hospitality/customer/subh.png"
import h2 from "../../assets/Hospitality/headIcon/h2.png"


import { FaArrowRightLong } from "react-icons/fa6";


import footerlaptop from "../../assets/section3Laptop/pos2.webp"



import { useSpring, animated, useTransition } from "@react-spring/web";
import Certificate from "../../Components/Certificate/Certificate"


const params = new URLSearchParams(window.location.search);
const isEmbed = params.get("embed") === "true";


export default function HospitalityPage() {




  





    const services = [
        {
            serviceName: "ROOM",
            serviceName2: "BOOKING",
            icon: room,
            path: "room-booking",
            key: 1
        },

        {
            serviceName: "DINING",
            serviceName2: "(POS)",
            icon: pos,
            path: "pos-dining",
            key: 2
        },

        {
            serviceName: "BANQUET &",
            serviceName2: "BILLING",
            icon: banquet,
            path: "banquet-billing",
            key: 3
        },

        {

            serviceName: "MEMBER",
            serviceName2: "SUITE",
            icon: member,
            path: "member-suite",
            key: 4
        },

        {
            serviceName: "ACCOUNT & ",
            serviceName2: "FINANCE",
            icon: account,
            path: "account-finance",
            key: 5
        },

        {
            serviceName: "EMPLOYEE",
            serviceName2: "SUITE",
            icon: emp,
            path: "employee-suite",
            key: 6
        },

        {
            serviceName: "PAYROLL",
            serviceName2: "MANAGEMENT",
            icon: pay,
            path: "payroll",
            key: 7
        },

        {
            serviceName: "USER STORE & INVENTORY",
            icon: inentry,
            path: "userstore-inventry",
            key: 8
        },

        {
            serviceName: "PURCHASE & VENDOR PORTAL",
            icon: vendor,
            path: "purchase-vendor",
            key: 9
        },

        {
            serviceName: "FOOD & BEVERAGE COST ANALYSIS",
            icon: food,
            path: "food-cost",
            key: 10
        },

        {
            serviceName: "Rise Sigle Sign-On",
            icon: food,
            path: "Single-Sign-On",
            key: 11
        },

        {
            serviceName: "Wi-Fi Module",
            icon: food,
            path: "Wifi",
            key: 12
        },

        {
            serviceName: "Budgeting & Planning",
            icon: food,
            path: "Budget",
            key: 13
        },

        {
            serviceName: "Budgeting & Planning",
            icon: food,
            path: "Feedback",
            key: 14
        },

        {
            serviceName: "Audience Attendance",
            icon: food,
            path: "audience-attendance",
            key: 15
        },

        {
            serviceName: "Compliance Register",
            icon: food,
            path: "compliance-register",
            key: 16
        },

        {
            serviceName: "Vendor Management",
            icon: food,
            path: "vendor-management",
            key: 17
        }
    ]


    const clientLogo = [
        { logo: cl1 },
        { logo: cl2 },
        { logo: cl3 },
        { logo: cl4 },
        { logo: cl5 },
        { logo: cl6 },
        { logo: cl7 },
        { logo: cl8 },
        { logo: cl9 },
        { logo: cl10 },
        { logo: cl11 },
        { logo: cl12 },
        { logo: cl13 },
        { logo: cl14 },
        { logo: cl15 },
        { logo: cl16 },
        { logo: cl17 },
        { logo: cl18 },
        { logo: cl19 },
        { logo: cl20 },
        { logo: cl21 },
        { logo: cl22 },
        { logo: cl23 },
        { logo: cl24 },
        { logo: cl25 },
        { logo: cl26 },
        { logo: cl27 },
        { logo: cl28 },
        { logo: cl29 },
        { logo: cl30 },
    ];

    const [logoIndex, setLogoIndex] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setLogoIndex((prevIndex) => (prevIndex + 1) % 5);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const displayedLogos = clientLogo.slice(logoIndex * 6, (logoIndex + 1) * 6);

    const animation = useSpring({
        opacity: 1,
        from: { opacity: 0.1 },
        // Ensures animation triggers on logo change
        config: { tension: 250, friction: 80 }, // Faster easing (less friction for quicker fade)
    });



    


    const feedback = [
        {
            img: c1,
            position: "Operations Manager",
            company: ", LuxeStay Hotels",
            heading: "Transformative Technology Partner",
            para: (<span> EICE Rise has <span style={{ fontWeight: "bold" }}>completely transformed</span>  our operations. Their cloud ERP <span style={{ fontWeight: "bold" }}>seamlessly integrates</span> seamlessly integrates all aspects of our hotel, from reservations to dining, improving efficiency and enhancing our guest experience. We couldn't ask for a better technology partner.</span>),

            key: 1

        },

        {
            img: c2,
            position: " General Manager ",
            company: ", Serenity Resorts",
            heading: "Exceptional Support & Innovation",
            para: (<span>The <span style={{ fontWeight: "bold" }}>intuitive modules</span>  offered by EICE Rise have simplified our front desk and housekeeping operations. <span style={{ fontWeight: "bold" }} >Their team’s support and innovative approach are unmatched. </span> We' ve seen remarkable growth since implementing their solutions.</span>),
            key: 2

        },

        {
            img: c3,
            position: " Director of Operations",
            company: ", Gourmet Suites",
            heading: "Elevated, Efficiency Guaranteed",
            para: (<span>Thanks to EICE Rise, <span style={{ fontWeight: "bold" }}>we've streamlined processes</span>  like banquet management and inventory control. The centralized platform has <span style={{ fontWeight: "bold" }}>saved us time</span>  and significantly improved <span style={{ fontWeight: "bold" }} > guest satisfaction.</span> </span>),
            key: 3

        }
    ]



    const [feedbackImagesLoaded, setFeedBackImagesLoaded] = useState(false);
    
        useEffect(() => {
            const loadImages = async () => {
                const img1 = new Image();
                const img2 = new Image();
                const img3 = new Image();
    
                img1.src = c1;
                img2.src = c2;
                img3.src = c3;
    
                Promise.all([
                    new Promise((resolve) => (img1.onload = resolve)),
                    new Promise((resolve) => (img2.onload = resolve)),
                    new Promise((resolve) => (img3.onload = resolve)),
                ]).then(() => setFeedBackImagesLoaded(true));
            };
    
            loadImages();
        }, []);

    const [feedBackIndex, setfeedBackIndex] = useState(0);

    // Change the current card every 5 seconds (or your desired interval)
    useEffect(() => {
        const interval = setInterval(() => {
            setfeedBackIndex((prevIndex) =>
                prevIndex === feedback.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        // Clear interval when the component unmounts
        return () => clearInterval(interval);
    }, []);



    const stories = [
        {
            key: 1,
            img: and,
            heading: "Transforming Operational Efficiency for  Sales Vu",
            margin: "20px",
            link: "/android",
            para: "The SalesVu Android App enhances POS functionality with features like order management, payment processing, and barcode scanning. These features streamline operations, improve inventory management..."
        },

        {
            key: 2,
            img: durga,
            heading: "Empowering Community Operations for Houston Durga Bari Society (HDBS)",
            link: "/durgabari",
            para: "The Houston Durga Bari Society (HDBS) sought a transformative digital solution to overcome the challenges of managing its diverse operations and engaging a geographically... ",
            margin: "22px"
        },

        {
            key: 3,
            img: iic,
            heading: "Empowering Indian International Center (IIC) ",
            link: "/iic",
            para: " The Indian International Center (IIC) faced the challenge of managing complex, multi-user interactions while ensuring secure access and operational efficiency. EICE Technology implemented the Enterprise Suite, tailored to... ",
            margin: "20px"
        }

    ]







    const [storyIndex, setStoryIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setStoryIndex((prevIndex) =>
                prevIndex === stories.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);



    const [isPhone, setIsPhone] = useState(window.innerWidth <= 800);
    const [forSmallestScreen, setforSmallestScreen] = useState(window.innerWidth <= 290);


    useEffect(() => {
        const handleResize = () => {
            setIsPhone(window.innerWidth <= 800);
            setforSmallestScreen(window.innerWidth <= 290);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const footerUpperText = {

        text1: "Flexible, Modular Solutions ",
        text2: "",
        text3: "tailored to your business needs.",
        img: footerlaptop
    }

    return (
        <>

            {/* section1 */}
            <section className={`${styles.section1} ${isEmbed ? styles.embedMode : ""}`} >


                {!forSmallestScreen && (<div className={styles.laptopImg}>
                    <img className={`${styles.laptopImgDimension}`} src={allLaptop} alt="" />
                </div>)}


                <div className={styles.textBox}>
                    <div className={`${styles.text1}  `}>
                        <span className="font2" >Flexible, Modular Solutions</span> <span style={{ fontWeight: "600" }} className="font1">tailored to your business needs</span>
                    </div>

                    <p className={`${styles.text2} font1`}>
                        EICE Rise ERP simplifies hospitality operations by uniting front desk, housekeeping, dining, and finance into a single, efficient platform for streamlined management and enhanced guest experiences.
                    </p>

                    {!forSmallestScreen && (<div className={`${styles.requestDemoButtonContainer} font1`}>

                        <Link style={{ color: "white" }} className="linkClass" to={"form"}>
                            <div className={`${styles.demoButton}`}>
                                <div> Request a Demo </div>
                                <div className={`${styles.demoArrowButton}`}> <FaArrowRightLong /></div>
                            </div>
                        </Link>

                    </div>)}


                </div>

            </section>

            {/* section2 */}

            <section className={`${styles.section2} `}>


                <div className={`${styles.section2Heading} font3 globalSectionSize`}>Our <span className={` blueTextGlobalClass font2`} > End to End </span>  Technology Solution</div>



                <div style={{ backgroundColor: "#F0FBFF" }} >
                    <div className={`${styles.servicesBox} globalSectionSize`}>
                        {services.map((item) =>
                        (
                            <Link className="linkClass" key={item.key} to={item.path}>

                                <div className={`${styles.iconAndTextBox} `}>

                                    <div className={styles.imgBox} >
                                        <img src={item.icon} alt={item.serviceName} />
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


            {/* section3 */}

            {/* <div className={` ${styles.requestDemoButtonContainer2} font1`}>

                <Link style={{ color: "white" }} className="linkClass" to={"form"}>
                    <div className={`${styles.demoButton}`}>
                        <div> Request a Demo </div>
                        <div className={`${styles.demoArrowButton}`}> <FaArrowRightLong /></div>
                    </div>
                </Link>

            </div> */}



            {/* <section className={`${styles.section3} globalSectionSize`}>

                <div className={`${styles.section3Heading} font3`}>With deep expertise in <span className={` blueTextGlobalClass font2`}>Hospitality Technology</span> , we have
                    perfected the art of delivering efficient, scalable, and tailored
                    tech solutions for the industry</div>


                <p className={`${styles.section3Para} font1`} >With a deep understanding of the hospitality industry's unique needs, we deliver <span className="font2">cutting-edge software solutions tailored for hotels, restaurants, and event spaces</span> . From full-stack cloud ERP systems to focused modules for specific operations, our tools enhance efficiency and elevate guest experiences across wellness, leisure, and meetings.</p>


                <div className={`${styles.section3Video}`} >
                    <img style={{ width: "100%" }} loading="lazy" src={vimg} alt="video" />
                </div>



                <div>
                    <div className={`${styles.videoImgBox}`}>

                    </div>
                </div>



            </section> */}


            {/* section4 */}





            <section className={`${styles.section4} globalSectionSize`}>

                <div className={`${styles.section4Heading}`}>
                    <span className={` blueTextGlobalClass font2`}>Trusted</span><span className="font3"> by Brands around the World</span>
                </div>
            </section>


            <div className={styles.clientSection} >
                <animated.div style={animation}>
                    <div className={`${styles.clientLogoBox} globalSectionSize`} >
                        {displayedLogos.map((item, index) => (
                            <div key={index} className={`${styles.clinetLogoSize}`} >
                                <img style={{ width: "100%" }} src={item.logo} alt="EICE Technology" />
                            </div>
                        ))}
                    </div>
                </animated.div>
            </div>









            {/* section5 */}

            {!isPhone && (<div className={`${styles.reviewSection}`}>
                <section className={`${styles.section5} globalSectionSize`}>

                    <div className={`${styles.section5Heading} font1`}>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0px 20px" }}>
                            <div style={{ width: "55px", paddingBottom: "14px" }}>
                                <img style={{ width: "100%" }} src={clientHeadIcon} alt="clients" />
                            </div>

                            <div className="font3">
                                What our <span className={` blueTextGlobalClass font2`}>Customers</span> say about us ?
                            </div>
                        </div>
                    </div>






                    <div className={`${styles.section5Subheading} font1`}>
                        <span style={{ fontWeight: "600" }} >"Proven Excellence:</span> Trusted by Leading  <span className={` blueTextGlobalClass font2`}>Hotels, Resorts, and Restaurants</span>."
                    </div>



                    <main className={`${styles.feedBack}`}>
                        {feedback.map((item) =>
                        (
                            <article key={item.key} className={`${styles.feedBackArticleBox} font1`} >

                                <figure >

                                    <div style={{ textAlign: "center" }}  >
                                        <img style={{ width: "28%" }} src={item.img} alt="" />
                                    </div>

                                    <figcaption style={{ textAlign: "center" }} > <span style={{ fontWeight: "bold" }}>{item.position}</span> <span>{item.company}</span></figcaption>

                                </figure>
                                <div>
                                    <div className={`${styles.cardBoxInnerHeading} blueTextGlobalClass font3`} >"{item.heading}"</div>
                                </div>



                                <p style={{ textAlign: "center", lineHeight: "1.8rem" }}>{item.para}</p>

                            </article>
                        ))}
                    </main>


                </section>
            </div>)}





            {isPhone && (<div className={`${styles.reviewSectionForPhone}`}>
                <section className={`${styles.section5} globalSectionSize`}>

                    <div className={`${styles.section5Heading} font1`}>
                        <div className={`${styles.section5HeadingAndIconBox}`} >

                            <div style={{ width: "40px", }}>
                                <img style={{ width: "100%" }} src={clientHeadIcon} alt="" />
                            </div>

                            <div style={{ textAlign: "left", paddingLeft: "20px" }} className="font3">
                                What our <span className={` blueTextGlobalClass font2`}>Customers</span> say about us ?
                            </div>
                        </div>
                    </div>






                    <div className={`${styles.section5Subheading} font1`}>
                        <span style={{ fontWeight: "600" }} >"Proven Excellence:</span> Trusted by Leading  <span className={` blueTextGlobalClass font2`}>Hotels, Resorts, and Restaurants</span>."
                    </div>



                    <main className={`${styles.feedBack}`}>


                       


                        <article className={styles.cardContainer}>
                            <figure className={styles.card}>
                                <div className={styles.imgAndClientDetailBox}>
                                    <div className={`${styles.feedBackImgBox}`}>

                                        {feedbackImagesLoaded && (<img
                                            src={feedback[feedBackIndex].img}
                                            alt={`feedback ${feedBackIndex + 1}`}
                                            className={styles.cardImage}
                                        />)}
                                        
                                    </div>
                                    <div>
                                        <figcaption style={{ textAlign: "center" }} > <span className="font1" style={{ fontWeight: "bold" }}>{feedback[feedBackIndex].position}</span> <span className="font1">{feedback[feedBackIndex].company}</span></figcaption>
                                    </div>
                                </div>

                                <div>
                                    <div className={`${styles.cardBoxInnerHeading} blueTextGlobalClass font3`} >"{feedback[feedBackIndex].heading}"</div>
                                </div>

                                <p className="font1" style={{ textAlign: "center", lineHeight: "1.8rem" }}>{feedback[feedBackIndex].para}</p>
                            </figure>
                        </article>





                    </main>


                    <div className="indicators">
                        {feedback.map((_, index) => (
                            <span
                                key={index}
                                className={`indicator ${feedBackIndex === index ? 'active' : ''}`}
                                onClick={() => setfeedBackIndex(index)}
                            ></span>
                        ))}


                    </div>


                </section>
            </div>)}









            {/* section6 */}


            {isPhone ? (<section className={`${styles.section6ForPhone} globalSectionSize`}>
                <div className={`${styles.section6Heading} font1`}>

                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0px 20px" }}>
                        <div style={{ width: "50px", paddingTop: "12px" }}>
                            <img style={{ width: "100%" }} src={h2} alt="" />
                        </div>

                        <div className="font3">
                            Real  <span className={` blueTextGlobalClass font2`}>Stories</span> , Real <span className={` blueTextGlobalClass font2`}>Impact</span>
                        </div>
                    </div>
                </div>


                <div className={`${styles.storySection} font1`}>

                    <article className={styles.storyCardContainer}>
                        <div className={styles.storyCard}>

                            <div >
                                <img style={{ width: "100%" }} src={stories[storyIndex].img} alt="storyimg" />
                            </div>

                            <div className={`${styles.cardBoxStoryInnerHeading} blueTextGlobalClass font1`}>
                                {stories[storyIndex].heading}
                            </div>

                            <p style={{ lineHeight: "1.8rem", marginBottom: stories[storyIndex].margin }} >{stories[storyIndex].para}</p>


                            <Link to={stories[storyIndex].link} className={`${styles.viewMoreBtnBox} linkClass`}>
                                <div className={`${styles.viewMoreBtn} font1`} style={{ textAlign: "center" }}>
                                    View More
                                </div>
                            </Link>

                        </div>
                    </article>


                </div>

                <div className="indicators">
                    {stories.map((_, index) => (
                        <span
                            key={index}
                            className={`indicator ${storyIndex === index ? 'active' : ''}`}
                            onClick={() => setStoryIndex(index)}
                        ></span>
                    ))}
                </div>


            </section>) : (<section className={`${styles.section6} globalSectionSize`}>
                <div className={`${styles.section6Heading} font1`}>

                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0px 20px" }}>
                        <div style={{ width: "50px", paddingTop: "12px" }}>
                            <img style={{ width: "100%" }} src={h2} alt="" />
                        </div>

                        <div className="font3">
                            Real  <span className={` blueTextGlobalClass font2`}>Stories</span> , Real <span className={` blueTextGlobalClass font2`}>Impact</span>
                        </div>
                    </div>

                </div>


                <div className={`${styles.storySection} font1`}>

                    {stories.map((item) =>
                    (
                        <div key={item.key} className={`${styles.storyBox}`}>


                            {item.key === 1 ? (<div className={`${styles.storyImgHeight}`}>
                                <img style={{ width: "113%" }} src={item.img} alt="storyimg" />
                            </div>) : (<div className={`${styles.storyImgHeight}`}>
                                <img style={{ width: "100%" }} src={item.img} alt="storyimg" />
                            </div>)}

                            <div className={`${styles.cardBoxStoryInnerHeading} blueTextGlobalClass font1`}>
                                {item.heading}
                            </div>

                            <p style={{ lineHeight: "1.8rem", marginBottom: item.margin }} >{item.para}</p>

                            <Link to={item.link} className="linkClass">
                                <div className={`${styles.viewMoreBtn} font1`} style={{ textAlign: "center" }}>
                                    View More
                                </div>
                            </Link>


                        </div>

                    ))}

                </div>


            </section>)}


<Certificate/>
            <FooterUpperPart text1={footerUpperText.text1} text2={footerUpperText.text2} text3={footerUpperText.text3} img={footerUpperText.img} />
            {!isEmbed && <FooterLower />}

        </>
    )
}






