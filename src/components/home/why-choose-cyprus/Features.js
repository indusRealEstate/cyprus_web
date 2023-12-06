const Features = ({ lang }) => {
  // Define an array of feature objects
  const features = [
    {
      icon: "flaticon-security",
      title: lang.point_1.heading,
      description: lang.point_1.desc,
    },
    {
      icon: "flaticon-investment",
      title: lang.point_2.heading,
      description: lang.point_2.desc,
    },
    {
      icon: "flaticon-ruler",
      title: lang.point_3.heading,
      description: lang.point_3.desc,
    },
  ];

  return (
    <>
      {features.map((feature, index) => (
        <div className="list-one d-flex align-items-start mb30" key={index}>
          <span className={`list-icon flex-shrink-0 ${feature.icon}`} />
          <div className="list-content flex-grow-1 ml20">
            <h6 className="mb-1">{feature.title}</h6>
            <p className="text mb-0 fz15">{feature.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Features;
