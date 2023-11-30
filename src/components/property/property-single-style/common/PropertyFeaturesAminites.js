import { Skeleton } from "@mui/material";
import { useEffect, useState } from "react";

const PropertyFeaturesAminites = ({ data, lang, translatePage }) => {
  const [features, setFeatures] = useState([]);
  const loadingArray = [1, 2, 3, 4, 6, 7, 8, 9];

  useEffect(() => {
    setFeatures([]);
    if (lang != "en") {
      JSON.parse(data).forEach((f) => {
        translatePage(f, lang == "ch" ? "zh" : lang).then((res) => {
          setFeatures((old) => [...old, res.translatedText]);
        });
      });
    } else {
      setFeatures(JSON.parse(data));
    }
  }, [lang]);

  return (
    <>
      {features.map((row, rowIndex) => (
        <div key={rowIndex} className="col-sm-6 col-md-4">
          <div className="pd-list">
            <p className="text mb10">
              <i className="fas fa-circle fz6 align-middle pe-2" />
              {row}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default PropertyFeaturesAminites;
