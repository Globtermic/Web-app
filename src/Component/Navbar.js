import React from 'react'
import { Navbar, Button } from '@nextui-org/react'
import logo from '../assets/Logo_Globtermic.png'
import { useNavigate } from "react-router-dom"
import { useTranslation } from 'react-i18next'

export default function NavbarComponent() {
    const {t, i18n} = useTranslation();
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
                    <Button style={{height: "100%"}} light auto onPress={() => goto("/")} ripple={false}  >
                        {t('navbar:homePage')}
                    </Button>
                    <Button style={{height: "100%"}} light auto onPress={() =>goto("/modeles")} ripple={false}>
                    {t('navbar:ourModels')}
                    </Button>
                    <Button style={{height: "100%"}} light auto ripple={false} onPress={() => window.location.href='https://www.seloger.com/professionnels/constructeurs/paris-12eme-arrondissement-75012/agence-322743/'}>
                    {t('navbar:ourArticles')}
                    </Button>
                    <Button style={{height: "100%"}} light auto ripple={false}>
                    {t('navbar:aboutUs')}
                    </Button>
                    <Button style={{height: "100%"}} light auto onPress={() => goto("/contact")} ripple={false}>
                    {t('navbar:contact')}
                    </Button>
                </Navbar.Content>
            </Navbar>
        </div>
    )
}
