import { Button, Form, Input } from 'antd';

const SignupPage = () => {
  const onFinish = (values: unknown) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form name="signup-form" initialValues={{ remember: true }} onFinish={onFinish}>
      <Form.Item
        label="Username"
        name="username"
        rules={[
          { required: true, message: 'Please input your username!' },
          { min: 3, message: 'Username must be at least 3 characters long.' },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: 'Please input your email!' },
          { type: 'email', message: 'Please input a valid email address!' },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          { required: true, message: 'Please input your password!' },
          { min: 8, message: 'Password must be at least 8 characters long.' },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Sign Up
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignupPage;
