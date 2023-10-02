/** @format */

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
	const [dataUbmites, setDataSubmit] = React.useState(false);
	const [alertMsg, setAlertMsg] = React.useState();
	const [alertTitle, setAlertTitle] = React.useState();
	const [alertSeverity, setAlertSeverity] = React.useState();
	const [isEmail, checkEmail] = React.useState(true);
	const [firstNameValid, checkFirstName] = React.useState(true);
	const [lastNameValid, checkLastName] = React.useState(true);
	const [errorMessage, setError] = React.useState();
	const onlyEmail = /^([A-Za-z])+@+.+[A-Za-z]\w+/g;
	const onlyText = /^([A-Za-z])/g;

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
		try {
			if (
				formData.first_name.length > 0 &&
				formData.last_name.length > 0 &&
				formData.email.length > 0 &&
				formData.message.length > 0
			) {
				if (!formData.first_name.match(onlyText)) {
					checkFirstName(false);
					throw new Error('First name only can contain lettes and space');
				}

				return (
					<form
						className='form-style1'
						id='contact-form'>
						{errorMessage != undefined && !dataUbmites ? (
							<Alert severity='error'>
								<AlertTitle>Error</AlertTitle>
								<strong>{errorMessage}</strong>
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
											firstNameValid && formData.first_name != undefined
												? 'form-control'
												: 'form-control border border-danger'
										}
										placeholder='Your Name'
										required
										onChange={(event) =>
											setFormData({
												...formData,
												first_name: event.target.value,
											})
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
											lastNameValid && formData.last_name != undefined
												? 'form-control'
												: 'form-control border border-danger'
										}
										placeholder='Your Name'
										required
										onChange={(event) =>
											setFormData({
												...formData,
												last_name: event.target.value,
											})
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
											isEmail && formData.email != undefined
												? 'form-control'
												: 'form-control border border-danger'
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
										Message
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
				const response = await axios.post(
					'https://premium-realtor.com/api/forms/contactFrom.php',
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
			setError(error.message);
		}
	};

	return (
		<form
			className='form-style1'
			id='contact-form'>
			{errorMessage != undefined && !dataUbmites ? (
				<Alert severity='error'>
					<AlertTitle>Error</AlertTitle>
					<strong>{errorMessage}</strong>
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
								firstNameValid && formData.first_name != undefined
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
								lastNameValid && formData.last_name != undefined
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
								isEmail && formData.email != undefined
									? 'form-control'
									: 'form-control border border-danger'
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
							Message
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
