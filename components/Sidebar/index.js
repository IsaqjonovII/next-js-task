import React from "react";
import Link from "next/link";
import { useRouter } from "next/router"
import { ROUTES_LINK } from "../../routes";
import c from "./Style.module.css";
import Home from "../../assets/home.svg";

const Sidebar = () => {

  const router = useRouter();
  return (
    <div className={c.sidebar__container}>
      <div className={c.sidebar__link__wrapper}>
        {ROUTES_LINK?.map(({ id, link, title, icon }) => (
          <Link
            className={router.pathname === link ? `${c.sidebar__link__active} ${c.sidebar__link}` : c.sidebar__link
            }
            href={link}
            key={id}
          >
            <div className={c.icon}>{icon}</div>
            <p>{title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;