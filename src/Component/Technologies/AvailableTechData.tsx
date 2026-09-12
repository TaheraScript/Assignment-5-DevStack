import type { ITechType } from "../Type/ITechType";
import TechDataCard from "./TechDataCard";

interface IAvailableTechPropType {
  techDatas: ITechType[];
  selectedTechs: ITechType[];
  onAddTech: (tech: ITechType) => void;
}

const AvailableTechData = ({ techDatas, selectedTechs, onAddTech }: IAvailableTechPropType) => {
  return (
    <div className="grid grid-cols-3 gap-4 flex-1">
      {techDatas.map((techData: ITechType) => {
        const isAdded = selectedTechs.some((t) => t.id === techData.id);
        return (
          <TechDataCard
            key={techData.id}
            techData={techData}
            isAdded={isAdded}
            onAddTech={onAddTech}
          />
        );
      })}
    </div>
  );
};

export default AvailableTechData;