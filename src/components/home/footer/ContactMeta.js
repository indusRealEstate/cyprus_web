import React from "react";

const ContactMeta = ({ lang }) => {
  const contactInfoList = [
    {
      title:
        lang == "en"
          ? "Customer Care"
          : lang == "ru"
          ? "Обслуживание клиентов"
          : "客户服务",
      phone: "+(971) 54 384 0292",
      phoneLink: "tel:+971543840292", // Use "tel" URI scheme for phone
    },
    {
      title: "Whatsapp",
      mail:
        lang == "en"
          ? "Contact Via Whatsapp"
          : lang == "ru"
          ? "Связаться через WhatsApp"
          : "通过 Whatsapp 联系",
      mailLink: "https://wa.me/971543840292",
    },
  ];

  return (
    <div className="row mb-4 mb-lg-5">
      {contactInfoList.map((contact, index) => (
        <div className="col-auto" key={index}>
          <div className="contact-info">
            <p className="info-title">{contact.title}</p>
            {contact.phone && (
              <h6 className="info-phone">
                <a href={contact.phoneLink} target="_blank">
                  {contact.phone}
                </a>
              </h6>
            )}
            {contact.mail && (
              <h6 className="info-mail">
                <a href={contact.mailLink} target="_blank">
                  {contact.mail}
                </a>
              </h6>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactMeta;
