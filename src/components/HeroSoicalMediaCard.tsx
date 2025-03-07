import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

import SoicalCounter from "./SoicalCounter";

interface props{
    type: "fb" | "insta";
    name:string;
    link:string;
    followers:number
}
const HeroSoicalMediaCard = ({type,  link,followers}:props) => {
  return (
    <div className=" flex items-center  gap-3">
       <a href={link}> {type === "fb" ? <FaFacebookSquare className="text-6xl"/> : <FaInstagramSquare className="text-6xl"/>}</a>
       <div className="flex flex-col gap-2">
        <p className="text-3xl font-bold"><SoicalCounter endValue={followers}  isVisible={true} /></p>

       </div>
       
      
    </div>
  )
}

export default HeroSoicalMediaCard