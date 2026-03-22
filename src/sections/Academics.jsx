import { Timeline } from "../components/Timeline";
import { academics } from "../constants";

const Academics = () => {
  return (
    
    <div className="w-full">
      <Timeline data={academics} title="My Education" />
    </div>
  );
};

export default Academics;