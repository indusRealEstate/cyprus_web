import axios from 'axios';
import nodemailer from 'nodemailer';

export async function submitContactForm(formData) {
	const transport = nodemailer.createTransport({
		host: 'sandbox.smtp.mailtrap.io',
		port: 2525,
		auth: {
			user: '7cfbec4ca20972',
			pass: '********2cfd',
		},
	});

	// const mailOptions = {
	// 	from: 'info@premium-realton.com',
	// 	to: formData.,
	// 	subject: 'Nodemailer Project',
	// 	text: 'Hi from your nodemailer project',
	// };

	// const response = await axios
	// 	.post('https://premium-realtor.com/api/forms/contactFrom.php', {
	// 		data: formData,
	// 	})
	// 	.catch(function (error) {
	// 		console.log(error);
	// 	});

	// return res.json();
	return formData;
}
