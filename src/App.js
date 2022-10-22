
import './App.css';
import DataChart from './components/DataChart';
import Header from './components/Header';
import InfoCards from './components/InfoCards';
import SelectCountry from './components/SelectCountry';

import {useSelector,useDispatch} from 'react-redux'
import { fetchGlobalData, selectAll } from './redux/dataSlice';
import { useEffect } from 'react';

import { status } from './redux/dataSlice';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGlobalData())
  },[])
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
