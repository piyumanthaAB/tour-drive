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
import useFetch from '../../../hooks/useFetch';
import styled from 'styled-components';
import ClipLoader from 'react-spinners/ClipLoader';

// const data = [
//   {
//     name: 'bookings',
//     city: 4000,
//     hiking: 5000,
//     adventure: 8000,
//     historical: 10000,
//     cultural: 2000,
//   },
// ];

// const ratingsAvg = [
//   {
//     name: 'city',
//     avg: 4.5,
//   },
//   { name: 'hiking', avg: 3.5 },
//   { name: 'adventure', avg: 2.5 },
//   { name: 'historical', avg: 4.8 },
//   { name: 'cultural', avg: 4.1 },
// ];

const SpinnerContainer = styled.div`
  width: 100%;
  min-height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TourStatsComp = () => {
  const {
    data: bookings,
    isPending: bookingsPending,
    isError: bookingsError,
  } = useFetch('/api/v1/stats/categories-vs-bookings');
  const {
    data: income,
    isPending: incomePending,
    isError: incomeError,
  } = useFetch('/api/v1/stats/categories-vs-income');
  const {
    data: ratingsAverage,
    isPending: ratingsAveragePending,
    isError: ratingsAverageError,
  } = useFetch('/api/v1/stats/categories-vs-average-ratings');

  return (
    <>
      <s.Container>
        <h1>Tour Statistics</h1>

        <s.ChartContainer>
          <h1>Tour Bookings vs Categories</h1>

          {bookingsPending && (
            <SpinnerContainer>
              {' '}
              <ClipLoader size={60} />
            </SpinnerContainer>
          )}
          {bookings && !bookingsPending && (
            <BarChart
              width={1000}
              height={300}
              data={[bookings.data.data]}
              margin={{
                top: 30,
                right: 60,
                left: 80,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="name" tick={{ fontSize: 14 }} />
              <YAxis
                label={{
                  value: 'Total Count',
                  angle: 0,
                  position: 'insideLeft',
                  style: { fontSize: 14 },
                  offset: -50,
                }}
              />
              <Tooltip />
              <Legend style={{ fontSize: 40 }} />
              <Bar
                label={{ fill: '#eee', fontSize: 15 }}
                dataKey="city"
                fill="#8884d8"
              />
              <Bar
                label={{ fill: '#eee', fontSize: 15 }}
                dataKey="hiking"
                fill="#82ca9d"
              />
              <Bar
                label={{ fill: '#eee', fontSize: 15 }}
                dataKey="adventure"
                fill="#ca82c6"
              />
              <Bar
                label={{ fill: '#eee', fontSize: 15 }}
                dataKey="historical"
                fill="#82c5ca"
              />
              <Bar
                label={{ fill: '#eee', fontSize: 15 }}
                dataKey="cultural"
                fill="#ca828c"
              />
            </BarChart>
          )}
        </s.ChartContainer>

        <s.ChartContainer>
          <h1>Tour Income vs Categories</h1>

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
                  dataKey="city"
                  fill="#8884d8"
                />
                <Bar
                  label={{ fill: '#eee', fontSize: 15 }}
                  dataKey="hiking"
                  fill="#82ca9d"
                />
                <Bar
                  label={{ fill: '#eee', fontSize: 15 }}
                  dataKey="adventure"
                  fill="#ca82c6"
                />
                <Bar
                  label={{ fill: '#eee', fontSize: 15 }}
                  dataKey="historical"
                  fill="#82c5ca"
                />
                <Bar
                  label={{ fill: '#eee', fontSize: 15 }}
                  dataKey="cultural"
                  fill="#ca828c"
                />
              </BarChart>
            </>
          )}
        </s.ChartContainer>

        {/* <s.ChartContainer>
          <h1>Tour Ratings Average vs Categories</h1>

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
                <Tooltip style={{ fontSize: 16 }} />
                <Legend style={{ fontSize: 40 }} />

                <Bar
                  label={{ fill: '#eee', fontSize: 15 }}
                  dataKey="avg"
                  fill="#8884d8"
                />
              </BarChart>
            </>
          )}
        </s.ChartContainer> */}
      </s.Container>
    </>
  );
};

export default TourStatsComp;
