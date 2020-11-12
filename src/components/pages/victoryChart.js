import React from 'react';
import { VictoryScatter, VictoryChart, VictoryTheme, VictoryLegend } from 'victory';

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
];

export default class App extends React.Component {
  render () {
    return (<div style={{ width: '50%', margin: 50 }}>
      <VictoryChart
        theme={VictoryTheme.grayscale}
        domain={{ x: [0, 5], y: [0, 7] }}
      >
        <VictoryLegend x={125} y={50}
          title="Legend"
          centerTitle
          orientation="vertical"
          gutter={20}
          style={{ border: { stroke: "black" }, title: { fontSize: 12 } }}
          data={[
            { name: "One", symbol: { fill: "tomato", type: "star" } },
            { name: "Two", symbol: { fill: "orange" } },
            { name: "Three", symbol: { fill: "gold" } }
          ]}
        />
        <VictoryScatter
          style={{ data: { fill: "#c43a31" } }}
          size={7}
          data={[
            { x: 1, y: 2 },
            { x: 2, y: 3 },
            { x: 3, y: 5 },
            { x: 4, y: 4 },
            { x: 5, y: 7 }
          ]}
        />
      </VictoryChart>
    </div>
    )
  }
}
