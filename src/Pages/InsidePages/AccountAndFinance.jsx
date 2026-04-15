
import style from "./Styles/accountAndFinance.module.css"
import { Link } from "react-router-dom"


import afw from "../../assets/insidePages/account/financeSection2/afw.png"
import ddfi from "../../assets/insidePages/account/financeSection2/ddfi.png"
import rtet from "../../assets/insidePages/account/financeSection2/rtet.png"






import ara from "../../assets/insidePages/account/icon/ara.png"
import bf from "../../assets/insidePages/account/icon/bf.png"

import cfm from "../../assets/insidePages/account/icon/cfm.png"
import iib from "../../assets/insidePages/account/icon/iib.png"
import pgi from "../../assets/insidePages/account/icon/pgi.png"
import rtfd from "../../assets/insidePages/account/icon/rtfd.png"
import tmc from "../../assets/insidePages/account/icon/tmc.png"
import vsp from "../../assets/insidePages/account/icon/vsp.png"





import { useState, useEffect } from "react"

import ac from "../../assets/insidePages/account/financebenefit/ac.webp"
import ca from "../../assets/insidePages/account/financebenefit/ca.webp"
import cc from "../../assets/insidePages/account/financebenefit/cc.webp"
import icfm from "../../assets/insidePages/account/financebenefit/icfm.webp"
import oe from "../../assets/insidePages/account/financebenefit/oe.webp"

import heroImg from "../../assets/allHero/accounth.webp"

import laptop from "../../assets/section3Laptop/account.webp"

import Accordion from "../../Components/Accordian/Accordian.jsx"



import { FaArrowRightLong } from "react-icons/fa6";


import FooterUpperPart from "../../Components/Footer/FooterUpperPart.jsx"
import FooterLower from "../../Components/Footer/FooterLower.jsx"
import Certificate from "../../Components/Certificate/Certificate.jsx"

const params = new URLSearchParams(window.location.search);
const isEmbed = params.get("embed") === "true";

export default function AccountAndFinance() {

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
      heading: "Comprehensive Financial Management",
      desc: "Manage all core financial functions, including accounts receivable, accounts payable, debit & credit notes, taxation, balance sheets, and general ledger. Streamline processes and ensure timely payments and collections.",
      img: cfm,
      width: "65px",
    },
    {
      key: 2,
      heading: "Real-Time Financial Data",
      desc: "Access up-to-date financial data at any time, empowering managers to make data-driven decisions that enhance profitability and financial health.",
      img: rtfd,
      width: "65px",
    },
    {
      key: 3,
      heading: "Integrated Invoicing and Billing",
      desc: "Automatically generate invoices and billing statements for room bookings, event bookings, dining, and more. Customizable invoice templates ensure branding consistency and accuracy.",
      img: iib,
      width: "65px",
    },
    {
      key: 4,
      heading: "Tax Management and Compliance",
      desc: "Stay compliant with regional and international tax regulations. Automate tax calculations based on local laws and apply them seamlessly to invoices and payments.",
      img: tmc,
      width: "65px",
    },
    {
      key: 5,
      heading: "Advanced Reporting and Analytics",
      desc: "Create custom financial reports that provide deeper insights into revenue, expenditures, profit margins, etc. Analyze trends and generate forecasts to support future planning.",
      img: ara,
      width: "65px",
    },
    {
      key: 6,
      heading: "Payment Gateway Integration",
      desc: "Integrated with secure payment gateways, businesses can process payments efficiently and track financial transactions in real-time.",
      img: pgi,
      width: "58px",
    },
    {
      key: 7,
      heading: "Budgeting and Forecasting",
      desc: "Plan and monitor your budget effectively with integrated forecasting tools. Track expenses, and revenues, and allocate resources for better financial planning.",
      img: bf,
      width: "58px",
    },
    {
      key: 8,
      heading: "Cash Flow Management",
      desc: "Monitor cash flow with real-time reporting to ensure liquidity, helping businesses manage operational costs and optimize cash reserves.",
      img: cfm,
      width: "60px",
    },
    {
      key: 9,
      heading: "Vendor and Supplier Payments",
      desc: "Easily manage payments to vendors and suppliers, track due invoices, and ensure timely settlements with the automated payment tracking system.",
      img: vsp,
      width: "60px",
    },

  ];




  const benefits = [
    {
      key: 1,
      heading: "Financial Accuracy",
      desc: "Reduce human error in financial reporting and ensure accuracy in all transactions and documentation.",
      img: ac,

    },
    {
      key: 2,
      heading: "Operational Efficiency",
      desc: "Automate routine financial tasks, freeing up time for finance teams to focus on strategic decision-making.",
      img: oe

    },
    {
      key: 3,
      heading: "Cost Control",
      desc: "Monitor expenses, analyze spending patterns, and optimize cost management across departments.",
      img: cc,

    },
    {
      key: 4,
      heading: "Compliance Assurance",
      desc: "Stay compliant with industry standards and tax regulations, avoiding penalties and ensuring financial transparency.",
      img: ca,

    },
    {
      key: 5,
      heading: "Improved Cash Flow Management",
      desc: "With real-time tracking and reporting, businesses can manage their cash flow more effectively, improving financial stability.",
      img: icfm,

    },


    // {
    //   key: 6,
    //   heading: "Enhanced Decision Making",
    //   desc: "Gain valuable financial insights that drive informed decision-making and business growth.",
    //   img: b1,

    // },
    // {
    //   key: 7,
    //   heading: "Seamless Integration with Other Modules",
    //   desc: "Fully integrates with other EICE Rise ERP modules (like Room Booking, Banquet & Billing, Dining (POS), Member Portal, Employee Portal, Payroll, User & Store Inventory, Food & Beverage, and Purchase & Vendor Portal) for consistent data flow and synchronized financial records.",
    //   img: b2,
    // }
  ];



  const query = [
    {
      key: 1,
      question: "Q : What financial functions does the Accounts & Finance module manage?",
      answer: "A : The module manages accounts receivable, accounts payable, debit & credit notes, taxation, balance sheets, and general ledger. It streamlines processes and ensures accurate financial operations."
    },
    {
      key: 2,
      question: "Q : How does the module help in financial decision-making?",
      answer: "A : It provides real-time financial data and advanced reporting tools, enabling managers to make data-driven decisions that enhance profitability and financial stability."
    },
    {
      key: 3,
      question: "Q : How does the system handle tax compliance?",
      answer: "A : The module automates tax calculations based on regional and international tax regulations, ensuring compliance and applying taxes seamlessly to invoices and payments."
    },
    {
      key: 4,
      question: "Q : Can the Accounts & Finance module integrate with other systems?",
      answer: "A : Yes, it integrates fully with other EICE Rise ERP modules like Room Booking, Banquet & Billing, Dining (POS), and more, ensuring synchronized financial records and consistent data flow."
    },
    {
      key: 5,
      question: "Q : How does the system assist in managing cash flow?",
      answer: "A : It provides real-time tracking and reporting, helping businesses monitor cash flow, ensuring liquidity, and optimizing cash reserves."
    }
  ];




  const footerUpperText = {

    text1: "Gain control ",
    text2: "",
    text3: "of your finances with automated workflows and insights.",
    img: laptop
  }













  return (
    <>




      {!isPhone && (<section className={`${style.heroSectionConatiner}  `}>


        <div className={`${style.fadeBackgroundConatiner}`}>

          <div className={`${style.contentConatiner}`}>

            <div className={`${style.headingBox} font4 `}>
              <div className={`${style.mainHeading}`}>
                <span style={{ color: "#012060" }} >ACCOUNTS</span><span style={{ color: "#01B0F1" }} > & FINANCE</span>
              </div>
              <div className={`${style.mainPara}`}>
                Gain full financial control with real-time accounting and financial insights, tailored for accuracy and business growth.
              </div>


            </div>

            <div className={`${style.herosectionImgBox}`}>
              {/* <img style={{ width: "100%" }} src={main} alt="" /> */}
            </div>

          </div>

        </div>

      </section>)}



      {isPhone && (<section className={`${style.heroSectionConatinerPhone}  `}>

        <div className={`${style.contentConatinerPhone}`}>

          <div className={`${style.headingBoxPhone} font4 `}>
            <div className={`${style.mainHeadingPhone}`}>
              <span style={{ color: "#012060" }} >ACCOUNTS</span><span style={{ color: "#01B0F1" }} > & FINANCE</span>
            </div>
            <div className={`${style.mainParaPhone}`}>
              Gain full financial control with real-time accounting and financial insights, tailored for accuracy and business growth.
            </div>


          </div>

          <div className={`${style.herosectionImgBoxPhone}`}>
            <img style={{ width: "100%" }} src={heroImg} alt={"room booking"} />
          </div>


        </div>

      </section>)}


      <section style={{ backgroundColor: "#f5f5f5" }}>
        <div className={`${style.section2} font4 globalSectionSize`}>

          <div className={style.section2IconAndName}>
            <div className={`${style.section2Icon}`}>
              <img style={{ width: "100%" }} src={ddfi} alt="" />
            </div>

            <div className={`${style.iconName} `}>

              <div> Data Driver</div>
              <div> Financial Insights</div>
            </div>
          </div>



          <div className={style.section2IconAndName}>

            <div className={`${style.section2Icon}`}>
              <img style={{ width: "100%" }} src={afw} alt="" />
            </div>

            <div className={`${style.iconName} `}>



              <div>Automated Financial</div>
              <div>Workflows</div>

            </div>
          </div>



          <div className={style.section2IconAndName}>

            <div className={`${style.section2Icon}`}>
              <img style={{ width: "100%" }} src={rtet} alt="" />
            </div>

            <div className={`${style.iconName}`}>


              <div>
                Real Time
              </div>

              <div>
                Expense Tracking
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

                The Accounts and Finance module in EICE Rise ERP <strong className="font2">streamlines financial management for hospitality operations</strong> . It automates workflows, ensuring accurate records, compliance, and improved financial decision-making. This module enhances control and transparency in financial activities from budgeting, forecasting, invoicing, and taxation to financial reporting.


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
       <FooterUpperPart text1={footerUpperText.text1} text2={footerUpperText.text2} text3={footerUpperText.text3} img={laptop} />
       {!isEmbed &&<FooterLower />}

      </div>

    </>
  )
}
