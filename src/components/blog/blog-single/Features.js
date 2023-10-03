import React from "react";

const featuresData = [
  {
    points: [
      "The application procedure is highly efficient, with a high approval rate if all criteria are satisfied.",
      "It is not necessary to reside in Cyprus, but a visit once every two years is required.",
      "Dependents can be enrolled in high-quality private schools offering English language courses.",
      "Residence applies to the main applicant’s spouse and children under 25 years.",
      "The whole process can be arranged without being present in the country, except for biometric capturing.",
      "Successful applicants are eligible to apply for Cypriot citizenship after five years of residence.",
    ],
  },
  // {
  //   points: [
  //     "Learn to design mobile apps & websites.",
  //     "Design 3 different logos.",
  //     "Create low-fidelity wireframe.",
  //     "Downloadable exercise files.",
  //   ],
  // },
];

const Features = () => {
  return (
    <>
      {featuresData.map((featureSection, index) => (
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
