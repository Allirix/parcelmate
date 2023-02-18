import { Button, Form, Input, Switch } from 'antd';

function Settings() {
  const onFinish = (values: unknown) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div>
      <h1>Settings</h1>
      <Form
        name="basic"
        onFinish={onFinish}
        initialValues={{ email: '', username: '', notifications: false }}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: false,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: false,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Notifications" name="notifications" valuePropName="checked">
          <Switch />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Settings;
