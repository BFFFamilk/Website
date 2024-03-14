import Header from "./components/Header";
import Maintenance from "./components/Maintenance";

const App = () => {
  return (
    <>
      <div className="pt-[3.25rem] lg:pt-[5rem] overflow-hidden">
        <Header />
        <Maintenance />
      </div>
    </>
  );
};

export default App;
