import "./App.css";
import data from "./assets/table-data.json";
// import { ReactComponent as Arrow } from "./assets/arrow-svg.svg";
import AccordionList from "./components/AccordionList";

function App() {
  return (
    <div className="App">
      <div className="table-container">
        {data.map((list, index) => (
          <AccordionList key={index} title={list.name} items={list.data} />
        ))}
      </div>
    </div>
  );
}

export default App;
