import React, { useState } from "react"
import Alert from "@mui/material/Alert"
import AlertTitle from "@mui/material/AlertTitle"
import { submit } from "@/api/pages/scheduleATour"
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

const ScheduleTour = () => {
	const onlyEmail = /^((\w+\.)*\w+)@(\w+\.)+(\w)/
	const onlyText = /^[a-zA-Z ]*$/
	const onlyContactNumber = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g
	const [notValidName, setValidName] = useState(true)
	const [notValidPhone, setValidPhone] = useState(true)
	const [notValidNEmail, setValidEmail] = useState(true)
	const [tabType, setTabType] = useState("inperson")
	const [alertMsg, setAlertMsg] = useState()
	const [alertTitle, setAlertTitle] = useState()
	const [alertSeverity, setAlertSeverity] = useState()
	const [formSubmit, setFormSubmit] = useState(false)
	const [timeIsEmpty, setTimeEmpty] = useState(false)
	const [messageEmpty, setMessageEmpty] = useState(false)
	const [error, setError] = useState(false)
	const [responsData, setRespons] = useState(false)
	const theme = useTheme()
	const fullScreen = useMediaQuery(theme.breakpoints.down("md"))
	const [open, setOpen] = useState(false)
	const tabs = [
		{
			id: "inperson",
			label: "In Person",
		},
		{
			id: "videochat",
			label: "Video Chat",
		},
	]
	const [data, setData] = useState({
		status: "inperson",
		time: "",
		name: "",
		phone: "",
		email: "",
		message: "",
	})

	const changeStatus = (status) => {
		const previousState = status === "inperson" ? "videochat" : "inperson"
		document.getElementById("form_" + previousState).reset()
		document.getElementById("form_" + status).reset()
		setTabType(status)
		setData({
			status: status,
			time: "",
			name: "",
			phone: "",
			email: "",
			message: "",
		})
	}
	const handleClickOpen = () => {
		setOpen(true)
	}
	const handleClose = () => {
		setOpen(false)
		setRespons(false)
	}
	const onSubmit = (event, tabId) => {
		event.preventDefault()
		setFormSubmit(true)
		window.scrollTo(0, 500)
		if (event.type === "click") {
			try {
				if (data.time == "") {
					setTimeEmpty(true)
					setError(true)
					throw new Error("Fill the time")
				} else if (data.name == "") {
					setTimeEmpty(false)
					setError(true)
					setValidName(false)
					throw new Error("Fill the name")
				} else if (!data.name.match(onlyText)) {
					setValidName(false)
					setError(true)
					throw new Error("Fill the correct name")
				} else if (data.phone == "") {
					setValidName(true)
					setError(true)
					setValidPhone(false)
					throw new Error("Fill the contact number")
				} else if (!data.phone.match(onlyContactNumber)) {
					setError(true)
					setValidPhone(false)
					throw new Error("Fill the correct contact number")
				} else if (data.email == "") {
					setValidPhone(true)
					setError(true)
					setValidEmail(false)
					throw new Error("Fill the email")
				} else if (!data.email.match(onlyEmail)) {
					setError(true)
					setValidEmail(false)
					throw new Error("Fill the correct email")
				} else if (data.message == "") {
					setValidEmail(true)
					setError(true)
					setMessageEmpty(true)
					throw new Error("Fill the message")
				} else {
					setMessageEmpty(false)
					setValidEmail(true)
					setValidPhone(true)
					setValidName(true)
					setTimeEmpty(false)
					console.log("no error")
					submit(data).then((res) => {
						console.log(res.data)
						if (res.data === true) {
							setData({
								status: "inperson",
								time: "",
								name: "",
								phone: "",
								email: "",
								message: "",
							})
							setError(false)
							setFormSubmit(false)
							document.getElementById(`form_${tabId}`).reset()
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
		<div className='ps-navtab'>
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
			<ul className='nav nav-pills mb-3' id='pills-tab' role='tablist'>
				{tabs.map((tab) => (
					<li className='nav-item' key={tab.id} role='presentation'>
						<button
							className={`nav-link${
								tab.id === "inperson" ? " active mr15 mb5-lg" : ""
							}`}
							id={`pills-${tab.id}-tab`}
							data-bs-toggle='pill'
							data-bs-target={`#pills-${tab.id}`}
							type='button'
							role='tab'
							aria-controls={`pills-${tab.id}`}
							aria-selected={tab.id === "inperson" ? "true" : "false"}
							onChange={(event) => setData({ ...data, status: tab.id })}
							onClick={(event) => changeStatus(tab.id)}>
							{tab.label}
						</button>
					</li>
				))}
			</ul>
			{/* End nav-pills */}

			<div className='tab-content' id='pills-tabContent'>
				{tabs.map((tab) => (
					<div
						className={`tab-pane fade${
							tab.id === "inperson" ? " show active" : ""
						}`}
						id={`pills-${tab.id}`}
						role='tabpanel'
						aria-labelledby={`pills-${tab.id}-tab`}
						key={tab.id}>
						<form className='form-style1' id={`form_${tab.id}`}>
							<div className='row'>
								<div className='col-md-12'>
									<div className='mb20'>
										<input
											type='`text`'
											className='form-control'
											placeholder='Time'
											required
											style={
												tabType === tab.id && timeIsEmpty
													? { border: "2px solid red" }
													: {}
											}
											onChange={(event) =>
												setData({ ...data, time: event.target.value })
											}
										/>
									</div>
								</div>
								{/* End .col-12 */}
								<div className='col-lg-12'>
									<div className='mb20'>
										<input
											type='text'
											className='form-control'
											placeholder='Name'
											required
											style={
												tabType === tab.id && !notValidName
													? { border: "2px solid red" }
													: {}
											}
											onChange={(event) =>
												setData({ ...data, name: event.target.value })
											}
										/>
									</div>
								</div>
								{/* End .col-12 */}
								<div className='col-lg-12'>
									<div className='mb20'>
										<input
											type='text'
											className='form-control'
											placeholder='Phone'
											required
											style={
												tabType === tab.id && !notValidPhone
													? { border: "2px solid red" }
													: {}
											}
											onChange={(event) =>
												setData({ ...data, phone: event.target.value })
											}
										/>
									</div>
								</div>
								{/* End .col-12 */}
								<div className='col-md-12'>
									<div className='mb20'>
										<input
											type='email'
											className='form-control'
											placeholder='Email'
											required
											style={
												tabType === tab.id && !notValidNEmail
													? { border: "2px solid red" }
													: {}
											}
											onChange={(event) =>
												setData({ ...data, email: event.target.value })
											}
										/>
									</div>
								</div>
								{/* End .col-12 */}
								<div className='col-md-12'>
									<div className='mb10'>
										<textarea
											cols={30}
											rows={4}
											placeholder='Enter Your Messages'
											defaultValue={""}
											style={
												tabType === tab.id && messageEmpty
													? { border: "2px solid red" }
													: {}
											}
											onChange={(event) =>
												setData({ ...data, message: event.target.value })
											}
										/>
									</div>
								</div>
								{/* End .col-12 */}
								<div className='col-md-12'>
									<div className='d-grid'>
										<button
											type='submit'
											className='ud-btn btn-thm'
											onClick={(event) => onSubmit(event, tab.id)}>
											Submit a Tour Request
											<i className='fal fa-arrow-right-long' />
										</button>
									</div>
								</div>
								{/* End .col-12 */}
							</div>
						</form>
					</div>
				))}
			</div>
		</div>
	)
}

export default ScheduleTour
