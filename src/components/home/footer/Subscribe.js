"use client"
import { subscrbeMail } from "@/api/pages/footerMail"
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
import { useEffect, useState } from "react"

const Subscribe = () => {
	const onlyEmail = /^((\w+\.)*\w+)@(\w+\.)+(\w)/
	const [alertMsg, setAlertMsg] = useState([])
	const [alertTitle, setAlertTitle] = useState([])
	const [alertSeverity, setAlertSeverity] = useState([])
	const [error, setError] = useState(undefined)
	const [formSubmit, setFormSubmit] = useState(false)
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

	const [formData, setFormData] = useState({
		email: "",
	})

	const enterToSubmit = (event) => {
		if (event.code === "Enter") {
			submitForm(event)
		}
	}

	const submitForm = (event) => {
		event.preventDefault()

		try {
			if (formData.email == "") {
				setError(true)
				throw new Error("Fill the email")
			} else if (!formData.email.match(onlyEmail)) {
				setError(true)
				throw new Error("Fill the correct email")
			} else {
				setError(false)
				setFormSubmit(true)
			}
		} catch (error) {
			console.log("Error occur " + error.message)
			setAlertMsg(error.message)
			setAlertTitle("Error")
			setAlertSeverity("error")
		}
	}

	useEffect(() => {
		if (formSubmit && !error) {
			console.log("no error")
			subscrbeMail(formData).then((res) => {
				if (res.data === true) {
					setRespons(true)
					handleClickOpen()
					document.getElementById("subscribe-input").value = ""
					setFormSubmit(false)
					setError(undefined)
				}
			})
		}
	}, [error, formSubmit])

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
			{error ? (
				<Alert severity={alertSeverity} className='mb-5'>
					<AlertTitle>{alertTitle}</AlertTitle>
					<strong>{alertMsg}</strong>
				</Alert>
			) : (
				<></>
			)}
			<div className='mailchimp-style1 white-version'>
				<input
					id='subscribe-input'
					type='email'
					className='form-control'
					placeholder='Your Email'
					style={
						error
							? {
									color: "black",
									border: "1px solid red",
							  }
							: {
									color: "black",
							  }
					}
					onKeyDown={(event) => enterToSubmit(event)}
					onChange={(event) => {
						setFormData({ ...formData, email: event.target.value })
					}}
				/>
				<button type='button' onClick={(event) => submitForm(event)}>
					Subscribe
				</button>
			</div>
		</>
	)
}

export default Subscribe
