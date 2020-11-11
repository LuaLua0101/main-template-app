import 'handsontable/dist/handsontable.full.css';
import React, { useEffect, useState } from 'react'
import { HotTable } from '@handsontable/react';

// const data = [
//   ["", "Ford", "Volvo", "Toyota", "Honda"],
//   ["2016", 10, 11, 12, 13],
//   ["2017", 20, 11, 14, 13],
//   ["2018", 30, 15, 12, 13]
// ]

const Handsontable = props => {
  useEffect(() => {
    console.log(props)
    setColumns(props.cols)
    setData(props.data)
  }, [props]);

  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);

  return (
    <div id="hot-app">
    <HotTable data={data} colHeaders={true} rowHeaders={true} height="300" licenseKey='non-commercial-and-evaluation'/>
    
  </div>
  )
}

export default Handsontable