import { use } from "react";
import type { ITechType } from "../Type/ITechType";
import AvailableTechData from "./AvailableTechData";

interface ITechPropType{
    techPromise :Promise<ITechType>
}
const Tech = ({techPromise} : ITechPropType) => {
  const techDatas = use(techPromise)

   
    
    return (
        <div>
            <div className="container mx-auto">
                 <h1 className="font-extrabold text-[36px] text-style ">Explore the <span className="bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Technologies</span></h1>
            <p className="font-normal text-[16px] text-[#64748B]">Pick one technology per category to build your ideal stack.</p>
            </div>
           
            <div>
        <AvailableTechData techDatas ={techDatas}></AvailableTechData>
            </div>
        </div>
    );
};

export default Tech;