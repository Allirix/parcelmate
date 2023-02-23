import Form from 'antd/es/form';
import Input from 'antd/es/input';

export default function TagForm({ form, onFinish, children }: any) {
  return (
    <Form form={form} onFinish={onFinish}>
      <Form.Item name="tag" label="Tag">
        <Input />
      </Form.Item>
      <Form.Item>{children}</Form.Item>
    </Form>
  );
}
