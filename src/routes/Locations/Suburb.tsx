import { useState } from 'react';

import Button from 'antd/es/button';
import Form from 'antd/es/form';
import Input from 'antd/es/input';
import Space from 'antd/es/space';
import Table from 'antd/es/table';
import {
  useAddSuburb,
  useRemoveSuburb,
  useSuburbList,
} from '../../store/selectors/suburbs.selector';

const { Column } = Table;

export function SuburbTable({ filterPrefix = '' }) {
  const [searchText, setSearchText] = useState('');
  const suburbList = useSuburbList();
  const removeSuburb = useRemoveSuburb();

  const filteredData = suburbList.filter(
    ({ name }) =>
      name.toLowerCase().includes(searchText.toLowerCase()) &&
      (filterPrefix === '' || name.startsWith(filterPrefix)),
  );

  return (
    <>
      <Input.Search
        placeholder="Search suburbs"
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
        style={{ maxWidth: '100%', marginBottom: 16 }}
      />
      <Table dataSource={filteredData}>
        <Column
          title="Name"
          key="name"
          dataIndex="name"
          sorter={(a: any, b: any) => a.name.localeCompare(b.name)}
        />
        <Column
          title="Action"
          render={(_: any, { name }: { name: string; id: string }) => (
            <Space size="middle">
              <Button onClick={() => removeSuburb(name)}>Remove</Button>
            </Space>
          )}
        />
      </Table>
    </>
  );
}

export function SuburbForm({ form, close }: any) {
  const addSuburb = useAddSuburb();

  const handleSubmit = (values: any) => {
    console.log(values.name);
    addSuburb(values.name);
    close();
  };
  return (
    <Form form={form} onFinish={handleSubmit}>
      <Form.Item label="Name" name="name">
        <Input />
      </Form.Item>
    </Form>
  );
}
