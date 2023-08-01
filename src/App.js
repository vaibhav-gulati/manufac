
import './App.css';
import StatsTable from './components/StatsTable.js'

function App() {
  return (
    <div className="App">
     <StatsTable property="Flavanoids" />
     {/* <StatsTable property="Hue" /> */}
     <StatsTable property="Gamma" />
    </div>
  );
}

export default App;
