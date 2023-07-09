import { FaMapMarkerAlt } from "react-icons/fa";
import {useNavigate} from "react-router-dom"

export const Card = ({ name, image, navlink }) => {
    const navigate = useNavigate();
  return (
    <div className="card relative w-[16rem] h-[16rem] border rounded-md hover:cursor-pointer hover:scale-[1.02]" onClick={()=>navigate(navlink)}>
      <img
        src={image}
        alt={name}
        className="h-full w-full object-cover rounded-md"
      />
      <div className="absolute top-[12rem] z-50 text-[white] flex items-center justify-center gap-2 px-4">
        <FaMapMarkerAlt />
        <h1>{name}</h1>
      </div>
    </div>
  );
};
