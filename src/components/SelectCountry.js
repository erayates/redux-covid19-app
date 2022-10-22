import React from 'react'

function SelectCountry() {
  const handleCountry = (e) => {
   
  }
  return (
    <div className='select__country'>
        <select className='select__country__dropdown' onChange={handleCountry}>
            <option value='Global'>Global</option>
            <option value='benin'>Benin</option>
            <option value='nigeria'>Nigeria</option>
            <option value='ghana'>Ghana</option>
            <option value='togo'>Togo</option>
        </select>
    </div>
  )
}

export default SelectCountry