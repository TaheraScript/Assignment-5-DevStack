import { AiFillStar } from "react-icons/ai";
import type { ITechType } from "../Type/ITechType";

interface ITechDataCardPropType {
  techData: ITechType;
  isAdded: boolean;
  onAddTech: (tech: ITechType) => void;
}

const TechDataCard = ({ techData, isAdded, onAddTech }: ITechDataCardPropType) => {
  return (
    <div className="card bg-base-100 h-80 w-96 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow cursor-pointer">
      <div className="flex justify-between items-center my-4 mx-6 ">
        <img src={techData.icon} alt={techData.name} className="h-8 w-8" />
       {techData.badge && (
  <div className="badge badge-soft badge-primary">{techData.badge}</div>
)}
      </div>
      <div className="card-body">
        <h2 className="card-title">{techData.name}</h2>
        <p className="text-[#64748B]">{techData.description}</p>
        <div className="space-y-3">
        <div className="flex items-center gap-14">
          <div className="badge badge-ghost text-[#64748B]">{techData.category}</div>
          <p className="text-[#64748B]">{techData.difficulty}</p>
          <div className="flex items-center">
            <AiFillStar />
            {techData.rating}
          </div>
        </div>
        </div>
        <div>
          <button
            onClick={() => onAddTech(techData)}
            className="btn btn-neutral w-full rounded-xl mt-3"
            disabled={isAdded}
          >
            {isAdded ? "✓ Added to Stack" : "Add to Stack"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechDataCard;