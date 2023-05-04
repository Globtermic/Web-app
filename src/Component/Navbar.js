import React from 'react'
import { Navbar } from '@nextui-org/react'
import logo from '../assets/Logo_Globtermic.png'

export default function NavbarComponent() {
  return (
    <div>
        <Navbar variant="sticky" maxWidth={"fluid"} isBordered>
            <Navbar.Brand>
                <img src={logo} style={{ width: "40px"}}/>
            </Navbar.Brand>
            <Navbar.Content gap={'$15'}>
                <Navbar.Link>
                    Accueil
                </Navbar.Link>
                <Navbar.Link>
                    Nos modèles
                </Navbar.Link>
                <Navbar.Link>
                    Nos articles
                </Navbar.Link>
                <Navbar.Link>
                    Qui sommes nous
                </Navbar.Link>
                <Navbar.Link>
                    Contact
                </Navbar.Link>
            </Navbar.Content>
        </Navbar>
    </div>
  )
}
