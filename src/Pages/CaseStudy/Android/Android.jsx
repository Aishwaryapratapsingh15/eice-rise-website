import FooterLower from "../../../Components/Footer/FooterLower"
import styles from "./android.module.css"

import laptop from "../../../assets/caseStudy/android.webp"

import vendor from "../../../assets/Hospitality/allPageIcon/purchase.png"
import inentry from "../../../assets/Hospitality/allPageIcon/store.png"
import { Link } from "react-router-dom"

import { useEffect, useState } from "react"

import family from "../../../assets/caseStudy/androidBottom.webp"
import Certificate from "../../../Components/Certificate/Certificate"

export default function Android() {

    const [isPhone, setIsPhone] = useState(window.innerWidth <= 800);

    useEffect(() => {
        const handleResize = () => {
            setIsPhone(window.innerWidth <= 800); 
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const challenges = [
        {
            id: "1",
            key: "Mobile Phones",
            value: "On phones, only one screen could be viewed at a time, limiting the user's ability to multitask"
        },

        {
            id: "2",
            key: "Tablets",
            value: "On tablets, the expectation was to have both screens displayed side by side for better productivity and a more efficient workflow."
        }
    ]


   

    const modules = [
        {
            key: "USER STORE & INVENTORY",
            icon: inentry,
            path: "/userstore-inventry",
            id: 1,
            value: "Ensured real-time inventory tracking and seamless store operations"
        },

        {
            key: "PURCHASE & VENDOR PORTAL",
            icon: vendor,
            path: "/purchase-vendor",
            id: 2,
            value: "Enabled efficient vendor management and streamlined purchase processes"
        },
    ]



    return (
        <>

            {isPhone ? (<header className={`${styles.pageMainHeadingPhone}`}>

                <div>
                    <span className={`font1 blueTextGlobalClass `}>Inventory Suite</span><span className={"font1"}  >:  Transforming </span>
                </div>

                <div className="font1" >
                    Operational Efficiency for  <span className={`font2 blueTextGlobalClass `} > Sales Vu</span>
                </div>

            </header>
            ) : (<header className={`${styles.pageMainHeading}`}>

                <div>
                    <span className={`font2 blueTextGlobalClass `}>Inventory Suite</span><span className={"font1"}  >:  Transforming </span>
                </div>

                <div className="font1" >
                    Operational Efficiency for  <span className={`font2 blueTextGlobalClass `} > Sales Vu</span>
                </div>
            </header>)}

            {!isPhone && (<section className={`${styles.briefDescSection}  `}>

                <div className={`${styles.imgAndDescBox} globalSectionSize `}>

                    <div className={`${styles.descImg}`}>
                        <img style={{ width: "100%" }} src={laptop} alt="brief description" />
                    </div>

                    <div className={`${styles.briefDescBox}`}>

                        <div className={`${styles.briefDescHeading} font3`}>
                            Overview
                        </div>

                        <div className={`${styles.briefPara} font1`}>
                            The SalesVu Android App enhances POS functionality with features like order management, payment processing, and barcode scanning. These features streamline operations, improve inventory management, and provide secure, fast transactions, all while boosting user accessibility. The app delivers an intuitive solution for businesses to efficiently manage their operations on Android devices.
                        </div>

                    </div>

                </div>

            </section>)}


            {isPhone && (<section className={`${styles.briefDescSectionPhone}  `}>

                <div className={`${styles.descImgPhone}`}>
                    <img style={{ width: "100%" }} src={laptop} alt="brief description" />
                </div>

            </section>
            )}


            {isPhone && (<div className={`${styles.briefDescBoxPhone}`}>

                <div className={`${styles.briefDescHeadingPhone} font3`}>
                    Overview
                </div>

                <div className={`${styles.briefParaPhone} font1`}>
                    The SalesVu Android App enhances POS functionality with features like order management, payment processing, and barcode scanning. These features streamline operations, improve inventory management, and provide secure, fast transactions, all while boosting user accessibility. The app delivers an intuitive solution for businesses to efficiently manage their operations on Android devices.
                </div>

            </div>)}

            <section className={`${styles.challengeSection} globalSectionSize `} >

                <div className={`${styles.sectionHeading} font3 `}>
                    The Challenge
                </div>

                <div className={`${styles.informationBoxPhone} font1 `}>

                    <div className={`${styles.statement1}`} >
                        SalesVu faced a unique design challenge in optimizing the user experience across different device types. The application consisted of two key screens: one for selecting the category and product, and the other for displaying order details.


                    </div>

                    <div className={`${styles.statement2}`} >
                        <ul>

                            {challenges.map((item) =>
                            (
                                <li key={item.id}>
                                    <strong className={`${styles.listKey}`}>{item.key}:</strong>
                                    <span className={`${styles.listValue}`}> {item.value} </span>
                                </li>
                            ))}
                        </ul>

                    </div>

                    <div className={`${styles.statement3}`} >
                        The challenge was to maintain a consistent user interface across devices without having to build entirely separate layouts for each device type.
                    </div>

                </div>

            </section>


            <section className={`${styles.moduleSection} globalSectionSize `} >

                <div className={`${styles.sectionHeading} font3`}>
                    Modules Included
                </div>

                <div className={`${styles.moduleBox}`}>

                    {modules.map((item) =>
                    (
                        <Link className="linkClass" to={item.path}>
                            <div className={`${styles.iconAndName}`}>

                                <div className={`${styles.moduleImgBorder}`}>
                                    <div className={`${styles.iconWidth}`}>
                                        <img style={{ width: "100%" }} src={item.icon} alt={item.key} />
                                    </div>
                                </div>

                                <div className={`${styles.moduleNames}`} >
                                    <span className="font3">{item.key}:</span> <span className="font1" > {item.value}</span>
                                </div>
                            </div>
                        </Link>
                    ))}


                </div>

            </section>


            <section className={`${styles.ourRoleSection} globalSectionSize `}>

                <div className={`${styles.sectionHeading} font3`}>
                    Our Role
                </div>

                <div className={`${styles.roleDesc} font1 `}>
                    EICE Technology utilized the Inventory Suite to address these challenges, providing end-to-end support for both the Android app and the Web Admin interface.

                </div>
                <div className={`${styles.ourRoleListBox}`}>

                    <ul >
                        <li> <strong className={`${styles.ourRoleBottomPoints} font1 `}>Developed a  <span className="font2 blueTextGlobalClass "> responsive UI/UX</span>  that adapted to both phones and tablets.
                        </strong> </li>
                        <li> <strong className={`${styles.ourRoleBottomPoints} font1 `}>Designed features to <span className="font2  blueTextGlobalClass">simplify inventory and vendor management </span>while maintaining a consistent experience across devices.</strong> </li>
                    </ul>
                </div>

            </section>




            <section className={`${styles.valuesToClientSection} globalSectionSize `} >

                <div className={`${styles.sectionHeading} font3`}>

                    Value to Client
                </div>

                <div className={`${styles.imgAndParaBox}  font1`}>

                    <div className={`${styles.valueClientImg}`}>
                        <img style={{ width: "100%" }} src={family} alt="client" />
                    </div>

                    <div className={`${styles.valueToClientPara}`}>
                        <strong>By leveraging the Inventory Suite</strong>  , EICE Technology helped SalesVu create an app that not only met their <span>technical requirements</span>  but also <strong>enhanced operational efficiency</strong> . The suite ensured that SalesVu could deliver a seamless, user- friendly experience to their customers while managing inventory and vendor interactions effortlessly. Through this approach, <strong> EICE Technology delivered a solution that was flexible, functional, and future-ready</strong> , empowering SalesVu to maintain their competitive edge in the POS market.
                    </div>

                </div>

            </section>

            <div>
                <Certificate/>
                <FooterLower />
            </div>

        </>
    )
}
