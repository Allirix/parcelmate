// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-nested-ternary */
import { ShoppingOutlined } from '@ant-design/icons';
import Badge from 'antd/es/badge';
import Button from 'antd/es/button';
import Col from 'antd/es/col';
import Form from 'antd/es/form';
import Input from 'antd/es/input';
import Radio from 'antd/es/radio';
import Row from 'antd/es/row';
import Tag from 'antd/es/tag';
import { useState } from 'react';
import { Parcel as ParcelType } from '../../../../store/types';
import { hasLightColor } from './utils';

interface ParcelProps {
  parcel: ParcelType;
  onClick: (event: any) => void;
}

const colors: Record<string, string> = {
  KMART: 'linear-gradient(90deg, #FF3B3B 50%, rgba(55,66,253,1) 50%)',
  TARGET:
    'radial-gradient(circle, rgb(230,230,230) 15%, rgba(255,0,0,1) 15%, rgba(255,0,0,1) 33%, rgba(245,245,255,1) 33%, rgb(230,230,230) 65%, rgba(255,0,0,1) 66%, rgba(255,0,0,1) 85%, rgb(230,230,230) 85%)',
  MYER: 'linear-gradient(0deg, rgba(0,0,0,1) 33%, rgb(230,230,230) 33%, rgb(230,230,230) 66%, rgba(0,0,0,1) 66%)',
  OTHER: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)',

  BROWN: 'rgb(148, 84, 27)',
  TP: 'radial-gradient(circle, rgba(154,123,79,1) 19%, rgba(227,193,145,1) 100%)',
  RED: '#FF3B3B',
  BLUE: '#1D45CC',
  GREEN: '#24BD24',
  YELLOW: '#e6ba00',
  PICKUP: 'radial-gradient(circle, red 19%, yellow 100%)',
  WHITE: 'rgb(230,230,230)',
};

export function Parcel({ parcel: { size, color, count, type }, onClick }: ParcelProps) {
  const isLight = hasLightColor(colors[color], 200);

  return (
    <Badge count={count === 1 ? 0 : count} offset={[-10, 5]} size="small">
      <Tag
        // shape="square"
        // size="large"
        onClick={onClick}
        color={colors[color]}
        style={{
          background: colors[color],
          color: isLight ? 'black' : 'white',
          fontWeight: '700',
          boxShadow: '0 1px 3px gray',
          minHeight: '30px',
          minWidth: '30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            background: isLight ? 'rgba(255,255,255,0.9)' : '',
            height: '20px',
            width: '30px',
            borderRadius: '3px',
            padding: '0 3px',
          }}
        >
          {size === 'M' ? '' : size}
          {type === 'BOX' ? '' : <ShoppingOutlined style={{ fontSize: '20px' }} />}{' '}
        </div>
      </Tag>
    </Badge>
  );
}

export default function ParcelForm({ form, onNext, children }: any) {
  const [parcels, setParcels] = useState<ParcelType[]>([]);

  const addParcel = (color: string) =>
    setParcels((current) => {
      const newParcel = { ...form.getFieldsValue(), color };

      return [...current, newParcel];
    });

  const removeParcel = (idx: number) => () =>
    setParcels((current) => {
      const newParcels = [...current];
      newParcels.splice(idx, 1);
      return newParcels;
    });

  const addAllParcels = (e: any) => {
    onNext(e, { parcels });
  };

  return (
    <Form form={form} onFinish={addAllParcels}>
      <Row style={{ gap: '4px' }}>
        {parcels.map((parcel, idx) => (
          <Parcel
            parcel={parcel}
            onClick={removeParcel(idx)}
            key={`${parcel.count} ${parcel.color} ${parcel.size} ${parcel.type}`}
          />
        ))}
      </Row>

      <Form.Item name="size" label="Size" initialValue="M">
        <Radio.Group buttonStyle="solid">
          <Radio.Button value="S">Small</Radio.Button>
          <Radio.Button value="M">Medium</Radio.Button>
          <Radio.Button value="L">Large</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Form.Item name="type" label="Type" tooltip="If unknown, select Box" initialValue="BOX">
            <Radio.Group buttonStyle="solid">
              <Radio.Button value="BOX">Box</Radio.Button>
              <Radio.Button value="BAG">Bag</Radio.Button>
            </Radio.Group>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="count" label="Count" initialValue={1}>
            <Input type="number" />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item
        name="color"
        label="Color"
        tooltip="Click a colour to add a parcel with the selected size, type, and count"
      >
        <Radio.Group style={{ display: 'flex', flexWrap: 'wrap' }}>
          {Object.entries(colors).map(([color, bg]) => (
            <Radio.Button
              key={color}
              value={color}
              style={{
                background: bg,
                height: '50px',
                width: '50px',
                fontSize: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textShadow: '1px 1px rgba(0,0,0,1)',
                fontWeight: '700',
              }}
              onClick={() => addParcel(color)}
            >
              {color}
            </Radio.Button>
          ))}
        </Radio.Group>
      </Form.Item>

      <Form.Item>
        <Button type="primary" onClick={addAllParcels}>
          Add Parcels to Address
        </Button>
      </Form.Item>
      {children}
    </Form>
  );
}
