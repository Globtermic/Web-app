import { Text, Button, Row, Spacer} from "@nextui-org/react"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function EndPage() {

    return  <div>
            <div style={{backgroundColor:'#558F36' ,justifyContent:'center'}}>
                <Row style={{justifyContent:'center', top:'20px'}}>
                <Link style={{color:'white', fontFamily:'Montserrat', textDecoration:'none'}} to={'/'}>
                    Accueil
                </Link>
                <Spacer x={5}/>
                <Link style={{color:'white', fontFamily:'Montserrat', textDecoration:'none'}} to={'/modeles'}>
                    Nos modeles
                </Link>
                <Spacer x={5}/>
                <Link style={{color:'white', fontFamily:'Montserrat', textDecoration:'none'}}>
                    Nos projets
                </Link>
                <Spacer x={5}/>
                <Link style={{color:'white', fontFamily:'Montserrat', textDecoration:'none'}}>
                    Qui sommes nous
                </Link>
                <Spacer x={1}/>
                </Row>
                <Spacer y={3}/>
                <Text style={{color:'white', fontFamily:'Montserrat', textAlign:'center'}} >Globtermic Houses® Tous droits réservés.</Text>
                <Spacer y={1}/>
            </div>
            <Spacer y={0.5}/>
            <Row style={{justifyContent:'center'}}>
            <Link style={{color:'#558F36', fontFamily:'Montserrat'}} to={'/contact'} >
                    Nous contacter
                </Link>
                <Spacer x={3}/>
                <Link style={{color:'#558F36', fontFamily:'Montserrat'}} >
                    Mentions légales
                </Link>
                <Spacer x={3}/>
                <Link style={{color:'#558F36', fontFamily:'Montserrat'}}>
                    Cookies
                </Link>
            </Row>
            <Spacer y={0.5}/>
                
    </div>
}