import React from 'react'
import { CChartBar } from '@coreui/react-chartjs'
// import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'

// const brandSuccess = getStyle('success') || '#4dbd74'
const brandInfo = getStyle('info') || '#20a8d8'
// const brandDanger = getStyle('danger') || '#f86c6b'

const MainChartExample =  props => {
  // const random = (min, max)=>{
  //   return Math.floor(Math.random() * (max - min + 1) + min)
  // }
  const {
    countdata,
    tanggalan,
    backgroundColor,
    pointHoverBackgroundColor,
    dataPoints,
    label,
    pointed,
    ...attributes
  } = props


  const defaultDatasets = (()=>{
    return [
      {
        label: 'Total Penjualan',
        backgroundColor: hexToRgba(brandInfo, 10),
        borderColor: brandInfo,
        pointHoverBackgroundColor: brandInfo,
        borderWidth: 2,
        data: countdata
      },
    ]
  })()

  const defaultOptions = (()=>{
    return {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            gridLines: {
              drawOnChartArea: false
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
              maxTicksLimit: 4,
              stepSize: Math.ceil(10 / 4),
              max: 10
            },
            gridLines: {
              display: true
            }
          }]
        },
        elements: {
          point: {
            radius: 0,
            hitRadius: 10,
            hoverRadius: 4,
            hoverBorderWidth: 3
          }
        }
      }
    }
  )()

  // render
  return (
    // <CChartLine
    //   {...attributes}
    //   datasets={defaultDatasets}
    //   options={defaultOptions}
    //   labels={tanggal}
    // />
    <CChartBar
      {...attributes}
      datasets={defaultDatasets}
      options={defaultOptions}
      labels={tanggalan}
    />
  )
}


export default MainChartExample
