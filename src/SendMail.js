import React from 'react'
import './SendMail.css'
import { Close } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import { db } from './firebase';
import { serverTimestamp } from "firebase/firestore"

function SendMail() {
  const {register,handleSubmit,watch, formState: { errors } } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    console.log(watch(formData));
    db.collection("emails").add({
      to: watch(formData.to),
      subject: watch(formData.subject),
      message: watch(formData.message),
      timestamp: serverTimestamp(), 
    });
    
    dispatch(closeSendMessage());
  };
    
  return (
    <div className='sendMail'>
        <div className='sendMail__header'>
            <h3>New Message</h3>
            <Close onClick={() => dispatch(closeSendMessage)} className='sendMail__close'  />
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>

            <input name='to' 
            placeholder='To' 
            type='email' 
            {...register('to', { required: true})}>
            </input>

            {errors.to && <p className='senMail__error'>To is Requried</p>}

            <input name='subject' 
            placeholder='Subject' 
            type='text' 
            {...register('subject', { required: true})}>
            </input>

            {errors.subject && <p className='senMail__error'>Subject is Requried</p>}

            <input name='message' 
            placeholder='Message...'
            type='text' 
            className='sendMail__message' 
            {...register('message', { required: true})}>
            </input>

            {errors.message && <p className='senMail__error'>Message is Requried</p>}

            <div className='sendMail__options'>
              <Button onClick={onSubmit} className='sendMail__button'
                variant='contained'
                color='primary'
                type='button'>
                Send
              </Button>
            </div>
        </form>
    </div>
  );
};

export default SendMail