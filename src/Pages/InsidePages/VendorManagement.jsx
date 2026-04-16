import style from "./Styles/roomBooking.module.css";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

import Accordion from "../../Components/Accordian/Accordian.jsx";
import Certificate from "../../Components/Certificate/Certificate.jsx";
import FooterUpperPart from "../../Components/Footer/FooterUpperPart.jsx";
import FooterLower from "../../Components/Footer/FooterLower.jsx";
import bpvmIcon from "../../assets/vendor/BPVM.png";
import camIcon from "../../assets/vendor/CAM.png";
import cdtIcon from "../../assets/vendor/CDT.png";
import phlIcon from "../../assets/vendor/PHL.png";
import psrIcon from "../../assets/vendor/PSR.png";
import vcpIcon from "../../assets/vendor/VCP.png";
import vctIcon from "../../assets/vendor/VCT.png";
import vmdIcon from "../../assets/vendor/VMD.png";
import vroIcon from "../../assets/vendor/VRO.png";




const params = new URLSearchParams(window.location.search);
const isEmbed = params.get("embed") === "true";

export default function VendorManagement() {

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
      heading: "Vendor Registration",
      heading2: "& Onboarding",
      desc: "Digitize vendor onboarding with online registration forms, document collection (GST, PAN, bank details), and verification workflows for compliance-ready vendor profiles.",
      img: vroIcon,
      width: "44px"
    },
    {
      key: 2,
      heading: "Vendor Master",
      heading2: "Database",
      desc: "Maintain a centralized vendor directory with contact details, service categories, payment terms, credit limits, and compliance documentation for quick reference.",
      img: vmdIcon,
      width: "44px"
    },
    {
      key: 3,
      heading: "Performance",
      heading2: "Scoring & Rating",
      desc: "Rate vendors based on delivery timeliness, quality compliance, pricing competitiveness, and responsiveness with configurable scoring parameters.",
      img: psrIcon,
      width: "44px"
    },
    {
      key: 4,
      heading: "Contract",
      heading2: "Management",
      desc: "Store and manage vendor contracts, rate agreements, and service level agreements with renewal alerts, expiry notifications, and version-controlled documents.",
      img: camIcon,
      width: "44px"
    },
    {
      key: 5,
      heading: "Compliance &",
      heading2: "Document Tracking",
      desc: "Track vendor compliance documents — licenses, insurance, certifications, FSSAI — with expiry alerts and auto-blocking of non-compliant vendors.",
      img: cdtIcon,
      width: "44px"
    },
    {
      key: 6,
      heading: "Vendor",
      heading2: "Comparison Tools",
      desc: "Compare vendors across parameters — pricing, quality, lead time, payment terms — with visual comparison matrices for informed selection.",
      img: vctIcon,
      width: "44px"
    },
    {
      key: 7,
      heading: "Blacklist &",
      heading2: "Preferred Management",
      desc: "Maintain preferred vendor lists and blacklist non-performing suppliers with documented reasons, ensuring procurement teams work with vetted partners.",
      img: bpvmIcon,
      width: "44px"
    },
    {
      key: 8,
      heading: "Payment History",
      heading2: "& Ledger",
      desc: "Track vendor-wise payment history, outstanding balances, and debit/credit notes with integration to Accounts & Finance for reconciliation.",
      img: phlIcon,
      width: "44px"
    },
    {
      key: 9,
      heading: "Vendor Communication",
      heading2: "Portal",
      desc: "Enable direct communication with vendors for quotation requests, order confirmations, and dispute resolution through a built-in messaging system.",
      img: vcpIcon,
      width: "44px"
    }
  ];

  // ================= BENEFITS =================
  const benefits = [
    {
      key: 1,
      heading: "Enhanced Supply Chain Reliability",
      desc: "Performance-rated vendors and preferred supplier lists ensure consistent quality and timely delivery of goods and services.",
      img: "/placeholders/benefit.jpg"
    },
    {
      key: 2,
      heading: "Operational Efficiency",
      desc: "Digital onboarding, centralized documentation, and automated alerts reduce vendor management overhead significantly.",
      img: "/placeholders/benefit.jpg"
    },
    {
      key: 3,
      heading: "Cost Optimization",
      desc: "Vendor comparison tools and rate contract management ensure the best pricing and terms across all procurement categories.",
      img: "/placeholders/benefit.jpg"
    },
    {
      key: 4,
      heading: "Centralized Management",
      desc: "A single vendor portal for all properties, categories, and contracts provides complete supplier network visibility.",
      img: "/placeholders/benefit.jpg"
    },
    {
      key: 5,
      heading: "Compliance & Risk Mitigation",
      desc: "Automated document tracking and compliance checks prevent engagement with non-compliant or blacklisted vendors.",
      img: "/placeholders/benefit.jpg"
    }
  ];

  // ================= FAQ =================
  const query = [
    {
      question: "Q : What is the Vendor Management module, and who is it designed for?",
      answer: "A : The Vendor Management module handles the complete vendor lifecycle — registration, performance tracking, contract management, and compliance — for hotels, resorts, clubs, and institutions."
    },
    {
      question: "Q : How does this module improve vendor quality?",
      answer: "A : It auto-rates vendors on delivery, quality, pricing, and responsiveness. Low-performing vendors are flagged or blacklisted, while top performers are prioritized in procurement workflows."
    },
    {
      question: "Q : Can the module manage vendor compliance documents?",
      answer: "A : Yes. It tracks all vendor documents — GST, FSSAI, insurance, licenses — with expiry alerts and auto-blocks vendors with expired or missing compliance documentation."
    },
    {
      question: "Q : Is the Vendor Management module integrated with purchasing?",
      answer: "A : Absolutely. It connects with the Purchase Module for vendor selection, Store & Inventory Management for GRN matching, and Accounts & Finance for payment processing and reconciliation."
    }
  ];

  const footerUpperText = {
    text1: "Build partnerships,",
    text2: "",
    text3: "not just vendor lists",
    img: "/placeholders/laptop.jpg"
  };

  return (
    <>
      {/* HERO */}
      {isPhone ? (
        <section className={style.heroSectionConatinerPhone}>
          <div className={style.contentConatinerPhone}>
            <div className={style.headingBoxPhone}>
              <div className={style.mainHeadingPhone}>VENDOR MANAGEMENT</div>
              <div className={style.mainParaPhone}>
                Build and manage a trusted vendor ecosystem with comprehensive supplier profiles, performance tracking, contract management, and compliance monitoring.
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
                <div className={style.mainHeading}>VENDOR MANAGEMENT</div>
                <div className={style.mainPara}>
                  Build and manage a trusted vendor ecosystem with comprehensive supplier profiles, performance tracking, contract management, and compliance monitoring.
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
          {["Reliable", "Rated", "Regulated"].map((t, i) => (
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
                Our Vendor Management module is a comprehensive solution designed for the hospitality industry, integrating with EICE Rise ERP to streamline vendor lifecycle management for Hotels, Resorts, Clubs and Institutions. From vendor registration to performance evaluation, this feature provides a centralized, transparent platform for procurement teams, finance departments, and administrators, ensuring a reliable, cost-effective, and compliant supplier network.
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