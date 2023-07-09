import { useNavigate, useParams } from "react-router-dom";
import { useData } from "../contexts/DataContext";

export const DestinationDetailsPage = () => {
  const navigate = useNavigate();
  const { continentName, countryName, destinationName } = useParams();
  const { data } = useData();

  const continent = data?.continents?.find(
    (continent) => continent?.name === continentName
  );

  const country = continent.countries.find(
    (country) => country.name === countryName
  );

  const destination = country.destinations.find(
    (destination) => destination.name === destinationName
  );

  return (
    <div className="p-4 mt-4">
      <h2 className="text-2xl py-4 font-semibold text-center">
        {destination?.name}
      </h2>
      <div className="flex gap-6 py-4 px-12 mx-12 my-4">
        <div className="h-[25rem] w-[25rem]">
          <img
            src={destination.image}
            alt={destination?.name}
            className="object-cover h-full w-full rounded"
          />
        </div>
        <div className="flex flex-col justify-start gap-4">
          <p>
            <span className="text-[blue] font-semibold">Description: </span>
            <span className="text-sm">{destination?.description}</span>
          </p>
          <p>
            <span className="text-[blue] font-semibold">Ratings: </span>
            <span className="text-sm">{destination?.ratings}</span>
          </p>
          <p>
            <span className="text-[blue] font-semibold">Reviews: </span>
            <span className="text-sm">{destination?.reviews}</span>
          </p>
          <p>
            <span className="text-[blue] font-semibold">Location: </span>
            <span className="text-sm">{destination?.location}</span>
          </p>
          <p>
            <span className="text-[blue] font-semibold">Opening Hours: </span>
            <span className="text-sm">{destination?.openingHours}</span>
          </p>
          <p>
            <span className="text-[blue] font-semibold">Ticket Price: </span>
            <span className="text-sm">{destination?.ticketPrice}</span>
          </p>
          <p
            onClick={() => navigate(destination?.website)}
            className="font-semibold hover:underline hover:cursor-pointer text-green-700"
          >
            website
          </p>
        </div>
      </div>
    </div>
  );
};
