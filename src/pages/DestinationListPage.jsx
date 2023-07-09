import { useParams } from "react-router-dom";
import { useData } from "../contexts/DataContext";
import { Card } from "../components/Card";

export const DestinationListPage = () => {
  const { continentName, countryName } = useParams();
  const { data } = useData();

  console.log(countryName);
  console.log(data.continents);

  const continent = data?.continents?.find(
    (continent) => continent?.name === continentName
  );

  const country = continent;

  console.log(continent);

  return (
    <div className="p-4 mt-4 text-center">
      <h1 className="text-[1.5rem] font-semibold">Welcome to Trip Advisor</h1>
      <div className="flex items-center justify-center gap-6 py-6">
        {/* {destinationsData?.destinations.map((country) => (
          <Card
            key={country?.id}
            name={country?.name}
            image={country?.image}
            navlink={`/destinationsInCountry/${country?.name}`}
          />
        ))} */}
      </div>
    </div>
  );
};
