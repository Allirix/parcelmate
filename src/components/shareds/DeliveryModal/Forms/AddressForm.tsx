import AutoComplete from 'antd/es/auto-complete';
import Form from 'antd/es/form';
import { useState } from 'react';

export default function AddressForm({ form, onNext, children }: any) {
  const [options, setOptions] = useState<any>([]);

  const onSearch = (searchText: string) =>
    setOptions(
      !searchText ? [] : [{ value: '1 Main St' }, { value: '2 Main St' }, { value: '3 Main St' }],
    );

  return (
    <Form form={form} onFinish={onNext}>
      <Form.Item name="address" label="Address">
        <AutoComplete
          options={options}
          onSearch={onSearch}
          filterOption={(inputValue, option: any) =>
            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
        />
      </Form.Item>

      <Form.Item>{children}</Form.Item>
    </Form>
  );
}
