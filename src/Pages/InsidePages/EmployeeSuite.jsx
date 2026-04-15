

import style from "./Styles/employeeSuite.module.css"




import as from "../../assets/insidePages/emp/empSection2/as.png"
import cd from "../../assets/insidePages/emp/empSection2/cd.png"
import tc from "../../assets/insidePages/emp/empSection2/tc.png"



import { Link } from "react-router-dom"

// features
import bm from "../../assets/insidePages/emp/icon/bm.png"
import can from "../../assets/insidePages/emp/icon/can.png"
import da from "../../assets/insidePages/emp/icon/da.png"
import lam from "../../assets/insidePages/emp/icon/lam.png"
import pc from "../../assets/insidePages/emp/icon/pc.png"
import pim from "../../assets/insidePages/emp/icon/pim.png"
import pm from "../../assets/insidePages/emp/icon/pm.png"
import sr from "../../assets/insidePages/emp/icon/sr.png"
import td from "../../assets/insidePages/emp/icon/td.png"


import heroImg from "../../assets/allHero/new/employeeH.webp"




import ec from "../../assets/insidePages/emp/empBenefits/ec.webp"
import ee from "../../assets/insidePages/emp/empBenefits/ee.webp"
import ie from "../../assets/insidePages/emp/empBenefits/ie.webp"
import ts from "../../assets/insidePages/emp/empBenefits/ts.webp"
import tt from "../../assets/insidePages/emp/empBenefits/tt.webp"





import Accordion from "../../Components/Accordian/Accordian.jsx"

import { useEffect , useState } from "react"

import { FaArrowRightLong } from "react-icons/fa6";


import laptop from "../../assets/section3Laptop/emp.webp"



import FooterUpperPart from "../../Components/Footer/FooterUpperPart.jsx"
import FooterLower from "../../Components/Footer/FooterLower.jsx"
import Certificate from "../../Components/Certificate/Certificate.jsx"

const params = new URLSearchParams(window.location.search);
const isEmbed = params.get("embed") === "true";

export default function EmployeeSuite() {

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
      heading: "Personal Information Management",
      desc: "Employees can update their contact details, emergency contacts, and tax information, ensuring accurate and up-to-date records.",
      img: pim, // Replace with the appropriate image from your existing feature array
      width: "64px", // Adjust to match the previous feature array
    },
    {
      key: 2,
      heading: "Payroll and Compensation",
      desc: "Employees can access payslips, track salary history, and view deductions and bonuses, providing full transparency on compensation.",
      img: pc, // Replace with the appropriate image from your existing feature array
      width: "58px", // Adjust to match the previous feature array
    },
    {
      key: 3,
      heading: "Leave and Attendance Management",
      desc: "Employees can submit leave requests, track attendance, and view leave balances, making time-off management easier.",
      img: lam, // Replace with the appropriate image from your existing feature array
      width: "66px", // Adjust to match the previous feature array
    },
    {
      key: 4,
      heading: "Training and Development",
      desc: "Employees can explore training programs, track progress, and enroll in courses to enhance their professional skills.",
      img: td, // Replace with the appropriate image from your existing feature array
      width: "53px", // Adjust to match the previous feature array
    },
    {
      key: 5,
      heading: "Document Access",
      desc: "Employees can access important documents such as policies, contracts, benefits, and company announcements, ensuring quick access to essential information.",
      img: da, // Replace with the appropriate image from your existing feature array
      width: "56px", // Adjust to match the previous feature array
    },
    {
      key: 6,
      heading: "Company Announcements and News",
      desc: "Employees stay updated on company news, policy changes, and upcoming events, fostering better communication within the organization.",
      img: can, // Replace with the appropriate image from your existing feature array
      width: "71px", // Adjust to match the previous feature array
    },
    {
      key: 7,
      heading: "Performance Management",
      desc: "Employees can track their goals, review feedback, and collaborate with managers to set development plans.",
      img: pm, // Replace with the appropriate image from your existing feature array
      width: "60px", // Adjust to match the previous feature array
    },
    {
      key: 8,
      heading: "Benefits Management",
      desc: "Employees can manage their benefits like health insurance, retirement plans, and wellness programs, ensuring they stay informed of all available options.",
      img: bm, // Replace with the appropriate image from your existing feature array
      width: "65px", // Adjust to match the previous feature array
    },
    {
      key: 9,
      heading: "Support and Requests",
      desc: "Employees can submit HR inquiries, request support, or raise issues through the portal, streamlining communication and issue resolution.",
      img: sr, // Replace with the appropriate image from your existing feature array
      width: "61px", // Adjust to match the previous feature array
    }
  ];






  const benefits = [
    {
      key: 1,
      heading: "Improved Efficiency",
      desc: "Reduces administrative work by centralizing HR services and allowing employees to manage their own data.",
      img: ie,
    },
    {
      key: 2,
      heading: "Enhanced Communication",
      desc: "Ensures clear communication about company policies, events, and updates.",
      img: ec,
    },
    {
      key: 3,
      heading: "Employee Empowerment",
      desc: "Increases engagement by giving employees control over their personal and professional information.",
      img: ee,
    },
    {
      key: 4,
      heading: "Transparency and Trust",
      desc: "Promotes trust by providing full visibility into payroll, benefits, and performance.",
      img: tt,
    },
    {
      key: 5,
      heading: "Time Savings",
      desc: "Automates HR processes, freeing up time for HR teams to focus on strategic tasks.",
      img: ts
    },
    // {
    //     key: 6,
    //     heading: "Compliance and Security",
    //     desc: "Ensures secure storage and compliance with data privacy regulations, protecting sensitive employee information.",
    //     img: c, 
    // }
  ];


  const query = [
    {
      key: 1,
      question: "Q : What services does the Employee Portal provide?",
      answer: "A : The portal offers access to payroll information, leave management, training, benefits, and company announcements, empowering employees to manage their professional data."
    },
    {
      key: 2,
      question: "Q : How does the portal improve communication within the company?",
      answer: "A : It ensures employees stay updated on company policies, news, and events, fostering better communication across the organization."
    },
    {
      key: 3,
      question: "Q : Can employees track their performance through the portal?",
      answer: "A : Yes, employees can track their goals, review feedback, and collaborate with managers on development plans to improve performance."
    },
    {
      key: 4,
      question: "Q : How does the portal ensure data security?",
      answer: "A : The portal ensures secure storage of sensitive employee information and complies with data privacy regulations, protecting employee data."
    },
    {
      key: 5,
      question: "Q : How does the portal enhance HR efficiency?",
      answer: "A : By centralizing HR services and automating processes like leave requests and payroll management, the portal reduces administrative workload and enhances HR productivity."
    }
  ];



  const footerUpperText = {

    text1: "Empower your workforce",
    text2: "",
    text3: "with a streamlined Employee Portal",
    img: laptop
  }













  return (
    <>



{isPhone ? ( <section className={`${style.heroSectionConatinerPhone}  `}>

<div className={`${style.contentConatinerPhone}`}>

    <div className={`${style.headingBoxPhone} font4 `}>
        <div className={`${style.mainHeadingPhone}`}>
            <span style={{ color: "#012060" }} >EMPLOYEE </span><span style={{ color: "#01B0F1" }} >SUITE</span>
        </div>
        <div className={`${style.mainParaPhone}`}>
        Empower your team with centralized access to essential resources, payroll, and performance management tools..
        </div>


    </div>

    <div className={`${style.herosectionImgBoxPhone}`}>
        <img style={{ width: "100%" }} src={heroImg} alt={"room booking"} />
    </div>


</div>

</section>):(<section className={`${style.heroSectionConatiner}  `}>
      
      
      <div className={`${style.fadeBackgroundConatiner}`}>

        <div className={`${style.contentConatiner}`}>

          <div className={`${style.headingBox} font4 `}>
            <div className={`${style.mainHeading}`}>
              <span style={{ color: "#012060" }} >EMPLOYEE</span><span style={{ color: "#01B0F1" }} > SUITE</span>
            </div>
            <div className={`${style.mainPara}`}>
            Empower your team with centralized access to essential resources, payroll, and performance management tools..
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
              <img style={{ width: "100%" }} src={as} alt="" />
            </div>

            <div className={`${style.iconName} `}>

              <div> Automated</div>
              <div> Shifts</div>
            </div>
          </div>



          <div className={style.section2IconAndName}>

            <div className={`${style.section2Icon}`}>
              <img style={{ width: "100%" }} src={cd} alt="" />
            </div>

            <div className={`${style.iconName} `}>



              <div>Centralised</div>
              <div>Data</div>

            </div>
          </div>



          <div className={style.section2IconAndName}>

            <div className={`${style.section2Icon}`}>
              <img style={{ width: "100%" }} src={tc} alt="" />
            </div>

            <div className={`${style.iconName}`}>


              <div>
                Team
              </div>

              <div>
                Collaboration
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

                The <strong className="font2"> Employee Portal</strong> provides centralized access to work-related information, resources, and services. It <strong className="font2">streamlines HR processes, boosts engagement, and promotes transparency, enhancing overall productivity and the employee experience</strong> .

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

       


      {/* <section style={{ background: "#f5f5f5" }} >
        <div className={`${style.section5} font4 globalSectionSize`}>


          <div className={`${style.section5heading} font4`}>Benefits</div>
          {benefits.map((item, index) =>
          (

            index % 2 === 0 ? (<div className='GlobalBenefitBox1'>


              <div style={{ width: "25%" }}>
                <img style={{ width: "100%" }} src={item.img} alt="" />
              </div>

              <div className='GlobalBenefitTextBox' >
                <div className={`${style.innerHeadingBenifit}`}>{item.heading}</div>
                <div className={`${style.innerDescBenifit}`}>{item.desc}</div>
              </div>


            </div>) : (<div className='GlobalBenefitBox2'>


              <div style={{ width: "25%" }}>
                <img style={{ width: "100%" }} src={item.img} alt="" />
              </div>

              <div className='GlobalBenefitTextBox' >
                <div className={`${style.innerHeadingBenifit}`}>{item.heading}</div>
                <div className={`${style.innerDescBenifit}`}>{item.desc}</div>
              </div>


            </div>)


          ))}

        </div>
      </section> */}

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
