import React from 'react'
import { Navbar, Button } from '@nextui-org/react'
import logo from '../assets/Logo_Globtermic.png'

export default function NavbarComponent() {
  return (
    <div>
        <Navbar variant="sticky" maxWidth={"fluid"} isBordered>
            <Navbar.Brand>
                <img src={logo} style={{ width: "40px", marginLeft: "10px"}}/>
            </Navbar.Brand>
            <Navbar.Content gap={'$5'}>
                <Button style={{height: "100%"}} light auto>
                    Accueil
                </Button>
                <Button style={{height: "100%"}} light auto>
                    Nos modèles
                </Button>
                <Button style={{height: "100%"}} light auto>
                    Nos articles
                </Button>
                <Button style={{height: "100%"}} light auto>
                    Qui sommes nous
                </Button>
                <Button style={{height: "100%"}} light auto>
                    Contact
                </Button>
            </Navbar.Content>
        </Navbar>
    </div>
  )
}
