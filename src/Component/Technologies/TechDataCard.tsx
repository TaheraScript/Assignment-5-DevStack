import { AiFillStar } from "react-icons/ai";
import type { ITechType } from "../Type/ITechType";
import  { useState } from "react";


const TechDataCard = ({techData}) => {
    const[value,setValue]=useState('available')
    const handleTechData = (type)=>{
        setValue(type)
    }
    return (
       <div className="card bg-base-100 h-80 w-96 shadow-sm container mx-auto mt-10">
            <div className="flex justify-between items-center my-4 mx-6 ">
              <img
                src={techData.icon}
                alt="Shoes"
                className="h-8 w-8"
              />
              <div className="badge badge-soft badge-primary">Primary</div>
            </div>
            <div className="card-body">
              <h2 className="card-title">{techData.name}</h2>
              <p>
                {techData.description}
              </p>
              <div className="flex items-center  gap-14">
                <div className="badge badge-ghost">{techData.category}</div>
                <p>{techData.difficulty}</p>
                <div className="flex items-center">
                  <AiFillStar />
                  {techData.rating}
                </div>

              </div>
              <div >
                <button onClick={()=>handleTechData('available')}className="btn btn-neutral w-full rounded-xl">Add to Stack</button>
              </div>
            </div>
          </div>
    );
};

export default TechDataCard;