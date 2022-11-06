import Image from "next/image"
import { BellIcon, UserIcon } from "../../assets";
import c from "./Style.module.css";

const Navbar = () => {
    return (
        <div className={`${c.navbar__container} ${c.flex}`}>
            <h1 className={c.navbar__logo}>Logo</h1>
            <div className={`${c.navbar__user__wrapper} ${c.flex}`}>
                <div>
                <Image src={BellIcon} alt="img" />
                <span className={`${c.items__count} ${c.flex}`}>1</span>
                </div>
                <div className={`${c.user__wrapper} ${c.flex}`}>
                    <span className={c.user__name}>User profile</span>
                    <Image src={UserIcon} alt="img"/>
                </div>
            </div>
        </div>
    )
}

export default Navbar