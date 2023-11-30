"use client";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { forwardRef, useImperativeHandle, useState } from "react";

const FormDialog = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    setFormErrorName(undefined);
    setFormErrorEmail(undefined);
    setFormErrorNumber(undefined);
  };

  useImperativeHandle(ref, () => ({
    handleOpen: () => {
      setOpen(true);
    },
  }));

  const textRegex = /^[a-zA-Z ]*$/;
  const emailRegex = /^((\w+\.)*\w+)@(\w+\.)+(\w)/;
  // const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;

  const [formErrorName, setFormErrorName] = useState(undefined);
  const [formErrorEmail, setFormErrorEmail] = useState(undefined);
  const [formErrorNumber, setFormErrorNumber] = useState(undefined);

  const onTextChange = (event, type) => {
    if (type == "name") {
      if (!event.target.value.match(textRegex)) {
        setFormErrorName("Enter Valid Name");
      } else if (event.target.value == "") {
        setFormErrorName("Please Enter Name");
      } else {
        setFormErrorName(false);
      }
    } else if (type == "email") {
      if (!event.target.value.match(emailRegex)) {
        setFormErrorEmail("Enter Valid Email");
      } else if (event.target.value == "") {
        setFormErrorEmail("Please Enter Email");
      } else {
        setFormErrorEmail(false);
      }
    } else if (type == "number") {
      if (event.target.value.length < 10) {
        setFormErrorNumber("Enter Valid Number");
      } else if (event.target.value == "") {
        setFormErrorNumber("Please Enter Number");
      } else {
        setFormErrorNumber(false);
      }
    }
  };

  const submit = () => {
    if (
      formErrorName == false &&
      formErrorEmail == false &&
      formErrorNumber == false
    ) {
      setOpen(false);
      window.open(
        "https://www.indusoffplansdubai.com/whatsapp-us?text=general",
        "_blank"
      );

      setFormErrorName(undefined);
      setFormErrorEmail(undefined);
      setFormErrorNumber(undefined);
    } else if (formErrorName == undefined) {
      setFormErrorName("Please Enter Name");
    } else if (formErrorEmail == undefined) {
      setFormErrorEmail("Please Enter Email");
    } else if (formErrorNumber == undefined) {
      setFormErrorNumber("Please Enter Number");
    }
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className="mt10" align="center">
          Talk To Us
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            className="font-style-2"
            fontSize={20}
            align="center"
          >
            Tell us specifications about your future property.
          </DialogContentText>
          <TextField
            error={formErrorName != false && formErrorName != undefined}
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            helperText={formErrorName}
            onChange={(e) => onTextChange(e, "name")}
            // variant="standard"
          />
          <TextField
            error={formErrorEmail != false && formErrorEmail != undefined}
            autoFocus
            margin="dense"
            id="name"
            label="Email"
            type="email"
            fullWidth
            helperText={formErrorEmail}
            onChange={(e) => onTextChange(e, "email")}
            // variant="standard"
          />
          <TextField
            error={formErrorNumber != false && formErrorNumber != undefined}
            autoFocus
            margin="dense"
            id="name"
            label="Contact Number"
            type="number"
            fullWidth
            helperText={formErrorNumber}
            onChange={(e) => onTextChange(e, "number")}
            // variant="standard"
          />
          <TextField
            // className="mt20"
            autoFocus
            margin="dense"
            id="name"
            label="Tell Us.."
            type="text"
            fullWidth
            multiline
            rows={4}
            // variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button className="color-gold" onClick={handleClose}>
            Cancel
          </Button>
          <Button className="color-gold" onClick={submit}>
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
});

FormDialog.displayName = "FormDialog";

export default FormDialog;
