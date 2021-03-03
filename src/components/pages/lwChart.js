import React, { useRef, useEffect, useState } from 'react';
import { createChart, LineStyle } from 'lightweight-charts';
import './lw-chart.css'

var areaSeries = null
const businessDayToString = (businessDay) => {
  var h = new Date(businessDay).getHours();
  var m = new Date(businessDay).getMinutes();
  return h + ':' + m;
  return businessDay.year + '-' + businessDay.month + '-' + businessDay.day;
}

const toolTipWidth = 80;
const toolTipHeight = 80;
const toolTipMargin = 15;

var toolTip = document.createElement('div');
toolTip.className = 'floating-tooltip-2';

var minPriceLine = null
var avgPriceLine = null
var maxPriceLine = null

const rightPriceScale = {
  scaleMargins: {
    top: 0.3,
    bottom: 0.25,
  },
}

const timeScale = {
  tickMarkFormatter: (time) => {
    var h = new Date(time).getHours();
    var m = new Date(time).getMinutes();
    return h + ':' + m;
    // const date = new Date(time.year, time.month, time.day);
    // return date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
  },
}

const blue = {topColor: 'rgba(38, 198, 218, 0.56)',
bottomColor: 'rgba(38, 198, 218, 0.04)',
lineColor: 'rgba(38, 198, 218, 1)'}

const purple = {
  topColor: 'rgba(156, 39, 176, 1)',
	bottomColor: 'rgba(41, 121, 255, 0.1)',
	lineColor: 'rgba(156, 39, 176, 0.8)'
}

export default ({ ...props }) => {
  const refChart = useRef(null);
  const [darkMode, setDarkmode] = useState(false)
  const [data, setData] = useState([{
    "time": 905299200,
    "value": 0.25
  }, {
    "time": 918781200,
    "value": 0.0
  }, {
    "time": 965952000,
    "value": 0.25
  }, {
    "time": 983408400,
    "value": 0.15
  }, {
    "time": 985050000,
    "value": 0.0
  }, {
    "time": 1152835200,
    "value": 0.25
  }, {
    "time": 1172019600,
    "value": 0.5
  }, {
    "time": 1225414800,
    "value": 0.3
  }, {
    "time": 1229648400,
    "value": 0.1
  }, {
    "time": 1286236800,
    "value": 0.1
  }, {
    "time": 1454029200,
    "value": -0.1
  }, {
    "time": 1454288400,
    "value": 0.0
  }]);

  useEffect(() => {
    const interval = setInterval(() => {
      const tmp = [...data.slice(1)]
      setData(data => [...tmp, {
        time: Date.now(),
        value : Math.random()
      }])
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [data]);

  useEffect(() => {
    makeChart()
  }, []);

  useEffect(() => {
    makeChart()
    areaSeries.setData(data)
    calcPrice()
  }, [data, darkMode]);


  const calcPrice = () => {
    var minimumPrice = data[0].value;
    var maximumPrice = minimumPrice;
    for (var i = 1; i < data.length; i++) {
      var price = data[i].value;
      if (price > maximumPrice) {
        maximumPrice = price;
      }
      if (price < minimumPrice) {
        minimumPrice = price;
      }
    }
    var avgPrice = (maximumPrice + minimumPrice) / 2;

    var lineWidth = 2;
    minPriceLine = {
      price: minimumPrice,
      color: '#be1238',
      lineWidth: lineWidth,
      lineStyle: LineStyle.Solid,
      axisLabelVisible: true,
      title: 'minimum price',
    };
    avgPriceLine = {
      price: avgPrice,
      color: '#be1238',
      lineWidth: lineWidth,
      lineStyle: LineStyle.Solid,
      axisLabelVisible: true,
      title: 'average price',
    };
    maxPriceLine = {
      price: maximumPrice,
      color: '#be1238',
      lineWidth: lineWidth,
      lineStyle: LineStyle.Solid,
      axisLabelVisible: true,
      title: 'maximum price',
    }

    areaSeries.createPriceLine(minPriceLine);
    areaSeries.createPriceLine(avgPriceLine);
    areaSeries.createPriceLine(maxPriceLine);
  }

  const crosshair = darkMode ?
    {
      vertLine: {
        width: 5,
        color: 'rgba(224, 227, 235, 0.1)',
        style: 0
      },
      horzLine: {
        visible: false,
        labelVisible: false
      }
    } : {
      vertLine: {
        labelVisible: false
      }
    }

  const grid = darkMode ?
    {
      vertLines: { color: 'rgba(42, 46, 57, 0)' },
      horzLines: { color: 'rgba(42, 46, 57, 0)' }
    } : {
      horzLines: { color: '#eee' },
      vertLines: { color: '#ffffff' }
    }

  const layout = darkMode ? { textColor: '#d1d4dc', backgroundColor: '#000000' }
    : { backgroundColor: '#ffffff', textColor: '#333' }

  const makeChart = () => {
    let chart = null
    const elements = document.getElementsByClassName("tv-lightweight-charts")
    while (elements.length > 0) elements[0].remove();

    chart = createChart(refChart.current, {
      width: 1000,
      height: 300,
      layout,
      rightPriceScale,
      timeScale,
      crosshair,
      grid
    })

    areaSeries = chart.addAreaSeries({
     ...blue,
      lineWidth: 1,
      crossHairMarkerVisible: false,
    })

    chart.timeScale().fitContent()

    appendTooltip(chart)
  }

  const appendTooltip = chart => chart.subscribeCrosshairMove(param => {
    if (param.point === undefined || !param.time || param.point.x < 0 || param.point.x > refChart.current.clientWidth || param.point.y < 0 || param.point.y > refChart.current.clientHeight) {
      toolTip.style.display = 'none';
    } else {
      const dateStr = businessDayToString(param.time);
      toolTip.style.display = 'block';
      var price = param.seriesPrices.get(areaSeries);
      toolTip.innerHTML = '<div style="color: #009688">BTC</div><div style="font-size: 24px; margin: 4px 0px; color: #21384d">' + Math.round(100 * price) / 100 + '</div><div style="color: #21384d">' + dateStr + '</div>';
      var coordinate = areaSeries.priceToCoordinate(price);
      var shiftedCoordinate = param.point.x - 50;
      if (coordinate === null) {
        return;
      }
      shiftedCoordinate = Math.max(0, Math.min(refChart.current.clientWidth - toolTipWidth, shiftedCoordinate));
      var coordinateY = coordinate - toolTipHeight - toolTipMargin > 0 ? coordinate - toolTipHeight - toolTipMargin : Math.max(0, Math.min(refChart.current.clientHeight - toolTipHeight - toolTipMargin, coordinate + toolTipMargin));
      toolTip.style.left = shiftedCoordinate + 'px';
      toolTip.style.top = coordinateY + 'px';
    }
    refChart.current.appendChild(toolTip);
  })

  return <>
    <div ref={refChart}>
    </div>
    <button onClick={() => {
      const tmp = data.map(value => { return { ...value, value: Math.random() } })
      setData(tmp)
    }}>random</button>

    <button onClick={() => setDarkmode(!darkMode)}>
      {darkMode ? 'Light mode' : 'Dark mode'}
    </button>
  </>
}
