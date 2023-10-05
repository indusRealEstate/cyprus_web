"use client"
import { submitContactForm } from "@/api/pages/contactForm"
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	useMediaQuery,
	useTheme,
} from "@mui/material"
import Alert from "@mui/material/Alert"
import AlertTitle from "@mui/material/AlertTitle"
import { useState } from "react"

const Form = () => {
	const onlyEmail =
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+.(?:\.[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+)*$/
	// const onlyEmail = /^([A-Za-z])+@+.+[A-Za-z]\w+/g;
	const onlyText = /^[a-zA-Z ]*$/
	const onlyContactNumber = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g
	const [ValidFirstName, setValidFirstName] = useState(true)
	const [ValidLastName, setValidLastName] = useState(true)
	const [ValidNEmail, setValidEmail] = useState(true)
	const [alertMsg, setAlertMsg] = useState([])
	const [alertTitle, setAlertTitle] = useState([])
	const [alertSeverity, setAlertSeverity] = useState([])
	const [error, setError] = useState(false)
	const [formSubmit, setFormSubmit] = useState(false)
	const [messageEmpty, setMessageEmpty] = useState(false)
	const [responsData, setRespons] = useState(false)
	const theme = useTheme()
	const fullScreen = useMediaQuery(theme.breakpoints.down("md"))
	const [open, setOpen] = useState(false)
	const [formData, setFormData] = useState({
		first_name: "",
		last_name: "",
		email: "",
		message: "",
	})

	const handleClickOpen = () => {
		setOpen(true)
	}
	const handleClose = () => {
		setOpen(false)
		setRespons(false)
	}

	const onSubmitForm = async (event) => {
		event.preventDefault()
		setFormSubmit(true)
		if (event.type === "click") {
			try {
				// FIRST NAME
				if (formData.first_name == "") {
					setError(true)
					setValidFirstName(false)
					throw new Error("Fill the first name")
				} else {
					setError(false)
					setValidFirstName(true)
				}

				if (!formData.first_name.match(onlyText)) {
					setValidFirstName(false)
					setError(true)
					throw new Error("Fill the correct first name")
				} else {
					setError(false)
					setValidFirstName(true)
				}

				// LAST NAME
				if (formData.last_name == "") {
					setError(true)
					setValidLastName(false)
					throw new Error("Fill the last name")
				} else {
					setError(false)
					setValidLastName(true)
				}

				if (!formData.last_name.match(onlyText)) {
					setValidLastName(false)
					setError(true)
					throw new Error("Fill the correct last name")
				} else {
					setError(false)
					setValidLastName(true)
				}

				// EMAILL
				if (formData.email == "") {
					setError(true)
					setValidEmail(false)
					throw new Error("Fill the email")
				} else {
					setError(false)
					setValidEmail(true)
				}

				if (!formData.email.match(onlyEmail)) {
					setError(true)
					setValidEmail(false)
					throw new Error("Fill the correct email")
				} else {
					setError(false)
					setValidEmail(true)
				}

				if (formData.message == "") {
					setError(true)
					setMessageEmpty(true)
					throw new Error("Fill the message")
				} else {
					setError(false)
					setMessageEmpty(false)
				}

				if (!error) {
					console.log("no error")
					submitContactForm(formData).then((res) => {
						console.log(res.data)
						if (res.data === true) {
							setRespons(true)
							handleClickOpen()
							document.getElementById("form").reset()
						}
					})
				}
			} catch (error) {
				console.log("Error occur " + error.message)
				setAlertMsg(error.message)
				setAlertTitle("Error")
				setAlertSeverity("error")
			}
		}
	}

	return (
		<>
			{responsData ? (
				<Dialog
					fullScreen={fullScreen}
					open={open}
					onClose={handleClose}
					aria-labelledby='responsive-dialog-title'>
					<DialogTitle id='responsive-dialog-title' color={"#1d4439"}>
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
							}}>
							OKAY
						</Button>
					</DialogActions>
				</Dialog>
			) : (
				""
			)}
			{formSubmit && error ? (
				<Alert severity={alertSeverity} className='mb-5'>
					<AlertTitle>{alertTitle}</AlertTitle>
					<strong>{alertMsg}</strong>
				</Alert>
			) : (
				""
			)}
			<form className='form-style1' id='form'>
				<div className='row'>
					<div className='col-lg-12'>
						<div className='mb20'>
							<label className='heading-color ff-heading fw600 mb10'>
								First Name
							</label>
							<input
								type='text'
								className={
									ValidFirstName
										? "form-control"
										: "form-control border border-danger"
								}
								placeholder='Your Name'
								required
								onChange={(event) =>
									setFormData({ ...formData, first_name: event.target.value })
								}
							/>
						</div>
					</div>
					{/* End .col-lg-12 */}
					<div className='col-lg-12'>
						<div className='mb20'>
							<label className='heading-color ff-heading fw600 mb10'>
								Last Name
							</label>
							<input
								type='text'
								className={
									ValidLastName
										? "form-control"
										: "form-control border border-danger"
								}
								placeholder='Your Name'
								required
								onChange={(event) =>
									setFormData({ ...formData, last_name: event.target.value })
								}
							/>
						</div>
					</div>
					{/* End .col-lg-12 */}
					<div className='col-md-12'>
						<div className='mb20'>
							<label className='heading-color ff-heading fw600 mb10'>
								Email
							</label>
							<input
								type='email'
								className={
									ValidNEmail
										? "form-control"
										: "form-control border border-danger"
								}
								placeholder='Your Name'
								required
								onChange={(event) =>
									setFormData({ ...formData, email: event.target.value })
								}
							/>
						</div>
					</div>
					{/* End .col-lg-12 */}
					<div className='col-md-12'>
						<div className='mb10'>
							<label className='heading-color ff-heading fw600 mb10'>
								Textarea Message
							</label>
							<textarea
								cols={30}
								rows={4}
								placeholder='There are many variations of passages.'
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

					<div className='col-md-12'>
						<div className='d-grid'>
							<button
								type='submit'
								className='ud-btn btn-thm'
								onClick={(event) => onSubmitForm(event)}>
								Submit
								<i className='fal fa-arrow-right-long' />
							</button>
						</div>
					</div>
				</div>
			</form>
		</>
	)
}
export default Form
