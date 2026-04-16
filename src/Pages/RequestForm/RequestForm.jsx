import styles from "./requestForm.module.css"





import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import ak from "../../assets/form/feedback/AK.png"
import kd from "../../assets/form/feedback/KD.png"
import pd from "../../assets/form/feedback/PD.png"
import band from "../../assets/form/band.png"

import laptop from "../../assets/form/allLaptop.webp";
import productsIcon from "../../assets/form/allProducts.png";
import Accordion from "../../Components/Accordian/Accordian"

import FooterLower from "../../Components/Footer/FooterLower"

import { FaArrowRightLong } from "react-icons/fa6";
import Certificate from "../../Components/Certificate/Certificate";

import axios from "axios";
import { useLocation } from "react-router-dom";


export default function RequestForm() {



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

// useEffect(() => {

// }, []);
  
const location = useLocation();
const [isEmbed, setIsEmbed] = useState(() => {
  const param = new URLSearchParams(window.location.search).get("embed");
  const stored = sessionStorage.getItem("isEmbed");

  return param === "true" || stored === "true";
});

useEffect(() => {
  const param = new URLSearchParams(location.search).get("embed");

  if (param === "true") {
    sessionStorage.setItem("isEmbed", "true");
    setIsEmbed(true);
  }
  let lastHeight = 0;

// const sendHeight = () => {
// //   const newHeight = document.documentElement.scrollHeight;

// const newHeight = Math.max(
//   document.body.scrollHeight,
//   document.documentElement.scrollHeight,
//   document.body.offsetHeight,
//   document.documentElement.offsetHeight,
//   document.body.clientHeight,
//   document.documentElement.clientHeight
// );
//   // 🔥 Only send if difference is meaningful
//   if (Math.abs(newHeight - lastHeight) > 50) {
//     lastHeight = newHeight;

//     window.parent.postMessage(
//       { type: "SET_HEIGHT", height: newHeight },
//       "*"
//     );
//   }
// };

  // Initial


const sendHeight = () => {
  const newHeight = document.body.getBoundingClientRect().height;
  if (newHeight !== lastHeight) {
    lastHeight = newHeight;
  }

  window.parent.postMessage(
    { type: "SET_HEIGHT", height: Math.ceil(newHeight) },
    "*"
  );
};
  sendHeight();


  // Resize
  window.addEventListener("load", sendHeight);
window.addEventListener("resize", sendHeight);
const images = document.images;
  for (let img of images) {
    if (!img.complete) {
      img.onload = sendHeight;
    }
  }

  // 🔥 IMPORTANT: observe DOM changes
  const observer = new ResizeObserver(() => {
    sendHeight();
  });

  observer.observe(document.body);

  return () => {
    window.removeEventListener("resize", sendHeight);
    observer.disconnect();
  };
}, [location]);

    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        const loadImages = async () => {
            const img1 = new Image();
            const img2 = new Image();
            const img3 = new Image();

            img1.src = ak;
            img2.src = kd;
            img3.src = pd;

            Promise.all([
                new Promise((resolve) => (img1.onload = resolve)),
                new Promise((resolve) => (img2.onload = resolve)),
                new Promise((resolve) => (img3.onload = resolve)),
            ]).then(() => setImagesLoaded(true));
        };

        loadImages();
    }, []);


    const [isSubmitting, setIsSubmitting] = useState(false);

    const [countries, setCountries] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        companyName: '',
        role: '',
        email: '',
        phone: '',
        country: '',
        phoneCode: '',
        address: '',
        requirement: '',
        message: '',
        subscribe: false,
        policyAgree: false,
    });




    // useEffect(() => {
    //     const fetchConuntryList = async () => {

    //         try {
    //             let countryNames = await fetch("https://restcountries.com/v2/all")
    //             countryNames = await countryNames.json()
    //             const countryList = countryNames.map((country) => ({
    //                 label: country.name,
    //                 value: country.name,
    //                 code: country.callingCodes[0] || '',
    //                 flag: country.flag

    //             }));
    //             setCountries(countryList);

    //         } catch (error) {
    //             console.error('Error fetching country data:', error)
    //         }

    //     }
    //     fetchConuntryList()
    // }, []);



    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };



    // const handleSelectChange = (selectedOption) => {
    //     setFormData((prevData) => ({
    //         ...prevData,
    //         country: selectedOption ? selectedOption.value : '',

    //     }));
    // };



    // const handleCountryCodeChange = (selectedOption) => {
    //     setFormData((prevData) => ({
    //         ...prevData,
    //         phoneCode: selectedOption ? selectedOption.code : '',
    //     }));
    // };


    const handleSubmit_v = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);


        if (!formData.subscribe || !formData.policyAgree) {
            alert("Please agree to the terms and conditions before submitting.");
            return;
        }

        const dataToSend = {
            name: formData.name,
            companyName: formData.companyName,
            role: formData.role,
            email: formData.email,
            phone: formData.phone,
            phoneCode: formData.phoneCode,
            country: formData.country,
            address: formData.address,
            requirement: formData.requirement,
            message: formData.message,

        };

        console.log(dataToSend)
        // return

        try {

            let host = "https://www.eicetechnology.com/riseform.php"
            let local = "http://localhost/eicebackend/riseform.php"

            const response = await fetch(host, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataToSend),
            });



            if (response.status === 200) {
                alert("Your form has been submitted successfully.");
                setFormData({
                    name: "",
                    companyName: "",
                    role: "",
                    email: "",
                    phone: "",
                    phoneCode: "",
                    country: "",
                    address: "",
                    requirement: "",
                    message: ""
                });
            } else {
                alert("Failed to submit the form. Please try again.");
            }

        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred. Please try again.");
        }

        finally {
            setIsSubmitting(false); // re-enable button
        }
    };


   

const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.subscribe || !formData.policyAgree) {
        alert("Please agree to the terms and conditions before submitting.");
        setIsSubmitting(false); // Don't forget to re-enable button
        return;
    }

    const dataToSend = {
        name: formData.name,
        companyName: formData.companyName,
        role: formData.role,
        email: formData.email,
        phone: formData.phone,
        phoneCode: formData.phoneCode,
        country: formData.country,
        address: formData.address,
        requirement: formData.requirement,
        message: formData.message,
    };

    try {
        const host = "https://www.eicetechnology.com/riseform.php";
        const local = "http://localhost/eicebackend/riseform.php";

        const response = await axios.post(host, dataToSend, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.status === 200) {
            alert("Your form has been submitted successfully.");
            setFormData({
                name: "",
                companyName: "",
                role: "",
                email: "",
                phone: "",
                phoneCode: "",
                country: "",
                address: "",
                requirement: "",
                message: "",
            });
        } else {
            alert("Failed to submit the form. Please try again.");
        }

    } catch (error) {
        console.error("Error submitting form:", error);
        alert("An error occurred. Please try again.");
    } finally {
        setIsSubmitting(false);
    }
};




    const feedBackArray = [
        {
            img: kd,
            client: "Kevin Droid",
            position: "Operations Manager",
            company: ", Zenith Hospitality",
            heading: "Transformative Technology Partner !",
            para: "The Enterprise Suite has streamlined our operations like never before. From payroll management to inventory tracking, every module is perfectly tailored to our needs. The support team is outstanding and always ready to help. Highly recommended!",
            key: 1
        },
        {
            img: pd,
            client: "Priya Desai",
            position: "Owner",
            company: ", Gourmet haven",
            heading: "Exceptional Efficiency and Customization!",
            para: "The POS Suite has revolutionized our customer experience. The integration with accounts and finance has made tracking and reporting seamless. It's an invaluable tool for any growing business.",
            key: 2
        },
        {
            img: ak,
            client: "Amit Khanna",
            position: "CEO",
            company: ",Elite Club International",
            heading: "Impressive All-In-One Solution !",
            para: "Switching to the Club Suite was the best decision for our membership-driven business. The member portal and room service modules work flawlessly, saving us countless hours each week. We couldn't be happier!",
            key: 3
        }
    ];


    const [feedBackArrayIndex, setfeedBackArrayIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setfeedBackArrayIndex((prevIndex) =>
                prevIndex === feedBackArray.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);


    const query = [
        {
            key: 1,
            question: "Q :  What will the demo include?",
            answer: "A : Our demo will provide a comprehensive walk-through of the selected suite or modules, tailored to your business needs. You'll see how the solution works in real-time and learn about its key features and benefits."
        },
        {
            key: 2,
            question: "Q : How long does the demo take?",
            answer: "A : A typical demo lasts between 30 to 45 minutes, depending on the number of suites or modules you'd like to explore."
        },
        {
            key: 3,
            question: "Q : Can I customize the demo based on my business requirements?",
            answer: "A : Absolutely! During the request, let us know your specific needs, and we'll tailor the demo to address them."
        },

    ];


    // const [feedbackIndex, setFeedbackIndex] = useState(0);



    // let startX = 0;
    // let startY = 0;

    // const handleTouchStart = (e) => {
    //     const touch = e.touches[0];
    //     startX = touch.clientX;
    //     startY = touch.clientY;
    // };


    // const handleFeedbackChange = (e) => {

    //     const touch = e.touches[0];
    //     const deltaX = touch.clientX - startX;
    //     const deltaY = touch.clientY - startY;

    //     if (Math.abs(deltaX) > Math.abs(deltaY)) {
    //         if (deltaX > 0) {
    //             //right
    //             setFeedbackIndex((prevIndex) => (prevIndex - 1 + feedback.length) % feedback.length);

    //         } else {
    //             //left
    //             setFeedbackIndex((prevIndex) => (prevIndex + 1) % feedback.length);

    //         }
    //     } else {
    //         if (deltaY > 0) {
    //             //down
    //         } else {
    //             //up
    //         }
    //     }



    // }



    // const customStyles = {
    //     control: (provided) => ({
    //         ...provided,
    //         paddingTop: '3px',
    //         paddingBottom: '3px',
    //         // width: '33rem',
    //     }),
    //     menu: (provided) => ({
    //         ...provided,
    //         paddingTop: '5px',
    //         paddingBottom: '3px',
    //         // width: '33rem',
    //     }),
    // };



    const customStyles2 = {
        control: (provided) => ({
            ...provided,
            paddingTop: '3px',
            paddingBottom: '3px',
            // width: '31rem',
        }),
        menu: (provided) => ({
            ...provided,
            paddingTop: '5px',
            paddingBottom: '3px',
            // width: '31rem',
        }),
    };



    const options = [
        { value: 'Product Details or Demo', label: 'Product Details or Demo' },
        { value: 'Product Pricing', label: 'Product Pricing' },
        { value: 'Support or Training', label: 'Support or Training' },
    ];



    const handleSelectChange2 = (selectedOption) => {
        handleChange({
            target: {
                name: 'requirement',
                value: selectedOption ? selectedOption.value : '',
            },
        });
    };

    return (
        <>
            <div className={`${styles.formHeadingBox}`}>
                <div className={`${styles.formHeading}`}> <span className="font2 blueTextGlobalClass">Get in touch</span> <span style={{ fontWeight: "700" }} className="font3"> with us</span></div>
                <div className={`${styles.formSubheading} font4`}>Fill out the form below, and we'll get back to you shortly</div>
            </div>

            <div className={`${styles.formContainer} font1`}>
                <form onSubmit={handleSubmit}>

                    <div className={`${styles.FormInnerHeading}`}>
                        Add Your Information
                    </div>

                    <div className={`${styles.line1}`}>
                        <div className={`${styles.inputContainer}`}>
                            <label>Name*</label>
                            <div>
                                <input placeholder="Enter your name" autoComplete="off" required className={`${styles.line1Input}`} type="text" name="name" value={formData.name} onChange={handleChange} />
                            </div>
                        </div>

                        <div className={`${styles.inputContainer}`}>
                            <label>Company Name*</label>
                            <div>
                                <input placeholder="Enter your company name" autoComplete="off" required className={`${styles.line1Input}`} type="text" name="companyName" value={formData.companyName} onChange={handleChange} />
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.line2}`}>
                        <div className={`${styles.inputContainer}`}>
                            <label>Role/Designation (optional)</label>
                            <div>
                                <input autoComplete="off" placeholder="Enter Your Role ( e.g Manager , Director)" className={`${styles.line2Input}`} type="text" name="role" value={formData.role} onChange={handleChange} />
                            </div>
                        </div>

                        <div className={`${styles.inputContainer}`}>
                            <label>Email ID*</label>
                            <div>
                                <input placeholder="Enter Your Bussiness Email Address" autoComplete="off" required className={`${styles.line2Input}`} type="email" name="email" value={formData.email} onChange={handleChange} />
                            </div>
                        </div>

                        <div className={`${styles.inputContainer}`}>
                            <label>Phone Number*</label>
                            <div className={`${styles.phoneNoAndCodeBox}`}>
                                <div >
                                    {/* <Select
                                        className={`${styles.phoneCode}`}
                                        id="countryCode"
                                        placeholder="Code"
                                        options={countries.map(country => ({
                                            label: `+${country.code}`,
                                            value: country.value,
                                            code: country.code,
                                        }))}
                                        isSearchable={true}
                                        styles={customStyles2}

                                        value={countries.find(option => option.code === formData.phoneCode) ? {
                                            label: `+${formData.phoneCode}`,
                                            value: formData.phoneCode
                                        } : null}
                                        onChange={handleCountryCodeChange}
                                    /> */}

                                    <input placeholder="Code" autoComplete="off" required className={`${styles.phoneCode}`} type="number" name="phoneCode" value={formData.phoneCode} onChange={handleChange} maxLength={10} pattern="[0-9]{10}" />
                                </div>
                                <div className={`${styles.phoneNoInputBox}`} >
                                    <input placeholder="Enter Your Phone No" autoComplete="off" required className={`${styles.phoneNo}`} type="tel" name="phone" value={formData.phone} onChange={handleChange} pattern="[0-9]{10}" />
                                </div>
                            </div>

                            {/* <div>
                                <input
                                    placeholder="Enter Your Phone Number"
                                    autoComplete="off"
                                    required
                                    className={`${styles.line2Input}`}
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    pattern="[0-9]{10}"
                                    title="Please enter a valid 10-digit phone number"
                                />
                            </div> */}

                        </div>
                    </div>

                    <div className={`${styles.line3}`}>
                        <div className={`${styles.inputContainer}`}>
                            <label htmlFor="country">Country:</label>


                            <div>
                                <input placeholder="Country Name" autoComplete="off" required className={`${styles.line3Input}`} type="text" name="country" value={formData.country} onChange={handleChange} />
                            </div>

                        </div>

                        <div className={`${styles.inputContainer}`}>
                            <label>Address*</label>
                            <div>
                                <input placeholder="Enter Your Address" autoComplete="off" required className={`${styles.line3Input}`} type="text" name="address" value={formData.address} onChange={handleChange} />
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.requirement} ${styles.inputContainer} `}>
                        <label>Requirement*</label>
                        <div>


                            {/* <select
                                id="requirement"
                                name="requirement"
                                required
                                className={`${styles.requirementInput}`}
                                value={formData.requirement}
                                onChange={handleChange}
                            >
                                <option value="">-- Please Select --</option>
                                <option value="Product Details or Demo">Product Details or Demo</option>
                                <option value="Product Pricing">Product Pricing</option>
                                <option value="Support or Training">Support or Training</option>
                            </select> */}

                            <Select
                                id="requirement"
                                name="requirement"
                                options={options}
                                value={options.find(option => option.value === formData.requirement)}
                                onChange={handleSelectChange2}
                                className={styles.requirementInput}
                                placeholder="-- Please Select --"
                                styles={customStyles2}
                            />


                        </div>
                    </div>

                    <div className={`${styles.messageTextArea}  ${styles.inputContainer} `}>
                        <div>
                            <label htmlFor="message">Message:</label>
                        </div>
                        <div>
                            <textarea
                                className={`${styles.messageTextAreaInput} font1`}
                                rows="5"
                                placeholder="Write your message here"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}


                            />
                        </div>
                    </div>

                    <div className={`${styles.checkBoxContainer}`}>
                        <div className={`${styles.checkBox}`}>
                            <input
                                type="checkbox"
                                name="subscribe"
                                checked={formData.subscribe}
                                onChange={handleChange}

                            />
                            <span className={`${styles.checkBoxNote}`}>Recieve EICE Technology Products, Services, Events and more</span>
                        </div>

                        <div className={`${styles.checkBox}`}>
                            <input
                                required
                                type="checkbox"
                                name="policyAgree"
                                checked={formData.policyAgree}
                                onChange={handleChange}
                            />
                            <span className={`${styles.checkBoxNote}`}>I have agreed to EICE Technology Privacy policy</span>
                        </div>
                    </div>

                    <div className={`${styles.submitButtonConatiner}`}>
                        <div className={`${styles.buttonbox}`}>
                            {/* <input
                                required
                                type="submit"

                                className={`${styles.buttonInputBox} font3`}

                            /> */}

                            <input
                                required
                                type="submit"
                                disabled={isSubmitting}
                                className={`${styles.buttonInputBox} font3 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                            />


                            <div className={`${styles.demoArrowButton}`}>

                                <FaArrowRightLong />
                            </div>
                        </div>
                    </div>
                </form>
            </div>

{/* 
            {isPhone ? (<div className={`${styles.reviewSectionForPhone}`}>
                <section className={`${styles.section5} globalSectionSize`}>

                    <div className={`${styles.clientHeading} font3`}>
                        What our clients say  ?
                    </div>

                    <main className={`${styles.feedBack}`}>




                        <article className={`${styles.cardContainer} font1`}>
                            <div className={styles.card}>

                                {imagesLoaded && (
                                    <div style={{ textAlign: "center" }}  >
                                        <img style={{ width: "28%" }} src={feedBackArray[feedBackArrayIndex].img} alt="" />
                                    </div>)}


                                <div className={`${styles.clientInfo}`} > <span >-- {feedBackArray[feedBackArrayIndex].client} ,</span> <span style={{ fontWeight: "bold" }} >{feedBackArray[feedBackArrayIndex].position}</span>  <span>{feedBackArray[feedBackArrayIndex].company}</span></div>

                                <div className={`${styles.quoteHeading} blueTextGlobalClass font3`}>
                                    "{
                                        feedBackArray[feedBackArrayIndex].heading
                                    }"
                                </div>

                                <p style={{ textAlign: "center", lineHeight: "1.8rem" }}>{feedBackArray[feedBackArrayIndex].para}</p>

                            </div>
                        </article>
                    </main>


                    <div className="indicators">
                        {feedBackArray.map((_, index) => (
                            <span
                                key={index}
                                className={`indicator ${feedBackArrayIndex === index ? 'active' : ''}`}
                                onClick={() => setfeedBackArrayIndex(index)}
                            ></span>
                        ))}
                    </div>


                </section>
            </div>)

                :

                (

                    <div className={`${styles.reviewSection}`}>
                        <section className={`${styles.section5} globalSectionSize`}>

                            <div className={`${styles.section5Heading} font1`}>

                                <div className="font3">
                                    What our clients say  ?
                                </div>

                            </div>


                            <main className={`${styles.feedBack}`}>
                                {feedBackArray.map((item) =>
                                (
                                    <article key={item.key} className={`${styles.feedBackArticleBox} font1`} >

                                        <figure >

                                            <div style={{ textAlign: "center" }}  >
                                                <img style={{ width: "28%" }} src={item.img} alt="" />
                                            </div>

                                            <figcaption style={{ textAlign: "center", fontSize: "13px" }} > <span >--{item.client} ,</span> <span style={{ fontWeight: "bold" }}>{item.position}</span> <span>{item.company}</span></figcaption>

                                        </figure>
                                        <div className={`${styles.quoteHeading} blueTextGlobalClass font3`}>
                                            {
                                                item.heading
                                            }
                                        </div>
                                        <p style={{ textAlign: "center", lineHeight: "1.8rem" }}>{item.para}</p>

                                    </article>
                                ))}
                            </main>


                        </section>
                    </div>

                )}






            <section >
                <div className={`${styles.FAQsection} globalSectionSize font4`}>
                    <div className={`${styles.FAQHeading}`}>Frequently Asked Questions</div>


                    <div className={styles.FAQContainer}>
                        {query.map((item) => (
                            <Accordion key={item.key} question={item.question} answer={item.answer} />
                        ))}
                    </div>

                </div>
            </section> */}



            {isPhone ? (<section className={`${styles.contactUsBackgroundPhone}`}>
                <div className={`${styles.ContactUsSectionPhone} globalSectionSize  `}>

                    <div className={`${styles.contactUsHeading} font3`}>
                        Contact Us
                    </div>

                    <div className={`${styles.contactUsBoxPhone} font1 `}>

                        <div className={`${styles.contactSubBox1}`}>
                            <div className={`${styles.contactDetailBox}`}>

                                <div className={`${styles.key} font3`}>Email </div>
                                <div className={`${styles.value} font1 `}  >info@eicetechnology.com</div>

                            </div>

                            <div className={`${styles.contactDetailBox}`}>

                                <div className={`${styles.key} font3`}>Address (India) </div>
                                <div className={`${styles.value} font1 `}>6th floor, Platina Heights , C-24   </div>
                                <div className={`${styles.value} font1 `}> Sector 62, Noida, Uttar Pradesh 201301</div>

                            </div>
                        </div>


                        <div className={`${styles.contactSubBox1}`}>

                            <div className={`${styles.contactDetailBox}`}>

                                <div className={`${styles.key} font3 `}>Phone no </div>
                                <div className={`${styles.value} font1 `}> +91 120 311 0836</div>

                            </div>

                            <div className={`${styles.contactDetailBox}`} >
                                <div className={`${styles.key} font3`}>Address (USA) </div>
                                <div className={`${styles.value} font1 `}>440 Cobia Drive, #901 </div>
                                <div className={`${styles.value} font1 `}>katy, Texas 77494</div>

                            </div>
                        </div>




                    </div>

                </div>
            </section>) : (<section className={`${styles.contactUsBackground}`}>
                <div className={`${styles.ContactUsSection} globalSectionSize  `}>

                    <div className={`${styles.contactUsHeading} font3`}>
                        Contact Us
                    </div>

                    <div className={`${styles.contactUsBox} font1 `}>

                        <div >

                            <div className={`${styles.key} font3`}>Email :</div>
                            <div className={`${styles.value} font1 `}  >info@eicetechnology.com</div>

                        </div>
                        <div>

                            <div className={`${styles.key} font3 `}>Phone no :</div>
                            <div className={`${styles.value} font1 `}>+91 120 311 0836</div>

                        </div>
                        <div>

                            <div className={`${styles.key} font3`}>Address (India) </div>
                            <div className={`${styles.value} font1 `}>6th floor, Platina Heights , C-24   </div>
                            <div className={`${styles.value} font1 `}> Sector 62, Noida, Uttar Pradesh 201301</div>


                        </div>
                        <div >

                            <div className={`${styles.key} font3`}>Address (USA) :</div>
                            <div className={`${styles.value} font1 `}> 11011 Richmond Ave, Suite 715   </div>
                            <div className={`${styles.value} font1 `}>Houston, TX 77042</div>

                        </div>


                    </div>

                </div>
            </section>)}


            <section className={`${styles.centerWrapper}`} style={{
    background: `url(${band}) no-repeat center`,
    backgroundSize: "100% 50%",
    backgroundPosition: "center calc(50% + 25px)",
  }}>

                <div className={`${styles.LaptopImg}`}>
                    <img src={productsIcon} alt="footer" />
                </div>
            </section>

            {/* <section className={`${styles.LaptopImgSectionPhone}`}>
                <div className={`${styles.LaptopImgPhone}`}>

                </div>
            </section> */}
            <Certificate />
            {!isEmbed && <FooterLower />}
        </>
    );
}
