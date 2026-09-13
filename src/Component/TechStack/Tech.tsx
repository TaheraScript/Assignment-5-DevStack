import { use, useState } from "react";
import type { ITechType } from "../Type/ITechType";
import AvailableTechData from "./AvailableTechData";
import YourStack from "./YourStack";
import { toast } from "react-toastify"; 

interface ITechPropType {
  techPromise: Promise<ITechType[]>;
}

const Tech = ({ techPromise }: ITechPropType) => {
  const techDatas = use(techPromise);
  const [selectedTechs, setSelectedTechs] = useState<ITechType[]>([]);

  const handleAddTech = (tech: ITechType) => {
    const alreadyAdded = selectedTechs.some((t) => t.id === tech.id);
    if (alreadyAdded) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }
    setSelectedTechs((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack!`); 
  };

  const handleRemoveTech = (id: string) => {
    const tech = selectedTechs.find((t) => t.id === id);
    setSelectedTechs((prev) => prev.filter((t) => t.id !== id));
    if (tech) toast.info(`${tech.name} removed from your stack.`);
  };

  const handleRemoveAll = () => {
    setSelectedTechs([]);
    toast.info("All technologies removed from your stack.");
  };

  return (
    <div>
      <div className="container mx-auto">
        <h1 className="font-extrabold text-[36px] text-style ">
          Explore the{" "}
          <span className="bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Technologies
          </span>
        </h1>
        <p className="font-normal text-[16px] text-[#64748B]">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 container mx-auto mt-6 items-start">
         <AvailableTechData techDatas={techDatas} selectedTechs={selectedTechs} onAddTech={handleAddTech}/>
        <YourStack selectedTechs={selectedTechs} onRemove={handleRemoveTech} onRemoveAll={handleRemoveAll}/>
       </div>
    </div>
  );
};

export default Tech;