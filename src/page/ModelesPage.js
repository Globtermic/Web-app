import { Card, Image, Grid, Spacer, Button } from "@nextui-org/react";
import { Escencia, Natura, Terrazza, Torres, Transparencia, Xcasa, Movida, Unidad, Sombra,
    Aberta, Cala, Dolcevita, Emporda, Malou, Marina } from "./ModelesData";
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

    return <Card css={{ backgroundColor:'white',
        padding: '-10',
        width: '100%',
        border: '1px solid gray',
        alignItems: 'center',
        overflow: 'hidden',
        marginTop: '10px',
        shadow: "$xl"}}>
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
                <Spacer x={2}/>
                <CardModel title={"MOVIDA"} Data={Movida} path={"/Movida"}/>
                <Spacer x={2}/>
                <CardModel title={"TERRAZZA"} Data={Terrazza} path={"/Terrazza"}/>
                </Grid>
                <Spacer y={2} />
                    <Grid sm direction="row" >
                <CardModel title={"NATURA"} Data={Natura} path={"/Natura"}/>
                <Spacer x={2}/>
                <CardModel title={"TORRES"} Data={Torres} path={"/Torres"}/>
                </Grid>
                <Spacer x={2} />
                    <Grid sm direction="row">
                <CardModel title={"TRANSPARENCIA"} Data={Transparencia} path={"/Transparencia"}/>
                <Spacer x={2}/>
                <CardModel title={"XCASA"} Data={Xcasa} path={"/Xcasa"}/>
                <Spacer x={2}/>
                <CardModel title={"Unidad"} Data={Unidad} path={"/Unidad"}/>
                </Grid>
                <Spacer y={2} />
                    <Grid sm direction="row" >
                <CardModel title={"SOMBRA"} Data={Sombra} path={"/Sombra"}/>
                <Spacer x={2}/>
                <CardModel title={"ABERTA"} Data={Aberta} path={"/Aberta"}/>
                <Spacer x={2}/>
                <CardModel title={"CALA"} Data={Cala} path={"/Cala"}/>
                </Grid>
                <Spacer y={2} />
                    <Grid sm direction="row" >
                <CardModel title={"EMPORDA"} Data={Emporda} path={"/Emporda"}/>
                <Spacer x={2}/>
                <CardModel title={"MALOU"} Data={Malou} path={"/Malou"}/>
                <Spacer x={2}/>
                <CardModel title={"Dolcevita"} Data={Dolcevita} path={"/Dolcevita"}/>
                </Grid>
                <Spacer y={2} />
                    <Grid sm direction="row" >
                <CardModel title={"MARINA"} Data={Marina} path={"/Marina"}/>
                </Grid>
                <Spacer y={2} />
        </Grid.Container>
        </div>
    </div>
}