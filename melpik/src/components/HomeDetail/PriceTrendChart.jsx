import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  LabelList,
} from 'recharts';

const CustomTooltip = () => {
  return null;
};

const PriceTrendChart = ({ data }) => {
  const renderCustomLabel = (props) => {
    const { x, y, value, index } = props;
    const isCurrent = data[index].date === '현재';
    const fill = isCurrent ? '#f5a623' : '#000';

    return (
      <text
        x={x}
        y={y + 20}
        dy={0}
        fill={fill}
        fontSize={12}
        textAnchor='middle'
      >
        {value.toLocaleString()}
      </text>
    );
  };

  const renderCustomTick = (date) => {
    const isCurrent = date === '현재';
    return isCurrent ? date : date;
  };

  return (
    <div
      style={{
        marginBottom: '8px',
      }}
    >
      <div
        style={{
          marginBottom: '4px',
        }}
      >
        <label
          style={{
            fontSize: '10px',
            fontWeight: '700',
            marginBottom: '10px',
            display: 'block',
          }}
        >
          가격변동 안내
        </label>
      </div>
      <div
        style={{
          border: '1px solid #dddddd',
          padding: '20px',
        }}
      >
        <ResponsiveContainer width='100%' height={180}>
          <LineChart
            data={data}
            margin={{ top: 10, right: 30, left: 30, bottom: 0 }}
          >
            <CartesianGrid
              vertical={true}
              horizontal={false}
              stroke='#e0e0e0'
              strokeDasharray='3 3'
            />
            <XAxis
              dataKey='date'
              tick={{ fontSize: 12 }}
              tickFormatter={renderCustomTick}
              axisLine={false}
              tickLine={false}
            />
            <YAxis hide={true} />
            <Tooltip content={<CustomTooltip />} />{' '}
            <Line
              type='monotone'
              dataKey='price'
              stroke='#f5a623'
              strokeWidth={2}
              dot={{ stroke: '#f5a623', strokeWidth: 2, r: 6 }}
              activeDot={{ r: 10 }}
            >
              <LabelList dataKey='price' content={renderCustomLabel} />
            </Line>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PriceTrendChart;
