import React from "react";

const ProperytyDescriptions = ({ desc }) => {
  const firstPara = new String(desc)
    .split(" ")
    .filter((words, index) => index < 50)
    .toString()
    .replace(/,/g, " ");

  const lastPara = new String(desc)
    .split(" ")
    .filter((words, index) => index > 50)
    .toString()
    .replace(/,/g, " ");

  return (
    <>
      <p className="text mb10">{firstPara}..</p>
      <div className="agent-single-accordion">
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
              style={{}}
            >
              <div className="accordion-body p-0">
                <p className="text">{lastPara}</p>
              </div>
            </div>
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button p-0 collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Show more
              </button>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProperytyDescriptions;
