"use client"
import Select from "react-select"
import SingleAgentInfo from "./SingleAgentInfo"
import { useState } from "react"
import Alert from "@mui/material/Alert"
import AlertTitle from "@mui/material/AlertTitle"
import { contactAgent } from "@/api/pages/scheduleATour"
import axios from "axios"
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

const InfoWithForm = ({ agentId }) => {
	const onlyEmail = /^((\w+\.)*\w+)@(\w+\.)+(\w)/
	const onlyText = /^[a-zA-Z ]*$/
	const onlyContactNumber = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g
	const [notValidName, setValidName] = useState(true)
	const [notValidPhone, setValidPhone] = useState(true)
	const [notValidNEmail, setValidEmail] = useState(true)
	const [alertMsg, setAlertMsg] = useState()
	const [alertTitle, setAlertTitle] = useState()
	const [alertSeverity, setAlertSeverity] = useState()
	const [formSubmit, setFormSubmit] = useState(false)
	const [messageEmpty, setMessageEmpty] = useState(false)
	const [error, setError] = useState(false)
	const [responsData, setRespons] = useState(false)
	const theme = useTheme()
	const fullScreen = useMediaQuery(theme.breakpoints.down("md"))
	const [open, setOpen] = useState(false)

	const handleClickOpen = () => {
		setOpen(true)
	}
	const handleClose = () => {
		setOpen(false)
		setRespons(false)
	}

	const inqueryType = [
		{ value: "Engineer", label: "Engineer" },
		{ value: "Doctor", label: "Doctor" },
		{ value: "Employee", label: "Employee" },
		{ value: "Businessman", label: "Businessman" },
		{ value: "Other", label: "Other" },
	]

	const customStyles = {
		option: (styles, { isFocused, isSelected, isHovered }) => {
			return {
				...styles,
				backgroundColor: isSelected
					? "#eb6753"
					: isHovered
					? "#eb675312"
					: isFocused
					? "#eb675312"
					: undefined,
			}
		},
	}

	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		email: "",
		message: "",
	})

	const onSubmit = async (event) => {
		event.preventDefault()
		setFormSubmit(true)
		if (event.type === "click") {
			try {
				if (formData.name == "") {
					setError(true)
					setValidName(false)
					throw new Error("Fill the name")
				} else if (!formData.name.match(onlyText)) {
					setValidName(false)
					setError(true)
					throw new Error("Fill the correct name")
				} else if (formData.phone == "") {
					setValidName(true)
					setError(true)
					setValidPhone(false)
					throw new Error("Fill the contact number")
				} else if (!formData.phone.match(onlyContactNumber)) {
					setError(true)
					setValidPhone(false)
					throw new Error("Fill the correct contact number")
				} else if (formData.email == "") {
					setValidPhone(true)
					setError(true)
					setValidEmail(false)
					throw new Error("Fill the email")
				} else if (!formData.email.match(onlyEmail)) {
					setError(true)
					setValidEmail(false)
					throw new Error("Fill the correct email")
				} else if (formData.message == "") {
					setValidEmail(true)
					setError(true)
					setMessageEmpty(true)
					throw new Error("Fill the message")
				} else {
					console.log("no error")
					setMessageEmpty(false)
					contactAgent(formData).then((res) => {
						if (res.data === true) {
							document.getElementById(`form`).reset()
							setFormSubmit(false)
							setFormData({
								name: "",
								phone: "",
								email: "",
								message: "",
							})
							setError(false)
							setRespons(true)
							handleClickOpen()
						}
					})
				}
			} catch (error) {
				console.log(error.message)
				setAlertMsg(error.message)
				setAlertTitle("Error")
				setAlertSeverity("error")
			}
		}
	}

	return (
		<>
			<SingleAgentInfo agentId={agentId} />
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
			<div className='row'>
				<div className='col-md-12'>
					<form className='form-style1 row' id='form'>
						<div className='col-md-6'>
							<div className='mb20'>
								<label className='heading-color ff-heading fw600 mb10'>
									Name
								</label>
								<input
									type='text'
									className='form-control'
									placeholder='Enter your name'
									style={!notValidName ? { border: "2px solid red" } : {}}
									onChange={(event) =>
										setFormData({ ...formData, name: event.target.value })
									}
								/>
							</div>
						</div>
						{/* End .col */}

						<div className='col-md-6'>
							<div className='mb20'>
								<label className='heading-color ff-heading fw600 mb10'>
									Phone
								</label>
								<input
									type='text'
									className='form-control'
									placeholder='Enter your phone'
									style={!notValidPhone ? { border: "2px solid red" } : {}}
									onChange={(event) =>
										setFormData({ ...formData, phone: event.target.value })
									}
								/>
							</div>
						</div>
						{/* End .col */}

						<div className='col-md-6'>
							<div className='mb20'>
								<label className='heading-color ff-heading fw600 mb10'>
									Email
								</label>
								<input
									type='email'
									className='form-control'
									placeholder='Enter your correct email'
									style={!notValidNEmail ? { border: "2px solid red" } : {}}
									onChange={(event) =>
										setFormData({ ...formData, email: event.target.value })
									}
								/>
							</div>
						</div>
						{/* End .col */}

						{/* <div className="col-md-6">
              <div className="widget-wrapper sideborder-dropdown">
                <label className="heading-color ff-heading fw600 mb10">
                  I&apos;m a
                </label>
                <div className="form-style2 input-group">
                  <Select
                    defaultValue={[inqueryType[0]]}
                    name="colors"
                    options={inqueryType}
                    styles={customStyles}
                    className="custom-react_select"
                    classNamePrefix="select"
                    required
                    isClearable={false}
                  />
                </div>
              </div>
            </div> */}
						{/* End .col */}

						<div className='col-md-12'>
							<div className='mb10'>
								<label className='heading-color ff-heading fw600 mb10'>
									Message
								</label>
								<textarea
									cols={30}
									rows={4}
									placeholder='Hello, I am interested in getting to know about more properties'
									defaultValue={""}
									style={messageEmpty ? { border: "2px solid red" } : {}}
									onChange={(event) =>
										setFormData({ ...formData, message: event.target.value })
									}
								/>
							</div>
						</div>
						{/* End .col */}

						{/* <div className="checkbox-style1 d-block d-sm-flex align-items-center justify-content-between mb10">
              <label className="custom_checkbox fz14 ff-heading">
                By submitting this form I agree to Terms of Use
                <input type="checkbox" />
                <span className="checkmark" />
              </label>
            </div> */}
						{/* End .col */}

						<div className='btn-area mt20'>
							<button
								className='ud-btn btn-white2'
								onClick={(event) => onSubmit(event)}>
								Request Information <i className='fal fa-arrow-right-long' />
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}

export default InfoWithForm
