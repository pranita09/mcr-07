import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.css";
import { Home } from "./pages/Home";
import { CountryCategoryPage } from "./pages/CountryCategoryPage";
import { DestinationListPage } from "./pages/DestinationListPage";
import { DestinationDetailsPage } from "./pages/DestinationDetailsPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/destination/:continentName"
          element={<CountryCategoryPage />}
        />
        <Route
          path="/destination/:continentName/:countryName"
          element={<DestinationListPage />}
        />
        <Route
          path="/destination/:continentName/:countryName/:destinationId"
          element={<DestinationDetailsPage />}
        />
      </Routes>
      <Toaster
        position="top-center"
        reverseOrder={false}
        containerStyle={{
          top: "5rem",
        }}
      />
    </div>
  );
}

export default App;
