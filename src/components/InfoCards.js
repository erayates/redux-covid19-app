import React from 'react'

function InfoCards() {
  return (
    <div className='cards__container'>
        <div className='card'>
            <h1 className='card__title'>Infected</h1>
            <p className='card__numbers'>27.782</p>
            <h4 className='card__fetchInfo'>Last updated:</h4>
            <span>Tue Oct 18 2022 15:23:01</span>
            <p className='card__footerTitle'>
                Number of infect cases of COVID-19
            </p>
            <span className='card__country'>Benin</span>
        </div>
        <div className='card'>
            <h1 className='card__title'>Recovered</h1>
            <p className='card__numbers'>27.782</p>
            <h4 className='card__fetchInfo'>Last updated:</h4>
            <span>Tue Oct 18 2022 15:23:01</span>
            <p className='card__footerTitle'>
                Number of infect cases of COVID-19
            </p>
            <span className='card__country'>Benin</span>
        </div>
        <div className='card'>
            <h1 className='card__title'>Deaths</h1>
            <p className='card__numbers'>27.782</p>
            <h4 className='card__fetchInfo'>Last updated:</h4>
            <span>Tue Oct 18 2022 15:23:01</span>
            <p className='card__footerTitle'>
                Number of infect cases of COVID-19
            </p>
            <span className='card__country'>Benin</span>
        </div>
        <div className='card'>
            <h1 className='card__title'>Active</h1>
            <p className='card__numbers'>27.782</p>
            <h4 className='card__fetchInfo'>Last updated:</h4>
            <span>Tue Oct 18 2022 15:23:01</span>
            <p className='card__footerTitle'>
                Number of infect cases of COVID-19
            </p>
            <span className='card__country'>Benin</span>
        </div>
    </div>
  )
}

export default InfoCards