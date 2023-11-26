import "./App.css";
import { Search, Title, BackgroundPattern, Result, GeoMap } from "./components";

const App = () => {
  return (
    <>
      <BackgroundPattern>
        <Title>IP Address Tracker</Title>
        <Search />
        <Result />
      </BackgroundPattern>
      <GeoMap />
    </>
  );
};

export default App;
