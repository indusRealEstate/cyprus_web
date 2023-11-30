import React from "react";

const PropertyNearby = ({ lang }) => {
  const tabsData = [
    {
      title: lang == "en" ? "Facilities" : lang == "ru" ? "Удобства" : "设施",
      details: [
        {
          rating: "4",
          schoolName:
            lang == "en"
              ? "Clubhouse"
              : lang == "ru"
              ? "Клубный дом"
              : "俱乐部",
          grades: "PK-6",
          distance: "3.7 mi",
        },
        {
          rating: "5",
          schoolName:
            lang == "en"
              ? "Wellness Spa"
              : lang == "ru"
              ? "Оздоровительный Спа"
              : "健康水疗中心",
          grades: "PK-6",
          distance: "3.7 mi",
        },
        {
          rating: "5",
          schoolName:
            lang == "en" ? "Monastry" : lang == "ru" ? "Монастырь" : "修道院",
          grades: "PK-6",
          distance: "3.7 mi",
        },
        {
          rating: "5",
          schoolName:
            lang == "en"
              ? "The Plateia"
              : lang == "ru"
              ? "Платея"
              : "普拉蒂亚酒店",
          grades: "PK-6",
          distance: "3.7 mi",
        },
      ],
    },
    {
      title: lang == "en" ? "Sports" : lang == "ru" ? "Виды спорта" : "运动的",
      details: [
        {
          rating: "4",
          facilityName:
            lang == "en"
              ? "Golf Course"
              : lang == "ru"
              ? "Поле для гольфа"
              : "高尔夫球场",
          distance: "3.7 mi",
        },
        {
          rating: "5",
          facilityName:
            lang == "en"
              ? "Outdoor Sports Park"
              : lang == "ru"
              ? "Открытый спортивный парк"
              : "户外运动公园",
          distance: "3.7 mi",
        },
        {
          rating: "5",
          facilityName:
            lang == "en"
              ? "Sports Ground"
              : lang == "ru"
              ? "Спортивная площадка"
              : "运动场",
          distance: "3.7 mi",
        },
        {
          rating: "5",
          facilityName:
            lang == "en"
              ? "Equestrian Centre"
              : lang == "ru"
              ? "Конный центр"
              : "马术中心",
          distance: "3.7 mi",
        },
        {
          rating: "5",
          facilityName:
            lang == "en"
              ? "Kids Club"
              : lang == "ru"
              ? "Детский клуб"
              : "儿童俱乐部",
          distance: "3.7 mi",
        },
      ],
    },
    {
      title: lang == "en" ? "Others" : lang == "ru" ? "Другие" : "其他的",
      details: [
        {
          rating: "4",
          transportationName:
            lang == "en"
              ? "Vineyards"
              : lang == "ru"
              ? "Виноградники"
              : "葡萄园",
          distance: "3.7 mi",
        },
        {
          rating: "5",
          transportationName:
            lang == "en"
              ? "Stargazing"
              : lang == "ru"
              ? "Наблюдение за звездами"
              : "观星",
          distance: "3.7 mi",
        },
        {
          rating: "5",
          transportationName:
            lang == "en"
              ? "Driving Range"
              : lang == "ru"
              ? "Вождение диапазон"
              : "练习场",
          distance: "3.7 mi",
        },
        {
          rating: "5",
          transportationName:
            lang == "en"
              ? "Ezousa Suites"
              : lang == "ru"
              ? "Эзуза Сьютс"
              : "埃祖萨套房酒店",
          distance: "3.7 mi",
        },
      ],
    },
  ];

  return (
    <div className="col-md-12">
      <div className="navtab-style1">
        <nav>
          <div className="nav nav-tabs mb20" id="nav-tab2" role="tablist">
            {tabsData.map((tab, index) => (
              <button
                key={index}
                className={`nav-link fw600 ${index === 0 ? "active" : ""}`}
                id={`nav-item${index + 1}-tab`}
                data-bs-toggle="tab"
                data-bs-target={`#nav-item${index + 1}`}
                type="button"
                role="tab"
                aria-controls={`nav-item${index + 1}`}
                aria-selected={index === 0 ? "true" : "false"}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </nav>
        {/* End nav tabs */}

        <div className="tab-content" id="nav-tabContent">
          {tabsData.map((tab, index) => (
            <div
              key={index}
              className={`tab-pane fade fz15 ${
                index === 0 ? "active show" : ""
              }`}
              id={`nav-item${index + 1}`}
              role="tabpanel"
              aria-labelledby={`nav-item${index + 1}-tab`}
            >
              {tab.details.map((detail, detailIndex) => (
                <div
                  key={detailIndex}
                  className="nearby d-sm-flex align-items-center mb20"
                >
                  {/* <div className="rating dark-color mr15 ms-1 mt10-xs mb10-xs">
                    <span className="fw600 fz14">{detail.rating}</span>
                    <span className="text fz14">/10</span>
                  </div> */}
                  <div className="details">
                    <p className="dark-color fw600 mb-0">
                      {index === 0
                        ? detail.schoolName
                        : detail.facilityName || detail.transportationName}
                    </p>
                    {/* <p className="text mb-0">
                      {tab.title === "Sports"
                        ? `Grades: ${detail.grades} Distance: ${detail.distance}`
                        : `Distance: ${detail.distance}`}
                    </p> */}
                    {/* <div className="blog-single-review">
                      <ul className="mb0 ps-0">
                        {[1, 2, 3, 4, 5].map((starIndex) => (
                          <li key={starIndex} className="list-inline-item me-0">
                            <a href="#">
                              <i className="fas fa-star review-color2 fz10" />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div> */}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyNearby;
