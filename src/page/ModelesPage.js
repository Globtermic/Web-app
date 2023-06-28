import { Card, Image, Row, Spacer, Button } from "@nextui-org/react";
import { Escencia, Movida, Terrazza, Natura, Patio, Torres, Transparencia, Xcasa } from "./ModelesData";
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom"



function CardModel({title, Data, path}) {
    const navigate = useNavigate()

    function goto(path) {
        return (
          navigate(path)
        )
    }

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
            }} onPress={() => goto(path)}>
        DÉCOUVRIR CE MODELE
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
            <h1 style={{textAlign:'center', fontFamily:'Montserrat'}}>DÉCOUVREZ NOS MODELES!</h1>
        </div>
        <Spacer y={2} />
        <Row justify="center">
        <CardModel title={"ESCENCIA"} Data={Escencia} path={"/Escencia"}/>
        <Spacer y={1}/>
        <CardModel title={"MOVIDA"} Data={Movida} path={"/Movida"}/>
        <Spacer y={1}/>
        <CardModel title={"TERRAZZA"} Data={Terrazza} path={"/Terrazza"}/>
        </Row>
        <Spacer y={2} />
        <Row justify="center">
        <CardModel title={"NATURA"} Data={Natura} path={"/Natura"}/>
        <Spacer y={1}/>
        <CardModel title={"PATIO"} Data={Patio} path={"/Patio"}/>
        <Spacer y={1}/>
        <CardModel title={"TORRES"} Data={Torres} path={"/Torres"}/>
        </Row><Row justify="center">
        <CardModel title={"TRANSPARENCIA"} Data={Transparencia} path={"/Transparencia"}/>
        <Spacer y={1}/>
        <CardModel title={"XCASA"} Data={Xcasa} path={"/Xcasa"}/>
        </Row>
        <Spacer y={1} />
    </div>
}