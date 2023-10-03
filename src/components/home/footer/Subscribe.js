'use client';
import {subscrbeMail} from '@/api/pages/footerMail';
import { useRouter } from 'next/navigation';
import { useState } from 'react';


const Subscribe = () => {
	const route = useRouter();
	const onlyEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	// const onlyEmail = /^([a-zA-Z 0-9 ])+@+.+[a-zA-Z ]\w+/g;
	const onlyText = /^[a-zA-Z ]*$/;
	const [formData, setFormData] = useState({
		email: '',
	});
  const [isEmail, checkEmail] = useState(true);
	const submitForm = (event) => {
		// route.push('/#main');
    event.preventDefault();
    try{
      if (!formData.email.match(onlyEmail)) {
        checkEmail(false);
        throw new Error('Use the correct email fromat');
      }
      else{
        checkEmail(true);
        subscrbeMail(formData).then((res)=>{
          console.log(res);
        })
      }
    }catch(error){
      console.log(error.message);
    }
	};

	return (
		<div className='mailchimp-style1 white-version'>
			<input
				type='email'
				className='form-control'
				placeholder='Your Email'
				style={ isEmail ? {
					color: 'black',
				} : {
          color: 'black',
          border: "1px solid red"
        }}
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
	);
};

export default Subscribe;
