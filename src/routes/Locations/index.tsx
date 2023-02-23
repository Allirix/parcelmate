import { PlusOutlined } from '@ant-design/icons';
import Affix from 'antd/es/affix';
import Button from 'antd/es/button';
import Form from 'antd/es/form';
import Modal from 'antd/es/modal';
import Tabs from 'antd/es/tabs';

import { useState } from 'react';
import { AddressForm, AddressTable } from './Address';
import { LocationForm, LocationTable } from './Location';
import { SuburbForm, SuburbTable } from './Suburb';

const LocationsPage = () => {
  const [activeTab, setActiveTab] = useState('suburbs');
  const [modalVisible, setModalVisible] = useState(false);

  const [form] = Form.useForm();

  const handleTabChange = (key: string) => {
    setActiveTab(key);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const handleAddItem = () => {
    form.resetFields();
    setModalVisible(true);
  };

  return (
    <div>
      <Tabs
        activeKey={activeTab}
        onChange={handleTabChange}
        items={[
          { key: 'suburbs', label: 'Suburbs', children: <SuburbTable /> },
          { key: 'locations', label: 'Locations', children: <LocationTable /> },
          { key: 'addresses', label: 'Addresses', children: <AddressTable /> },
        ]}
        size="large"
        destroyInactiveTabPane
        tabBarExtraContent={
          <Button type="primary" onClick={handleAddItem}>
            Import
          </Button>
        }
        tabPosition="top"
      />

      <Modal open={modalVisible} onCancel={handleModalClose} onOk={form.submit} destroyOnClose>
        {activeTab === 'suburbs' && <SuburbForm form={form} close={() => setModalVisible(false)} />}
        {activeTab === 'locations' && (
          <LocationForm form={form} close={() => setModalVisible(false)} />
        )}
        {activeTab === 'addresses' && (
          <AddressForm form={form} close={() => setModalVisible(false)} />
        )}
      </Modal>
      <Affix style={{ position: 'absolute', bottom: 50, right: 4 }}>
        <Button
          type="primary"
          shape="circle"
          size="large"
          icon={<PlusOutlined />}
          onClick={handleAddItem}
        />
      </Affix>
    </div>
  );
};

export default LocationsPage;
