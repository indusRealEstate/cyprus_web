import React from "react";

const MenuWidget = () => {
  const menuSections = [
    {
      title: "Popular Search",
      links: [
        { label: "Townhouses", href: "#" },
        { label: "Appartments", href: "#" },
        { label: "Homes", href: "#" },
        { label: "Villa", href: "#" },
      ],
    },
    {
      title: "Quick Links",
      links: [
        { label: "Why Cyprus", href: "#" },
        { label: "Property Collections", href: "#" },
        { label: "Contact Us", href: "#" },
        { label: "All Properties", href: "#" },
        { label: "FAQs", href: "#" },
      ],
    },
    {
      title: "Discover",
      links: [
        { label: "Paphos", href: "#" },
        { label: "Limassol", href: "#" },
      ],
    },
  ];

  return (
    <>
      {menuSections.map((section, index) => (
        <div className="col-auto" key={index}>
          <div className="link-style1 mb-3">
            <h6 className="text-white mb25">{section.title}</h6>
            <ul className="ps-0">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default MenuWidget;
