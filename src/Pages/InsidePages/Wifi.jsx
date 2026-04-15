import style from "./Styles/pos.module.css";
import { useState, useEffect } from "react";
import Accordion from "../../Components/Accordian/Accordian.jsx";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import acgIcon from "../../assets/wifi/ACG.png";
import tbacIcon from "../../assets/wifi/TBAC.png";
import bcpIcon from "../../assets/wifi/BCP.png";
import gsspIcon from "../../assets/wifi/GSSP.png"; 
import rtumIcon from "../../assets/wifi/RTUM.png";
import mdsIcon from "../../assets/wifi/MDS.png";
import ipmsIcon from "../../assets/wifi/IPMS.png";
import draIcon from "../../assets/wifi/DRA.png";
import bartIcon from "../../assets/wifi/BART.png";


const Placeholder = ({ label }) => (
  <div style={{
    border: "1px dashed #CBD5E1",
    background: "#F1F5F9",
    height: "140px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }}>
    {label}
  </div>
);

export default function WifiModule() {

  const [isPhone, setIsPhone] = useState(window.innerWidth <= 980);

  useEffect(() => {
    const handleResize = () => {
      setIsPhone(window.innerWidth <= 980);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const features = [
    { 
      icon: acgIcon,
      title: "Automated Card Generation",
      desc: "Generate unique Wi-Fi access cards automatically at check-in, tied to room number, guest profile, and stay duration for a seamless onboarding experience."
     },
    { 
      icon: tbacIcon,
      title: "Time-Bound Access Control",
      desc: "Set Wi-Fi validity based on check-in and check-out dates, automatically expiring access at departure to maintain network security and bandwidth efficiency."
     },
    { 
      icon: bartIcon,
      title: "Bandwidth Allocation by Room Type",
      desc: "Assign different speed tiers based on room category — standard, deluxe, suite — ensuring premium guests receive priority bandwidth."
     },
    { 
      icon: gsspIcon,
      title: "Guest Self-Service Portal",
      desc: "Allow guests to activate their Wi-Fi using a card code via a branded captive portal, reducing front-desk workload and enhancing the digital experience."
     },
    { 
      icon: rtumIcon,
      title: "Real-Time Usage Monitoring",
      desc: "Track active connections, data consumption, and device count per guest in real time from a centralized network dashboard."
     },
    { 
      icon: mdsIcon,
      title: "Multi-Device Support",
      desc: "Enable guests to connect multiple devices — phones, laptops, tablets — under a single Wi-Fi card with configurable device limits per card."
     },
    { 
      icon: bcpIcon,
      title: "Branded Captive Portal",
      desc: "Customize the Wi-Fi login page with your property’s logo, promotions, and welcome messages to reinforce brand identity at every touchpoint."
     },
    { 
      icon: ipmsIcon,
      title: "Integration with PMS",
      desc: "Sync directly with the Property Management System to auto-issue Wi-Fi credentials upon room assignment, eliminating manual intervention."
     },
    { 
      icon: draIcon,
      title: "Detailed Reporting & Analytics",
      desc: "Generate comprehensive reports on Wi-Fi usage patterns, peak hours, and guest connectivity trends to optimize network infrastructure investment."
     },
  ];

  const benefits = [
    "Enhanced Guest Experience",
    "Operational Efficiency",
    "Revenue Optimization",
    "Centralized Management",
    "Network Security",
  ];

  const query = [
    {
      question: "Q : What is the Wi-Fi module?",
      answer: "A : It automates guest internet access provisioning."
    },
    {
      question: "Q : How does it improve experience?",
      answer: "A : Guests get instant Wi-Fi access."
    },
    {
      question: "Q : Can access be customized?",
      answer: "A : Yes, based on room type."
    },
    {
      question: "Q : Is it integrated with PMS?",
      answer: "A : Yes, fully integrated."
    }
  ];

  return (
    <>

      {/* HERO */}
      {isPhone ? (
        <section className={style.heroSectionConatinerPhone}>
          <div className={style.contentConatinerPhone}>

            <div className={style.headingBoxPhone}>
              <div className={style.mainHeadingPhone}>
                WI-FI MODULE
              </div>

              <div className={style.mainParaPhone}>
                Automate guest Wi-Fi access linked with the Room Booking module to the issuance system, delivering instant, secure connectivity from the moment of check-in. This module can also be utilised to generate the Wi-Fi cards for walking guests/visitors, who are utilising the banquets service, seminars etc.
              </div>
            </div>

            <div className={style.herosectionImgBoxPhone}>
              <Placeholder label="Image 1" />
              <Placeholder label="Image 2" />
              <Placeholder label="Image 3" />
            </div>

          </div>
        </section>
      ) : (
        <section className={style.heroSectionConatiner}>

          <div className={style.fadeBackgroundConatiner}>
            <div className={style.contentConatiner}>

              <div className={style.headingBox}>
                <div className={style.mainHeading}>
                  WI-FI MODULE
                </div>

                <div className={style.mainPara}>
                  Automate guest Wi-Fi access linked with the Room Booking module to the issuance system, delivering instant, secure connectivity from the moment of check-in. This module can also be utilised to generate the Wi-Fi cards for walking guests/visitors, who are utilising the banquets service, seminars etc.
                </div>
              </div>

              {/* 3 IMAGE LAYOUT */}
              <div className={style.herosectionImgBox} style={{ display: "flex", gap: "10px" }}>

                <div style={{ width: "50%" }}>
                  <Placeholder label="Image 1" />
                </div>

                <div style={{ width: "50%", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <Placeholder label="Image 2" />
                  <Placeholder label="Image 3" />
                </div>

              </div>

            </div>
          </div>
        </section>
      )}

      {/* TAGWORDS */}
      <section style={{ backgroundColor: "#f5f5f5" }}>
        <div className={`${style.section2} globalSectionSize`}>

          {["Seamless", "Secure", "Scalable"].map((t, i) => (
            <div key={i} className={style.section2IconAndName}>
              <div className={style.section2Icon}>
                <Placeholder label="Icon" />
              </div>
              <div className={style.iconName}>{t}</div>
            </div>
          ))}

        </div>
      </section>

      {/* OVERVIEW */}
      <section>
        <div className={style.section3}>

          <div className={style.blueBoxSetion3}>

            <div className={style.laptopImgSection3}>
              <Placeholder label="Laptop" />
            </div>

            <div className={style.section3Para}>
              <div className={style.paragraph}>
                <strong>Our Wi-Fi module</strong> is a comprehensive solution designed for the hospitality industry, integrating with EICE Rise ERP to automate and streamline internet access provisioning for Hotels, Resorts, Clubs and Institutions. From lobby lounges to luxury suites, this feature ensures every guest receives hassle-free, secure Wi-Fi credentials through an intuitive card issuance workflow, enhancing the digital guest experience.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURES */}
<section>
  <div className={`${style.section4} globalSectionSize`}>

    <div className={style.keyFeatureHeading}>Key Features</div>

    <div className={style.featureContainer}>
      {features.map((f, i) => (
        <div key={i} className={style.featureInnerBox}>

          {/* ICON + HEADING */}
          <div className={style.headingAndIconFeatures}>
            <div style={{ width: "44px" }}>
              <img src={f.icon} style={{ width: "100%" }} />
            </div>

            <div className={style.featureHeading}>
              {f.title}
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className={style.featureDesc}>
            {f.desc}
          </div>

        </div>
      ))}
    </div>

  </div>
</section>

      {/* CTA */}
      <section className={style.requestDemoBtn}>
        <Link to={"/form"} className="linkClass">
          <div style={{ display: "flex", justifyContent: "center" }} className="globalSectionSize">
            <div className={style.demoButton}>
              <div>Request a Demo</div>
              <div className={style.demoArrowButton}><FaArrowRightLong /></div>
            </div>
          </div>
        </Link>
      </section>

      {/* BENEFITS */}
      <section style={{ background: "#f5f5f5" }}>
        <div className={`${style.section5} globalSectionSize`}>

          <div className={style.benefitSectionHeading}>Benefits</div>

          {benefits.map((b, i) => (
            <div key={i} className={i % 2 === 0 ? 'GlobalBenefitBox1' : 'GlobalBenefitBox2'}>
              <div className="GlobalBenefitImgBox">
                <Placeholder label="Image" />
              </div>
              <div className="GlobalBenefitTextBox">
                <div className={style.innerHeadingBenifit}>{b}</div>
                <div className={style.innerDescBenifit}>
                  This benefit enhances efficiency and experience.
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className={`${style.FAQsection} globalSectionSize`}>
          <div className={style.FAQHeading}>Frequently Asked Questions</div>

          <div className={style.FAQContainer}>
            {query.map((item, i) => (
              <Accordion key={i} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>

    </>
  );
}