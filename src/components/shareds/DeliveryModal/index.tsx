import Button from 'antd/es/button';
import Form from 'antd/es/form';
import Modal from 'antd/es/modal';
import Steps from 'antd/es/steps';

import { useState } from 'react';
import { updateJSON } from '../../../common';
import { AddressForm } from '../../../routes/Locations/Address';
// import AddressForm from './Forms/AddressForm';
import { Delivery } from '../../../store/types';
import ParcelForm from './Forms/ParcelForm';
import TagForm from './Forms/TagForm';

const { Step } = Steps;

const steps = [
  { title: 'Address', Content: AddressForm },
  { title: 'Parcels', Content: ParcelForm },
  { title: 'Tags', Content: TagForm },
];

const DeliveryModal = ({ visible, onCancel, startingStep = 0, startingDelivery = {} }: any) => {
  const [, setDeliveries] = useState<any>({});

  const onCreate = (delivery: any) => {
    setDeliveries((current: any) => ({ ...current, [delivery.address]: delivery }));
  };

  const [currentStep, setCurrentStep] = useState(startingStep);
  const [form] = Form.useForm();

  const [delivery, setDelivery] = useState<Delivery>(startingDelivery);

  const handleNext = (e: any, overwrite?: Partial<typeof delivery>) => {
    e?.preventDefault?.();
    form.validateFields().then((values) => {
      setDelivery((currDelivey: any) => updateJSON(currDelivey, overwrite || values));
      setCurrentStep(currentStep + 1);
    });
  };

  const handleFinish = (e: any) => {
    e?.preventDefault?.();
    form.validateFields().then((values) => {
      onCreate(updateJSON(delivery, values));
      form.resetFields();
      setCurrentStep(0);
    });
  };

  const { Content } = steps[currentStep];

  const handleClose = () => {
    onCancel();
  };

  return (
    <Modal open={visible} onCancel={handleClose} footer={null} destroyOnClose style={{ top: 0 }}>
      <Steps current={currentStep} size="small" type="inline">
        {steps.map(({ title }) => (
          <Step key={title} title={title} />
        ))}
      </Steps>
      <Content form={form} onNext={handleNext} onFinish={handleFinish}>
        {currentStep === steps.length - 1 ? (
          <Button type="primary" onClick={handleFinish}>
            Next
          </Button>
        ) : (
          <Button type="primary" onClick={handleNext}>
            Next
          </Button>
        )}
      </Content>
    </Modal>
  );
};

export default DeliveryModal;
