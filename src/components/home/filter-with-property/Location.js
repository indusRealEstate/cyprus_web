"use client";
import Select from "react-select";

const Location = () => {
  const inqueryType = [
    { value: "all", label: "All Cities" },
    { value: "paphos", label: "Paphos" },
    { value: "limassol", label: "Limassol" },
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
