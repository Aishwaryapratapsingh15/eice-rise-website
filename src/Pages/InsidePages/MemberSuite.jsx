
import style from "./Styles/memberSuite.module.css"


import { Link } from "react-router-dom"


import cag from "../../assets/insidePages/member/memberSection2/cag.png"
import pme from "../../assets/insidePages/member/memberSection2/pme.png"
import smo from "../../assets/insidePages/member/memberSection2/smo.png"





import ad from "../../assets/insidePages/member/icon/ad.png"
import emb from "../../assets/insidePages/member/icon/emb.png"
import ict from "../../assets/insidePages/member/icon/ict.png"
import mrm from "../../assets/insidePages/member/icon/mrm.png"
import sm from "../../assets/insidePages/member/icon/sm.png"
import ssp from "../../assets/insidePages/member/icon/ssp.png"


import heroImg from "../../assets/allHero/memberh.webp"


// benefits
import ddi from "../../assets/insidePages/member/memberBenefit/ddi.webp"
import eme from "../../assets/insidePages/member/memberBenefit/eme.webp"
import ic from "../../assets/insidePages/member/memberBenefit/ic.webp"
import imr from "../../assets/insidePages/member/memberBenefit/imr.webp"
import oe from "../../assets/insidePages/member/memberBenefit/oe.webp"



import laptop from "../../assets/section3Laptop/member.webp"

import Accordion from "../../Components/Accordian/Accordian.jsx"



import { FaArrowRightLong } from "react-icons/fa6";

import { useState, useEffect } from "react"

import FooterUpperPart from "../../Components/Footer/FooterUpperPart.jsx"
import FooterLower from "../../Components/Footer/FooterLower.jsx"
import Certificate from "../../Components/Certificate/Certificate.jsx"

const params = new URLSearchParams(window.location.search);
const isEmbed = params.get("embed") === "true";


export default function MemberSuite() {


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
      heading: "Membership Registration and Management",
      desc: "Seamlessly register and manage different membership tiers, and convert membership with customizable features, including individual, family, corporate, and lifetime memberships.",
      img: mrm,
      width: "86px"
    },
    {
      key: 2,
      heading: "Self-Service Portal",
      desc: "Empower members with a self-service portal to update their profiles, renew subscriptions, and outstanding bills, view membership benefits, and access exclusive offers.",
      img: ssp,
      width: "60px"
    },
    {
      key: 3,
      heading: "Subscription Management",
      desc: "Automate subscription renewals, payments, and reminders, ensuring members stay informed and engaged without any manual effort.",
      img: sm,
      width: "60px"
    },
    {
      key: 4,
      heading: "Exclusive Member Benefits",
      desc: "Offer tailored benefits such as priority bookings, special discounts, and access to exclusive events, enhancing the overall member experience.",
      img: emb,
      width: "65px"
    },
    {
      key: 5,
      heading: "Integrated Communication Tools",
      desc: "Enable real-time communication with members via email, push notifications, and in-app messages, keeping them informed about events, announcements, and offers.",
      img: ict,
      width: "65px"
    },
    {
      key: 6,
      heading: "Analytics Dashboard",
      desc: "Gain insights into member activity, preferences, and engagement levels with detailed analytics, helping you tailor services to meet their needs.",
      img: ad,
      width: "60px"
    }
  ];





  const benefits = [
    {
      key: 1,
      heading: "Enhanced Member Experience",
      desc: "Provide a personalized and streamlined experience for your members, improving retention and satisfaction.",
      img: eme,
    },
    {
      key: 2,
      heading: "Operational Efficiency",
      desc: "Automate routine tasks such as renewals and notifications, reducing administrative workload.",
      img: oe,
    },
    {
      key: 3,
      heading: "Data-Driven Insights",
      desc: "Leverage analytics to understand member preferences and make informed decisions on services and offerings.",
      img: ddi,
    },
    {
      key: 4,
      heading: "Improved Communication",
      desc: "Streamline communication with members through automated alerts, reminders, and personalized messaging, fostering stronger relationships and engagement.",
      img: ic,
    },
    {
      key: 5,
      heading: "Increased Member Retention",
      desc: "By offering targeted services and benefits based on member data, you can increase retention and reduce churn, creating long-term loyalty.",
      img: imr,
    },

    // {
    //     key: 6,
    //     heading: "Revenue Growth",
    //     desc: "Enable upselling and cross-selling opportunities through tailored offers and personalized services, driving additional revenue streams from your existing member base.",
    //     img: r, 
    // }
  ];



  const query = [
    {
      key: 1,
      question: "Q : Can members manage their own profiles?",
      answer: "A : Yes, members can update their profiles, renew subscriptions, and view membership benefits via a self-service portal."
    },
    {
      key: 2,
      question: "Q : Does the system offer automated subscription renewals?",
      answer: "A : Yes, subscriptions and payments are automated with reminders to keep members engaged."
    },
    {
      key: 3,
      question: "Q : Are exclusive member benefits available?",
      answer: "A : Yes, members can access exclusive benefits like priority bookings, special discounts, and events."
    },
    {
      key: 4,
      question: "Q : How can I track member engagement?",
      answer: "A : An analytics dashboard provides insights into member activity, preferences, and engagement levels."
    },
    {
      key: 5,
      question: "Q : Is the platform secure for member data?",
      answer: "A : Yes, it features multi-layered authentication and complies with privacy regulations to protect member data."
    }
  ];


  const footerUpperText = {

    text1: "Engage members",
    text2: "",
    text3: "and grow loyalty with our all-in-one Membership Portal",
    img: laptop
  }


  return (
    <>


      {isPhone ? (
        <section className={`${style.heroSectionConatinerPhone}  `}>

          <div className={`${style.contentConatinerPhone}`}>

            <div className={`${style.headingBoxPhone} font4 `}>
              <div className={`${style.mainHeadingPhone}`}>
                <span style={{ color: "#012060" }} >MEMBER</span><span style={{ color: "#01B0F1" }} > SUITE</span>
              </div>
              <div className={`${style.mainParaPhone}`}>
                Build a thriving member community with our Membership Portal, offering streamlined membership management and engagement tools.
              </div>


            </div>

            <div className={`${style.herosectionImgBoxPhone}`}>
              <img style={{ width: "100%" }} src={heroImg} alt={"room booking"} />
            </div>


          </div>

        </section>
      ) : (<section className={`${style.heroSectionConatiner}  `}>


        <div className={`${style.fadeBackgroundConatiner}`}>

          <div className={`${style.contentConatiner}`}>

            <div className={`${style.headingBox} font4 `}>
              <div className={`${style.mainHeading}`}>
                <span style={{ color: "#012060" }} >MEMBER</span><span style={{ color: "#01B0F1" }} > SUITE</span>
              </div>
              <div className={`${style.mainPara}`}>
                Build a thriving member community with our Membership Portal, offering streamlined membership management and engagement tools.
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
              <img style={{ width: "100%" }} src={cag} alt="" />
            </div>

            <div className={`${style.iconName} `}>

              <div> Comprehensive Analytics</div>
              <div> For Growing</div>
            </div>
          </div>



          <div className={style.section2IconAndName}>

            <div className={`${style.section2Icon}`}>
              <img style={{ width: "100%" }} src={smo} alt="" />
            </div>

            <div className={`${style.iconName} `}>







              <div>
                Seamless Member
              </div>

              <div>
                Onboarding
              </div>

            </div>
          </div>



          <div className={style.section2IconAndName}>

            <div className={`${style.section2Icon}`}>
              <img style={{ width: "100%" }} src={pme} alt="" />
            </div>

            <div className={`${style.iconName}`}>

              <div> Personalized Member</div>
              <div>Engagement</div>

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
                EICE Rise ERP’s <strong className="2">Member Suite</strong>  offers a centralized solution for managing diverse membership types, subscriptions, and engagement activities. <strong className="font2">Designed specifically for Clubs, Institutions, Hotels, and Resorts</strong> , this module streamlines membership processes, enhances communication, and provides personalized <strong className="font2">services to members, all within a secure, user-friendly platform</strong> .


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
        (<FooterUpperPart text1={footerUpperText.text1} text2={footerUpperText.text2} text3={footerUpperText.text3} img={laptop} />
       {!isEmbed &&<FooterLower />}

      </div>

    </>
  )
}
