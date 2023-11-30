"use client";
import { Dialog } from "@mui/material";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import FormDialog from "./form-dialog";

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

const PopupDialog = () => {
  const size = useWindowSize();
  const [openAlertDialog, setOpenAlertDialog] = useState(false);

  const handleClose = () => {
    setOpenAlertDialog(false);
  };

  const handleOpen = () => {
    setOpenAlertDialog(true);
  };

  useEffect(() => {
    setTimeout(() => {
      if (sessionStorage.getItem("ad") != "true") {
        handleOpen();
        sessionStorage.setItem("ad", "true");
      }
    }, 3000);
  }, []);

  const commonDialog = useRef();

  const openCommonDialog = () => {
    handleClose();
    commonDialog.current?.handleOpen();
  };

  return (
    <>
      <FormDialog ref={commonDialog} />
      {/* ---------------------------------------------------Alert Dialog--------------------------------- */}
      {/* ---------------------------------------------------Alert Dialog--------------------------------- */}
      {/* ---------------------------------------------------Alert Dialog--------------------------------- */}
      <Dialog onClose={handleClose} open={openAlertDialog} maxWidth="md">
        <button
          type="button"
          className="btn-close close-btn-alert-banner"
          onClick={handleClose}
        />
        <Image
          // width={900}
          // height={641}
          width={size.width > 500 ? 900 : 420}
          height={size.width > 500 ? 641 : 299}
          className={`w-100`}
          src={"/images/featureProperties/Minthis_photo_Cleone_pool.webp"}
          alt={`img`}
        />
        <button className="custom-btn-alert-banner" onClick={openCommonDialog}>
          Contact Now
        </button>
      </Dialog>
    </>
  );
};

export default PopupDialog;
