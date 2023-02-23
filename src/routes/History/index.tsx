import DatePicker from 'antd/es/date-picker';
import Input from 'antd/es/input';
import Space from 'antd/es/space';
import Table from 'antd/es/table';
import { format } from 'date-fns';
import { useState } from 'react';

const { RangePicker } = DatePicker;
const { Search } = Input;

const HistoryPage = () => {
  const [deliveries] = useState([
    {
      id: 1,
      number: '123',
      street: 'Main St',
      deliveryDate: new Date(2022, 1, 1),
    },
    {
      id: 2,
      number: '456',
      street: 'Elm St',
      deliveryDate: new Date(2022, 1, 2),
    },
    {
      id: 3,
      number: '789',
      street: 'Oak St',
      deliveryDate: new Date(2022, 1, 3),
    },
    {
      id: 4,
      number: '321',
      street: 'Maple St',
      deliveryDate: new Date(2022, 1, 4),
    },
    {
      id: 5,
      number: '654',
      street: 'Cedar St',
      deliveryDate: new Date(2022, 1, 5),
    },
  ]);

  const [filteredDeliveries, setFilteredDeliveries] = useState(deliveries);

  const onRangePickerChange = (dates: any) => {
    const filtered = deliveries.filter(
      (d) => dates[0] <= d.deliveryDate && d.deliveryDate <= dates[1],
    );
    setFilteredDeliveries(filtered);
  };

  const onSearch = (value: string) => {
    const filtered = deliveries.filter(
      (d) => d.number.includes(value) || d.street.toLowerCase().includes(value.toLowerCase()),
    );
    setFilteredDeliveries(filtered);
  };

  const columns = [
    {
      title: 'Number',
      dataIndex: 'number',
      key: 'number',
    },
    {
      title: 'Street',
      dataIndex: 'street',
      key: 'street',
    },
    {
      title: 'Delivery Date',
      dataIndex: 'deliveryDate',
      key: 'deliveryDate',
      render: (text: number) => format(text, 'dd/MM/yyyy'),
    },
  ];

  return (
    <>
      <Space direction="vertical">
        <RangePicker onChange={onRangePickerChange} />
        <Search placeholder="Search by number or street" onSearch={onSearch} />
      </Space>
      <Table columns={columns} dataSource={filteredDeliveries} />
      <p>Total deliveries: {filteredDeliveries.length}</p>
    </>
  );
};

export default HistoryPage;
