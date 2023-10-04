'use client';
import { subscrbeMail } from '@/api/pages/footerMail';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const Subscribe = () => {
	const onlyEmail =
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+.(?:\.[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+)*$/;
	// const onlyEmail = /^([A-Za-z])+@+.+[A-Za-z]\w+/g;
	const onlyText = /^[a-zA-Z ]*$/;
	const onlyContactNumber = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
	const [ValidNEmail, setValidEmail] = useState(true);
	const [alertMsg, setAlertMsg] = useState([]);
	const [alertTitle, setAlertTitle] = useState([]);
	const [alertSeverity, setAlertSeverity] = useState([]);
	const [error, setError] = useState(false);
	const [formSubmit, setFormSubmit] = useState(false);
	const [responsData, setRespons] = useState(false);
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
	const [open, setOpen] = useState(false);
	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
		setRespons(false);
	};

	const [formData, setFormData] = useState({
		email: '',
	});

	const enterToSubmit = (event) => {
		if (event.code === 'Enter') {
			submitForm(event);
		}
	};

	const [isEmail, checkEmail] = useState(true);
	const submitForm = (event) => {
		// route.push('/#main');
		event.preventDefault();
		setFormSubmit(true);

		try {
			if (formData.email == '') {
				setError(true);
				setValidEmail(false);
				throw new Error('Fill the email');
			} else {
				setError(false);
				setValidEmail(true);
			}

			if (!formData.email.match(onlyEmail)) {
				setError(true);
				setValidEmail(false);
				throw new Error('Fill the correct email');
			} else {
				setError(false);
				setValidEmail(true);
			}
			if (!error) {
				console.log('no error');
				subscrbeMail(formData).then((res) => {
					if (res.data === true) {
						setRespons(true);
						handleClickOpen();
					}
				});
			}
		} catch (error) {
			console.log('Error occur ' + error.message);
			setAlertMsg(error.message);
			setAlertTitle('Error');
			setAlertSeverity('error');
		}
	};

	return (
		<>
			{responsData ? (
				<Dialog
					fullScreen={fullScreen}
					open={open}
					onClose={handleClose}
					aria-labelledby='responsive-dialog-title'>
					<DialogTitle
						id='responsive-dialog-title'
						color={'#1d4439'}>
						{'Thank you :)'}
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
								color: '#1d4439',
							}}>
							OKAY
						</Button>
					</DialogActions>
				</Dialog>
			) : (
				''
			)}
			{formSubmit && error ? (
				<Alert
					severity={alertSeverity}
					className='mb-5'>
					<AlertTitle>{alertTitle}</AlertTitle>
					<strong>{alertMsg}</strong>
				</Alert>
			) : (
				''
			)}
			<div className='mailchimp-style1 white-version'>
				<input
					type='email'
					className='form-control'
					placeholder='Your Email'
					style={
						ValidNEmail
							? {
									color: 'black',
							  }
							: {
									color: 'black',
									border: '1px solid red',
							  }
					}
					onKeyDown={(event) => enterToSubmit(event)}
					onChange={(event) => {
						setFormData({ ...formData, email: event.target.value });
					}}
				/>
				<button
					type='button'
					onClick={(event) => submitForm(event)}>
					Subscribe
				</button>
			</div>
		</>
	);
};

export default Subscribe;
