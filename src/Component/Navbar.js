import React from 'react'
import { Navbar, Button } from '@nextui-org/react'
import logo from '../assets/Logo_Globtermic.png'
import { useNavigate } from "react-router-dom"

export default function NavbarComponent() {
    const navigate = useNavigate()

    function goto(path) {
        return (
          navigate(path)
        )
    }

    return (
        <div>
            <Navbar variant="sticky" maxWidth={"fluid"} isBordered>
                <Navbar.Brand>
                    <img src={logo} alt="logo of compagnie" style={{ width: "40px", marginLeft: "10px"}}/>
                </Navbar.Brand>
                <Navbar.Content gap={'$5'} hideIn="xs">
                    <Button style={{height: "100%"}} light auto onPress={() => goto("/")} ripple={false} >
                        Accueil
                    </Button>
                    <Button style={{height: "100%"}} light auto onPress={() =>goto("/modeles")} ripple={false}>
                        Nos modèles
                    </Button>
                    <Button style={{height: "100%"}} light auto ripple={false}>
                        Nos articles
                    </Button>
                    <Button style={{height: "100%"}} light auto onPress={() => goto("/Movida")} ripple={false}>
                        Qui sommes nous
                    </Button>
                    <Button style={{height: "100%"}} light auto onPress={() => goto("/contact")} ripple={false}>
                        Contact
                    </Button>
                </Navbar.Content>
            </Navbar>
        </div>
    )
}
