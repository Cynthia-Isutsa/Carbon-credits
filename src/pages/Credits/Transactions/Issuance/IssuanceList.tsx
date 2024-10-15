import { EditOutlined, ExportOutlined, EyeFilled, FilterOutlined} from '@ant-design/icons';
import { ActionType, ProColumns, ProTable, TableDropdown } from '@ant-design/pro-components';
import { useNavigate } from '@umijs/max';
import { Button, Col, Row, Space, Tag } from 'antd';
import React, { useRef } from 'react'
import Search from 'antd/es/input/Search';

const IssuanceList = () => {

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
  
    const columns: ProColumns[] = [
      {
        title: 'Project',
        dataIndex: 'customerCode',
        key: 'customerCode',
      },
      {
        title: 'TimeStamp',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Amount',
        dataIndex: 'creationTime',
        key: 'creationTime',
      },
      {
        title: 'Types',
        dataIndex: 'creationTime',
        key: 'creationTime',
      },
      {
        title: 'Tx',
        dataIndex: 'creationTime',
        key: 'creationTime',
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render(_, record) {
          const colorStatus = ['NEW'].includes(record.status)
            ? { backGround: '#fffadd', color: 'rgba(250, 140, 22, 1)' }
            : ['INCOMPLETE'].includes(record.status)
            ? { backGround: '#E6F7FF', color: '#1890FF' }
            : ['COMPLETE', 'CONFIRMED', 'APPROVED', 'ACTIVE'].includes(record.status)
            ? { backGround: 'rgba(246, 255, 237, 1)', color: 'rgba(82, 196, 26, 1)' }
            : { backGround: 'rgba(255, 241, 240, 1)', color: 'rgba(245, 34, 45, 1)' };
          return (
            <Space>
              <Tag color={colorStatus.backGround}>
                {/* <span style={{ color: colorStatus.color, padding: 10 }}>
                  {toPascalCase(record.status)}
                </span> */}
              </Tag>
            </Space>
          );
        },
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
                key: 'view',
                name: (
                  <div style={{ padding: '0px 5px' }}>
                    <EyeFilled style={{ paddingRight: 5 }} /> {''}
                    View
                  </div>
                ),
              },
              {
                key: 'edit',
                name: (
                  <div style={{ padding: '0px 5px' }}>
                    <EditOutlined style={{ paddingRight: 5 }} /> {''}
                    Edit
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
}

export default IssuanceList;