import { useParams } from "react-router-dom";
import { useData } from "../contexts/DataContext";
import { Card } from "../components/Card";

export const DestinationListPage = () => {
  const { continentName, countryName } = useParams();
  const { data } = useData();

  const continent = data?.continents?.find(
    (continent) => continent?.name === continentName
  );

  const country = continent.countries.find(
    (country) => country.name === countryName
  );

  return (
    <div className="p-4 mt-4 text-center">
      <h1 className="text-[1.5rem] font-semibold">
        Top Destinations in {countryName} for your next holiday
      </h1>
      <div className="flex items-center justify-center gap-6 py-8 flex-wrap">
        {country?.destinations.map((destination) => (
          <Card
            key={destination?.id}
            name={destination?.name}
            image={destination?.image}
            navlink={`/destination/${continentName}/${countryName}/${destination?.name}`}
          />
        ))}
      </div>
    </div>
  );
};
