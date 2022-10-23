
import './App.css';
import DataChart from './components/DataChart';
import Header from './components/Header';
import InfoCards from './components/InfoCards';
import SelectCountry from './components/SelectCountry';

function App() {
  return (
    <>
      <Header/>  
      <InfoCards/>
      <SelectCountry/>  
      <DataChart/>
    </>
  );
}

export default App;
