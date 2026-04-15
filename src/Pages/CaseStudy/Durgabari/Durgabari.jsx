import styles from "./durgabari.module.css"
import laptop from "../../../assets/caseStudy/durga.webp"


import { Link } from "react-router-dom"


import account from "../../../assets/Hospitality/allPageIcon/Account.png"
import pos from "../../../assets/Hospitality/allPageIcon/POS.png"
import banquet from "../../../assets/Hospitality/allPageIcon/Banquet.png"

import member from "../../../assets/Hospitality/allPageIcon/Member.png"

import room from "../../../assets/Hospitality/allPageIcon/Room.png"


import { useState, useEffect } from "react"

import FooterLower from "../../../Components/Footer/FooterLower"
import Certificate from "../../../Components/Certificate/Certificate"

export default function Durgabari() {


    const challenges = [
        { id: 1, key: "Geographical Dispersion of Members", value: "HDBS needed to enhance accessibility for its community members across the globe while maintaining their cultural essence." },
        { id: 2, key: "Complex Event and Resource Management", value: "The society faced inefficiencies in organizing cultural events, religious ceremonies, and venue reservations." },
        { id: 3, key: "Fragmented Member Engagement", value: "Members lacked a unified platform to interact with the organization, access services, or stay updated on activities." },
        { id: 4, key: "Manual Administrative Processes", value: "From managing memberships to processing event registrations and donations, manual workflows led to delays and errors." }
    ];


    const [isPhone, setIsPhone] = useState(window.innerWidth <= 800);





    useEffect(() => {
        const handleResize = () => {
            setIsPhone(window.innerWidth <= 800); // Update based on screen size
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);







    const services = [
        {
            serviceName: "ROOM BOOKING",
            icon: room,
            path: "/room-booking",
            key: 1
        },

        {
            serviceName: "DINING (POS)",
            icon: pos,
            path: "/pos-dining",
            key: 2
        },

        {
            serviceName: "BANQUET & BILLING",
            icon: banquet,
            path: "/banquet-billing",
            key: 3
        },

        {

            serviceName: (<span style={{ padding: "0px 3px" }}>MEMBER SUITE</span>),
            icon: member,
            path: "/member-suite",
            key: 4
        },

        {
            serviceName: "ACCOUNT & FINANCE",
            icon: account,
            path: "/account-finance",
            key: 5
        },

    ]


    const value = [
        {
            id: 1,
            key: "Enhanced Accessibility and Inclusivity",
            value: "Through the member portal and e-Puja platform, members worldwide could participate in religious ceremonies, stay updated on events, and contribute to the community.",
        },
        {
            id: 2,
            key: "Operational Efficiency",
            value: "Automated processes for venue reservations, event registrations, and membership renewals reduced administrative burdens, allowing staff to focus on community enrichment.",
        },
        {
            id: 3,
            key: "Streamlined Financial Operations",
            value: "The integration of POS and Accounts & Finance modules improved donation management, facilitated secure transactions, and provided real-time insights into financial health.",
        },
        {
            id: 4,
            key: "Improved Member Engagement",
            value: "The member portal became a one-stop solution for members, enabling them to easily manage bookings, participate in events, and interact with the society.",
        },
        {
            id: 5,
            key: "Preservation of Cultural Values",
            value: "HDBS seamlessly blended its cultural and religious heritage into the digital platform, ensuring that the essence of their traditions remained intact while embracing modern technology.",
        },
        {
            id: 6,
            key: "Global Reach and Community Building",
            value: "The platform fostered stronger connections within the HDBS community, bridging geographical gaps and ensuring every member felt included and valued.",
        },
    ];




    const help = [
        {
            id: 1,
            key: "Member Portal Integration",
            value1: "Provided a centralized hub for members to manage their profiles, access religious services, and book venues or events.",
            value2: "Enabled features like smart card recharges and seamless POS transactions for donations and event payments.",
            value3: "Improved user engagement by offering easy access to organizational updates and activities.",
        },
        {
            id: 2,
            key: "Room Service Management",
            value1: "Streamlined the reservation process for religious and cultural venues.",
            value2: "Offered intuitive booking workflows, ensuring an organized and efficient system for managing room and resource allocation.",
        },
        {
            id: 3,
            key: "POS and Banquet Modules",
            value1: "Facilitated efficient financial transactions during events, including catering services and donation drives.",
            value2: "Improved the experience for members by offering seamless, secure, and quick payment processing during community events.",
        },
        {
            id: 4,
            key: "Accounts & Finance",
            value1: "Centralized financial tracking for donations, event revenues, and operational expenses.",
            value2: "Enhanced transparency and enabled HDBS to maintain accurate records of its financial activities.",
        },
    ];




    return (
        <>

            {isPhone ? (<header className={`${styles.pageMainHeadingPhone}`}>

                <div>
                    <span className={`font1 blueTextGlobalClass `}>Club Suite</span><span className={"font1"}  >:  Empowering Community Operations </span>

                    <span className="font1">for</span>   <span className={`font2 blueTextGlobalClass `} > Houston Durga Bari Society</span> <span className="font1">(HDBS)</span>
                </div>

                <div className="font1" >


                </div>

            </header>) : (<header className={`${styles.pageMainHeading}`}>

                <div>
                    <span className={`font2 blueTextGlobalClass `}>Club Suite</span><span className={"font1"}  >:  Empowering Community Operations</span>
                </div>

                <div className="font1" >

                    for <span className={`font2 blueTextGlobalClass `} > Houston Durga Bari Society</span> (HDBS)
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
                            The Houston Durga Bari Society (HDBS) sought a transformative digital solution to overcome the challenges of managing its diverse operations and engaging a geographically dispersed community. EICE Technology implemented the Club Suite, a comprehensive set of integrated modules, to address these needs. By leveraging the suite's capabilities, HDBS was able to centralize its operations, foster stronger connections with its members, and streamline administrative processes.
                        </div>

                    </div>

                </div>

            </section>)}





            {isPhone && (<section className={`${styles.briefDescSectionPhone}  `}>

                <div className={`${styles.descImgPhone}`}>
                    <img style={{ width: "100%" }} src={laptop} alt="brief description" />
                </div>

            </section>)}


            {isPhone && (<div className={`${styles.briefDescBoxPhone}`}>

                <div className={`${styles.briefDescHeadingPhone} font3`}>
                    Overview
                </div>

                <div className={`${styles.briefParaPhone} font1`}>
                    The Houston Durga Bari Society (HDBS) sought a transformative digital solution to overcome the challenges of managing its diverse operations and engaging a geographically dispersed community. EICE Technology implemented the Club Suite, a comprehensive set of integrated modules, to address these needs. By leveraging the suite's capabilities, HDBS was able to centralize its operations, foster stronger connections with its members, and streamline administrative processes.
                </div>

            </div>)}



            <section className={`${styles.section2} `}>



                <div className={`${styles.moduleboxAndHeading}  globalSectionSize `} >

                    <div className={`${styles.moduleIncludedHeading} font4`}>The Enterprise Suite included the following modules:</div>

                    <div className={`${styles.servicesBox} `}>


                        {services.map((item) =>
                        (
                            <Link className="linkClass" key={item.key} to={item.path}>

                                <div className={`${styles.iconAndTextBox} `}>

                                    <div className={styles.imgBox} >
                                        <img src={item.icon} alt="" />
                                    </div>
                                    <div>
                                        {item.key < 9 ? (<div className={`${styles.serviceName} font1`}>{item.serviceName}</div>) : (<div className={`${styles.serviceName2} font1`}>{item.serviceName}</div>)}
                                    </div>

                                </div>

                            </Link>

                        ))}
                    </div>

                </div>






            </section>


            <section className={`${styles.challengeSection} globalSectionSize `} >

                <div className={`${styles.sectionHeading} font3 `}>
                    The Challenges Addressed with the Club Suite
                </div>

                <div className={`${styles.informationBox} font1 `}>

                    

                    <div className={`${styles.statement2}`} >
                        <ul>

                            {challenges.map((item) =>
                            (
                                <li>
                                    <strong className={`${styles.listKey}`}>{item.key}:</strong>
                                    <span className={`${styles.listValue}`}> {item.value} </span>
                                </li>
                            ))}
                        </ul>



                    </div>

                    

                </div>

            </section>


            


            <section className={`${styles.challengeSection} globalSectionSize `} >

                <div className={`${styles.sectionHeading} font3 `}>
                    How the Club Suite Helped ?
                </div>

                <div className={`${styles.informationBox} font1 `}>

                    

                    <div className={`${styles.statement2}`} >


                        {help.map((item, index) =>
                        (

                            <div className={`${styles.helpBoxOfList}`}>
                                <div className="font3 blueTextGlobalClass">
                                    <span>{index + 1}. </span>
                                    {item.key}:
                                </div>

                                <div className={`${styles.value}`} >
                                    <ul>
                                        <li >
                                            {item.value1}

                                        </li>
                                        {item.value2 && (<li>
                                            {item.value2}
                                        </li>)}

                                        {item.value3 && (<li>
                                            {item.value3}
                                        </li>)}

                                    </ul>
                                </div>

                            </div>








                        ))}




                    </div>

                   

                </div>

            </section>

            <section className={`${styles.empoweringiListSection} globalSectionSize`}>

                <div className={`${styles.sectionHeading} font3`}>
                    Value Delivered to HBDS
                </div>

                <div className={`${styles.listBox} font1`} >
                    <ul>

                        {value.map((item) =>
                        (
                            <li key={item.id}>
                                <strong className={`${styles.listKey}`} >{item.key}:</strong>
                                <span className={`${styles.listValue}`} > {item.value} </span>
                            </li>
                        ))}
                    </ul>



                </div>

            </section>





            <section className={`${styles.conclusionSection} globalSectionSize `} >

                <div className={`${styles.sectionHeading} font3`}>

                    Conclusion
                </div>


                <div className={`${styles.conclusionPara} font1`}>
                    {/* By implementing the Enterprise Suite, <span className="font2 blueTextGlobalClass">EICE Technology empowered IIC to overcome its operational challenges, enhance security, and foster seamless multi-user interactions</span> . The result was a scalable, efficient, and secure system that aligned with IIC's vision for the future. */}
                    The implementation of the <span className="font2 blueTextGlobalClass" >Club Suite was a pivotal moment for the Houston Durga Bari Society</span> . By addressing their operational challenges holistically, <span className="font2 blueTextGlobalClass" >EICE Technology enabled HDBS to embrace a future-ready, scalable platform</span>  that not only optimized their workflows but also reinforced their cultural and religious values across their global community
                </div>

            </section>

            <div>
                <Certificate/>
                <FooterLower />
            </div>



        </>
    )
}
