import { useState } from "react";
import styles from "./Styles/pos.module.css";
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

export default function Budget() {

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
      title: "Financial Discipline",
      desc: "Threshold-based alerts and approval workflows enforce spending discipline across all departments and properties."
    },
    {
      title: "Operational Efficiency",
      desc: "Automated variance calculations and report generation save finance teams hours of manual reconciliation work."
    },
    {
      title: "Strategic Planning",
      desc: "Historical comparisons and trend analytics enable more accurate forecasting and informed financial decisions."
    },
    {
      title: "Centralized Oversight",
      desc: "Multi-property budget consolidation gives leadership a complete financial picture across the entire organization."
    },
    {
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

  return (
    <div>

      {/* ================= HERO ================= */}
      <section className={styles.heroSectionConatiner}>
        <div className={styles.fadeBackgroundConatiner}>
          <div className={styles.contentConatiner}>

            {/* LEFT TEXT */}
            <div className={styles.headingBox}>
              <h1 className={styles.mainHeading}>BUDGET</h1>
              <p className={styles.mainPara}>
                Plan, allocate, and monitor budgets across departments and properties with real-time variance tracking and intelligent forecasting tools.
              </p>
            </div>

            {/* RIGHT IMAGE GRID */}
            <div style={{ display: "flex", gap: "10px", width: "50%" }}>
              <img src="/placeholder1.jpg" style={{ width: "50%", borderRadius: "10px" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "50%" }}>
                <img src="/placeholder2.jpg" style={{ width: "100%", borderRadius: "10px" }} />
                <img src="/placeholder3.jpg" style={{ width: "100%", borderRadius: "10px" }} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= TAGWORDS ================= */}
      <section className={styles.section2}>
        {["Planned", "Precise", "Predictive"].map((item, i) => (
          <div key={i} className={styles.section2IconAndName}>
            <img src="/icon.png" className={styles.section2Icon} />
            <p className={styles.iconName}>{item}</p>
          </div>
        ))}
      </section>

      {/* ================= SECTION 3 ================= */}
      <section className={styles.section3}>
        <div className={styles.blueBoxSetion3}>
          <div className={styles.laptopImgSection3}>
            <img src="/laptop.png" className={styles.laptopImgBox} />
          </div>
          <p className={styles.section3Para}>
            Powerful budget dashboards for real-time financial insights
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className={styles.section4}>
        <p className={styles.paragraph}>
          Our Budget module is a comprehensive solution designed for the hospitality industry, integrating with EICE Rise ERP to streamline financial planning and budget control for Hotels, Resorts, Clubs and Institutions. From annual budget preparation to monthly variance analysis, this feature provides a powerful, user-friendly interface for finance teams, department heads, and management, ensuring fiscal discipline and data-driven financial decisions.
        </p>
      </section>

      {/* ================= FEATURES ================= */}
      <section className={styles.section4}>
        <h2 className={styles.keyFeatureHeading}>Key Features</h2>
        <div className={styles.featureContainer}>
          {features.map((f, i) => (
            <div key={i} className={styles.featureInnerBox}>
              <div className={styles.headingAndIconFeatures}>
                <img src={f.icon} width="40" />
                <p className={styles.featureHeading}>{f.title}</p>
              </div>
              <p className={styles.featureDesc}>{f.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <button className={styles.demoButton}>
            Request a Demo →
          </button>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className={styles.section5}>
        <h2 className={styles.benefitSectionHeading}>Benefits</h2>

        {benefits.map((b, i) => (
          <div key={i} style={{
            display: "flex",
            flexDirection: i % 2 === 0 ? "row" : "row-reverse",
            alignItems: "center",
            marginBottom: "50px",
            gap: "40px"
          }}>

            {/* IMAGE */}
            <div style={{ display: "flex", gap: "10px" }}>
              <img src="/p1.jpg" width="80" />
              <img src="/p2.jpg" width="80" />
              <img src="/p3.jpg" width="80" />
            </div>

            {/* TEXT */}
            <div>
              <h3 className={styles.innerHeadingBenifit}>{b.title}</h3>
              <p className={styles.innerDescBenifit}>{b.desc}</p>
            </div>

          </div>
        ))}
      </section>

      {/* ================= FAQ ================= */}
            <section >
                <div className={`${styles.FAQsection} globalSectionSize font4`}>
                    <div className={`${styles.FAQHeading}`}>Frequently Asked Questions</div>


                    <div className={styles.FAQContainer}>
                        {faqs.map((item) => (
                            <Accordion key={item.q} question={item.q} answer={item.a} />
                        ))}
                    </div>

                </div>
            </section>

    </div>
  );
}