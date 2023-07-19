import { Card, Image, Grid, Spacer, Button } from "@nextui-org/react";
import { Escencia, Movida, Terrazza, Natura, Patio, Torres, Transparencia, Xcasa } from "./ModelesData";
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom"

import './ModelsPage.css';

function CardModel({title, Data, path}) {
    const navigate = useNavigate()

    function goto(path) {
        return (
          navigate(path)
        )
    }

    return <Card variant="flat" css={{ backgroundColor:'white',
        padding: '-10',
        width: '100%',
        border: '1px solid black',
        alignItems: 'center',
        overflow: 'hidden',
        marginTop: '10px',
        borderRadius: '0%',}}>
    <Card.Body style={{marginTop:'-20px'}}>
        <Image src={Data[0]} width="100%" style={{ marginTop:0}}></Image>
    </Card.Body>
    <Card.Footer className="cardContent">
        <h1 className="cardTitle">{title}</h1>
        
    </Card.Footer>
        <Button className="modelButton"  css={{backgroundColor:'white', color:'#c99f69', 
    border:'3px solid #c99f69', 
    fontFamily: 'Montserrat',
    fontWeight: 'bold'}} onPress={() => goto(path)}>
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
        <Spacer y={2} />
        <div className="title">
            <h1 >DÉCOUVREZ NOS MODÈLES!</h1>
        </div>
        <Spacer y={1} />
        <div style={{margin:'10px'}}>
        <Grid.Container justify="center" direction="column">
            <Grid sm direction="row">
                <CardModel title={"ESCENCIA"} Data={Escencia} path={"/Escencia"}/>
                <Spacer y={1}/>
                <CardModel title={"MOVIDA"} Data={Movida} path={"/Movida"}/>
                <Spacer y={1}/>
                <CardModel title={"TERRAZZA"} Data={Terrazza} path={"/Terrazza"}/>
                </Grid>
                <Spacer y={1} />
                    <Grid sm direction="row" >
                <CardModel title={"NATURA"} Data={Natura} path={"/Natura"}/>
                <Spacer y={1}/>
                <CardModel title={"PATIO"} Data={Patio} path={"/Patio"}/>
                <Spacer y={1}/>
                <CardModel title={"TORRES"} Data={Torres} path={"/Torres"}/>
                </Grid>
                <Spacer y={1} />
                    <Grid sm direction="row">
                <CardModel title={"TRANSPARENCIA"} Data={Transparencia} path={"/Transparencia"}/>
                <Spacer y={1}/>
                <CardModel title={"XCASA"} Data={Xcasa} path={"/Xcasa"}/>
                </Grid>
                <Spacer y={1} />
        </Grid.Container>
        </div>
    </div>
}