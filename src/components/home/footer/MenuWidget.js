import React from "react";

const MenuWidget = () => {
  const menuSections = [
    {
      title: "Popular Search",
      links: [
        { label: "Townhouses", href: "/search-results" },
        { label: "Appartments", href: "/search-results" },
        { label: "Homes", href: "/search-results" },
        { label: "Villa", href: "/search-results" },
      ],
    },
    {
      title: "Quick Links",
      links: [
        { label: "Why Cyprus", href: "/#why-cyprus" },
        { label: "Invest In Cyprus", href: "/invest-in-cyprus" },
        { label: "Pafilia Collections", href: "/#flagship-prop" },
        { label: "Contact Us", href: "/contact" },
        { label: "All Properties", href: "/all-properties" },
        // { label: "FAQs", href: "/faq" },
      ],
    },
    {
      title: "Discover",
      links: [
        { label: "Minthis", href: "/featured-collections/minthis" },
        { label: "One", href: "/featured-collections/one" },
        { label: "Neo", href: "/featured-collections/neo" },
      ],
    },
    {
      title: "Explore",
      links: [
        { label: "Paphos", href: "/search-results" },
        { label: "Limassol", href: "/search-results" },
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
