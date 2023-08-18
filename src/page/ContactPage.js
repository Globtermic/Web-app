import React, { useRef } from 'react'
import { Card, Spacer, Grid, Button } from '@nextui-org/react'
import emailjs from '@emailjs/browser'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import './ContactPage.css';



function IconTelephoneFill(props) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M1.885.511a1.745 1.745 0 012.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 00.178.643l2.457 2.457a.678.678 0 00.644.178l2.189-.547a1.745 1.745 0 011.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 01-7.01-4.42 18.634 18.634 0 01-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
      />
    </svg>
  );
}

function IconMail(props) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z" />
    </svg>
  );
}

export default function ContactPage() {
  const {t} = useTranslation();
  const name = useRef('')
  const email = useRef('')
  const subject = useRef('')
  const message = useRef('')

  

  function sendEmail() {
    const form = {
      name: name.current.value,
      email: email.current.value,
      subject: subject.current.value,
      message: message.current.value
    }

    console.log(form)
    emailjs.send('service_ljd0iwp', 'template_mqpjtw1', form, 'Spo1_FXhT5O8SxBMa')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='divImgContact' >
      <Helmet>
         <title>Globtermic | Contact</title>
         </Helmet>
      <Card css={{backgroundColor:'white', 
      padding:'3.125em', 
      borderRadius:'10px', 
      display:'flex', 
      flexDirection:'column', 
      alignItems:'center',
      boxShadow:'5px 5px 15px -1px rgba(0,0,0,0.75)', 
      maxWidth:'500px', 
      maxHeight:'600px', 
      marginLeft:'7%', 
      marginRight:'7%', 
      textAlign:'center',
      marginTop:'5%'}} >
        <h1 className='contactTitle' >CONTACT</h1>
        <Grid.Container direction='row' gap={1} style={{justifyContent:'center'}}>
          <Grid>
            <h4 className='infosContact' ><IconTelephoneFill />  03 44 02 59 50</h4>
          </Grid>
          <Grid>
          <h4 className='infosContact'><IconMail/>  contact@globtermic.com</h4>
          </Grid>
        </Grid.Container>
        <Spacer y={2}/>
        <Grid.Container direction='column'style={{justifyContent:'center', display:'flex'}}>
          <input ref={name} className='form--input' placeholder={`${t('contactpage:firstName')} ${t('contactpage:lastName')}`} ></input>
          <input ref={email} className='form--input' placeholder={t('contactpage:email')}></input>
          <input ref={subject} className='form--input' placeholder={t('contactpage:subject')}></input>
          <input ref={message} className='form--input--message' placeholder={t('contactpage:message')}></input>
          <Grid style={{justifyContent:'center', display:'flex'}}>
          <Button className='form--submit' css={{backgroundColor:'#558F36'}} onPress={() => {sendEmail()}} >
          {t('contactpage:send')}
          </Button>
          </Grid>
        </Grid.Container>
      </Card>
    </div>
  )
}
