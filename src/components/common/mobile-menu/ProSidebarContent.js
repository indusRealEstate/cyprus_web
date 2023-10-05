/** @format */

import mobileMenuItems from "@/data/mobileMenuItems";
import { isParentActive } from "@/utilis/isMenuActive";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

const ProSidebarContent = () => {
  const path = usePathname();

  return (
    <Sidebar width="100%" backgroundColor="#fff" className="my-custom-class">
      <Menu>
        {mobileMenuItems.map((item, index) => (
          <>
            {item.subMenu != undefined ? (
              <SubMenu
                key={index}
                className={
                  isParentActive(item.subMenu, path + window.location.hash)
                    ? "active"
                    : ""
                }
                label={item.label}
              >
                {item.subMenu.map((subItem, subIndex) =>
                  subItem.subMenu ? (
                    <SubMenu
                      key={subIndex}
                      label={subItem.label}
                      className={
                        isParentActive(
                          subItem.subMenu,
                          path + window.location.hash
                        )
                          ? "active"
                          : ""
                      }
                    >
                      {subItem.subMenu.map((nestedItem, nestedIndex) => (
                        <MenuItem
                          key={nestedIndex}
                          component={
                            <Link
                              className={
                                nestedItem.path == path + window.location.hash
                                  ? "active"
                                  : ""
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
                          className={
                            subItem.path == path + window.location.hash
                              ? "active"
                              : ""
                          }
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
                      className={
                        item.path == path + window.location.hash ? "active" : ""
                      }
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
