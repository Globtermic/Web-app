import { title } from "@/components/primitives";
import {Card} from "@nextui-org/card";
import {Button, ButtonGroup} from "@nextui-org/button";
import {Image} from "@nextui-org/image";
import './page.css';

interface HouseData {
	name: string,
	price: number,
	attributes: string[],
}

const data: HouseData = {
	name: 'Unidad',
	price: 200000,
	attributes: ["150m²", "Jardin", "Garage"]
}

const ArrowIcon = () => {
    return (
    <svg viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier"> 
        <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#000000" stroke-width="0.648" stroke-linecap="round" stroke-linejoin="round"></path>
        </g>
    </svg>
    )
}

const FormIcon = () => {
	return (<svg viewBox="0 -6 48 48" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="letter" d="M317,337a5.005,5.005,0,0,1-5-5V306a4.975,4.975,0,0,1,1-3h0a5,5,0,0,1,4-2h38a5,5,0,0,1,4,2h0a4.974,4.974,0,0,1,1,3v26a5.005,5.005,0,0,1-5,5Zm0-2h38a2.984,2.984,0,0,0,1.738-.556l-14.721-14.721-3.129,3.08a4.129,4.129,0,0,1-5.775,0l-3.129-3.081-14.721,14.721A2.984,2.984,0,0,0,317,335Zm-3-29v26a2.984,2.984,0,0,0,.555,1.737l14.716-14.715-14.825-14.6A2.982,2.982,0,0,0,314,306Zm43.445,27.737A2.983,2.983,0,0,0,358,332V306a2.981,2.981,0,0,0-.447-1.573l-14.825,14.6Zm-23.61-11.644a3.1,3.1,0,0,0,4.332,0l18.717-18.427A2.987,2.987,0,0,0,355,303H317a2.986,2.986,0,0,0-1.883.666Z" transform="translate(-312 -301)" fill="#000000"></path> </g></svg>);
}


function AttributeCard({name} : {name: string}) {
	return <Card className="house-card-attribute-card " >
		<h2 className="">{name}</h2>
	</Card>
}



function AttributeCardList({names} : {names: string[]}) {
	return (<div className="house-card-attribute-specs">
		{names.map((name, index) => {return (<AttributeCard key={index} name={name}/>)})}
	</div>)
}

function HouseCard({data} : {data: HouseData}) {
	return <div className="house-card ">
	<Card className="house-card-custom flex items-center rounded-none " >
		<Image alt="unidad" src={"/images/unidad.jpg"} className=" h-45 rounded-none" />
		<Card className="house-card-attribute">
			<div className="house-card-name">
				<h1>{data.name}</h1>
			</div>
			<div className="house-card-attribute-specs">
				{/* <AttributeCard name="150m²"/>
				<AttributeCard name="Jardin"></AttributeCard>
			<AttributeCard name="Garage"></AttributeCard> */}
			<AttributeCardList names={data.attributes} />
			</div>
			<div className="house-card-contact-button">
				<FormIcon/>
			</div>
			<div className="house-card-price">
			<h2 className="">{data.price} €</h2>
			</div>
		</Card>

	</Card>
	</div> 
}

export default function AboutPage() {
	return (
		<div className="page-grid">
			<HouseCard data={data}/>
			<HouseCard data={data}/>
			<HouseCard data={data}/>
			<HouseCard data={data}/>
			<HouseCard data={data}/>
			<HouseCard data={data}/>
		</div>
	);
}
