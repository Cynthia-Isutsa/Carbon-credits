import React, { useState } from 'react';
import { Table, Button, Input, Space, Modal, Form, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const CarbonCreditWarehouse = () => {
  const [data, setData] = useState([
    { key: '1', creditID: 'CC-1001', amount: 50, type: 'Voluntary', status: 'Active' },
    { key: '2', creditID: 'CC-1002', amount: 30, type: 'Compliance', status: 'Active' },
    { key: '3', creditID: 'CC-1003', amount: 20, type: 'Voluntary', status: 'Retired' },
  ]);

  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  const columns = [
    {
      title: 'Credit ID',
      dataIndex: 'creditID',
      key: 'creditID',
    },
    {
      title: 'Amount (tons)',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
  ];

  const handleAddCredit = (values) => {
    setData([...data, { key: Date.now(), ...values }]);
    setVisible(false);
    form.resetFields();
    message.success('Carbon credit added successfully!');
  };

  return (
    <div>
      <h2>Carbon Credit Warehouse</h2>
      <Space style={{ marginBottom: 16 }}>
        <Input.Search placeholder="Search credits" />
        <Button type="primary" icon={<PlusOutlined />} onClick={() => setVisible(true)}>
          Add Credit
        </Button>
      </Space>
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />

      <Modal
        title="Add New Carbon Credit"
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={null}
      >
        <Form form={form} layout="vertical" onFinish={handleAddCredit}>
          <Form.Item
            name="creditID"
            label="Credit ID"
            rules={[{ required: true, message: 'Please input the credit ID!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="amount"
            label="Amount (tons)"
            rules={[{ required: true, message: 'Please input the amount!' }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            name="type"
            label="Type"
            rules={[{ required: true, message: 'Please select the type!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="status"
            label="Status"
            rules={[{ required: true, message: 'Please select the status!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add Credit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default CarbonCreditWarehouse;
