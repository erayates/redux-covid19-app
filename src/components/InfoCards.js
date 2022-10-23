import { useEffect,useState} from 'react'
import {useSelector} from 'react-redux'
import { selectAll,status} from '../redux/dataSlice'

function InfoCards() {
    const state = useSelector(status)
    const items = useSelector(selectAll)
    
    if(state === 'succeeded'){
        return(
            <div className='cards__container'>
               <div className='card'>
                   <h1 className='card__title'>Infected</h1>
                   <p className='card__numbers'>{items.confirmed.value}</p>
                   <h4 className='card__fetchInfo'>Last updated:</h4>
                   <span>{items.lastUpdate}</span>
                   <p className='card__footerTitle'>
                       Number of infect cases of COVID-19
                   </p>
                   <span className='card__country'>{items.confirmed.value >= 600000000 ? "Global" : ""}</span>
               </div>
               <div className='card'>
                   <h1 className='card__title'>Recovered</h1>
                   <p className='card__numbers'>{items.recovered.value}</p>
                   <h4 className='card__fetchInfo'>Last updated:</h4>
                   <span>{items.lastUpdate}</span>
                   <p className='card__footerTitle'>
                       Number of infect cases of COVID-19
                   </p>
                   <span className='card__country'>{items.confirmed.value >= 600000000 ? "Global" : ""}</span>
               </div>
               <div className='card'>
                   <h1 className='card__title'>Deaths</h1>
                   <p className='card__numbers'>{items.deaths.value}</p>
                   <h4 className='card__fetchInfo'>Last updated:</h4>
                   <span>{items.lastUpdate}</span>
                   <p className='card__footerTitle'>
                       Number of infect cases of COVID-19
                   </p>
                   <span className='card__country'>{items.confirmed.value >= 600000000 ? "Global" : ""}</span>
               </div>
               <div className='card'>
                   <h1 className='card__title'>Active</h1>
                   <p className='card__numbers'>{items.confirmed.value - items.deaths.value}</p>
                   <h4 className='card__fetchInfo'>Last updated:</h4>
                   <span>{items.lastUpdate}</span>
                   <p className='card__footerTitle'>
                       Number of infect cases of COVID-19
                   </p>
                   <span className='card__country'>{items.confirmed.value >= 600000000 ? "Global" : ""}</span>
               </div>
           </div>
       )
    } else{
        return <h1 className='loading'>Loading...</h1>
    }
   
    
}

export default InfoCards