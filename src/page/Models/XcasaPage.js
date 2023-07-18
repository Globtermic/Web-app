import { Card, Grid, Image, Spacer, Checkbox, Button} from "@nextui-org/react";
import { useState } from "react"
import { Xcasa } from "../ModelesData";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import HousePageCarousel from "../../Component/HousePageCarousel";
import './ModelPage.css';
import ShopButton from "../../Component/ShopButton";
import ContactButton from "../../Component/ContactButton";

export default function XcasaPage() {
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
        <div className="titleModel">
        <h1 >Xcasa</h1>
        </div>
        <Spacer y={1}/>
        <HousePageCarousel data={Xcasa}/>
        <Spacer y={3}/>
        <ContactButton/>
        <Spacer y={2}/>
        <ShopButton />
        <Spacer y={2}/>
    </div>
} 