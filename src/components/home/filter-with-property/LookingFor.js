"use client";
import Select from "react-select";

const LookingFor = ({ lang }) => {
  const inqueryType = [
    {
      value: "Apartments",
      label: lang == "en" ? "Apartments" : lang == "ru" ? "Квартиры" : "公寓",
    },
    {
      value: "Houses",
      label: lang == "en" ? "Houses" : lang == "ru" ? "Дома" : "房屋",
    },
    {
      value: "Villa",
      label: lang == "en" ? "Villa" : lang == "ru" ? "Вилла" : "别墅",
    },
    {
      value: "TownHome",
      label:
        lang == "en" ? "TownHome" : lang == "ru" ? "ГородДомой" : "联排别墅",
    },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      background: "none",
    }),
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

export default LookingFor;
