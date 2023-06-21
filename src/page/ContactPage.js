import React from 'react'
import { Card, Text, Spacer, Textarea, Grid, Button } from '@nextui-org/react'

export default function ContactPage() {
  return (
    <div className='ContactPage' style={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        }}>
        <Card style={{ width: '75%', height: '75%', maxWidth: '1080px', transform: 'translate(-50%, -50%)', left: '50%', top: '50%' }}>
          <Card.Header>
            <Text h1>
              Contact
            </Text>
          </Card.Header>
          <Card.Divider/>
          <Card.Body>
              <Grid.Container gap={2}>
                <Grid xs={0} sm={6} direction='column'>
                  <Text h1>Contactez-nous</Text>
                  <Spacer y={1}/>
                  <Text h3>contact@globtermic.com</Text>
                  <Spacer y={1}/>
                  <Text h3>03 44 02 59 50</Text>
                </Grid>
                <Grid alignContent='center' justify='center'>
                  <Textarea
                    aria-label='name'
                    labelPlaceholder='Prenom Nom'
                    underlined
                    width='90%'
                    maxRows={2}
                  />
                  <Spacer y={2}/>
                  <Textarea
                    aria-label='email'
                    labelPlaceholder='Email'
                    underlined
                    width='90%'
                    size="lg"
                    maxRows={2}
                  />
                  <Spacer y={2}/>
                  <Textarea
                    aria-label='subject'
                    labelPlaceholder='Subject'
                    underlined
                    width='90%'
                    size="lg"
                    maxRows={2}
                  />
                  <Spacer y={2}/>
                  <Textarea
                    aria-label='message'
                    labelPlaceholder='Message'
                    underlined
                    width='90%'
                    size="lg"
                    minRows rows={6}
                  />
                  <Button>
                    Send
                  </Button>
                </Grid> 
              </Grid.Container>
          </Card.Body>
        </Card>
    </div>
  )
}
