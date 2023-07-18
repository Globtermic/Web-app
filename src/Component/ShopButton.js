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
        <Button className="buttonShop" icon={<IconShoppingCart/>}
        onPress={() => goBack()}>
            Retour a la boutique
        </Button>
    </div>
}


{/* <div style={{display:"flex", alignItems:'center', justifyContent:'center'}}>
<Button style={{ alignSelf:'center',
backgroundColor:'transparent', 
border: "3px solid #c99f69",
fontSize:'20px',
color:"#c99f69", 
fontFamily:'Montserrat', 
fontWeight:'inherit',
zIndex:1}}
onPress={() => goBack()}>Retour a la boutique</Button>
</div> */}