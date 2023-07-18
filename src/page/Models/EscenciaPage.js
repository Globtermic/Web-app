import { Spacer, Button} from "@nextui-org/react";
import { Escencia } from "../ModelesData";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import HousePageCarousel from "../../Component/HousePageCarousel";
import './ModelPage.css';
import ShopButton from "../../Component/ShopButton";
import ContactButton from "../../Component/ContactButton";

export default function EscenciaPage() {
    const navigate = useNavigate()

    function goBack() {
        return (
          navigate(-1)
        )
    }

    return <div>
        <Helmet>
        <title>Globtermic | Escencia</title>
        </Helmet>
        
        <Spacer y={2}/>
        <div className="titleModel">
        <h1 >Escencia</h1>
        </div>
        <Spacer y={1}/>
        <HousePageCarousel data={Escencia}/>
        <Spacer y={3}/>
        <ContactButton/>
        <Spacer y={2}/>
        <ShopButton />
        <Spacer y={2}/>
    </div>
} 