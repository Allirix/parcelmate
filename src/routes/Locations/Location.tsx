import { useState } from 'react';

import { Button, Form, Input, Select, Space, Table } from 'antd';
import {
  useAddLocation,
  useLocationList,
  useRemoveLocation,
} from '../../store/selectors/locations.selector';
import { useSuburbList } from '../../store/selectors/suburbs.selector';
import { Location } from '../../store/types';

const { Column } = Table;

export function LocationTable({ filterSuburb = '', filterLocation = '' }) {
  const [searchSuburb, setSearchSuburb] = useState(filterSuburb);
  const [searchLocation, setSearchLocation] = useState(filterLocation);
  const locationList = useLocationList();
  const removeLocation = useRemoveLocation();

  const filteredData = locationList.filter(
    ({ name, suburb }) =>
      name.toLowerCase().includes(searchLocation.toLowerCase()) &&
      suburb.toLowerCase().includes(searchSuburb.toLowerCase()),
  );

  return (
    <>
      <Input.Search
        placeholder="Search locations"
        onChange={(e) => setSearchLocation(e.target.value)}
        value={searchLocation}
      />
      <Input.Search
        placeholder="Search suburbs"
        onChange={(e) => setSearchSuburb(e.target.value)}
        value={searchSuburb}
      />
      <Table dataSource={filteredData}>
        <Column
          title="Location"
          key="location"
          sorter={(a: Location, b: Location) => a.name.localeCompare(b.name)}
          render={(_, { name, type }: Location) => `${name} ${type}`}
        />

        <Column
          title="Suburb"
          key="suburb"
          dataIndex="suburb"
          sorter={(a: any, b: any) => a.suburb.localeCompare(b.suburb)}
        />
        <Column
          title="Action"
          render={(_: any, location: Location) => (
            <Space size="middle">
              <Button onClick={() => removeLocation(location)}>Remove</Button>
            </Space>
          )}
        />
      </Table>
    </>
  );
}

export function LocationForm({ form, close }: any) {
  const addLocation = useAddLocation();

  const suburbList = useSuburbList();

  const handleSubmit = (values: Location) => {
    addLocation(values);
    close();
  };
  return (
    <Form form={form} onFinish={handleSubmit}>
      <Form.Item label="Name" name="name">
        <Input />
      </Form.Item>
      <Form.Item label="Type" name="type">
        <Input />
      </Form.Item>
      <Form.Item label="Suburb" name="suburb">
        <Select>
          {suburbList.map((suburb) => (
            <Select.Option key={suburb.name} value={suburb.name}>
              {suburb.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
    </Form>
  );
}
