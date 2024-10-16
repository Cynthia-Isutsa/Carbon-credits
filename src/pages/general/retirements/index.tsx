import { PageHeader } from '@/components/PageHeader/PageHeader';
import { DeleteOutlined, EditOutlined, HomeOutlined, PieChartOutlined } from '@ant-design/icons';
import { Button, Card, Input, Table, Tag, Modal, Form, message } from 'antd';
import { Helmet } from 'react-helmet-async';
import React, { useState } from 'react';

function Retirements() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const usersData = [
    {
      key: '1',
      name: 'RC-1001',
      date: '2023-07-20',
      credits: '4002',
      retirementType: 'Voluntary',
      entity: 'Green Initiative Corp',
    },
    {
      key: '2',
      name: 'RC-1002',
      date: '2024-02-20',
      credits: '3,400',
      retirementType: 'Compliance',
      entity: 'Eco Solutions Ltd',
    },
    {
      key: '3',
      name: 'RC-1003',
      date: '2024-03-10',
      credits: '300',
      retirementType: 'Voluntary',
      entity: 'Sustainable Futures',
    },
    {
      key: '4',
      name: 'RC-1004',
      date: '2024-03-10',
      credits: '700',
      retirementType: 'Voluntary',
      entity: 'Clean Air Initiative',
    },
    {
      key: '5',
      name: 'RC-1005',
      date: '2024-03-10',
      credits: '7700',
      retirementType: 'Compliance',
      entity: 'Carbon Neutral Inc.',
    },
    {
      key: '6',
      name: 'RC-1006',
      date: '2023-01-08',
      credits: '200',
      retirementType: 'Compliance',
      entity: 'Carbon Neutral Inc.',
    },
  ];

  const columns = [
    {
      title: 'Retirement ID',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Amount of Carbon Credits',
      dataIndex: 'credits',
      key: 'credits',
    },
    {
      title: 'Retirement Type',
      dataIndex: 'retirementType',
      key: 'retirementType',
    },
    {
      title: 'Retiring Entity',
      dataIndex: 'entity',
      key: 'entity',
      render: (entity) => (
        <Tag color={entity === 'Active' ? 'green' : 'volcano'}>
          {entity.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: 'Actions',
      dataIndex: 'action',
      key: 'action',
      render: () => (
        <span>
          <EditOutlined style={{ marginRight: 8 }} />
          <DeleteOutlined />
        </span>
      ),
    },
  ];

  const handleAddRetirement = (values) => {
    // Here, you can handle adding the retirement logic, e.g., updating state or making an API call
    console.log('New Retirement:', values);
    setIsModalVisible(false);
    form.resetFields();
    message.success('Retirement added successfully!');
  };

  return (
    <div>
      <Helmet>
        <title>Retirements</title>
      </Helmet>

      <PageHeader
        title="Retirements"
        breadcrumbs={[
          {
            title: (
              <>
                <HomeOutlined />
                <span>home</span>
              </>
            ),
            path: '/',
          },
          {
            title: (
              <>
                <PieChartOutlined />
                <span>dashboard</span>
              </>
            ),
          },
          {
            title: 'Retirements',
          },
        ]}
      />

      <Input.Search
        placeholder="search"
        style={{
          width: "20%",
        }}
        size="middle"
      />
      <Button
        type='primary'
        style={{ marginLeft: "64%", width: "170px" }}
        onClick={() => setIsModalVisible(true)}
      >
        Add Retirement
      </Button>

      <Table columns={columns} dataSource={usersData} pagination={{ pageSize: 6 }} />

      <Modal
        title="Add New Retirement"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form form={form} layout="vertical" onFinish={handleAddRetirement}>
          <Form.Item
            name="creditID"
            label="Credit ID"
            rules={[{ required: true, message: 'Please input the credit ID!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="date"
            label="Date"
            rules={[{ required: true, message: 'Please input the date!' }]}
          >
            <Input type="date" />
          </Form.Item>
          <Form.Item
            name="credits"
            label="Amount of Carbon Credits"
            rules={[{ required: true, message: 'Please input the amount of credits!' }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            name="retirementType"
            label="Retirement Type"
            rules={[{ required: true, message: 'Please select the retirement type!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="entity"
            label="Retiring Entity"
            rules={[{ required: true, message: 'Please input the retiring entity!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add Retirement
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default Retirements;
