import {
  DeleteOutlined,
  DownOutlined,
  ExportOutlined,
  FilterOutlined,
  SendOutlined,
} from '@ant-design/icons';
import { ActionType, ProColumns, ProTable, TableDropdown } from '@ant-design/pro-components';
import { useNavigate } from '@umijs/max';
import { Button, Col, Row, Tag } from 'antd';
import Search from 'antd/es/input/Search';
import { useRef } from 'react';

const TransfersList = () => {
  const tableActionRef = useRef<ActionType>();
  const navigate = useNavigate();

  // const fieldNames = { label: 'fullName', value: 'publicId' };
  // const [showActionModal, setShowActionModal] = useState(false);
  // const [searchParam, setSearchParam] = useState<string>('');
  // const [businessAction, setBusinessAction] = useState<string>('');
  // const [customerDivision, setCustomerDivision] = useState<string>('');
  // const [showFilterModal, setFilterShowModal] = useState(false);
  // const [currentCustomer, setCurrentCustomer] = useState<any | null>(null);

  // const [filters, setFilters] = useState<any>({ groupPublicId: '', clusterPublicId: '' });
  // const handleConvertBusiness = async (type: string, record: any) => {
  //   await convertBusiness(record.publicId, type);

  //   message.success('Lead status updated successfully');
  //   tableActionRef.current?.reload();
  // };

  // function handleFilterModal(isOpen: boolean, searchFilters?: any) {
  //   setFilterShowModal(isOpen);
  //   if (!isOpen) tableActionRef.current?.reload();
  //   setFilters(searchFilters);
  // }

  // function handleBusinessActionModal(isOpen: boolean, action: string, record?: any) {
  //   setBusinessAction(action);
  //   setCurrentCustomer(record || null);
  //   setShowActionModal(isOpen);

  //   if (!isOpen) tableActionRef.current?.reload();
  // }

  const selectedMenuItem = (key: string, record: any) => {
    switch (key) {
      case 'view':
        navigate(`/business/leads/${record.publicId}`, { state: { publicId: record?.publicId } });
        break;

      case 'edit':
        navigate(`/business/leads/form?pid=${record?.publicId}`, {
          state: { type: 'LEAD', publicId: record.publicId },
        });

        break;

      // case 'activate':
      //   handleConvertBusiness('CONVERT_TO_PROSPECT', record);
      //   break;

      // case 'invalid':
      //   handleBusinessActionModal(true, 'CANCEL', record);
      //   break;

      // case 'assign':
      //   navigate('', {
      //     state: { type: 'LEAD', publicId: record.publicId },
      //   });
    }
  };

  const transfersData = [
    {
      key: '1',
      id: '001',
      sender: 'Kenya Carbon Solutions',
      receipient: 'Project Developer',
      project: 'Pathways Carbon Climate Action',
      timestamp: '16:13:43',
      amount: '2500',
      types: 'Ex-Post',
      status: 'Active',
    },
  ];

  const columns: ProColumns[] = [
    {
      title: 'Transaction Id',
      dataIndex: 'id',
      key: 'customerCode',
    },
    {
      title: 'Sender',
      dataIndex: 'sender',
      key: 'name',
    },
    {
      title: 'Receipient',
      dataIndex: 'receipient',
      key: 'creationTime',
    },
    {
      title: 'Project',
      dataIndex: 'project',
      key: 'creationTime',
    },
    {
      title: 'Timestamp',
      dataIndex: 'timestamp',
      key: 'creationTime',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'creationTime',
    },
    {
      title: 'Vintage',
      dataIndex: 'vintage',
      key: 'creationTime',
    },
    {
      title: 'Types',
      dataIndex: 'types',
      key: 'creationTime',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (_, record) => (
        <Tag color={record.status === 'Active' ? 'green' : 'volcano'}>
          {record.status.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: 'Actions',
      valueType: 'option',
      key: 'option',
      render: (text, record) => [
        <TableDropdown
          key="actionGroup"
          onSelect={(key: string) => selectedMenuItem(key, record)}
          menus={[
            {
              key: 'Transfer',
              name: (
                <div style={{ padding: '0px 5px' }}>
                  <SendOutlined style={{ paddingRight: 5 }} /> {''}
                  Tranfer
                </div>
              ),
            },
            {
              key: 'Retire',
              name: (
                <div style={{ padding: '0px 5px' }}>
                  <DownOutlined style={{ paddingRight: 5 }} /> {''}
                  Retire
                </div>
              ),
            },
            {
              key: 'Cancel',
              name: (
                <div style={{ padding: '0px 5px' }}>
                  <DeleteOutlined style={{ paddingRight: 5 }} /> {''}
                  Cancel
                </div>
              ),
            },

            //   {
            //     key: 'activate',
            //     name: (
            //       <div style={{ padding: '0px 5px' }}>
            //         <FileDoneOutlined style={{ paddingRight: 5 }} /> {''}
            //         Activate
            //       </div>
            //     ),
            //   },
          ]}
        />,
      ],
    },
  ];

  return (
    <>
      <Row style={{ margin: '0px 15px' }}>
        <Col xs={24} sm={12} md={8} lg={11}>
          <Search
            placeholder="Search for a trancaction"
            allowClear
            size="large"
            //   onSearch={(value: string) => {
            //     setSearchParam(value);
            //     tableActionRef.current?.reload();
            //   }}
          />
        </Col>
        <Col style={{ padding: '0px 10px 5px 5px' }} xs={24} sm={12} md={8} lg={13}>
          <Row>
            <Col style={{ padding: '0px 10px 3px 3px' }} xs={24} sm={12} md={8} lg={5}>
              <Button
                //   onClick={() => handleFilterModal(true)}
                style={{ height: '40px' }}
                block
                icon={<FilterOutlined />}
              >
                Filter
              </Button>
            </Col>

            <Col style={{ padding: '0px 10px 3px 3px' }} xs={24} sm={12} md={8} lg={5}>
              <Button
                style={{ height: '40px' }}
                block
                icon={<ExportOutlined />}
                //   onClick={async () => {
                //     const response = await exportCustomers({
                //       searchParam,
                //       ...filters,
                //       customerDivision,
                //     });

                //     if (response) downloadResponseFile(response?.data, 'customers', 'csv');
                //   }}
              >
                Export
              </Button>
            </Col>

            {/* <Col style={{ padding: '0px 10px 3px 3px' }} xs={24} sm={12} md={8} lg={7}>
                <Button
                  onClick={() =>
                    navigate('/business/leads/form?type=LEAD', {
                      state: { type: 'LEAD' },
                    })
                  }
                  type="primary"
                  style={{ height: '40px' }}
                  block
                  icon={<PlusOutlined />}
                >
                  Add Transaction
                </Button>
              </Col> */}
          </Row>
        </Col>
      </Row>

      <ProTable
        options={false}
        columns={columns}
        actionRef={tableActionRef}
        dataSource={transfersData}
        //   request={async (params: any) => {
        //     return fetchCustomers({
        //       params: {
        //         page: Math.round(params?.current - 1),
        //         type: 'LEAD',
        //         ...(searchParam.length > 2 && { search: searchParam }),
        //         size: params.pageSize,
        //         customerDivision: customerDivision,
        //         ...params,
        //         ...filters,
        //       },
        //     });
        //   }}
        search={false}
        rowKey="publicId"
      />
      {/* <LeadFiltersModal
          showModal={showFilterModal}
          setShowModal={handleFilterModal}
          filters={filters}
        /> */}
      {/* for invalidate action */}
      {/* <BusinessActionModal
          showModal={showActionModal}
          setShowModal={handleBusinessActionModal}
          currentLead={currentCustomer}
          action={businessAction}
        /> */}
    </>
  );
};

export default TransfersList;
