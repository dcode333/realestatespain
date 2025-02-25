import { useState } from "react";
import NoImage from "../../assets/No IMAGE.png";

const IdealistaCard = ({ property }) => {
  const [date,setDate] = useState('fecha de raspado');

  const setDateHandler = () => {
    
      const currentDate = new Date();
      const lastWeek = new Date(currentDate);
      lastWeek.setDate(currentDate.getDate() - 7); // Subtract 7 days to get the start of last week
      const randomTime = lastWeek.getTime() + Math.random() * (currentDate.getTime() - lastWeek.getTime());
      const randomDate = new Date(randomTime);    
    setDate(randomDate.toLocaleDateString());
  }
  return (
    <div className="cursor-pointer">
      <div className="relative overflow-hidden w-full mb-6 rounded-md text-left bg-white shadow-xl">
        <div className="relative w-full h-[200px] sm:h-[250px] overflow-hidden">
          <img
            className="h-full w-full object-cover transition ease-out delay-150 duration-300 hover:scale-125"
            src={property.image ? property.image : NoImage}
            alt="img"
          />
        </div>
        <div className="relative">
          <div className="absolute right-0 -top-10">
            <img src={property.logo} alt="logo" />
          </div>
          <div className="px-4 py-5">
            <div className="font-semibold text-base mb-2">{property.title}</div>
            <div className="font-medium text-[#36454F] text-base mb-2">
              {property.subTitle}
            </div>
            <div className="text-sm mb-2 text-gray-500">
              {property.Description}
            </div>
            <div className="text-[#8062D6] font-bold text-base mb-2">
              {property.price}
            </div>
            <div className="text-sm mb-2 text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis ">
              {property.details}
            </div>
            <a
              onClick={setDateHandler}
              className="my-2 flex justify-center items-center py-2 px-4 bg-[#8062D6] text-sm md:text-lg font-semibold text-white rounded-md z-10 cursor-pointer"
            >
              {date}
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`${import.meta.env.VITE_IDEALISTA_URL}${property.href}`}
              className=" flex justify-center items-center py-2 px-4 bg-[#8062D6] text-sm md:text-lg font-semibold text-white rounded-md z-10 cursor-pointer"
            >
              Link to Url
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdealistaCard;
