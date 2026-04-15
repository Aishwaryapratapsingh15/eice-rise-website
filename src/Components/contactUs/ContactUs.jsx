import styles from "./contactUs.module.css"

export default function ContactUs() {
    return (
        <>

            <div className={`${styles.contactDetailSideBarContainer}`}>

                <div className={`${styles.contactDetailSideBarHeading}`}>
                    Contact Us
                </div>

                <div className={`${styles.contactDetailBox}`}>

                    <div className={`${styles.contactDetailSubBox1}`} >
                        <div>

                            <strong>Email:</strong>
                            <div>info@eicetechnology.com</div>

                        </div>
                        <div>
                            <div> <strong> Address(India):</strong> B-8 </div>
                            <div>  6th floor, Platina Heights , C-24, Sector 62 Noida, Uttar Pradesh 201301</div>


                        </div>
                    </div>

                    <div className={`${styles.contactDetailSubBox2}`}>
                        <div>
                            <strong>Phone:</strong>
                            <div>+91 120 311 0836</div>
                        </div>

                        <div>
                            <div>
                                <div> <strong> Address(USA):</strong> 11011 Richmond Ave </div>
                                <div>Suite 715, Houston, TX 77042</div>
                            </div>

                        </div>
                    </div>



                </div>

            </div>

        </>
    )
}





