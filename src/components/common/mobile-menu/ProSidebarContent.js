/** @format */

import mobileMenuItems from "@/data/mobileMenuItems";
import { isParentActive } from "@/utilis/isMenuActive";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

const ProSidebarContent = () => {
  const path = usePathname();
  const [hash, setHash] = useState("");
  useEffect(() => {
    setHash(window.location.hash);
  });

  return (
    <Sidebar width="100%" backgroundColor="#fff" className="my-custom-class">
      <Menu>
        {mobileMenuItems.map((item, index) => (
          <>
            {item.subMenu != undefined ? (
              <SubMenu
                key={index}
                className={
                  isParentActive(item.subMenu, path + hash) ? "active" : ""
                }
                label={item.label}
              >
                {item.subMenu.map((subItem, subIndex) =>
                  subItem.subMenu ? (
                    <SubMenu
                      key={subIndex}
                      label={subItem.label}
                      className={
                        isParentActive(subItem.subMenu, path + hash)
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
                                nestedItem.path == path + hash ? "active" : ""
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
                            subItem.path == path + hash ? "active" : ""
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
                      className={item.path == path + hash ? "active" : ""}
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
