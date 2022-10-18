import React from 'react'

function SelectCountry() {
  return (
    <div className='select__country'>
        <select className='select__country__dropdown'>
            <option value='benin'>Benin</option>
            <option value='nigeria'>Nigeria</option>
            <option value='ghana'>Ghana</option>
            <option value='togo'>Togo</option>
        </select>
    </div>
  )
}

export default SelectCountry