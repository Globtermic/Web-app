import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import './Styles/ShopButton.css'
import IconShoppingCart from "../assets/ShopIcon";

export default function ShopButton() {
    const navigate = useNavigate()

    function goBack() {
        return (
          navigate(-1)
        )
    }

    return <div className="divAroundButton">
        <Button className="buttonShop"  css={{backgroundColor: 'transparent',
    border: '3px solid #c99f69',
    fontSize: '20px',
    color: '#c99f69',
    fontFamily: 'Montserrat',
    fontWeight: 'inherit',
    width: '300px',}} icon={<IconShoppingCart/>}
        onPress={() => goBack()}>
            Retour a la boutique
        </Button>
    </div>
}