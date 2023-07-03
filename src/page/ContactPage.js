import React, { useRef } from 'react'
import { Card, Text, Spacer, Textarea, Grid, Button } from '@nextui-org/react'
import emailjs from '@emailjs/browser'
import { Helmet } from 'react-helmet'
import { useNavigation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function ContactPage() {
  const {t, i18n} = useTranslation();
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
    
    <div className='ContactPage' style={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        }}>
          <Helmet>
        <title>Globtermic | Contact</title>
        </Helmet>
        <Card style={{ width: '75%', height: '75%', maxWidth: '1080px', transform: 'translate(-50%, -50%)', left: '50%', top: '50%' }}>
          <Card.Header>
            <Text h1>
            {t('contactpage:contact')}
            </Text>
          </Card.Header>
          <Card.Divider/>
          <Card.Body>
              <Grid.Container gap={2}>
                <Grid xs={0} sm={6} direction='column'>
                  <Text h1>{t('contactpage:contact')}</Text>
                  <Spacer y={1}/>
                  <Text h3>contact@globtermic.com</Text>
                  <Spacer y={1}/>
                  <Text h3>03 44 02 59 50</Text>
                </Grid>
                <Grid alignContent='center' justify='center'>
                  <Textarea
                    aria-label='name'
                    labelPlaceholder={`${t('contactpage:firstName')} ${t('contactpage:lastName')}`}
                    underlined
                    width='90%'
                    maxRows={2}
                    ref={name}
                  />
                  <Spacer y={2}/>
                  <Textarea
                    aria-label='email'
                    labelPlaceholder={t('contactpage:email')}
                    underlined
                    width='90%'
                    size="lg"
                    maxRows={2}
                    ref={email}
                  />
                  <Spacer y={2}/>
                  <Textarea
                    aria-label='subject'
                    labelPlaceholder={t('contactpage:subject')}
                    underlined
                    width='90%'
                    size="lg"
                    maxRows={2}
                    ref={subject}
                  />
                  <Spacer y={2}/>
                  <Textarea
                    aria-label='message'
                    labelPlaceholder={t('contactpage:message')}
                    underlined
                    width='90%'
                    size="lg"
                    minRows rows={6}
                    ref={message}
                  />
                  <Button>
                  {t('contactpage:send')}
                  </Button>
                </Grid> 
              </Grid.Container>
          </Card.Body>
        </Card>
    </div>
  )
}
