"use client";
import { FormControl, MenuItem, Select } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";

import { changeLang } from "../../redux/features/lang-slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";

const useStyles = makeStyles({
  root: {
    "& .MuiSelect-select ": {
      padding: "7px 10px",
      border: "1px solid white",
      color: "white",
    },
    "& .MuiInputBase-root": {
      border: "none",
    },
    "& .MuiSvgIcon-root": {
      color: "white",
    },
  },

  secondary: {
    "& .MuiSelect-select ": {
      padding: "7px 10px",
      border: "1px solid black",
      color: "black",
    },
    "& .MuiInputBase-root": {
      border: "none",
    },
    "& .MuiSvgIcon-root": {
      color: "black",
    },
  },
});

const SelectLanguage = ({ scrolled }) => {
  const [lang, setLang] = useState("en");
  const classes = useStyles();
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (value: any) => {
    setLang(value);
    dispatch(changeLang(value));
    localStorage.setItem("lang", value);
  };

  useEffect(() => {
    const cokiesLang = localStorage.getItem("lang");

    if (cokiesLang != undefined) {
      handleChange(cokiesLang);
    }

    var language = window.navigator.language;
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    if (
      language == "ru" ||
      timezone == "Europe/Moscow" ||
      timezone == "Europe/Kaliningrad" ||
      timezone == "Europe/Samara" ||
      timezone == "Asia/Yekaterinburg" ||
      timezone == "Asia/Omsk" ||
      timezone == "Asia/Krasnoyarsk" ||
      timezone == "Asia/Novosibirsk" ||
      timezone == "Asia/Irkutsk" ||
      timezone == "Asia/Chita" ||
      timezone == "Asia/Vladivostok" ||
      timezone == "Asia/Magadan" ||
      timezone == "Asia/Srednekolymsk" ||
      timezone == "Asia/Anadyr" ||
      timezone == "Asia/Anadyr"
    ) {
      handleChange("ru");
    } else if (
      language == "zh" ||
      timezone == "Asia/Shanghai" ||
      timezone == "Asia/Beijing"
    ) {
      handleChange("ch");
    }
  }, []);
  return (
    <>
      <FormControl
        sx={{ m: 1, minWidth: 80 }}
        className={scrolled ? classes.secondary : classes.root}
      >
        <Select
          value={lang}
          onChange={(e) => handleChange(e.target.value)}
          displayEmpty
        >
          <MenuItem value="en">EN</MenuItem>
          <MenuItem value="ru">RU</MenuItem>
          <MenuItem value="ch">CH</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default SelectLanguage;
