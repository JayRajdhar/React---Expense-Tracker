import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css'

const Chart = (props) => {
    const valuesArray = props.dataPoints.map(v => v.value)
    const maxValue = Math.max(...valuesArray)

    console.log(props.dataPoints)
  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          max={maxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  )
}

export default Chart