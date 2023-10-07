/** @format */

"use client"
import { useState } from "react"
import Select from "react-select"
import { submitInvestCyprus } from "@/api/pages/investInCyprus"
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

const ReviewBoxForm = () => {
	const inqueryType = [
		{ value: "Five Star", label: "Five Star" },
		{ value: "Four Star", label: "Four Star" },
		{ value: "Three Sta", label: "Three Star" },
		{ value: "Two Sta", label: "Two Star" },
		{ value: "One Sta", label: "One Star" },
	]

	const customStyles = {
		option: (styles, { isFocused, isSelected, isHovered }) => {
			return {
				...styles,
				backgroundColor: isSelected
					? "#89ada3"
					: isHovered
					? "#89ada312"
					: isFocused
					? "#89ada312"
					: undefined,
			}
		},
	}

	const handleSubmit = (event) => {
		event.preventDefault() // Prevents the default form submission behavior
		// Additional logic or API calls can be added here
	}

	const onlyEmail = /^((\w+\.)*\w+)@(\w+\.)+(\w)/
	const onlyText = /^[a-zA-Z ]*$/
	const onlyContactNumber = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g
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
				// EMAILL
				if (formData.email == "") {
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
					setMessageEmpty(false)
					console.log("no error")
					submitInvestCyprus(formData).then((res) => {
						console.log(res.data)
						if (res.data === true) {
							setFormData({
								email: "",
								message: "",
							})
							setError(false)
							setRespons(true)
							document.getElementById("form").reset()
							handleClickOpen()
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
			<form className='comments_form mt30' id='form'>
				<div className='row'>
					<div className='col-md-12'>
						<div className='mb-4'>
							<label className='fw600 ff-heading mb-2'>Email</label>
							<input
								type='email'
								className='form-control'
								placeholder='jhondoe@yahoo.com'
								required
								onChange={(event) =>
									setFormData({ ...formData, email: event.target.value })
								}
							/>
						</div>
					</div>
					{/* End .col-12 */}

					{/* <div className="col-md-6">
          <div className="mb-4">
            <label className="fw600 ff-heading mb-2">Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Title"
              required
            />
          </div>
        </div> */}
					{/* End .col-6 */}

					{/* <div className="col-md-6">
          <div className="widget-wrapper sideborder-dropdown mb-4">
            <label className="fw600 ff-heading mb-2">Rating</label>
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
					{/* End .col-6 */}

					<div className='col-md-12'>
						<div className='mb-4'>
							<label className='fw600 ff-heading mb-2'>Message</label>
							<textarea
								className='pt15'
								rows={6}
								placeholder='Write a Message'
								defaultValue={""}
								required
								onChange={(event) =>
									setFormData({ ...formData, message: event.target.value })
								}
							/>
						</div>
						<button
							type='submit'
							className='ud-btn btn-white2'
							onClick={(event) => onSubmitForm(event)}>
							Submit
							<i className='fal fa-arrow-right-long' />
						</button>
					</div>
					{/* End .col-6 */}
				</div>
			</form>
		</>
	)
}

export default ReviewBoxForm
