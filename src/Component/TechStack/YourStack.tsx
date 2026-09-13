import type { ITechType } from "../Type/ITechType";
import { AiOutlineClose } from "react-icons/ai";

interface IYourStackPropType {
  selectedTechs: ITechType[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const YourStack = ({selectedTechs,onRemove,onRemoveAll}: IYourStackPropType) => {
  return (
    <aside className="w-full lg:w-72 shrink-0 bg-base-100 rounded-xl p-6 h-fit shadow-sm border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer">
      <h2 className="font-bold text-lg mb-1">Your Stack</h2>
      <p className="text-sm text-gray-400 mb-4">
        {selectedTechs.length === 0? "No technologies selected yet." : `${selectedTechs.length} Technology Selected`}
      </p>

      {selectedTechs.length === 0 ? (
        <div className="border border-dashed border-gray-300 rounded-xl h-22 flex items-center justify-center">
          <p className="text-sm text-gray-400">Your stack is empty.</p>
        </div>
      ) : (
        <div>
          <div className="flex flex-col gap-2">
            {selectedTechs.map((tech) => (
              <div key={tech.id} className="flex items-center justify-between p-2 bg-base-100 rounded-lg border border-gray-200 ">
                <div className="flex items-center gap-2 ">
                  <img src={tech.icon} alt={tech.name} className="h-6 w-6" />
                  <div>
                    <p className="text-sm font-semibold">{tech.name}</p>
                    <p className="text-xs text-gray-500">{tech.category}</p>
                  </div>
                </div>
                <button onClick={() => onRemove(tech.id)}>
                  <AiOutlineClose className="text-gray-500 hover:text-orange-500 cursor-pointer transition-colors" />
                </button>
              </div>
            ))}
          </div>

          <button onClick={onRemoveAll} className="btn btn-outline btn-error w-full mt-4 rounded-xl"> Remove All</button>
        </div>
      )}
    </aside>
  );
};

export default YourStack;
