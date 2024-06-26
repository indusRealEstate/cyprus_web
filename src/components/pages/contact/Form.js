"use client";
import { submitContactForm } from "@/api/pages/contactForm";
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
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { useState } from "react";

const Form = ({ lang }) => {
  const onlyEmail = /^((\w+\.)*\w+)@(\w+\.)+(\w)/;
  const onlyText = /^[a-zA-Z ]*$/;
  const onlyContactNumber = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
  const [ValidFirstName, setValidFirstName] = useState(true);
  const [ValidLastName, setValidLastName] = useState(true);
  const [ValidNEmail, setValidEmail] = useState(true);
  const [ValidMessage, setValidMessage] = useState(true);
  const [alertMsg, setAlertMsg] = useState([]);
  const [alertTitle, setAlertTitle] = useState([]);
  const [alertSeverity, setAlertSeverity] = useState([]);
  const [error, setError] = useState(false);
  const [formSubmit, setFormSubmit] = useState(false);
  const [messageEmpty, setMessageEmpty] = useState(false);
  const [responsData, setRespons] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setRespons(false);
  };

  const onSubmitForm = async (event) => {
    event.preventDefault();
    window.scrollTo(0, 0);

    if (event.type === "click") {
      setFormSubmit(true);
      try {
        if (formData.first_name == "") {
          // check the first name empty
          setError(true);
          setValidFirstName(false);
          throw new Error("Fill the first name");
        } else if (!formData.first_name.match(onlyText)) {
          // check the first
          setValidFirstName(false);
          setError(true);
          throw new Error("Fill the correct first name");
        } else if (formData.last_name == "") {
          // check last name empty
          setValidFirstName(true);
          setError(true);
          setValidLastName(false);
          throw new Error("Fill the last name");
        } else if (!formData.last_name.match(onlyText)) {
          setValidLastName(false);
          setError(true);
          throw new Error("Fill the correct last name");
        } else if (formData.email == "") {
          setValidLastName(true);
          setError(true);
          setValidEmail(false);
          throw new Error("Fill the email");
        } else if (!formData.email.match(onlyEmail)) {
          setError(true);
          setValidEmail(false);
          throw new Error("Fill the correct email");
        } else if (formData.message == "") {
          setValidEmail(true);
          setError(true);
          setMessageEmpty(true);
          throw new Error("Fill the message");
        } else if (!formData.message.match(onlyText)) {
          setMessageEmpty(false);
          setError(true);
          setValidMessage(false);
          throw new Error("Please type valid message");
        } else {
          setValidMessage(true);
          setError(false);
          console.log("no error");
          submitContactForm(formData).then((res) => {
            console.log(res.data);
            if (res.data === true) {
              setRespons(true);
              setFormData({
                first_name: "",
                last_name: "",
                email: "",
                message: "",
              });
              setFormSubmit(false);
              document.getElementById("form").reset();
              handleClickOpen();
            }
          });
        }
      } catch (error) {
        console.log("Error occur " + error.message);
        setAlertMsg(error.message);
        setAlertTitle("Error");
        setAlertSeverity("error");
      }
    }
  };

  return (
    <>
      {responsData ? (
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title" color={"#1d4439"}>
            {"Thank you :)"}
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
      ) : (
        ""
      )}
      {formSubmit && error ? (
        <Alert severity={alertSeverity} className="mb-5">
          <AlertTitle>{alertTitle}</AlertTitle>
          <strong>{alertMsg}</strong>
        </Alert>
      ) : (
        ""
      )}
      <form className="form-style1" id="form">
        <div className="row">
          <div className="col-lg-12">
            <div className="mb20">
              <label className="heading-color ff-heading fw600 mb10">
                {lang == "en" ? "First Name" : lang == "ru" ? "Имя" : "名"}
              </label>
              <input
                type="text"
                className={
                  ValidFirstName
                    ? "form-control"
                    : "form-control border border-danger"
                }
                placeholder={
                  lang == "en"
                    ? "Your name"
                    : lang == "ru"
                    ? "Ваше имя"
                    : "你的名字"
                }
                required
                onChange={(event) =>
                  setFormData({ ...formData, first_name: event.target.value })
                }
              />
            </div>
          </div>
          {/* End .col-lg-12 */}
          <div className="col-lg-12">
            <div className="mb20">
              <label className="heading-color ff-heading fw600 mb10">
                {lang == "en" ? "Last Name" : lang == "ru" ? "Фамилия" : "姓"}
              </label>
              <input
                type="text"
                className={
                  ValidLastName
                    ? "form-control"
                    : "form-control border border-danger"
                }
                placeholder={
                  lang == "en"
                    ? "Your last name"
                    : lang == "ru"
                    ? "Ваша фамилия"
                    : "你的姓氏"
                }
                required
                onChange={(event) =>
                  setFormData({ ...formData, last_name: event.target.value })
                }
              />
            </div>
          </div>
          {/* End .col-lg-12 */}
          <div className="col-md-12">
            <div className="mb20">
              <label className="heading-color ff-heading fw600 mb10">
                {lang == "en"
                  ? "Email"
                  : lang == "ru"
                  ? "Электронная почта"
                  : "电子邮件"}
              </label>
              <input
                type="email"
                className={
                  ValidNEmail
                    ? "form-control"
                    : "form-control border border-danger"
                }
                placeholder={
                  lang == "en"
                    ? "Your email"
                    : lang == "ru"
                    ? "Ваш адрес электронной почты"
                    : "你的邮件"
                }
                required
                onChange={(event) =>
                  setFormData({ ...formData, email: event.target.value })
                }
              />
            </div>
          </div>
          {/* End .col-lg-12 */}
          <div className="col-md-12">
            <div className="mb10">
              <label className="heading-color ff-heading fw600 mb10">
                {lang == "en"
                  ? "Textarea Message"
                  : lang == "ru"
                  ? "Текстовое сообщение"
                  : "文本区留言"}
              </label>
              <textarea
                cols={30}
                rows={4}
                placeholder={
                  lang == "en"
                    ? "There are many variations of passages."
                    : lang == "ru"
                    ? "Существует множество вариаций отрывков."
                    : "段落有很多变体。"
                }
                defaultValue={""}
                required
                style={messageEmpty ? { border: "2px solid red" } : {}}
                onChange={(event) =>
                  setFormData({ ...formData, message: event.target.value })
                }
              />
            </div>
          </div>
          {/* End .col-lg-12 */}

          <div className="col-md-12">
            <div className="d-grid">
              <button
                type="submit"
                className="ud-btn btn-thm"
                onClick={(event) => onSubmitForm(event)}
              >
                Submit
                <i className="fal fa-arrow-right-long" />
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default Form;
