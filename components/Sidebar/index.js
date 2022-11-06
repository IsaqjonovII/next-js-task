import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router"
import { ROUTES_LINK } from "../../routes";
import c from "./Style.module.css";

const Sidebar = ({ chidren }) => {

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
            <Image src={icon} alt={title} className={c.icon} />
            <p>{title}</p>
          </Link>
        ))}
      </div>
      <div className={c.pages__container}>{chidren}</div>
    </div>
  );
};

export default Sidebar;