import style from "./Styles/roomBooking.module.css";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

import Accordion from "../../Components/Accordian/Accordian.jsx";
import Certificate from "../../Components/Certificate/Certificate.jsx";
import FooterUpperPart from "../../Components/Footer/FooterUpperPart.jsx";
import FooterLower from "../../Components/Footer/FooterLower.jsx";
import bcmIcon from "../../assets/audience/BCM.jpg"
import bemeIcon from "../../assets/audience/BEME.png"
import boeIcon from "../../assets/audience/BOE.jpg"
import briIcon from "../../assets/audience/BRI.jpg"
import bscIcon from "../../assets/audience/BSC.jpg"
import camIcon from "../../assets/audience/CAM.png"
import daIcon from "../../assets/audience/DA.png"
import eamIcon from "../../assets/audience/EAM.png"
import gvrIcon from "../../assets/audience/GVR.png"
import matIcon from "../../assets/audience/MAT.png"
import rtotIcon from "../../assets/audience/RTOT.png"
import vwurIcon from "../../assets/audience/VWUR.png"



const params = new URLSearchParams(window.location.search);
const isEmbed = params.get("embed") === "true";

export default function AudienceAttendance() {

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
      heading2: "Occupancy Tracking",
      desc: "Monitor live attendance across all venues — gym, pool, restaurant, banquet hall, sports facilities — with real-time headcounts and capacity indicators.",
      img: rtotIcon,
      width: "44px"
    },
    {
      key: 2,
      heading: "Guest & Visitor",
      heading2: "Registration",
      desc: "Register non-member guests and visitors with host details, purpose of visit, and time-stamped entry/exit logs for security and compliance.",
      img: gvrIcon,
      width: "44px"
    },
    {
      key: 3,
      heading: "Capacity Alerts",
      heading2: "& Management",
      desc: "Set maximum capacity limits per venue and receive alerts when occupancy approaches or reaches limits, ensuring safety compliance and comfort.",
      img: camIcon,
      width: "44px"
    },
    {
      key: 4,
      heading: "Venue-Wise",
      heading2: "Utilization Reports",
      desc: "Generate detailed reports on venue usage patterns — peak hours, popular days, average duration of stay — for infrastructure planning and scheduling.",
      img: vwurIcon,
      width: "44px"
    },
    {
      key: 5,
      heading: "Member Activity",
      heading2: "Tracking",
      desc: "Track individual member venue visits, frequency, and activity preferences to understand usage patterns and drive personalized engagement.",
      img: matIcon,
      width: "44px"
    },
    {
      key: 6,
      heading: "Event Attendance",
      heading2: "Management",
      desc: "Record and manage attendance for events, workshops, and programs with pre-registration, walk-in tracking, and post-event attendance reports.",
      img: eamIcon,
      width: "44px"
    },
    {
      key: 7,
      heading: "Dashboard &",
      heading2: "Analytics",
      desc: "Visualize attendance trends, peak-hour heatmaps, and venue comparison metrics through an interactive dashboard for strategic facility management.",
      img: daIcon,
      width: "44px"
    }
  ];

  // ================= BENEFITS =================
  const benefits = [
    {
      key: 1,
      heading: "Enhanced Member Experience",
      desc: "Fast, frictionless check-in methods and capacity management ensure a comfortable, well-managed venue experience.",
      img: bemeIcon
    },
    {
      key: 2,
      heading: "Operational Efficiency",
      desc: "Automated attendance capture eliminates manual tracking, freeing staff to focus on member service and facility management.",
      img: boeIcon
    },
    {
      key: 3,
      heading: "Revenue Insights",
      desc: "Utilization data helps identify underused venues for revenue programs and justifies investment in high-demand facilities.",
      img: briIcon
    },
    {
      key: 4,
      heading: "Centralized Management",
      desc: "A single dashboard provides real-time visibility into all venue occupancy and member activity across the entire property.",
      img: bcmIcon
    },
    {
      key: 5,
      heading: "Safety & Compliance",
      desc: "Capacity alerts and visitor logs ensure regulatory compliance and enable swift head counts during emergency situations.",
      img: bscIcon
    }
  ];

  // ================= FAQ =================
  const query = [
    {
      question: "Q : What is the Audience Attendance module, and who is it designed for?",
      answer: "A : The Audience Attendance module tracks real-time occupancy and member attendance across all facilities — gym, pool, banquet halls, sports venues — for hotels, resorts, clubs, and institutions."
    },
    {
      question: "Q : How does this module improve facility management?",
      answer: "A : It provides real-time occupancy data, utilization analytics, and capacity alerts, enabling managers to optimize scheduling, staffing, and infrastructure decisions."
    },
    {
      question: "Q : What check-in methods are supported?",
      answer: "A : The module supports RFID card, biometric scan, and manual check-in methods, integrating with existing access control hardware."
    },
    {
      question: "Q : Is the Venue Attendance module integrated with Member Portal?",
      answer: "A : Absolutely. Member visit data syncs with their profiles in the Member Portal, enabling personalized engagement and activity-based communications."
    }
  ];

  const footerUpperText = {
    text1: "Every visit counted,",
    text2: "",
    text3: "every venue optimized",
    img: "/placeholders/laptop.jpg"
  };

  return (
    <>
      {/* ================= HERO ================= */}
      {isPhone ? (
        <section className={style.heroSectionConatinerPhone}>
          <div className={style.contentConatinerPhone}>
            <div className={style.headingBoxPhone}>
              <div className={style.mainHeadingPhone}>AUDIENCE ATTENDANCE</div>
              <div className={style.mainParaPhone}>
                Monitor and manage banquet-wise footfall and attendance with real-time tracking, capacity management, and detailed utilization analytics.
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
                <div className={style.mainHeading}>AUDIENCE ATTENDANCE</div>
                <div className={style.mainPara}>
                  Monitor and manage banquet-wise footfall and attendance with real-time tracking, capacity management, and detailed utilization analytics.
                </div>
              </div>

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
          {["Tracked", "Transparent", "Real-Time"].map((t, i) => (
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
                Our Audience Attendance module is a comprehensive solution designed for the hospitality industry, integrating with EICE Rise ERP to track and manage attendance across venues for Hotels, Resorts, Clubs and Institutions. From conference halls to swimming pools, this feature provides real-time occupancy monitoring, member check-in tracking, and venue utilization analytics, ensuring optimal capacity management and member engagement.
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
                    <img src={item.img} style={{ width: "100%" }} />
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