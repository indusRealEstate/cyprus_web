"use client";
import Select from "react-select";

const Location = ({ lang }) => {
  const inqueryType = [
    {
      value: "all",
      label:
        lang == "en" ? "All Cities" : lang == "ru" ? "Все города" : "所有城市",
    },
    {
      value: "paphos",
      label: lang == "en" ? "Paphos" : lang == "ru" ? "Пафос" : "帕福斯",
    },
    {
      value: "limassol",
      label: lang == "en" ? "Limassol" : lang == "ru" ? "Лимассол" : "利马索尔",
    },
  ];

  const customStyles = {
    option: (styles, { isFocused, isSelected, isHovered }) => {
      return {
        ...styles,
        backgroundColor: isSelected
          ? "#89ada3"
          : isHovered
          ? "#eb675312"
          : isFocused
          ? "#89ada3"
          : undefined,
      };
    },
  };
  return (
    <>
      <Select
        defaultValue={[inqueryType[0]]}
        name="colors"
        options={inqueryType}
        styles={customStyles}
        className="text-start select-borderless"
        classNamePrefix="select"
        required
        isClearable={false}
      />
    </>
  );
};

export default Location;
