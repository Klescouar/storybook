import "./App.scss";
import { Card } from "./components/Card/Card";
import { shares, socials, actions } from "./data";

function App() {
  return (
    <div className="App">
      <Card actions={actions} shares={shares} socials={socials} />
    </div>
  );
}

export default App;
