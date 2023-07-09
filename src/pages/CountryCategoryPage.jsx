import { useParams } from "react-router-dom";
import { useData } from "../contexts/DataContext";
import { Card } from "../components/Card";

export const CountryCategoryPage = () => {
  const { continentName } = useParams();
  const { data } = useData();
  const countriesData = data?.continents?.find(
    (continent) => continent?.name === continentName
  );
  return (
    <div className="p-4 mt-4 text-center">
      <h1 className="text-[1.5rem] font-semibold">
        Top countries in {continentName} for your next holiday
      </h1>
      <div className="flex items-center justify-center gap-6 py-8">
        {countriesData?.countries.map((country) => (
          <Card
            key={country?.id}
            name={country?.name}
            image={country?.image}
            navlink={`/destination/${continentName}/${country?.name}`}
          />
        ))}
      </div>
    </div>
  );
};
