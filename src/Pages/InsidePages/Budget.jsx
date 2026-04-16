import { useState, useEffect } from "react";
import style from "./Styles/roomBooking.module.css";
import Certificate from "../../Components/Certificate/Certificate.jsx";
import FooterUpperPart from "../../Components/Footer/FooterUpperPart.jsx";
import FooterLower from "../../Components/Footer/FooterLower.jsx";
import Accordion from "../../Components/Accordian/Accordian.jsx"
import abpIcon from "../../assets/budget/ABP.png"
import brrIcon from "../../assets/budget/BRR.png"
import cepIcon from "../../assets/budget/CEP.png"
import dwaIcon from "../../assets/budget/DWA.png"
import ipIcon from "../../assets/budget/IP.png"
import hcIcon from "../../assets/budget/HC.png"
import mpcIcon from "../../assets/budget/MPC.png"
import varIcon from "../../assets/budget/VAR.png"
import mqtIcon from "../../assets/budget/MQT.png"
import barIcon from "../../assets/budget/BAR.jpg"
import bcoIcon from "../../assets/budget/BCO.jpg"
import bfdIcon from "../../assets/budget/BFD.png"
import boeIcon from "../../assets/budget/BOE.jpg"
import bspIcon from "../../assets/budget/BSP.jpg"

const params = new URLSearchParams(window.location.search);
const isEmbed = params.get("embed") === "true";

export default function Budget() {
  const [isPhone, setIsPhone] = useState(window.innerWidth <= 980);
  const Placeholder = ({ label }) => (
  <div
    style={{
      border: "1px dashed #CBD5E1",
      background: "#F1F5F9",
      height: "150px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    {label}
  </div>
);

  useEffect(() => {
    const handleResize = () => {
      setIsPhone(window.innerWidth <= 980);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const features = [
    {
      icon: abpIcon,
      title: "Annual Budget Preparation",
      desc: "Create detailed annual budgets by department, cost center, and GL account with revenue projections, expense estimates, and capital expenditure planning"
    },
    {
      icon: dwaIcon,
      title: "Department-Wise Allocation",
      desc: "Allocate budgets to individual departments with sub-category breakdowns — manpower, materials, utilities, maintenance — for granular cost control."
    },
    {
      icon: mqtIcon,
      title: "Monthly & Quarterly Tracking",
      desc: "Compare actual spend against budgeted amounts on a monthly and quarterly basis with auto-calculated variances and trend visualizations."
    },
    {
      icon: varIcon,
      title: "Variance Analysis & Alerts",
      desc: "Receive automated alerts when spending exceeds budget thresholds at 80%, 90%, and 100% levels, enabling proactive cost management."
    },
    {
      icon: brrIcon,
      title: "Budget Revision & Reforecast",
      desc: "Submit and approve mid-year budget revisions with version control, maintaining a clear audit trail of all changes and their justifications."
    },
    {
      icon: cepIcon,
      title: "Capital Expenditure (CAPEX) Planning",
      desc: "Plan and track capital investments separately with ROI projections, approval workflows, and disbursement schedules."
    },
    {
      icon: mpcIcon,
      title: "Multi-Property Consolidation",
      desc: "Consolidate budgets across multiple properties into a unified corporate view while maintaining property-level granularity."
    },
    {
      icon: hcIcon,
      title: "Historical Comparison",
      desc: "Compare current budgets and actuals against previous years’ data for trend analysis, seasonal adjustments, and more accurate forecasting."
    },
    {
      icon: ipIcon,
      title: "Integration with Purchase",
      desc: "Auto-feed actual expenditure data from Purchase and Accounts modules for real-time budget utilization without manual data entry."
    }
  ];

  const benefits = [
    {
      icon: bfdIcon,
      title: "Financial Discipline",
      desc: "Threshold-based alerts and approval workflows enforce spending discipline across all departments and properties."
    },
    {
      icon: boeIcon,
      title: "Operational Efficiency",
      desc: "Automated variance calculations and report generation save finance teams hours of manual reconciliation work."
    },
    {
      icon: bspIcon,
      title: "Strategic Planning",
      desc: "Historical comparisons and trend analytics enable more accurate forecasting and informed financial decisions."
    },
    {
      icon: bcoIcon,
      title: "Centralized Oversight",
      desc: "Multi-property budget consolidation gives leadership a complete financial picture across the entire organization."
    },
    {
      icon: barIcon,
      title: "Audit Readiness",
      desc: "Version-controlled revisions, approval trails, and automated feeds ensure transparent, audit-ready budget documentation."
    }
  ];

  const faqs = [
    {
      q: "What is the Budget module, and who is it designed for?",
      a: "A : The Budget module enables comprehensive financial planning, allocation, and tracking for hotels, resorts, clubs, and institutions. It serves finance teams, department heads, and senior management."
    },
    {
      q: "How does this module help control overspending?",
      a: "A : It provides threshold alerts at 80%, 90%, and 100% budget utilization, integrates with Purchase for pre-purchase validation, and requires approvals for over-budget expenditures."
    },
    {
      q: "Can the module handle multi-property budget planning?",
      a: "A : Yes. It supports property-level budget preparation with corporate-level consolidation, enabling both granular and organizational financial oversight."
    },
    {
      q: "Is the Budget module integrated with other financial modules?",
      a: "A : Absolutely. It connects with Purchase, Payroll, Accounts & Finance, and the Indent workflow to auto-capture actual expenditure data in real time."
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
      {/* HERO */}
      {isPhone ? (
        <section className={style.heroSectionConatinerPhone}>
          <div className={style.contentConatinerPhone}>
            <div className={style.headingBoxPhone}>
              <div className={style.mainHeadingPhone}>BUDGET</div>
              <div className={style.mainParaPhone}>
                Plan, allocate, and monitor budgets across departments and properties with real-time variance tracking and intelligent forecasting tools.
              </div>
            </div>

            <div className={style.herosectionImgBoxPhone}>
              <Placeholder label="Hero Image" />
            </div>
          </div>
        </section>
      ) : (
        <section className={style.heroSectionConatiner}>
          <div className={style.fadeBackgroundConatiner}>
            <div className={style.contentConatiner}>
              <div className={style.headingBox}>
                <div className={style.mainHeading}>BUDGET</div>
                <div className={style.mainPara}>
                  Plan, allocate, and monitor budgets across departments and properties with real-time variance tracking and intelligent forecasting tools.
                </div>
              </div>

              <div className={style.herosectionImgBox}>
                <Placeholder label="Hero Image" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* TAGWORDS */}
      <section style={{ backgroundColor: "#f5f5f5" }}>
        <div className={`${style.section2} globalSectionSize`}>
          {["Planned", "Precise", "Predictive"].map((t, i) => (
            <div key={i} className={style.section2IconAndName}>
              <div className={style.section2Icon}>
                <Placeholder label="Icon" />
              </div>
              <div className={style.iconName}>{t}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MOCKUP */}
      <section>
        <div className={style.section3}>
          <div className={style.blueBoxSetion3}>
            <div className={style.laptopImgSection3}>
              <Placeholder label="Laptop Mockup" />
            </div>

            <div className={style.section3Para}>
              <div className={style.paragraph}>
                Our Budget module is a comprehensive solution designed for the hospitality industry, integrating with EICE Rise ERP to streamline financial planning and budget control for Hotels, Resorts, Clubs and Institutions. From annual budget preparation to monthly variance analysis, this feature provides a powerful, user-friendly interface for finance teams, department heads, and management, ensuring fiscal discipline and data-driven financial decisions.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      {/* <section>
        <div className={`${style.section4} globalSectionSize`}>
          <div className={style.paragraph}>
            
          </div>
        </div>
      </section>  */}

      {/* FEATURES */}
      <section>
        <div className={`${style.section4} globalSectionSize`}>
          <div className={style.keyFeatureHeading}>Key Features</div>

          <div className={style.featureContainer}>
            {features.map((f, i) => (
              <div key={i} className={style.featureInnerBox}>
                <div className={style.headingAndIconFeatures}>
                  <div style={{ width: "44px" }}>
                    <img src={f.icon} style={{ width: "100%" }} />
                  </div>
                  <div className={style.featureHeading}>{f.title}</div>
                </div>

                <div className={style.featureDesc}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={style.requestDemoBtn}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className={style.demoButton}>Request a Demo →</div>
        </div>
      </section>

      {/* BENEFITS */}
      <section style={{ background: "#f5f5f5" }}>
        <div className={`${style.section5} globalSectionSize`}>
          <div className={style.benefitSectionHeading}>Benefits</div>

          {benefits.map((b, i) => (
            <div
              key={i}
              className={i % 2 === 0 ? "GlobalBenefitBox1" : "GlobalBenefitBox2"}
            >
              <div className="GlobalBenefitImgBox">
                <div style={{ display: "flex", gap: "10px" }}>
                  <img src={b.icon} width="350px" />
                  {/* <img src="/p2.jpg" width="80" />
                  <img src="/p3.jpg" width="80" /> */}
                </div>
              </div>

              <div className="GlobalBenefitTextBox">
                <div className={style.innerHeadingBenifit}>{b.title}</div>
                <div className={style.innerDescBenifit}>{b.desc}</div>
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
            {faqs.map((item, i) => (
              <Accordion key={i} question={item.q} answer={item.a} />
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
