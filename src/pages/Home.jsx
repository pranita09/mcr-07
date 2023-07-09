import { Card } from "../components/Card";
import { useData } from "../contexts/DataContext";

export const Home = () => {
  const { data } = useData();
  return (
    <div className="p-4 mt-4 text-center">
      <h1 className="text-[2rem] font-semibold">Welcome to Trip Advisor</h1>
      <h2 className="text-2xl py-4">Top Continents for your next Holiday</h2>
      <div className="flex items-center justify-center gap-6 py-6">
        {data.continents.map((continent) => (
          <Card
            key={continent?.id}
            name={continent?.name}
            image={continent?.image}
            navlink={`/destination/${continent?.name}`}
          />
        ))}
      </div>
    </div>
  );
};
