import { Card, Grid, Image, Spacer, Checkbox} from "@nextui-org/react";
import { useState } from "react"
import { Movida } from "./ModelesData";
import { Helmet } from "react-helmet";

export default function MovidaPage() {
    const [image, changeImage] = useState(0);


    return <div>
        <Helmet>
        <title>Globtermic | Movida</title>
        </Helmet>
        <Spacer y={2}/>
        <Spacer y={2}/>
        <div style={{marginLeft:'100px'}}>
        <Grid.Container>
            <Grid xs={1}>
                <Card style={{borderRadius:0, backgroundColor:'white', height:"500px"}} >
                    <Image src={Movida[0]} width="100%" style={{ marginTop:0}}  onMouseOver={() => {changeImage(0)}} ></Image>
                    <Spacer y={1}/>
                    <Image src={Movida[2]} width="100%" style={{ marginTop:0}} onMouseOver={() => {changeImage(2)}}></Image>
                    <Spacer y={1}/>
                    <Image src={Movida[3]} width="100%" style={{ marginTop:0}} onMouseOver={() => {changeImage(3)}} ></Image>
                    <Spacer y={1}/>
                    <Image src={Movida[4]} width="100%" style={{ marginTop:0}} onMouseOver={() => {changeImage(4)}} ></Image>
                    <Spacer y={1}/>
                    <Image src={Movida[5]} width="100%" style={{ marginTop:0}} onMouseOver={() => {changeImage(5)}} ></Image>
                </Card>
            </Grid>
            <Spacer y={1}/>
            <Grid>
                <Card style={{ height:"500px", width:'887px', borderRadius:0, border: "1px solid black"}} >
                    <Image src={Movida[image]} style={{ }}></Image>
                </Card>
            </Grid>
            <Spacer y={2}/>
            <Grid>
                <div style={{ left:"100px"}}>
                <h1 style={{color:"#c99f69", fontWeight:'lighter'}} >Movida</h1>
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
                </Card>
            </Grid>
        </Grid.Container>
        </div>
    </div>
}