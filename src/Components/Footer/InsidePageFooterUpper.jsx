import React from 'react'
import styles from "./footer.module.css"
import { FaArrowRightLong } from "react-icons/fa6";
import footer from "../../assets/footer/foot.webp"


export default function InsidePageFooterUpper() {

    return (
        <div>
            <div className={`${styles.footerMainBoxUpper} `}>

                <div style={{ width: "50%" }}>

                    <div  >
                        <span style={{ fontSize: "46px" }} className="font2 blueTextGlobalClass" > Flexible, Modular Solutions <span className="font1" style={{ color: "black", fontWeight: "600" }}> tailored to your business needs</span> </span>
                    </div>



                    <div className={`${styles.demoButton} font1`}>
                        <div > Request a Demo </div>
                        <div className={`${styles.demoArrowButton}`}> <FaArrowRightLong /></div>
                    </div>

                </div>

                <div className={`${styles.footerLaptopImg}`} >
                    <img style={{ width: "100%" }} src={footer} alt="" />
                </div>

            </div>

        </div>
    )
}
