import { title } from "@/components/primitives";
import {Card} from "@nextui-org/card";
import {Button, ButtonGroup} from "@nextui-org/button";
import {Image} from "@nextui-org/image";

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

function AttributeCard({name}) {
	return <Card className="p-2 shadow-none bg-green-600 ml-4" >
		<h2 className="text-white font-light">{name}</h2>
	</Card>
}

function HouseCard() {
	return <Card className=" flex items-center rounded-none h-96" >
		<Image alt="unidad" src={"/images/unidad.jpg"} className=" h-45 rounded-none" />
		<Card className="flex-row items-center justify-between mt-3 w-full border-none shadow-none">
			<div className="ml-2">
				<h1 className="text-xl font-med">UNIDAD</h1>
				
			</div>
			<h2 className="text-lg mr-2">200 000€</h2>
		</Card>
		
		<Card className="flex-row items-center justify-normal mt-3 w-full h-30 border-none shadow-none ml-2">
			<AttributeCard name={"150m²"}></AttributeCard>
			<AttributeCard name={"Jardin"}></AttributeCard>
			<AttributeCard name={"Garage"}></AttributeCard>
		</Card>
		<Card className="flex-row items-center justify-between mt-4 w-full border-none rounded-none shadow-none end-0" >
			<div className="ml-2 flex items-center">
				<Button className="flex items-center w-28 rounded-none hover:bg-gray-200 hover:border-solid hover:border-gray-700 hover:border-1" endContent={<ArrowIcon/>} >Nous Contacter</Button>
			</div>
			<div className="mr-2 flex items-center">
				<Button className="items-center w-28 rounded-none hover:bg-gray-200 hover:border-solid hover:border-gray-700 hover:border-1" endContent={<ArrowIcon/>} >Voir</Button>
			</div>
		</Card>
	</Card>
}

export default function AboutPage() {
	return (
		<div className="grid grid-cols-3 gap-6 w-full">
			<HouseCard/>
			<HouseCard/>
			<HouseCard/>
		</div>
	);
}
