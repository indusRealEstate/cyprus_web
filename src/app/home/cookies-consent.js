"use client";
import { hasCookie, setCookie } from "cookies-next";
import React, { useEffect, useState } from "react";

const CookieConsent = (props) => {
  const [showConsent, setShowConsent] = useState(true);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie("localConsent", "true", {});
  };

  useEffect(() => {
    setShowConsent(hasCookie("localConsent"));
  }, []);

  if (showConsent) {
    return null;
  }

  return (
    <>
      <div className="cookies-dialog">
        <div className="container">
          <div className="d-flex justify-content-center my40">
            <span className="text-dark fz20 lh-base cookies-dialog-mbl-text">
              This website uses cookies to improve user experience. By using our
              website you consent to all cookies in accordance with our Cookie
              Policy.
            </span>
            <button
              className="ud-btn btn-dark bdrs0 w-170 cookies-dialog-mbl-btn"
              onClick={() => acceptCookie()}
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookieConsent;
