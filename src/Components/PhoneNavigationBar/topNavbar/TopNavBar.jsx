import styles from "./topNavBar.module.css"
import { IoCloseSharp } from "react-icons/io5";
import { HiOutlineBars3 } from "react-icons/hi2";
import logo from "../../../assets/logo/logo.svg"


import { useSelector , useDispatch } from "react-redux";
import { setShowSideBarPge, toggleNavBarIcon , toggleSideBar } from "../../../redux/slice";

export default function TopNavBar() {

    const setSidebar = useSelector((state) => state.sideBar.sidebarOpen);

    const disPatch  = useDispatch()

    const handleIconChange = ()=>
    {
        disPatch(toggleSideBar())
    }


    return (
        <>
            <div>
                {setSidebar ?
                    (< IoCloseSharp className={styles.menuIcon} onClick={() => { handleIconChange() }} size={36} />) :
                    (<HiOutlineBars3 className={styles.closeIcon} onClick={() => { handleIconChange() }} size={36} />)}
            </div>

            <div style={{ width: "100px" }}>
                <img style={{ width: "100%" }} src={logo} alt="Logo" />
            </div>

        </>

    )
}
