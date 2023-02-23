import { PlusCircleFilled } from '@ant-design/icons';
import Button from 'antd/es/button';
import { useState } from 'react';
import DeliveryModal from '.';

const DeliveryModalButton = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Button
        className="header-button"
        icon={<PlusCircleFilled />}
        size="large"
        onClick={() => setModalVisible(true)}
      />
      <DeliveryModal visible={modalVisible} onCancel={() => setModalVisible(false)} />
    </>
  );
};

export default DeliveryModalButton;
