import './Styles/ContactButton.css';
import { Button } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';

export default function ContactButton() {
    const navigate = useNavigate();
   return ( 
   <div className='divArroundButtonContact'>
                <Button className='buttonContact' css={{backgroundColor: 'gray', height:'100px'}}
                onPress={() => navigate('/Contact')} >
                    Vous êtes intéréssé(e) par ce modèle ? <br></br> Contactez nous!
                    </Button>
                    </div>
   );
}