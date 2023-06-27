import { Card, Image, Row, Spacer, Button } from "@nextui-org/react";
import { Escencia, Movida, Terrazza } from "./ModelesData";
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Helmet } from "react-helmet";



function CardModel({title, Data}) {

    return <Card variant="flat" style={{backgroundColor:'white', borderRadius:0, padding: -10, width:"31%", border: "1px solid black", alignItems:'center', overflow:'hidden', marginTop:'10px'}}>
    <Card.Body style={{marginTop:'-20px'}}>
        <Image src={Data[0]} width="100%" style={{ marginTop:0}}></Image>
    </Card.Body>
    <Card.Footer style={{alignItems:'center', justifyContent:'center', }}>
        <h1 style={{fontFamily:'Montserrat', fontWeight:'bold', fontSize:20}}>{title}</h1>
        
    </Card.Footer>
        <Button style={{
            border: "3px solid #c99f69", 
            backgroundColor:'white', 
            color:"#c99f69", 
            fontFamily:'Montserrat', 
            fontWeight:'bold'
            }}>
        DECOUVRIR CE MODELE
        </Button>
        <Spacer y={0.5}/>
    </Card>
}

export default function ModelesPage() {
    return <div >
        <Helmet>
        <title>Globtermic | Models</title>
        </Helmet>
        <Spacer y={1} />
        <div>
            <h1 style={{textAlign:'center', fontFamily:'Montserrat'}}>DECOUVREZ NOS MODELES!</h1>
        </div>
        <Spacer y={2} />
        <Row justify="center">
        <CardModel title={"ESCENCIA"} Data={Escencia}/>
        <Spacer y={1}/>
        <CardModel title={"MOVIDA"} Data={Movida}/>
        <Spacer y={1}/>
        <CardModel title={"TERRAZZA"} Data={Terrazza}/>
        </Row>
    </div>
}