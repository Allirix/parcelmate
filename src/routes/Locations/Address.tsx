import { useState } from 'react';

import { AutoComplete, Button, Form, Input, Space, Table } from 'antd';
import {
  useAddAddress,
  useAddressList,
  useRemoveAddress,
} from '../../store/selectors/addresses.selector';
import { useLocationList } from '../../store/selectors/locations.selector';
import { Address, FullAddress, Location } from '../../store/types';
import { getLocationId } from '../../store/utils';

const { Column } = Table;

export function AddressTable() {
  const [searchNumber, setSearchNumber] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [searchSuburb, setSearchSuburb] = useState('');
  const addressList = useAddressList();
  const removeAddress = useRemoveAddress();

  const filteredData = addressList.filter(
    ({ number, name, suburb }) =>
      number.toLowerCase().includes(searchNumber.toLowerCase()) &&
      name.toLowerCase().includes(searchLocation.toLowerCase()) &&
      suburb.toLowerCase().includes(searchSuburb.toLowerCase()),
  );

  return (
    <>
      <Input.Search
        placeholder="Search number"
        onChange={(e) => setSearchNumber(e.target.value)}
        value={searchNumber}
      />
      <Input.Search
        placeholder="Search location"
        onChange={(e) => setSearchLocation(e.target.value)}
        value={searchLocation}
      />
      <Input.Search
        placeholder="Search suburb"
        onChange={(e) => setSearchSuburb(e.target.value)}
        value={searchSuburb}
      />
      <Table dataSource={filteredData}>
        <Column
          title="Number"
          key="number"
          dataIndex="number"
          sorter={(a: FullAddress, b: FullAddress) => a.number.localeCompare(b.number)}
        />

        <Column
          title="Location"
          key="location"
          sorter={(a: FullAddress, b: FullAddress) => a.name.localeCompare(b.name)}
          render={(_, { name, type }: FullAddress) => `${name} ${type}`}
        />

        <Column
          title="Suburb"
          key="suburb"
          dataIndex="suburb"
          sorter={(a: FullAddress, b: FullAddress) => a.suburb.localeCompare(b.suburb)}
        />
        <Column
          title="Action"
          render={(_: any, address: FullAddress) => (
            <Space size="middle">
              <Button onClick={() => removeAddress(address)} style={{ color: 'blue' }}>
                Remove
              </Button>
            </Space>
          )}
        />
      </Table>
    </>
  );
}

export function AddressForm({ form, close }: any) {
  const addAddress = useAddAddress();

  const locationList = useLocationList();

  const [options, setOptions] = useState<Location[]>([]);

  const handleSearch = (value: string) => {
    const filteredOptions = locationList.filter((location) =>
      getLocationId(location).toLowerCase().startsWith(value.toLowerCase()),
    );
    setOptions(filteredOptions);
  };

  const handleSubmit = (values: Address) => {
    console.log(values);
    addAddress(values);
    close();
  };

  return (
    <Form form={form} onFinish={handleSubmit}>
      <Form.Item label="Number" name="number">
        <Input type="number" />
      </Form.Item>

      <Form.Item label="Location" name="locationId">
        <AutoComplete
          options={options.map((location: Location) => ({
            value: getLocationId(location),
          }))}
          onSearch={handleSearch}
          onSelect={(value) => form.setFieldsValue({ locationId: value })}
        >
          <Input placeholder="Search locations" />
        </AutoComplete>
      </Form.Item>
    </Form>
  );
}
