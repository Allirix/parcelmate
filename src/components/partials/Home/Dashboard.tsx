// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/require-default-props */
import Card from 'antd/es/card';
import Col from 'antd/es/col';
import Row from 'antd/es/row';
import Statistic from 'antd/es/statistic';
import Typography from 'antd/es/typography';

import { Line } from 'react-chartjs-2';

import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
  labels: [
    '7am',
    '8am',
    '9am',
    '10am',
    '11am',
    '12pm',
    '1pm',
    '2pm',
    '3pm',
    '4pm',
    '5pm',
    '6pm',
    '7pm',
  ],
  datasets: [
    {
      label: 'Test Data',
      data: [20, 30, 25, 40, 35, 50, 45, 55, 50, 60, 55, 70, 65],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export const LineGraph = () => (
  <div>
    <Line data={data} options={options} />
  </div>
);

type DashboardProps = {
  totalDeliveries?: number;
  deliveriesLeft?: number;
  totalPickups?: number;
  totalRevenue?: number;
  totalLocations?: number;
  pickupLocations?: number;
  deliveryRate?: number;
  avgParcelTime?: number;
  estimatedFinishTime?: Date;
};

type StatisticItemProps = {
  title: string;
  value: number | string;
  suffix: string;
};

const StatisticItem = ({ title, value, suffix }: StatisticItemProps) => (
  <Col style={{ width: '100%', maxWidth: '180px' }}>
    <Card bordered={false} style={{ padding: 0 }}>
      <Statistic title={title} value={value} suffix={suffix} style={{ margin: '16px 0' }} />
    </Card>
  </Col>
);

export default function Dashboard({
  totalDeliveries = 0,
  deliveriesLeft = 0,
  totalPickups = 0,
  totalRevenue = 0,
  totalLocations = 0,
  pickupLocations = 0,
  deliveryRate = 0,
  avgParcelTime = 0,
  estimatedFinishTime = new Date(),
}: DashboardProps) {
  return (
    <>
      <Typography.Title level={3}>Delivery Dashboard</Typography.Title>
      <Row justify="center" gutter={[4, 4]}>
        <StatisticItem title="Total Deliveries" value={totalDeliveries} suffix="" />
        <StatisticItem title="Deliveries Left" value={deliveriesLeft} suffix="" />
        <StatisticItem title="Total Pickups" value={totalPickups} suffix="" />
        <StatisticItem title="Total Revenue" value={totalRevenue} suffix="$" />
        <StatisticItem title="Total Locations" value={totalLocations} suffix="" />
        <StatisticItem title="Pickup Locations" value={pickupLocations} suffix="" />
        <StatisticItem title="Delivery Rate" value={deliveryRate} suffix="%" />
        <StatisticItem title="Average Parcel Time" value={avgParcelTime} suffix="min" />
        <StatisticItem
          title="Estimated Finish Time"
          value={estimatedFinishTime.toLocaleString()}
          suffix=""
        />
      </Row>
      <LineGraph />
    </>
  );
}
