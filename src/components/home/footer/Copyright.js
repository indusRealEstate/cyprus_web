const getCurrentYear = () => {
  return new Date().getFullYear();
};

const Footer = () => {
  return (
    <div className="container white-bdrt1 py-4">
      <div className="row">
        <div className="col-sm-6">
          <div className="text-center text-lg-start">
            <span className="copyright-text text-gray ff-heading">
              © PREMIUM REALTOR {getCurrentYear()}{" "}
              {/* <a
                href="https://themeforest.net/user/ib-themes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
              </a>{" "} */}
              - All rights reserved
            </span>
          </div>
        </div>
        {/* End .col-sm-6 */}

        {/* <div className="col-sm-6">
          <div className="text-center text-lg-end">
            <p className="footer-menu ff-heading text-gray">
              {footerMenuItems.map((item, index) => (
                <React.Fragment key={index}>
                  <a className="text-gray" href={item.link}>
                    {item.label}
                  </a>
                  {index !== footerMenuItems.length - 1 && " · "}
                </React.Fragment>
              ))}
            </p>
          </div>
        </div> */}
        {/* End .col-sm-6 */}
      </div>
    </div>
  );
};

export default Footer;
