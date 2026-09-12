import type { ITechType } from "../Type/ITechType";
import TechDataCard from "./TechDataCard";

const AvailableTechData = ({ techDatas }:{techDatas : ITechType[]}) => {
  return (
    <div className="grid grid-cols-3 gap-4 ">
      {techDatas.map((techData :ITechType,index :number) => {
        return (
          <TechDataCard key={index} techData ={techData}></TechDataCard>
        );
      })}
    </div>
  );
};

export default AvailableTechData;
