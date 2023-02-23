import { AutoComplete, Button, Form, Input, Modal, Radio, Select, Steps } from 'antd';
import { useState } from 'react';
import { updateJSON } from '../../../common';

const { Step } = Steps;
const { Option } = Select;

const AddressForm = ({ form, onNext }: any) => {
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

      <Form.Item>
        <Button type="primary" onClick={onNext}>
          Next
        </Button>
      </Form.Item>
    </Form>
  );
};

const ParcelForm = ({ form, onNext }: any) => (
  <Form form={form} onFinish={onNext}>
    <Form.Item name="count" label="Count">
      <Input type="number" />
    </Form.Item>
    <Form.Item name="size" label="Size">
      <Select>
        <Option value="small">Small</Option>
        <Option value="medium">Medium</Option>
        <Option value="large">Large</Option>
      </Select>
    </Form.Item>
    <Form.Item name="type" label="Type">
      <Radio.Group>
        <Radio value="box">Box</Radio>
        <Radio value="bag">Bag</Radio>
      </Radio.Group>
    </Form.Item>
    <Form.Item name="color" label="Color">
      <Input />
    </Form.Item>

    <Form.Item>
      <Button type="primary" onClick={onNext}>
        Next
      </Button>
    </Form.Item>
  </Form>
);

const TagForm = ({ form, onFinish }: any) => (
  <Form form={form} onFinish={onFinish}>
    <Form.Item name="tag" label="Tag">
      <Input />
    </Form.Item>
    <Form.Item>
      <Button type="primary" onClick={onFinish}>
        Next
      </Button>
    </Form.Item>
  </Form>
);

const steps = [
  {
    title: 'Set Address',
    Content: AddressForm,
  },
  {
    title: 'Get Parcel',
    Content: ParcelForm,
  },
  {
    title: 'Append Tag',
    Content: TagForm,
  },
];

const DeliveryModal = ({ visible, onCancel, startingStep = 0, startingDelivery = {} }: any) => {
  const [deliveries, setDeliveries] = useState<any>([]);

  const onCreate = (values: any) => {
    const delivery = {
      id: deliveries.length + 1,
      address: values.address,
      count: values.count,
      size: values.size,
      type: values.type,
      color: values.color,
      tag: values.tag,
    };
    setDeliveries([...deliveries, delivery]);
  };

  const [currentStep, setCurrentStep] = useState(startingStep);
  const [form] = Form.useForm();

  const [delivery, setDelivery] = useState<any>(startingDelivery);

  const handleNext = (e: any) => {
    e.preventDefault();
    form.validateFields().then((values) => {
      setDelivery((currDelivey: any) => updateJSON(currDelivey, values));
      setCurrentStep(currentStep + 1);
    });
  };

  const handleFinish = (e: any) => {
    e.preventDefault();
    form.validateFields().then((values) => {
      onCreate(updateJSON(delivery, values));
      form.resetFields();
      setCurrentStep(0);
    });
  };

  const { Content } = steps[currentStep];

  return (
    <Modal open={visible} onCancel={onCancel} footer={null}>
      <Steps current={currentStep}>
        {steps.map((step) => (
          <Step key={step.title} title={step.title} />
        ))}
      </Steps>
      <Content form={form} onNext={handleNext} onFinish={handleFinish} />
    </Modal>
  );
};

export default DeliveryModal;
