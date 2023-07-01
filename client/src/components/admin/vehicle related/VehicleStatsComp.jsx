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

import useFetch from '../../../hooks/useFetch';
import ClipLoader from 'react-spinners/ClipLoader';

// const data = [
//   {
//     name: 'January',
//     car: 4000,
//     van: 5000,
//     bike: 8000,
//     suv: 10000,
//   },
//   {
//     name: 'Feb',
//     car: 4000,
//     van: 5000,
//     bike: 8000,
//     suv: 10000,
//   },
//   {
//     name: 'Mar',
//     car: 4000,
//     van: 5000,
//     bike: 8000,
//     suv: 10000,
//   },
//   {
//     name: 'Apr',
//     car: 4000,
//     van: 5000,
//     bike: 8000,
//     suv: 10000,
//   },
//   {
//     name: 'May',
//     car: 4000,
//     van: 5000,
//     bike: 8000,
//     suv: 10000,
//   },
//   {
//     name: 'June',
//     car: 4000,
//     van: 5000,
//     bike: 8000,
//     suv: 10000,
//   },
//   {
//     name: 'July',
//     car: 4000,
//     van: 5000,
//     bike: 8000,
//     suv: 10000,
//   },
//   {
//     name: 'Aug',
//     car: 4000,
//     van: 5000,
//     bike: 8000,
//     suv: 10000,
//   },
//   {
//     name: 'Sept',
//     car: 4000,
//     van: 5000,
//     bike: 8000,
//     suv: 10000,
//   },
//   {
//     name: 'Oct',
//     car: 4000,
//     van: 5000,
//     bike: 8000,
//     suv: 10000,
//   },
//   {
//     name: 'Nov',
//     car: 4000,
//     van: 5000,
//     bike: 8000,
//     suv: 10000,
//   },
//   {
//     name: 'Dec',
//     car: 4000,
//     van: 5000,
//     bike: 8000,
//     suv: 10000,
//   },
// ];

// const ratingsAvg = [
//   {
//     name: 'car',
//     avg: 4.5,
//   },
//   { name: 'van', avg: 3.5 },
//   { name: 'bike', avg: 2.5 },
//   { name: 'suv', avg: 4.8 },
// ];

const SpinnerContainer = styled.div`
  width: 100%;
  min-height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
  const {
    data: rentings,
    isPending: rentingsPending,
    isError: rentingsError,
  } = useFetch('/api/v1/stats/rentings-vs-vehicle-types');
  const {
    data: income,
    isPending: incomePending,
    isError: incomeError,
  } = useFetch('/api/v1/stats/type-vs-income');
  const {
    data: ratingsAverage,
    isPending: ratingsAveragePending,
    isError: ratingsAverageError,
  } = useFetch('/api/v1/stats/type-vs-ratings-average');

  if (ratingsAverage) {
    console.log({ avg: ratingsAverage.data.data });
  }
  return (
    <>
      <Container>
        <h1>Vehicle Statistics</h1>

        <ChartContainer>
          <h1>Vehicle Rentings vs Vehicle Type</h1>

          {rentingsPending && (
            <SpinnerContainer>
              {' '}
              <ClipLoader size={60} />
            </SpinnerContainer>
          )}

          {rentings && !rentingsPending && (
            <>
              <BarChart
                width={1000}
                height={300}
                data={[rentings.data.data]}
                margin={{
                  top: 30,
                  right: 30,
                  left: 80,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tick={{ fontSize: 14 }} />
                <YAxis
                  label={{
                    value: 'Total Rentings ',
                    angle: 0,
                    position: 'insideLeft',
                    style: { fontSize: 14 },
                    offset: -50,
                  }}
                />
                <Tooltip />
                <Legend />
                <Bar
                  label={{ fill: '#eee', fontSize: 15 }}
                  dataKey="car"
                  fill="#8884d8"
                />
                <Bar
                  label={{ fill: '#eee', fontSize: 15 }}
                  dataKey="van"
                  fill="#82ca9d"
                />
                <Bar
                  label={{ fill: '#eee', fontSize: 15 }}
                  dataKey="bike"
                  fill="#ca82c6"
                />
                <Bar
                  label={{ fill: '#eee', fontSize: 15 }}
                  dataKey="suv"
                  fill="#82c5ca"
                />
              </BarChart>
            </>
          )}
        </ChartContainer>

        <ChartContainer>
          <h1>Vehicle Renting Income vs Vehicle Types</h1>

          {incomePending && (
            <SpinnerContainer>
              {' '}
              <ClipLoader size={60} />
            </SpinnerContainer>
          )}

          {income && !incomePending && (
            <>
              <BarChart
                width={1000}
                height={300}
                data={[income.data.data]}
                margin={{
                  top: 30,
                  right: 30,
                  left: 80,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tick={{ fontSize: 14 }} />
                <YAxis
                  label={{
                    value: 'Total Income',
                    angle: 0,
                    position: 'insideLeft',
                    style: { fontSize: 14 },
                    offset: -50,
                  }}
                />
                <Tooltip />
                <Legend />
                <Bar
                  label={{ fill: '#eee', fontSize: 15 }}
                  dataKey="car"
                  fill="#8884d8"
                />
                <Bar
                  label={{ fill: '#eee', fontSize: 15 }}
                  dataKey="van"
                  fill="#82ca9d"
                />
                <Bar
                  label={{ fill: '#eee', fontSize: 15 }}
                  dataKey="bike"
                  fill="#ca82c6"
                />
                <Bar
                  label={{ fill: '#eee', fontSize: 15 }}
                  dataKey="suv"
                  fill="#82c5ca"
                />
              </BarChart>
            </>
          )}
        </ChartContainer>

        {/* <ChartContainer>
          <h1>Vehicle Ratings Average vs Vehicle Types</h1>

          {!ratingsAverage && (
            <SpinnerContainer>
              {' '}
              <ClipLoader size={60} />
            </SpinnerContainer>
          )}

          {ratingsAverage && !ratingsAveragePending && (
            <>
              <BarChart
                width={600}
                height={300}
                data={ratingsAverage.data.data}
                margin={{
                  top: 30,
                  right: 30,
                  left: 80,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tick={{ fontSize: 14 }} />
                <YAxis
                  domain={[0, 5]}
                  label={{
                    value: 'Average Rating',
                    angle: 0,
                    position: 'insideLeft',
                    style: { fontSize: 14 },
                    offset: -50,
                  }}
                />
                <Tooltip />
                <Legend />
                <Bar
                  label={{ fill: '#eee', fontSize: 15 }}
                  dataKey="avg"
                  fill="#8884d8"
                />
              </BarChart>
            </>
          )}
        </ChartContainer> */}
      </Container>
    </>
  );
};

export default VehicleStatsComp;
