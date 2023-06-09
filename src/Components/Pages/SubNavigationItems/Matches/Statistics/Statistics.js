import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Text } from 'recharts';

const data = [
  { name: 'Category 1', value: 34 },
  { name: 'Category 2', value: 66 },
];

const Statistics = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ marginRight: '20px' }}>
        <Text style={{ textAlign: 'center', marginBottom: '10px' }}>Chart 1</Text>
        <BarChart width={300} height={100} data={data} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" orientation="top" tick={{ dx: -10 }} domain={[0, 100]} />
          <YAxis type="category" dataKey="name" tick={{ dx: -10 }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
          <Text
            x={10}
            y={45}
            textAnchor="start"
            fill="#333"
            fontWeight="bold"
          >
            {data[0].value}
          </Text>
        </BarChart>
      </div>

      <div>
        <Text style={{ textAlign: 'center', marginBottom: '10px' }}>Chart 2</Text>
        <BarChart width={300} height={100} data={data} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" orientation="top" tick={{ dx: -10 }} domain={[0, 100]} />
          <YAxis type="category" dataKey="name" tick={{ dx: -10 }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
          <Text
            x={290}
            y={45}
            textAnchor="end"
            fill="#333"
            fontWeight="bold"
          >
            {data[1].value}
          </Text>
        </BarChart>
      </div>
    </div>
  );
};

export default Statistics;

