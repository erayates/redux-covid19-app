import {useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData, fetchCountries, countryListStatus, countryList} from '../redux/dataSlice'



function SelectCountry() {
 
  const [country,setCountry] = useState("Global")
  const dispatch = useDispatch()

  let status = useSelector(countryListStatus)
  const countries = useSelector(countryList)

  const handleCountryChange = (e) => {
    setCountry(e.target.value)
  }
  useEffect(() => {
    dispatch(fetchData(country))
  },[country])

  useEffect(() => {
    dispatch(fetchCountries())
  },[])

  
  if(status === 'succeeded'){
    return (
      <div className="select__container">
        <select value={country} onChange={handleCountryChange}>
          <option value="Global">Global</option>
          {countries.map((country) => {
            return <option key={country.iso2} value={country.name}>{country.name}</option>
          })}
        </select>
      </div>
    )
  } else{
    return <h1 className='loading'>Loading...</h1>
  }
}

export default SelectCountry