import style from "./Styles/roomBooking.module.css";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

import Accordion from "../../Components/Accordian/Accordian.jsx";
import Certificate from "../../Components/Certificate/Certificate.jsx";
import FooterUpperPart from "../../Components/Footer/FooterUpperPart.jsx";
import FooterLower from "../../Components/Footer/FooterLower.jsx";

const params = new URLSearchParams(window.location.search);
const isEmbed = params.get("embed") === "true";

export default function ComplianceRegister() {

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
      heading: "Task Assignment",
      heading2: "& Delegation",
      desc: "Assign tasks with priority levels, deadlines, attachments, and detailed instructions from a centralized task management dashboard.",
      img: "/placeholders/icon.png",
      width: "60px"
    },
    {
      key: 2,
      heading: "Real-Time",
      heading2: "Progress Tracking",
      desc: "Monitor task status — pending, in-progress, completed, overdue — in real time with progress percentages and timeline views.",
      img: "/placeholders/icon.png",
      width: "60px"
    },
    {
      key: 3,
      heading: "Department-Wise",
      heading2: "Activity Boards",
      desc: "Organize activities by department — housekeeping, maintenance, F&B, front office — with customizable boards, filters, and views.",
      img: "/placeholders/icon.png",
      width: "60px"
    },
    {
      key: 4,
      heading: "Recurring Task",
      heading2: "Automation",
      desc: "Set up recurring tasks for monthly operations like room inspections, equipment servicing, and compliance checks with auto-assignment.",
      img: "/placeholders/icon.png",
      width: "60px"
    },
    {
      key: 5,
      heading: "SLA &",
      heading2: "Escalation Rules",
      desc: "Define Service Level Agreements for task categories with automated escalation to supervisors and managers when deadlines are breached.",
      img: "/placeholders/icon.png",
      width: "60px"
    },
    {
      key: 6,
      heading: "Photo & Document",
      heading2: "Attachments",
      desc: "Allow staff to attach before/after photos, inspection reports, and documents to tasks as proof of completion for audit trails.",
      img: "/placeholders/icon.png",
      width: "60px"
    },
    {
      key: 7,
      heading: "Performance",
      heading2: "Reports",
      desc: "Generate individual and team performance reports — completion rates, average resolution time, SLA compliance — for workforce optimization.",
      img: "/placeholders/icon.png",
      width: "60px"
    }
  ];

  // ================= BENEFITS =================
  const benefits = [
    {
      key: 1,
      heading: "Enhanced Accountability",
      desc: "Clear task ownership, deadlines, and audit trails ensure every activity has a responsible person and a documented outcome.",
      img: "/placeholders/benefit.jpg"
    },
    {
      key: 2,
      heading: "Operational Efficiency",
      desc: "Automated recurring tasks and reduce supervisor follow-up effort and keep operations running smoothly.",
      img: "/placeholders/benefit.jpg"
    },
    {
      key: 3,
      heading: "Service Quality",
      desc: "SLA-driven task management ensures guest-impacting activities are prioritized and completed within acceptable timeframes.",
      img: "/placeholders/benefit.jpg"
    },
    {
      key: 4,
      heading: "Centralized Visibility",
      desc: "Management gets a bird’s-eye view of all operational activities across departments and properties from a single dashboard.",
      img: "/placeholders/benefit.jpg"
    },
    {
      key: 5,
      heading: "Data-Driven Decisions",
      desc: "Performance analytics help identify bottlenecks, reward top performers, and allocate resources more effectively.",
      img: "/placeholders/benefit.jpg"
    }
  ];

  // ================= FAQ =================
  const query = [
    {
      question: "Q : What is the Compliance Register module, and who is it designed for?",
      answer: "A : The Compliance Register manages task assignment, progress tracking, and performance monitoring across all operational departments for hotels, resorts, clubs, and institutions."
    },
    {
      question: "Q : How does this module improve operational accountability?",
      answer: "A : Every task has a clear owner, deadline, and digital audit trail. SLA rules auto-escalate overdue tasks, and photo attachments provide completion evidence."
    },
    {
      question: "Q : Can the module handle recurring operational tasks?",
      answer: "A : Yes. Daily room inspections, weekly equipment checks, and monthly compliance reviews can all be configured as auto-recurring tasks with preset assignment rules."
    },
    {
      question: "Q : Is the Activity Tracker integrated with other EICE Rise modules?",
      answer: "A : Absolutely. It connects with Housekeeping, Maintenance, HRMS to auto-generate tasks from guest complaints, inspection results, and work orders."
    }
  ];

  const footerUpperText = {
    text1: "Track every task,",
    text2: "",
    text3: "deliver every promise",
    img: "/placeholders/laptop.jpg"
  };

  return (
    <>
      {/* HERO */}
      {isPhone ? (
        <section className={style.heroSectionConatinerPhone}>
          <div className={style.contentConatinerPhone}>
            <div className={style.headingBoxPhone}>
              <div className={style.mainHeadingPhone}>COMPLIANCE REGISTER</div>
              <div className={style.mainParaPhone}>
                Track, assign, and monitor operational activities and tasks across departments in real time, ensuring accountability and timely completion.
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
                <div className={style.mainHeading}>COMPLIANCE REGISTER</div>
                <div className={style.mainPara}>
                  Track, assign, and monitor operational activities and tasks across departments in real time, ensuring accountability and timely completion.
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

      {/* TAGWORDS */}
      <section style={{ backgroundColor: "#f5f5f5" }}>
        <div className={`${style.section2} globalSectionSize`}>
          {["Visible", "Accountable", "Connected"].map((t, i) => (
            <div key={i} className={style.section2IconAndName}>
              <img src="/placeholders/icon.png" className={style.section2Icon} />
              <div className={style.iconName}>{t}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3 */}
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
              Our Compliance Register module  is a comprehensive solution designed for the hospitality industry, integrating with EICE Rise ERP to manage and monitor departmental tasks, organization compliance register and activities for Hotels, Resorts, Clubs and Institutions. From daily housekeeping checklists to maintenance work orders, this feature provides a task assignment, progress tracking, and performance analytics platform, ensuring every operational activity is visible, accountable, and completed on time.
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

      {/* CTA */}
      <section>
        <Link to="/form" style={{ color: "white" }}>
          <div style={{ display: "flex", justifyContent: "center" }} className="globalSectionSize">
            <div className={style.demoButton}>
              Request a Demo <FaArrowRightLong />
            </div>
          </div>
        </Link>
      </section>

      {/* BENEFITS */}
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

      {/* FOOTER */}
      <Certificate />
      <FooterUpperPart {...footerUpperText} />
      {!isEmbed && <FooterLower />}
    </>
  );
}