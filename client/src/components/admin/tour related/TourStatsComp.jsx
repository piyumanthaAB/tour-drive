import React from 'react';
import * as s from './TourStatsElements';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'January',
    city: 4000,
    hiking: 5000,
    adventure: 8000,
    historical: 10000,
    cultural: 2000,
  },
  {
    name: 'February',
    city: 4000,
    hiking: 5000,
    adventure: 8000,
    historical: 10000,
    cultural: 2000,
  },
  {
    name: 'March',
    city: 4000,
    hiking: 5000,
    adventure: 8000,
    historical: 10000,
    cultural: 2000,
  },
  {
    name: 'January',
    city: 4000,
    hiking: 5000,
    adventure: 8000,
    historical: 10000,
    cultural: 2000,
  },
  {
    name: 'February',
    city: 4000,
    hiking: 5000,
    adventure: 8000,
    historical: 10000,
    cultural: 2000,
  },
  {
    name: 'March',
    city: 4000,
    hiking: 5000,
    adventure: 8000,
    historical: 10000,
    cultural: 2000,
  },
  {
    name: 'January',
    city: 4000,
    hiking: 5000,
    adventure: 8000,
    historical: 10000,
    cultural: 2000,
  },
  {
    name: 'February',
    city: 4000,
    hiking: 5000,
    adventure: 8000,
    historical: 10000,
    cultural: 2000,
  },
  {
    name: 'March',
    city: 4000,
    hiking: 5000,
    adventure: 8000,
    historical: 10000,
    cultural: 2000,
  },
  {
    name: 'January',
    city: 4000,
    hiking: 5000,
    adventure: 8000,
    historical: 10000,
    cultural: 2000,
  },
  {
    name: 'February',
    city: 4000,
    hiking: 5000,
    adventure: 8000,
    historical: 10000,
    cultural: 2000,
  },
  {
    name: 'March',
    city: 4000,
    hiking: 5000,
    adventure: 8000,
    historical: 10000,
    cultural: 2000,
  },
];

const ratingsAvg = [
  {
    name: 'city',
    avg: 4.5,
  },
  { name: 'hiking', avg: 3.5 },
  { name: 'adventure', avg: 2.5 },
  { name: 'historical', avg: 4.8 },
  { name: 'cultural', avg: 4.1 },
];
const TourStatsComp = () => {
  return (
    <>
      <s.Container>
        <h1>Tour Statistics</h1>

        <s.ChartContainer>
          <h2>Tour Bookings vs Categories</h2>
          <BarChart
            width={1800}
            height={300}
            data={data}
            margin={{
              top: 30,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="city" fill="#8884d8" />
            <Bar dataKey="hiking" fill="#82ca9d" />
            <Bar dataKey="adventure" fill="#ca82c6" />
            <Bar dataKey="historical" fill="#82c5ca" />
            <Bar dataKey="cultural" fill="#ca828c" />
          </BarChart>
        </s.ChartContainer>

        <s.ChartContainer>
          <h2>Tour Income vs Categories</h2>

          <BarChart
            width={1800}
            height={300}
            data={data}
            margin={{
              top: 30,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="city" fill="#8884d8" />
            <Bar dataKey="hiking" fill="#82ca9d" />
            <Bar dataKey="adventure" fill="#ca82c6" />
            <Bar dataKey="historical" fill="#82c5ca" />
            <Bar dataKey="cultural" fill="#ca828c" />
          </BarChart>
        </s.ChartContainer>

        <s.ChartContainer>
          <h2>Tour Ratings Average vs Categories</h2>

          <BarChart
            width={600}
            height={300}
            data={ratingsAvg}
            margin={{
              top: 30,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="avg" fill="#8884d8" />
          </BarChart>
        </s.ChartContainer>
      </s.Container>
    </>
  );
};

export default TourStatsComp;
