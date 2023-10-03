const Features = () => {
  // Define an array of feature objects
  const features = [
    {
      icon: "flaticon-security",
      title: "Permanent Residency",
      description:
        "A permanent residency visa can easily be obtained.It gives you and your family the right to live freely and travel with ease throughout the EU. Permit holders also have the right to own a business in Cyprus or set up a Cyprus company for trading with excellent tax advantages.",
    },
    {
      icon: "flaticon-investment",
      title: "Low Cost Of Living",
      description:
        "The cost of living in Nicosia and Paphos is 10—15% lower. In general, you would need €3,000 without rent a month in Limassol, €2,700 in Nicosia and €2,600 in Paphos. Cyprus's cities are more affordable than British and USA cities. Living in Cyprus can be beneficial for many reasons.",
    },
    {
      icon: "flaticon-ruler",
      title: "High Educational Standards",
      description:
        "Cyprus places a great deal of value on Higher Education. The country has one of the highest tertiary educational attainment rate in the EU with 58.3 % of 30-34 year olds having a Higher Education degree in 2021 (EU average: 41.2 %).",
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
