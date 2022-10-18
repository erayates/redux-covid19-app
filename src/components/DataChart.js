import React from 'react'

import {Chart as ChartJS,ArcElement,Tooltip,Legend} from 'chart.js'
import {Pie} from 'react-chartjs-2'

ChartJS.register(ArcElement,Tooltip,Legend)

function Chart() {
  const data = {
    labels: ['Infected','Recovered','Deaths','Active Cases'],
    datasets: [
      {
        label: 'Distribution of data on COVID-19',
        data: [27.782,27.782,27.782,27.782],
        backgroundColor: [
          'rgba(0, 0, 255, 0.5)',
          'rgba(0, 255, 0, 0.5)',
          'rgba(255, 0, 0, 0.5)',
          'rgba(255, 255, 0, 0.5)'
        ],
        borderColor:[
          'rgba(0, 0, 255, 1)',
          'rgba(0, 255, 0, 1)',
          'rgba(255, 0, 0, 1)',
          'rgba(255, 255, 0, 1)'
        ],
        borderWidth:2
      }
    ]
  }

  return (
    <>
      <h3 className='chart__title'>Distribution given regarding the COVID-19 virus</h3>
      <Pie data={data}/>
    </>
  )
}

export default Chart