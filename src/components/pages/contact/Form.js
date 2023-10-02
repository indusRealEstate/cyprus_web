'use client';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import axios from 'axios';
import React, { useEffect } from 'react';

const Form = () => {
	const [formData, setFormData] = React.useState({
		first_name: '',
		last_name: '',
		email: '',
		message: '',
	});
	const [btnDisable, setBtnDisable] = React.useState(false);
	const [btnClicked, setBtnClicked] = React.useState(false);

	const [dataUbmites, setDataSubmit] = React.useState(false);
	const [alertMsg, setAlertMsg] = React.useState();
	const [alertTitle, setAlertTitle] = React.useState();
	const [alertSeverity, setAlertSeverity] = React.useState();
	const [isEmail, checkEmail] = React.useState(true);
	const [firstNameValid, checkFirstName] = React.useState(true);
	const [lastNameValid, checkLastName] = React.useState(true);
	const onlyEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	// const onlyEmail = /^([A-Za-z])+@+.+[A-Za-z]\w+/g;
	const onlyText = /^[a-zA-Z ]*$/;

	useEffect(() => {
		if (
			formData.first_name.length > 0 &&
			formData.last_name.length > 0 &&
			formData.email.length > 0 &&
			formData.message.length > 0
		) {
			setBtnDisable(true);
		} else {
			setBtnDisable(false);
		}
	}, [formData]);

	const onSubmitForm = async (event) => {
		event.preventDefault();
		setBtnClicked(true);
		try {
			if (
				formData.first_name.length > 0 &&
				formData.last_name.length > 0 &&
				formData.email.length > 0 &&
				formData.message.length > 0
			) {
				if (!formData.first_name.match(onlyText)) {
					checkFirstName(false);
					throw new Error('First only can contain lettes and space');
				}

				if (!formData.last_name.match(onlyText)) {
					checkLastName(false);
					throw new Error('Last only can contain lettes and space');
				}
				if (!formData.email.match(onlyEmail)) {
					checkEmail(false);
					throw new Error('Use the correct email fromat');
				}

				const response = await axios.post(
					'https://premium-realtor.com/api/formscontactFrom.php',
					formData
				);
				document.getElementById('contact-form').reset();
				if (response.data.status === 1) {
					setDataSubmit(true);
					setAlertMsg(response.data.msg);
					setAlertTitle('Success');
					setAlertSeverity('success');
					formData.first_name = '';
					formData.last_name = '';
					formData.email = '';
					formData.message = '';
				} else {
					setDataSubmit(true);
					setAlertMsg(response.data.msg);
					setAlertTitle('Error');
					setAlertSeverity('error');
				}
			}
		} catch (error) {
			console.log('Error occur ' + error.message);
			setAlertMsg(error.message);
			setAlertTitle('Error');
			setAlertSeverity('error');
		}
	};

	return (
		<form
			className='form-style1'
			id='contact-form'>
			{btnClicked ? (
				<Alert severity={alertSeverity}>
					<AlertTitle>{alertTitle}</AlertTitle>
					<strong>{alertMsg}</strong>
				</Alert>
			) : (
				''
			)}

			{dataUbmites ? (
				<Alert severity={alertSeverity}>
					<AlertTitle>{alertTitle}</AlertTitle>
					<strong>{alertMsg}</strong>
				</Alert>
			) : (
				''
			)}
			<div className='row'>
				<div className='col-lg-12'>
					<div className='mb20'>
						<label className='heading-color ff-heading fw600 mb10'>
							First Name
						</label>
						<input
							type='text'
							className={
								firstNameValid
									? 'form-control'
									: 'form-control border border-danger'
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
								lastNameValid
									? 'form-control'
									: 'form-control border border-danger'
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
						<label className='heading-color ff-heading fw600 mb10'>Email</label>
						<input
							type='email'
							className={
								isEmail ? 'form-control' : 'form-control border border-danger'
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
							defaultValue={''}
							required
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
							onClick={(event) => onSubmitForm(event)}
							disabled={!btnDisable}>
							Submit
							<i className='fal fa-arrow-right-long' />
						</button>
					</div>
				</div>
			</div>
		</form>
	);
};
export default Form;
