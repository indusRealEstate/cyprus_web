/** @format */

import mobileMenuItems from "@/data/mobileMenuItems";
import { ch_tr, en_tr, ru_tr } from "@/lang";
import { useAppSelector } from "@/redux/store";
import { isParentActive } from "@/utilis/isMenuActive";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

const ProSidebarContent = () => {
  const lang = useAppSelector((state) => state.langReducer);
  const path = usePathname();
  // const [hash, setHash] = useState("");
  // useEffect(() => {
  //   setHash(window.location.hash);
  // });

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
    <Sidebar width="100%" backgroundColor="#fff" className="my-custom-class">
      <Menu>
        {mobileMenuItems.map((item, index) => (
          <>
            {item.subMenu != undefined ? (
              <SubMenu
                key={index}
                className={isParentActive(item.subMenu, path) ? "active" : ""}
                label={item.label}
              >
                {item.subMenu.map((subItem, subIndex) =>
                  subItem.subMenu ? (
                    <SubMenu
                      key={subIndex}
                      label={subItem.label}
                      className={
                        isParentActive(subItem.subMenu, path) ? "active" : ""
                      }
                    >
                      {subItem.subMenu.map((nestedItem, nestedIndex) => (
                        <MenuItem
                          key={nestedIndex}
                          component={
                            <Link
                              className={
                                nestedItem.path == path ? "active" : ""
                              }
                              href={nestedItem.path}
                            />
                          }
                        >
                          {nestedItem.label}
                        </MenuItem>
                      ))}
                    </SubMenu>
                  ) : (
                    <MenuItem
                      key={subIndex}
                      component={
                        <Link
                          className={subItem.path == path ? "active" : ""}
                          href={subItem.path}
                        />
                      }
                    >
                      {subItem.label}
                    </MenuItem>
                  )
                )}
              </SubMenu>
            ) : (
              <>
                <MenuItem
                  component={
                    <Link
                      className={item.path == path ? "active" : ""}
                      href={item.path}
                    />
                  }
                >
                  {item.label}
                </MenuItem>
              </>
            )}
          </>
        ))}
      </Menu>
    </Sidebar>
  );
};

export default ProSidebarContent;
