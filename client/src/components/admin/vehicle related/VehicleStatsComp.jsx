import React from 'react';
import styled from 'styled-components';
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
    car: 4000,
    van: 5000,
    bike: 8000,
    suv: 10000,
  },
  {
    name: 'Feb',
    car: 4000,
    van: 5000,
    bike: 8000,
    suv: 10000,
  },
  {
    name: 'Mar',
    car: 4000,
    van: 5000,
    bike: 8000,
    suv: 10000,
  },
  {
    name: 'Apr',
    car: 4000,
    van: 5000,
    bike: 8000,
    suv: 10000,
  },
  {
    name: 'May',
    car: 4000,
    van: 5000,
    bike: 8000,
    suv: 10000,
  },
  {
    name: 'June',
    car: 4000,
    van: 5000,
    bike: 8000,
    suv: 10000,
  },
  {
    name: 'July',
    car: 4000,
    van: 5000,
    bike: 8000,
    suv: 10000,
  },
  {
    name: 'Aug',
    car: 4000,
    van: 5000,
    bike: 8000,
    suv: 10000,
  },
  {
    name: 'Sept',
    car: 4000,
    van: 5000,
    bike: 8000,
    suv: 10000,
  },
  {
    name: 'Oct',
    car: 4000,
    van: 5000,
    bike: 8000,
    suv: 10000,
  },
  {
    name: 'Nov',
    car: 4000,
    van: 5000,
    bike: 8000,
    suv: 10000,
  },
  {
    name: 'Dec',
    car: 4000,
    van: 5000,
    bike: 8000,
    suv: 10000,
  },
];

const ratingsAvg = [
  {
    name: 'car',
    avg: 4.5,
  },
  { name: 'van', avg: 3.5 },
  { name: 'bike', avg: 2.5 },
  { name: 'suv', avg: 4.8 },
];

const Container = styled.div`
  /* max-width: 50%; */
  min-height: 10rem;
  padding: 3rem 6rem;
  /* background-color: red; */
  overflow-x: scroll;
`;

const ChartContainer = styled.div`
  max-width: 100%;
  padding: 2rem;
  /* justify-content: center; */
  /* align-items: center; */
  /* background-color: green; */
`;

const VehicleStatsComp = () => {
  return (
    <>
      <Container>
        <h1>Vehicle Statistics</h1>

        <ChartContainer>
          <h2>Vehicle Rentings vs Vehicle Type</h2>
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
            <Bar dataKey="car" fill="#8884d8" />
            <Bar dataKey="van" fill="#82ca9d" />
            <Bar dataKey="bike" fill="#ca82c6" />
            <Bar dataKey="suv" fill="#82c5ca" />
          </BarChart>
        </ChartContainer>

        <ChartContainer>
          <h2>Vehicle Renting Income vs Vehicle Types</h2>

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
            <Bar dataKey="car" fill="#8884d8" />
            <Bar dataKey="van" fill="#82ca9d" />
            <Bar dataKey="bike" fill="#ca82c6" />
            <Bar dataKey="suv" fill="#82c5ca" />
          </BarChart>
        </ChartContainer>

        <ChartContainer>
          <h2>Vehicle Ratings Average vs Vehicle Types</h2>

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
        </ChartContainer>
      </Container>
    </>
  );
};

export default VehicleStatsComp;
