import { ModalForm, ProCard, ProFormSelect, ProFormSwitch } from '@ant-design/pro-components';
import { Avatar, Button, Col, Row, Typography } from 'antd';

const VVB = () => {
  return (
    <Row gutter={[16, 16]} className="mb-4">
      <Col span={12}>
        <ProCard style={{ height: '280px' }}>
          <Row gutter={[0, 16]} justify="center" align="middle">
            <Col span={24}>
              <Typography.Text strong>Choose Validation Body</Typography.Text>
            </Col>
            <Col span={24}>
              <ProCard bordered>
              <ModalForm
                  title="Choose from existing VVB's"
                  trigger={<Button>Select Validation Body</Button>}
                  modalProps={{
                    okText: 'Proceed',
                    okButtonProps: { danger: true, type: 'primary' },
                  }}
                  // onFinish={async (values) => {
                  //   const payload = {
                  //     action: 'COMPLETE',
                  //     userPublicId: null,
                  //     taskVariables: {
                  //       rejectionReasons: values?.rejectReasons?.map((item: any) => ({
                  //         publicId: item?.id,
                  //         name: item?.description,
                  //         abbreviation: null,
                  //       })),
                  //       action: 'REJECT',
                  //       comment: values?.comment,
                  //       id: task?.redirectInfo?.publicId,
                  //     },
                  //   };

                  //   try {
                  //     await approveRejectTask(task?.id, payload);
                  //     refresh();
                  //     message.success('Rejected successfully');
                  //     navigate('/workflow/tasks');
                  //   } catch (error) {
                  //     console.log(error);
                  //   }

                  //   return true;
                  // }}
                >
                  <div
                    style={{
                      backgroundColor: 'rgba(245, 245, 245, 1)',
                      padding: '10px',
                      display: 'flex',
                      marginBottom: '10px',
                    }}
                  >
                    <Avatar shape="square" size={40}>
                      VVB
                    </Avatar>
                  </div>
                  <ProFormSelect
                    width="md"
                    name="rejectReasons"
                    label="Select Reject reasons"
                    mode="multiple"
                    showSearch
                    // request={async () => {
                    //   const response = await queryRejectionReasons();

                    //   // @ts-ignore
                    //   return response?.data ?? [];
                    // }}
                    placeholder="Select Reject reasons"
                    fieldProps={{
                      labelInValue: true,
                      fieldNames: {
                        label: 'description',
                        value: 'id',
                      },
                      optionItemRender(item: any) {
                        return item?.description;
                      },
                    }}
                    rules={[
                      {
                        required: true,
                        message: 'Reject reasons must be specified',
                      },
                    ]}
                  />
                </ModalForm>
              </ProCard>
            </Col>
            <Col span={24}>
              <Typography.Text>Validation Criteria</Typography.Text>
            </Col>
            <Col span={24}>
              <ProFormSwitch width="md" name="yes" label="YES" initialValue={true} />
            </Col>
          </Row>
        </ProCard>
      </Col>
      <Col span={12}>
        <ProCard style={{ height: '280px' }}>
          <Row gutter={[0, 16]} justify="center" align="middle">
            <Col span={24}>
              <Typography.Text strong>Choose Verification Body</Typography.Text>
            </Col>
            <Col span={24}>
              <ProCard bordered>
                {/* <Button>Select Verification Body</Button> */}
                <ModalForm
                  title="Choose from existing VVB's"
                  trigger={<Button>Select Verification Body</Button>}
                  modalProps={{
                    okText: 'Proceed',
                    okButtonProps: { danger: true, type: 'primary' },
                  }}
                  // onFinish={async (values) => {
                  //   const payload = {
                  //     action: 'COMPLETE',
                  //     userPublicId: null,
                  //     taskVariables: {
                  //       rejectionReasons: values?.rejectReasons?.map((item: any) => ({
                  //         publicId: item?.id,
                  //         name: item?.description,
                  //         abbreviation: null,
                  //       })),
                  //       action: 'REJECT',
                  //       comment: values?.comment,
                  //       id: task?.redirectInfo?.publicId,
                  //     },
                  //   };

                  //   try {
                  //     await approveRejectTask(task?.id, payload);
                  //     refresh();
                  //     message.success('Rejected successfully');
                  //     navigate('/workflow/tasks');
                  //   } catch (error) {
                  //     console.log(error);
                  //   }

                  //   return true;
                  // }}
                >
                  <div
                    style={{
                      backgroundColor: 'rgba(245, 245, 245, 1)',
                      padding: '10px',
                      display: 'flex',
                      marginBottom: '10px',
                    }}
                  >
                    <Avatar shape="square" size={40}>
                      VVB
                    </Avatar>
                  </div>
                  <ProFormSelect
                    width="md"
                    name="rejectReasons"
                    label="Select Reject reasons"
                    mode="multiple"
                    showSearch
                    // request={async () => {
                    //   const response = await queryRejectionReasons();

                    //   // @ts-ignore
                    //   return response?.data ?? [];
                    // }}
                    placeholder="Select Reject reasons"
                    fieldProps={{
                      labelInValue: true,
                      fieldNames: {
                        label: 'description',
                        value: 'id',
                      },
                      optionItemRender(item: any) {
                        return item?.description;
                      },
                    }}
                    rules={[
                      {
                        required: true,
                        message: 'Reject reasons must be specified',
                      },
                    ]}
                  />
                </ModalForm>
              </ProCard>
            </Col>
            <Col span={24}>
              <Typography.Text>Verification Criteria</Typography.Text>
            </Col>
            <Col span={24}>
              <ProFormSwitch width="md" name="yes" label="YES" initialValue={true} />
            </Col>
          </Row>
        </ProCard>
      </Col>
    </Row>
  );
};

export default VVB;
