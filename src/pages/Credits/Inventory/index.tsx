import { EditOutlined, ExportOutlined, EyeFilled, FilterOutlined, PlusOutlined } from '@ant-design/icons';
import { ActionType, PageContainer, ProColumns, ProTable, TableDropdown } from '@ant-design/pro-components';
import { Button, Col, Row, Space, Tag } from 'antd';
import Search from 'antd/es/input/Search';
import { useRef } from 'react';

const Inventory = () => {
    const tableActionRef = useRef<ActionType>();


    const selectedMenuItem = (key: string, record: any) => {
        switch (key) {
        //   case 'view':
        //     navigate(`/business/leads/${record.publicId}`, { state: { publicId: record?.publicId } });
        //     break;
    
        //   case 'edit':
        //     navigate(`/business/leads/form?pid=${record?.publicId}`, {
        //       state: { type: 'LEAD', publicId: record.publicId },
        //     });
    
            // break;
        }
      };
    const columns: ProColumns[] = [
        {
          title: 'Transaction Id',
          dataIndex: 'customerCode',
          key: 'customerCode',
        },
        {
          title: 'Sender',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Receipient',
          dataIndex: 'creationTime',
          key: 'creationTime',
        },
        {
          title: 'Project',
          dataIndex: 'creationTime',
          key: 'creationTime',
        },
        {
          title: 'Timestamp',
          dataIndex: 'creationTime',
          key: 'creationTime',
        },
        {
          title: 'Amount',
          dataIndex: 'creationTime',
          key: 'creationTime',
        },
        {
          title: 'Vintage',
          dataIndex: 'creationTime',
          key: 'creationTime',
        },
        {
          title: 'Types',
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
    <PageContainer
      title="Inventory"
      subTitle="An overview of your entire carbon credit inventory, including both ex-post and ex-ante credits"
    >
        <>
      <Row style={{ margin: '0px 15px' }}>
        <Col xs={24} sm={12} md={8} lg={11}>
          <Search
            placeholder="Search for a lead"
            allowClear
            size="large"
            // onSearch={(value: string) => {
            //   setSearchParam(value);
            //   tableActionRef.current?.reload();
            // }}
          />
        </Col>
        <Col style={{ padding: '0px 10px 5px 5px' }} xs={24} sm={12} md={8} lg={13}>
          <Row>
            <Col style={{ padding: '0px 10px 3px 3px' }} xs={24} sm={12} md={8} lg={5}>
              <Button
                // onClick={() => handleFilterModal(true)}
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
                // onClick={async () => {
                //   const response = await exportCustomers({
                //     searchParam,
                //     ...filters,
                //     customerDivision,
                //   });

                //   if (response) downloadResponseFile(response?.data, 'customers', 'csv');
                // }}
              >
                Export
              </Button>
            </Col>

            <Col style={{ padding: '0px 10px 3px 3px' }} xs={24} sm={12} md={8} lg={7}>
              <Button
                // onClick={() =>
                //   navigate('/business/leads/form?type=LEAD', {
                //     state: { type: 'LEAD' },
                //   })
                // }
                type="primary"
                style={{ height: '40px' }}
                block
                icon={<PlusOutlined />}
              >
                Add Lead
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>

      <ProTable
        options={false}
        columns={columns}
        actionRef={tableActionRef}
        // request={async (params: any) => {
        //   return fetchCustomers({
        //     params: {
        //       page: Math.round(params?.current - 1),
        //       type: 'LEAD',
        //       ...(searchParam.length > 2 && { search: searchParam }),
        //       size: params.pageSize,
        //       customerDivision: customerDivision,
        //       ...params,
        //       ...filters,
        //     },
        //   });
        // }}
        search={false}
        rowKey="publicId"
      />
      {/* <LeadFiltersModal
        showModal={showFilterModal}
        setShowModal={handleFilterModal}
        filters={filters}
      />
      {/* for invalidate action */}
      {/* <BusinessActionModal
        showModal={showActionModal}
        setShowModal={handleBusinessActionModal}
        currentLead={currentCustomer}
        action={businessAction}
      /> */}
    </>
        
    </PageContainer>
  );
};

export default Inventory;
