import { Spacer, Grid} from "@nextui-org/react"
import { Link } from "react-router-dom"

export default function EndPage() {

    return  <div style={{width:'100%'}}>
                <Grid.Container style={{height:'100px', backgroundColor:'#558F36' ,justifyContent:'center', alignContent:'center'}}> 
                <Grid>
                <Link style={{color:'white', fontFamily:'Montserrat', textDecoration:'none'}} to={'/'}>
                    Accueil
                </Link>
                </Grid>
                <Spacer x={3}/>
                <Grid>
                <Link style={{color:'white', fontFamily:'Montserrat', textDecoration:'none'}} to={'/modeles'}>
                    Nos modeles
                </Link>
                </Grid>
                <Spacer x={3}/>
                <Grid>
                <Link style={{color:'white', fontFamily:'Montserrat', textDecoration:'none'}}>
                    Nos projets
                </Link>
                </Grid>
                <Spacer x={3}/>
                <Grid>
                <Link style={{color:'white', fontFamily:'Montserrat', textDecoration:'none'}}>
                    Qui sommes nous
                </Link>
                </Grid>
                </Grid.Container>
            <Spacer y={0.5}/>
            <Grid.Container style={{justifyContent:'center'}}>
                <Grid>
            <Link style={{color:'#558F36', fontFamily:'Montserrat'}} to={'/contact'} >
                    Nous contacter
                </Link>
                </Grid>
                <Spacer x={3}/>
                <Grid>
                <Link style={{color:'#558F36', fontFamily:'Montserrat'}} >
                    Mentions légales
                </Link>
                </Grid>
                <Spacer x={3}/>
                <Grid>
                <Link style={{color:'#558F36', fontFamily:'Montserrat'}}>
                    Cookies
                </Link>
                </Grid>
            </Grid.Container >
            <Spacer y={0.5}/>
                
    </div>
}