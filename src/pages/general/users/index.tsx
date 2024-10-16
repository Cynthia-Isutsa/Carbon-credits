// import PageHeader from '@/components/PageHeader/PageHeader';
import { PageHeader } from '@/components/PageHeader/PageHeader';
import { HomeOutlined, PieChartOutlined } from '@ant-design/icons';
import { Card, Input, Table, Tag } from 'antd';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

function Users() {

  const [visible, setVisible] = useState(false);
  const usersData = [
    {
      key: '1',
      name: 'Kenya Carbon Solutions',
      role: 'Project Developer',
      email: 'info@kenyacarbon.com',
      location: 'Nairobi, Kenya',
      status: 'Active',
      projects: ['Reforestation Initiative', 'Clean Energy Programs'],
    },
    {
      key: '2',
      name: 'Green Verifiers',
      role: 'Verifier',
      email: 'contact@greenverifiers.org',
      location: 'Kisumu, Kenya',
      status: 'Active',
      verifiedProjects: 10,
    },
    {
      key: '3',
      name: 'CleanTech Ltd.',
      role: 'Buyer',
      email: 'sustainability@cleantech.com',
      location: 'Mombasa, Kenya',
      status: 'Pending Verification',
      creditsPurchased: 500,
    },
    {
      key: '4',
      name: 'Environmental Authority',
      role: 'Regulator',
      email: 'compliance@envauthority.org',
      location: 'Nairobi, Kenya',
      status: 'Active',
      complianceReports: 20,
    },
    {
      key: '5',
      name: 'Carbon Ventures',
      role: 'Investor',
      email: 'invest@carbonventures.io',
      location: 'London, UK',
      status: 'Inactive',
      investedProjects: 3,
    },
    {
      key: '6',
      name: 'Carbon Ventures',
      role: 'Seller',
      email: 'invest@carbonventures.io',
      location: 'London, UK',
      status: 'Inactive',
      investedProjects: 3,
    },
  ];

  const handleAddCredit = (values) => {
    setData([...data, { key: Date.now(), ...values }]);
    setVisible(false);
    form.resetFields();
    message.success('Carbon credit added successfully!');
  };
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      render: (role) => (
        <Tag color={role === 'Buyer' ? 'green' : role === 'Verifier' ? 'blue' : 'orange'}>
          {role.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag color={status === 'Active' ? 'green' : 'volcano'}>
          {status.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: 'Additional Info',
      key: 'additionalInfo',
      render: (text, record) => {
        if (record.role === 'Project Developer') {
          return `Projects: ${record.projects.join(', ')}`;
        } else if (record.role === 'Verifier') {
          return `Verified Projects: ${record.verifiedProjects}`;
        } else if (record.role === 'Buyer') {
          return `Credits Purchased: ${record.creditsPurchased}`;
        } else if (record.role === 'Regulator') {
          return `Compliance Reports: ${record.complianceReports}`;
        } else if (record.role === 'Investor') {
          return `Invested Projects: ${record.investedProjects}`;
        } else if (record.role === 'Seller') {
          return `Invested Projects: ${record.investedProjects}`;
        }
        
        return '-';
      },
    },
  ];

  return (
    <div>
      <Helmet>
        <title>Users</title>
      </Helmet>

      <PageHeader
        title="Users"
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
            title: 'Users',
          },
        ]}
      />

<Input.Search
                placeholder="search for a user"
                style={{
                  width: "20%"
                }}
                size="middle"
              />

       <Table columns={columns} dataSource={usersData} pagination={{ pageSize: 6 }} />;

    </div>
  );
}

export default Users;
