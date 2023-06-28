import { Card, Grid, Image, Spacer, Checkbox, Button} from "@nextui-org/react";
import { useState } from "react"
import { Xcasa } from "../ModelesData";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

export default function XcasaPage() {
    const [image, changeImage] = useState(0);
    const navigate = useNavigate()

    function goBack() {
        return (
          navigate(-1)
        )
    }


    return <div>
        <Helmet>
        <title>Globtermic | Xcasa</title>
        </Helmet>
        <Spacer y={2}/>
        <div style={{alignItems:'center', justifyContent:'center'}}>
            <Button style={{left:'45%', 
            backgroundColor:'transparent', 
            border: "3px solid #c99f69",
            fontSize:'20px',
            color:"#c99f69", 
            fontFamily:'Montserrat', 
            fontWeight:'inherit',}}
            onPress={() => goBack()}>Retour a la boutique</Button>
        </div>
        <Spacer y={2}/>
        <div style={{marginLeft:'100px'}}>
        <Grid.Container>
            <Grid xs={1}>
                <Card style={{borderRadius:0, backgroundColor:'transparent', height:"500px"}} >
                    <Image src={Xcasa[0]} width="100%" style={{ marginTop:0}}  onMouseOver={() => {changeImage(0)}} ></Image>
                    <Spacer y={1}/>
                    <Image src={Xcasa[2]} width="100%" style={{ marginTop:0}} onMouseOver={() => {changeImage(2)}}></Image>
                    <Spacer y={1}/>
                    <Image src={Xcasa[3]} width="100%" style={{ marginTop:0}} onMouseOver={() => {changeImage(3)}} ></Image>
                    <Spacer y={1}/>
                    <Image src={Xcasa[4]} width="100%" style={{ marginTop:0}} onMouseOver={() => {changeImage(4)}} ></Image>
                    <Spacer y={1}/>
                    <Image src={Xcasa[5]} width="100%" style={{ marginTop:0}} onMouseOver={() => {changeImage(5)}} ></Image>
                </Card>
            </Grid>
            <Spacer y={1}/>
            <Grid>
                <Card style={{ height:"500px", width:'887px', borderRadius:0, border: "1px solid black"}} >
                    <Image src={Xcasa[image]} style={{ }}></Image>
                </Card>
            </Grid>
            <Spacer y={2}/>
            <Grid>
                <div style={{ left:"100px"}}>
                <h1 style={{color:"#c99f69", fontWeight:'lighter'}} >Xcasa</h1>
                </div>
                <Spacer y={5}/>
                <Card variant="flat" style={{borderRadius:'0', backgroundColor:'white'}}>
                <Checkbox style={{fontFamily:'Montserrat',}}  >
                    Panneaux solaires
                </Checkbox>
                <Spacer y={2}/>
                <Checkbox style={{fontFamily:'Montserrat',}}  >
                    Jardin en permaculture
                </Checkbox>
                <Spacer y={3}/>
                <Button style={{backgroundColor:'grey', 
                fontFamily:'Montserrat', 
                fontSize:'16px'}} 
                onPress={() => navigate('/Contact')} >
                    Vous êtes intéréssé(e) par ce modèle ? Contactez nous!
                    </Button>
                </Card>
            </Grid>
        </Grid.Container>
        </div>
    </div>
} 