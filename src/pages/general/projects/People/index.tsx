import React from 'react';
import { Button, Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import { DeleteFilled, DeleteOutlined } from '@ant-design/icons';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
  access: string;
  email: string;
}


const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Departments',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Access Level',
    dataIndex: 'access',
    key: 'access',
  },

  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Credits',
    dataIndex: 'age',
    key: 'age',
  },
  
  {
    title: 'Status',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'suspended') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        {/* <a>Invite {record.name}</a> */}
        
        <a >  Invite </a>
        <a> <DeleteOutlined /></a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'Hr',
    access: "Admin",
    tags: ['active'],
    email: "johnb@gmail.com",
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    access: "Super Admin",
    address: 'Management',
    tags: ['suspended'],
    email: "greenjim@gmail.com",
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 88,
    access: "Team Member",
    address: 'Account',
    tags: [ 'active'],
    email: "blackjoe@gmail.com"
  },
  {
    key: '4',
    name: 'Anna Bell',
    age: 90,
    access: "Admin",
    address: 'Hr',
    tags: [ 'suspended'],
    email: "annabell@gmail.com"
  },
  {
    key: '5',
    name: 'samantha Khan',
    age: 106,
    access: "Super Admin",
    address: 'Management',
    tags: [ 'active'],
    email: "samkhan@gmail.com"
  },
  {
    key: '6',
    name: 'Julius Ken',
    age: 67,
    access: "Admin",
    address: 'Account',
    tags: [ 'active'],
    email: "juliushen@gmail.com"
  },
 
];


const People: React.FC = () => <><Table<DataType> columns={columns} dataSource={data} /><Button
    style={{ backgroundColor: '#24a0ed', width: '150px' }}
    type='primary'>
    Add People
    

</Button></>




  

   



export default People;