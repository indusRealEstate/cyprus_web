"use client";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";

const Subscribe = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="mailchimp-style1 white-version">
      <input
        type="email"
        className="form-control"
        placeholder="Your Email"
        style={{
          color: "black",
        }}
      />
      <button type="button" onClick={handleClickOpen}>
        Subscribe
      </button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" color={"#1d4439"}>
          {"Thank you for your subsciption :)"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            We will soon connect with you for finding your home.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={handleClose}
            style={{
              color: "#1d4439",
            }}
          >
            OKAY
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Subscribe;
