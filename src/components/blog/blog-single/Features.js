const Features = ({ features }) => {
  return (
    <>
      {features.map((featureSection, index) => (
        <div className="col-auto" key={index}>
          <div className="ui-content">
            <div className="list-style1">
              <ul>
                {featureSection.points.map((point, pointIndex) => (
                  <li key={pointIndex}>
                    <i className="far fa-check text-thm3 bgc-thm3-light" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Features;
