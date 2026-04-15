import style from "./Styles/roomBooking.module.css"



import icon1 from "../../assets/insidePages/room/roomPage/Icons/1.png"
import icon2 from "../../assets/insidePages/room/roomPage/Icons/2.png"
import icon3 from "../../assets/insidePages/room/roomPage/Icons/3.png"



import heroImg from "../../assets/allHero/roomh.webp"


import { Link } from "react-router-dom"


// features
import rt from "../../assets/insidePages/room/roomPage/feature/rt.png"
import app from "../../assets/insidePages/room/roomPage/feature/app.png"
import cbd from "../../assets/insidePages/room/roomPage/feature/cbd.png"
import cbo from "../../assets/insidePages/room/roomPage/feature/cbo.png"
import frs from "../../assets/insidePages/room/roomPage/feature/frs.png"
import ibc from "../../assets/insidePages/room/roomPage/feature/ibc.png"
import mfi from "../../assets/insidePages/room/roomPage/feature/mfi.png"
import wifi from "../../assets/insidePages/room/roomPage/feature/wifi.png"
import ipg from "../../assets/insidePages/room/roomPage/feature/ipg.png"



// benifits

import b1 from "../../assets/insidePages/room/roomPage/benifit/b1.webp"
import b2 from "../../assets/insidePages/room/roomPage/benifit/b2.webp"
import b3 from "../../assets/insidePages/room/roomPage/benifit/b3.webp"
import b4 from "../../assets/insidePages/room/roomPage/benifit/b4.webp"
import b5 from "../../assets/insidePages/room/roomPage/benifit/b6.webp"


// overview 
import laptop from "../../assets/section3Laptop/room.webp"



import Accordion from "../../Components/Accordian/Accordian.jsx"

import { FaArrowRightLong } from "react-icons/fa6";








import FooterLower from "../../Components/Footer/FooterLower.jsx"
import FooterUpperPart from "../../Components/Footer/FooterUpperPart.jsx"


import { useEffect , useState } from "react"
import Certificate from "../../Components/Certificate/Certificate.jsx"


const params = new URLSearchParams(window.location.search);
const isEmbed = params.get("embed") === "true";



export default function RoomBooking() {


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
    

    const footerUpperText = {

        text1: 'Streamline',
        text2: "",
        text3: 'bookings effortlessly ',
        img: laptop
    }




    const features = [
        {
            key: 1,
            heading: "Real-Time ",
            heading2: "Room Availability",
            desc: "Easily check room availability in real-time, providing guests with up-to-date information to make informed booking decisions.",
            img: rt,
            width: "73px",


        },
        {
            key: 2,
            heading: "Flexible Room ",
            heading2: "Selection",
            desc: "Choose from a variety of room types, including standard, deluxe, and suite categories. Each room type includes detailed descriptions, photos, and amenities.",
            img: frs,
            width: "62px"
        },
        {
            key: 3,
            heading: "Integrated ",
            heading2: "Wi-Fi Access",
            desc: "Automatically grants guests secure Wi-Fi access as part of their booking package, enhancing their stay experience from the moment they check in.",
            img: wifi,
            width: "60px"
        },
        {
            key: 4,
            heading: "Customizable ",
            heading2: "Booking Options",
            desc: "Enable guests to select add-ons such as breakfast packages, airport transfers, or room upgrades directly during the booking process.",
            img: cbo,
            width: "56px"
        },
        {
            key: 5,
            heading: "Automated Pricing ",
            heading2: "& Promotions",
            desc: "Dynamic pricing based on demand, seasonality, and special events, with options for promotional codes and loyalty discounts to attract repeat customers.",
            img: app,
            width: "70px"
        },
        {
            key: 6,
            heading: "Centralized ",
            heading2: "Booking Dashboard",
            desc: "Manage all room bookings from a single dashboard. Track check-ins, check-outs, and cancellations effortlessly, optimizing room occupancy rates.",
            img: cbd,
            width: "60px"
        },
        {
            key: 7,
            heading: "Integrated ",
            heading2: "Payment Gateway",
            desc: "Secure online payment processing with multiple options (credit/debit cards, UPI, mobile wallets) for a smooth, hassle-free booking experience.",
            img: ipg,
            width: "60px"
        },
        {
            key: 8,
            heading: "Mobile-Friendly ",
            heading2: "Interface",
            desc: "Guests can book rooms on the go using mobile devices, ensuring a responsive and seamless experience across all platforms.",
            img: mfi,
            width: "60px"
        },
        {
            key: 9,
            heading: "Instant Booking Confirmation",
            heading2: "",
            desc: "Automated email and SMS confirmations are sent to guests upon successful booking, including details like check-in time, room type, and any additional services selected.",
            img: ibc,
            width: "56px"
        },

    ];



    const benefits = [
        {
            key: 1,
            heading: "Enhanced Guest Experience",
            desc: "Provides a hassle-free booking process that enhances customer satisfaction and loyalty.",
            img: b1,

        },
        {
            key: 2,
            heading: "Operational Efficiency",
            desc: "Reduces manual workload for staff and minimizes booking errors, resulting in smoother operations.",
            img: b2,

        },
        {
            key: 3,
            heading: "Revenue Optimization",
            desc: "Maximizes room occupancy and boosts revenue through dynamic pricing and promotional features.",
            img: b3,

        },
        {
            key: 4,
            heading: "Centralized Management",
            desc: "Offers a unified platform for handling all room bookings, reducing complexity and improving oversight.",
            img: b4,

        },
        {
            key: 5,
            heading: "Real-time Availability",
            desc: "Ensures guests have access to up-to-date room availability, preventing overbooking and improving guest trust.",
            img: b5,

        }
    ];


    const query = [
        {
            question: "Q : What is the Room Booking module, and who is it designed for?",
            answer: "A : The Room Booking module is a comprehensive solution for the hospitality industry, ideal for hotels, resorts, clubs, and institutions. It simplifies the booking process while integrating seamlessly with EICE Rise ERP."
        },
        {
            question: "Q : How does this module improve the guest experience?",
            answer: "A : The module offers real-time availability, customizable booking options, and instant confirmations, ensuring a smooth and hassle-free experience for guests."
        },
        {
            question: "Q : What payment options are supported by the Integrated Payment Gateway?",
            answer: " A : The payment gateway supports credit/debit cards, UPI, and mobile wallets, ensuring secure and convenient transactions."
        },
        {
            question: "Q : Is the Room Booking module integrated with front desk and housekeeping systems?",
            answer: "A : Yes, it synchronizes room status with the front desk and housekeeping modules, enabling efficient room management and timely cleaning services."
        }
    ];





    return (
        <>

{isPhone ? (  <section className={`${style.heroSectionConatinerPhone}  `}>

<div className={`${style.contentConatinerPhone}`}>

    <div className={`${style.headingBoxPhone} font4 `}>
        <div className={`${style.mainHeadingPhone}`}>
            <span style={{ color: "#012060" }} >ROOM</span><span style={{ color: "#01B0F1" }} > BOOKING</span>
        </div>
        <div className={`${style.mainParaPhone}`}>
            Streamline guest reservations with a seamless and intuitive Room Booking Module, ensuring effortless check-ins and an exceptional customer experience.
        </div>


    </div>

    <div className={`${style.herosectionImgBoxPhone}`}>
        <img style={{width : "100%"}} src={heroImg} alt={"room booking"} />
    </div>


</div>

</section>) : ( <section className={`${style.heroSectionConatiner}  `}>


<div className={`${style.fadeBackgroundConatiner}`}>

    <div className={`${style.contentConatiner}`}>

        <div className={`${style.headingBox} font4 `}>
            <div className={`${style.mainHeading}`}>
                <span style={{ color: "#012060" }} >ROOM</span><span style={{ color: "#01B0F1" }} > BOOKING</span>
            </div>
            <div className={`${style.mainPara}`}>
                Streamline guest reservations with a seamless and intuitive Room Booking Module, ensuring effortless check-ins and an exceptional customer experience.
            </div>


        </div>

        <div className={`${style.herosectionImgBox}`}>

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
                            Seamless
                        </div>
                    </div>



                    <div className={style.section2IconAndName}>

                        <div className={`${style.section2Icon}`}>
                            <img style={{ width: "100%" }} src={icon2} alt="" />
                        </div>

                        <div className={`${style.iconName} `}>Smart</div>
                    </div>



                    <div className={style.section2IconAndName}>

                        <div className={`${style.section2Icon}`}>
                            <img style={{ width: "100%" }} src={icon3} alt="" />
                        </div>

                        <div className={`${style.iconName}`}>
                            Scalable
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

                                Our Room Booking module is a <strong className="font2">comprehensive solution</strong>  designed for the hospitality industry, integrating with EICE Rise ERP to simplify and streamline the booking process for <strong className="font2">Hotels, Resorts, Clubs and Institutions.</strong>  From standard rooms to luxury suites, this feature offers an intuitive, user-friendly interface for both guests and administrators, ensuring a smooth experience throughout the booking journey.
                            </div>

                        </div>



                    </div>

                </div>
            </section>

            {/* <div style={{position : "absolute" , border:"2px solid red" , overflow : "hidden" , width : "100%" ,   height : "10rem" }} >
                <div className={`${style.Spiral}`}  >
                    <img style={{ width: "100%" }} src={spiral} alt="" />
                </div>
            </div> */}



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

                                        <div>
                                            {item.heading2}
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
                <Footer2 />

            </div> */}


            <div >
                <Certificate/>
               <FooterUpperPart text1={footerUpperText.text1} text2={footerUpperText.text2} text3={footerUpperText.text3} img={laptop} />
               {!isEmbed && <FooterLower /> }

            </div>







        </>
    )
}
