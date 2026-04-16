import style from "./Styles/roomBooking.module.css";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

import Accordion from "../../Components/Accordian/Accordian.jsx";
import Certificate from "../../Components/Certificate/Certificate.jsx";
import FooterUpperPart from "../../Components/Footer/FooterUpperPart.jsx";
import FooterLower from "../../Components/Footer/FooterLower.jsx";
import caIcon from "../../assets/feedback/CA.png"
import dwrIcon from "../../assets/feedback/DWR.png"
import ghpmIcon from "../../assets/feedback/GHPM.png"
import retIcon from "../../assets/feedback/RET.png"
import rtfaIcon from "../../assets/feedback/RTFA.png"
import sadIcon from "../../assets/feedback/SAD.png"
import bcmIcon from "../../assets/feedback/BCM.jpg"
import beglIcon from "../../assets/feedback/BEGL.jpg"
import boiIcon from "../../assets/feedback/BOI.jpg"
import briIcon from "../../assets/feedback/BRI.jpg"
import bsrIcon from "../../assets/feedback/BSR.JPG"


const params = new URLSearchParams(window.location.search);
const isEmbed = params.get("embed") === "true";

export default function Feedback() {

  const [isPhone, setIsPhone] = useState(window.innerWidth <= 980);

  useEffect(() => {
    const handleResize = () => setIsPhone(window.innerWidth <= 980);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ================= FEATURES =================
  const features = [
    {
      key: 1,
      heading: "Real-Time",
      heading2: "Feedback Alerts",
      desc: "Receive instant notifications for negative feedback or low ratings, enabling immediate intervention and service recovery before guest departure.",
      icon: rtfaIcon,
      width: "44px"
    },
    {
      key: 2,
      heading: "Sentiment",
      heading2: "Analysis Dashboard",
      desc: "Visualize guest sentiment trends, satisfaction scores, and NPS across departments, outlets, and time periods through an interactive analytics dashboard.",
      icon: sadIcon,
      width: "44px"
    },
    {
      key: 3,
      heading: "Department-Wise",
      heading2: "Routing",
      desc: "Automatically route feedback to the relevant department — housekeeping, F&B, front desk, maintenance — based on category for targeted resolution.",
      icon: dwrIcon,
      width: "44px"
    },
    {
      key: 4,
      heading: "Resolution &",
      heading2: "Escalation Tracking",
      desc: "Track feedback resolution from acknowledgement to closure with SLA timers, escalation rules, and manager override capabilities.",
      icon: retIcon,
      width: "44px"
    },
    {
      key: 5,
      heading: "Guest History",
      heading2: "& Preference Mapping",
      desc: "Link feedback to guest profiles, building a comprehensive preference and complaint history for personalised future interactions.",
      icon: ghpmIcon,
      width: "44px"
    },
    {
      key: 6,
      heading: "Comparative",
      heading2: "Analytics",
      desc: "Benchmark feedback scores across properties, departments, and time periods to identify best practices and areas requiring improvement.",
      icon: caIcon,
      width: "44px"
    }
  ];

  // ================= BENEFITS =================
  const benefits = [
    {
      key: 1,
      heading: "Enhanced Guest Loyalty",
      desc: "Prompt acknowledgement and resolution of feedback demonstrates care, converting potentially dissatisfied guests into loyal advocates.",
      img: beglIcon
    },
    {
      key: 2,
      heading: "Operational Improvement",
      desc: "Data-driven insights from feedback trends help identify systemic issues and prioritize operational improvements.",
      img: boiIcon
    },
    {
      key: 3,
      heading: "Revenue Impact",
      desc: "Improved satisfaction scores directly correlate with higher repeat visits, positive reviews, and increased referral revenue.",
      img: briIcon
    },
    {
      key: 4,
      heading: "Centralized Management",
      desc: "A single dashboard for all feedback across properties, channels, and departments provides complete visibility into guest sentiment.",
      img: bcmIcon
    },
    {
      key: 5,
      heading: "Service Recovery",
      desc: "Real-time alerts enable immediate intervention for negative experiences, turning potential complaints into service recovery success stories.",
      img: bsrIcon
    }
  ];

  // ================= FAQ =================
  const query = [
    {
      question: "Q : What is the Feedback System module, and who is it designed for?",
      answer: "A : The Feedback System captures, analyzes, and manages guest feedback across multiple channels for hotels, resorts, clubs, and institutions, helping improve service quality and guest satisfaction."
    },
    {
      question: "Q : How does this module improve guest satisfaction?",
      answer: "A : Real-time negative feedback alerts enable immediate service recovery, while sentiment analytics help identify and fix systemic issues before they impact more guests."
    },
    {
      question: "Q : Can feedback be routed to specific departments automatically?",
      answer: "Yes. Feedback is auto-categorized and routed to the relevant department — F&B, housekeeping, front desk — with SLA timers and escalation rules for timely resolution."
    },
    {
      question: "Q : Is the Feedback System integrated with guest profiles?",
      answer: "A : Absolutely. Every feedback entry links to the guest’s profile in the Member Portal and Room Booking modules, building a comprehensive preference and interaction history."
    }
  ];

  const footerUpperText = {
    text1: "Listen",
    text2: "",
    text3: "serve better",
    img: "/placeholders/laptop.jpg"
  };

  return (
    <>
      {/* ================= HERO ================= */}
      {isPhone ? (
        <section className={style.heroSectionConatinerPhone}>
          <div className={style.contentConatinerPhone}>
            <div className={style.headingBoxPhone}>
              <div className={style.mainHeadingPhone}>FEEDBACK SYSTEM</div>
              <div className={style.mainParaPhone}>
                Capture, analyze, and act on guest feedback in real time, transforming opinions into operational improvements and enhanced guest satisfaction.
              </div>
            </div>

            <div className={style.herosectionImgBoxPhone}>
              <img src="/placeholders/hero1.jpg" style={{ width: "100%" }} />
            </div>
          </div>
        </section>
      ) : (
        <section className={style.heroSectionConatiner}>
          <div className={style.fadeBackgroundConatiner}>
            <div className={style.contentConatiner}>
              
              <div className={style.headingBox}>
                <div className={style.mainHeading}>FEEDBACK SYSTEM</div>
                <div className={style.mainPara}>
                  Capture, analyze, and act on guest feedback in real time, transforming opinions into operational improvements and enhanced guest satisfaction.
                </div>
              </div>

              {/* 3 IMAGE GRID */}
              <div style={{ display: "flex", gap: "10px", width: "50%" }}>
                <img src="/placeholders/hero1.jpg" style={{ width: "50%" }} />
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "50%" }}>
                  <img src="/placeholders/hero2.jpg" />
                  <img src="/placeholders/hero3.jpg" />
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* ================= TAGWORDS ================= */}
      <section style={{ backgroundColor: "#f5f5f5" }}>
        <div className={`${style.section2} globalSectionSize`}>
          {["Insightful", "Real-Time", "Actionable"].map((t, i) => (
            <div key={i} className={style.section2IconAndName}>
              <img src="/placeholders/icon.png" className={style.section2Icon} />
              <div className={style.iconName}>{t}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SECTION 3 ================= */}
      <section>
        <div className={style.section3}>
          <div className={style.blueBoxSetion3}>
            <div className={style.laptopImgSection3}>
              <div className={style.laptopImgBox}>
                <img src="/placeholders/laptop.jpg" style={{ width: "100%" }} />
              </div>
            </div>

            <div className={style.section3Para}>
              <div className={style.paragraph}>
                Our Feedback System module is a comprehensive solution designed for the hospitality industry, integrating with EICE Rise ERP to capture and manage guest feedback for Hotels, Resorts, Clubs and Institutions. From dining experiences to room comfort, banquet service, this feature provides multi-channel feedback collection, sentiment analysis, ensuring every guest voice is heard and acted upon.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section>
        <div className={`${style.section4} globalSectionSize`}>
          <div className={style.keyFeatureHeading}>Key Features</div>

          <div className={style.featureContainer}>
            {features.map((item) => (
              <div key={item.key} className={style.featureInnerBox}>
                <div className={style.headingAndIconFeatures}>
                  <div style={{ width: item.width }}>
                    <img src={item.icon} style={{ width: "100%" }} />
                  </div>

                  <div className={style.featureHeading}>
                    <div>{item.heading}</div>
                    <div>{item.heading2}</div>
                  </div>
                </div>

                <div className={style.featureDesc}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section>
        <Link to="/form" style={{ color: "white" }}>
          <div style={{ display: "flex", justifyContent: "center" }} className="globalSectionSize">
            <div className={style.demoButton}>
              Request a Demo <FaArrowRightLong />
            </div>
          </div>
        </Link>
      </section>

      {/* ================= BENEFITS ================= */}
      <section style={{ background: "#f5f5f5" }}>
        <div className={`${style.section5} globalSectionSize`}>
          <div className={style.benefitSectionHeading}>Benefits</div>

          {benefits.map((item, index) =>
            index % 2 === 0 ? (
              <div className="GlobalBenefitBox1">
                <div className="GlobalBenefitImgBox">
                  <img src={item.img} style={{ width: "100%" }} />
                </div>
                <div className="GlobalBenefitTextBox">
                  <div className={style.innerHeadingBenifit}>{item.heading}</div>
                  <div className={style.innerDescBenifit}>{item.desc}</div>
                </div>
              </div>
            ) : (
              <div className="GlobalBenefitBox2">
                <div className="GlobalBenefitImgBox">
                  <img src={item.img} style={{ width: "100%" }} />
                </div>
                <div className="GlobalBenefitTextBox">
                  <div className={style.innerHeadingBenifit}>{item.heading}</div>
                  <div className={style.innerDescBenifit}>{item.desc}</div>
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {/* ================= FAQ ================= */}
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

      {/* ================= FOOTER ================= */}
      <Certificate />
      <FooterUpperPart {...footerUpperText} />
      {!isEmbed && <FooterLower />}
    </>
  );
}