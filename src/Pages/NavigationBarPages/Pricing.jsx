import styles from "./styles/pricing.module.css"

import { useEffect } from "react"

import img1 from "../../assets/pricing/upperPart/1.webp"
import img2 from "../../assets/pricing/upperPart/2.webp"
import img3 from "../../assets/pricing/upperPart/3.webp"
// import img1 from "../../assets/pricing/upperPart/4.webp"
import Club from "../PricePages/Club"
import Enterprise from "../PricePages/Enterprise"
import Inventary from "../PricePages/Inventary"
import Pos from "../PricePages/PosSuite"
import FrontDesk from "../PricePages/FrontDesk"
import Banquet from "../PricePages/Banquet"
import Vanilla from "../PricePages/Vanilla"
import { useState } from "react"
import FooterLower from "../../Components/Footer/FooterLower"

import { useRef } from "react"

















export default function Pricing() {



  const suites = [
    {
      suiteName: "CLUB SUITE",
      key: 0
    },

    {
      suiteName: "ENTERPRISE SUITE",
      key: 1
    },

    {
      suiteName: "INVENTORY SUITE",
      key: 2
    },

    {
      suiteName: "POS SUITE",
      key: 3
    },

    {
      suiteName: "FRONT DESK SUITE",
      key: 4
    },

    {
      suiteName: "BANQUET SUITE",
      key: 5
    },

    {
      suiteName: "VANILLA SUITE",
      key: 6
    }
  ]


  const suitPage = [
    {
      page: <Club />
    },

    {
      page: <Enterprise />
    },

    {
      page: <Inventary />
    },

    {
      page: <Pos />
    },
    {
      page: <FrontDesk />
    },
    {
      page: <Banquet />
    },
    {
      page: <Vanilla />
    }
  ]

  const [showSuitPage, setShowSuitPage] = useState(0)

  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    img3, img2, img1

  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length); // Cycle through images
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  const handleSuitPage = (e, key) => {

    setShowSuitPage(key)

  }

  const targetDivRef = useRef(null);

  const handleScroll = () => {
    if (targetDivRef.current) {
      targetDivRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };




  return (
    <>
      <section className={`${styles.animationSection} insidePageUpperSection`}>


        <div className={`${styles.animationImgSize} ${styles.sideImgCutLeft}`}>
          <img style={{ width: "100%" }} src={img1} alt="" />
        </div>
        <div className={`${styles.animationImgSize} ${styles.middleimage}`}>
          <img style={{ width: "100%" }} src={img2} alt="" />
        </div>
        <div className={`${styles.animationImgSize} ${styles.sideImgCutRight}`}>
          <img style={{ width: "100%" }} src={img3} alt="" />
        </div>


        <div className={`${styles.pricing}`}>PRICING</div>



      </section>

      <section className={`${styles.phoneAnimationSection} `}>

        <div className={styles.container} style={{ backgroundImage: `url(${images[currentImage]})` }}>
          <div className={styles.text}>$$ PRICING $$</div>
        </div>
      </section>


      <section className={`${styles.moduleSuiteSection} globalSectionSize`}  >



        <div className={`${styles.SuiteSectionHeading} font3`}>
          Suites For Your Needs
        </div>

        <div className={`${styles.modulesTabHeadingContainer} font3`}>
          <div className={`${styles.modulesTabHeadings} font3`}>
            {suites.map((item) =>
            (
              <div style={{ padding: "7px 5px", cursor: "pointer", color: item.key === showSuitPage ? '#01B0F1' : 'rgb(156, 153, 153)', borderBottom: item.key === showSuitPage ? ' 2px solid #01B0F1' : '' }} onClick={(e) => { handleSuitPage(e, item.key), handleScroll() }} key={item.key}>{item.suiteName}</div>
            ))}
          </div>
        </div>



      </section>


      <section ref={targetDivRef}>
        {suitPage[showSuitPage].page}

      </section>

      <div>
        <FooterLower />
      </div>



    </>
  )
}
