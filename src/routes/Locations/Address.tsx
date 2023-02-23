import { useEffect, useRef, useState } from 'react';

import AutoComplete from 'antd/es/auto-complete';
import Button from 'antd/es/button';
import Form from 'antd/es/form';
import Input from 'antd/es/input';
import Space from 'antd/es/space';
import Table from 'antd/es/table';
import {
  useAddAddress,
  useAddressList,
  useRemoveAddress,
} from '../../store/selectors/addresses.selector';
import { useLocationList } from '../../store/selectors/locations.selector';
import { FullAddress } from '../../store/types';
import { getAddressId, getLocationId } from '../../store/utils';
import { splitAddress } from './utils';

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

export function AddressForm({ form, close = () => {}, onNext = () => {}, children }: any) {
  const addAddress = useAddAddress();

  const locationList = useLocationList();

  const [options, setOptions] = useState<FullAddress[]>(
    locationList.map((location) => ({
      ...location,
      number: '',
      locationId: getLocationId({ ...location }),
    })) as FullAddress[],
  );

  const handleSearch = (searchTerm: string) => {
    const { number, locationId: locationSearch } = splitAddress(searchTerm);

    const filteredOptions = locationList
      .filter((location) =>
        getLocationId(location).toLowerCase().startsWith(locationSearch.toLowerCase()),
      )
      .map(
        (location): FullAddress => ({ ...location, number, locationId: getLocationId(location) }),
      );
    setOptions(filteredOptions);
  };

  const handleSubmit = async (e: any) => {
    const { locationId: location } = await form.validateFields();

    addAddress(splitAddress(location));
    onNext(e);
    close();
  };

  const inputRef = useRef<any>(null); // Create a ref to the input field

  useEffect(() => {
    inputRef.current?.focus(); // Set focus to the input field when the component mounts
  }, [close]);

  return (
    <Form form={form} onFinish={handleSubmit}>
      <Form.Item label="Location" name="locationId">
        <AutoComplete
          options={options.map((location) => ({
            value: getAddressId(location),
          }))}
          onSearch={handleSearch}
          onSelect={(locationId) => {
            form.setFieldsValue({ locationId });
            handleSubmit('');
          }}
        >
          <Input placeholder="Search locations" ref={inputRef} />
        </AutoComplete>
      </Form.Item>

      {children && (
        <Button type="primary" onClick={handleSubmit}>
          Next
        </Button>
      )}
    </Form>
  );
}
