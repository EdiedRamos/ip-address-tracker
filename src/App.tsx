import { Search, Title, BackgroundPattern, Result, GeoMap } from "./components";
import "./App.css";
import { TrackerProvider } from "./components/TrackerProvider/TrackerProvider";

const App = () => {
  return (
    <TrackerProvider>
      <BackgroundPattern>
        <Title>IP Address Tracker</Title>
        <Search />
        <Result />
      </BackgroundPattern>
      <GeoMap />
    </TrackerProvider>
  );
};

export default App;
