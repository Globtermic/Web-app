import { Helmet } from "react-helmet";
import HousePageCarousel from "./HousePageCarousel";
import ContactButton from "./ContactButton";
import ShopButton from "./ShopButton";
import { Spacer } from "@nextui-org/react";
import './Styles/ModelPage.css';

export default function ModelComponent({Data, title}) {
    return (<div>
        <Helmet>
        <title>Globtermic | {title}</title>
        </Helmet>
        
        <Spacer y={2}/>
        <div className="titleModel">
        <h1 >{title}</h1>
        </div>
        <Spacer y={1}/>
        <HousePageCarousel data={Data}/>
        <Spacer y={3}/>
        <ContactButton/>
        <Spacer y={2}/>
        <ShopButton />
        <Spacer y={2}/>
    </div>);
}