import React from 'react'
import { Bar } from 'react-chartjs-2'
import { useSelector } from 'react-redux'
import { goodsSelectors } from '../../../pages/add-goods/selectors'


export const Chart = () => {
  const goodsCount = useSelector(goodsSelectors.getGoodsCount)

  const chartData = {
    labels: ['Goods', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: 'Testing chart',
      data: [goodsCount, 19, 23, 15, 52, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  }

  return (
    <Bar
      data={chartData}
      width={250}
      height={50}
    />
  )
}
