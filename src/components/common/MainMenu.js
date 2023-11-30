/** @format */

import {
  blogItems,
  cyprusItems,
  homeItems,
  propertyCollections,
} from "@/data/navItems";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { ch_tr, en_tr, ru_tr } from "@/lang/index";

const MainMenu = ({ lang }) => {
  const pathname = usePathname();
  const [topMenu, setTopMenu] = useState("");
  const [submenu, setSubmenu] = useState("");
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    homeItems.forEach((elm) => {
      if (elm.href.split("/")[1] == pathname.split("/")[1]) {
        setTopMenu("home");
      }
    });
    propertyCollections.forEach((elm) => {
      if (elm.href.split("/")[1] == pathname.split("/")[1]) {
        setTopMenu("minthis");
      }
    });
    blogItems.forEach((elm) => {
      if (elm.href.split("/")[1] == pathname.split("/")[1]) {
        setTopMenu("blog");
      }
    });
    // rentItems.forEach( ( elm ) =>
    // {
    //   if ( elm.href.split( "/" )[ 1 ] == pathname.split( "/" )[ 1 ] )
    //   {
    //     setTopMenu( "rent" );
    //   }
    // } );
    // buyItems.forEach( ( elm ) =>
    // {
    //   if ( elm.href.split( "/" )[ 1 ] == pathname.split( "/" )[ 1 ] )
    //   {
    //     setTopMenu( "buy" );
    //   }
    // } );

    cyprusItems.forEach((elm) => {
      if (elm.href.split("/")[1] == pathname.split("/")[1]) {
        setTopMenu("cyprus");
      }
    });
    // propertyItems.forEach((item) =>
    //   item.subMenuItems.forEach((elm) => {
    //     if (elm.href.split("/")[1] == pathname.split("/")[1]) {
    //       setTopMenu("property");
    //       setSubmenu(item.label);
    //     }
    //   })
    // );
    // listingItems.forEach((item) =>
    //   item.submenu.forEach((elm) => {
    //     if (elm.href.split("/")[1] == pathname.split("/")[1]) {
    //       setTopMenu("listing");
    //       setSubmenu(item.title);
    //     }
    //   })
    // );
  }, []);

  const handleActive = (link) => {
    if (link.split("/")[1] == pathname.split("/")[1]) {
      return "menuActive";
    }
  };

  const getLang = (lang, index) => {
    switch (lang) {
      case "en":
        return en_tr.navbar[index];
      case "ru":
        return ru_tr.navbar[index];
      case "ch":
        return ch_tr.navbar[index];
      default:
        return en_tr.navbar[index];
    }
  };

  return (
    <ul className="ace-responsive-menu">
      <li className="visible_list dropitem">
        <a className="list-item" href="#">
          <span className={topMenu == "home" ? "title menuActive" : "title"}>
            {getLang(lang, 0).title}
          </span>
          <span className="arrow"></span>
        </a>
        {/* Level Two*/}
        <ul className="sub-menu">
          {getLang(lang, 0).subMenu.map((item, index) => (
            <li key={index}>
              <Link className={`${handleActive(item.href)}`} href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </li>

      {/* End homeItems */}
      <li className="visible_list dropitem">
        <Link className="list-item" href="/all-properties">
          <span className={topMenu == "pages" ? "title menuActive" : "title"}>
            {getLang(lang, 1)}
          </span>
          {/* <span className="arrow"></span> */}
        </Link>
      </li>
      <li className="visible_list dropitem">
        <a className="list-item" href="#">
          <span
            className={topMenu == "property" ? "title menuActive" : "title"}
          >
            {getLang(lang, 2).title}
          </span>
          <span className="arrow"></span>
        </a>
        <ul className="sub-menu">
          {getLang(lang, 2).subMenu.map((item, index) => (
            <li key={index} className="dropitem">
              <a href="#">
                <span
                  className={
                    submenu == item.label ? "title menuActive" : "title"
                  }
                >
                  {item.label}
                </span>
                <span className="arrow"></span>
              </a>
              <ul className="sub-menu">
                {item.subMenuItems.map((subMenuItem, subIndex) => (
                  <li key={subIndex}>
                    <Link
                      className={`${handleActive(subMenuItem.href)}`}
                      href={subMenuItem.href}
                    >
                      {subMenuItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </li>
      {/* <li className="visible_list dropitem">
        <a className="list-item" href="#">
          <span className={topMenu == "home" ? "title menuActive" : "title"}>
            {getLang(lang, 2)}
          </span>
          <span className="arrow"></span>
        </a>
        <ul className="sub-menu">
          {getSubLang(lang, 2).map((item, index) => (
            <li key={index}>
              <Link className={`${handleActive(item.href)}`} href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </li> */}
      <li className="visible_list dropitem">
        <a className="list-item" href="#">
          <span className={topMenu == "home" ? "title menuActive" : "title"}>
            {getLang(lang, 3).title}
          </span>
          <span className="arrow"></span>
        </a>
        {/* Level Two*/}
        <ul className="sub-menu">
          {getLang(lang, 3).subMenu.map((item, index) => (
            <li key={index}>
              <Link className={`${handleActive(item.href)}`} href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </li>

      <li className="visible_list dropitem">
        <Link className="list-item" href="/contact">
          <span className={topMenu == "pages" ? "title menuActive" : "title"}>
            {getLang(lang, 4)}
          </span>
        </Link>
      </li>

      {/* <li className="visible_list dropitem">
        <Link className="list-item" href="/rent-properties">
          <span className={topMenu == "home" ? "title menuActive" : "title"}>
            Rent
          </span>
        </Link>
      </li> */}
      {/* <li className="visible_list dropitem">
        <a className="list-item" href="#">
          <span className={topMenu == "home" ? "title menuActive" : "title"}>
            Cyprus
          </span>
          <span className="arrow"></span>
        </a>
        <ul className="sub-menu">
          {cyprusItems.map((item, index) => (
            <li key={index}>
              <Link className={`${handleActive(item.href)}`} href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </li> */}

      {/* <li className="megamenu_style dropitem">
        <a className="list-item" href="#">
          <span className={topMenu == "listing" ? "title menuActive" : "title"}>
            Listing
          </span>
          <span className="arrow"></span>
        </a>
        <ul className="row dropdown-megamenu sub-menu">
          {listingItems.map((item, index) => (
            <li className="col mega_menu_list" key={index}>
              <h4 className="title">{item.title}</h4>
              <ul className="sub-menu">
                {item.submenu.map((submenuItem, subIndex) => (
                  <li key={subIndex}>
                    <Link
                      className={`${handleActive(submenuItem.href)}`}
                      href={submenuItem.href}
                    >
                      {submenuItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </li> */}
      {/* End listings */}

      {/* End property Items */}

      {/* <li className="visible_list dropitem">
        <a className="list-item" href="#">
          <span className={topMenu == "blog" ? "title menuActive" : "title"}>
            Blogs / News
          </span>
          <span className="arrow"></span>
        </a>
        <ul className="sub-menu">
          {blogItems.map((item, index) => (
            <li key={index}>
              <Link className={`${handleActive(item.href)}`} href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </li> */}
      {/* End blog Items */}

      {/* End pages Items */}
      {/* Agents */}
      {/* <li className='visible_list dropitem'>
				<Link
					className='list-item'
					href='/agents'>
					<span className={topMenu == 'home' ? 'title menuActive' : 'title'}>
						Agents
					</span>
				</Link>
			</li> */}
      {/* end Agents */}
    </ul>
  );
};

export default MainMenu;
