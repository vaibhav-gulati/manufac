
import StatsTable from './components/StatsTable.js'

function App() {
  return (
    <div style={{textAlign: 'center'}}>
     <StatsTable property="Flavanoids" />
     {/* Here we are passing property as a prop, so that for every property there is no need to create a new component every time.
     Similarly we can pass Hue and perform statical operations on that property */}
     {/* <StatsTable property="Hue" /> */}
     <StatsTable property="Gamma" />
    </div>
  );
}

export default App;
