/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import {
  CheckCard,
  PageContainer,
  ProCard,
  ProForm,
  ProFormCheckbox,
  ProFormDatePicker,
  ProFormInstance,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
  StepsForm,
} from '@ant-design/pro-components';
import { history } from '@umijs/max';
import type { UploadFile } from 'antd';
import { Alert, Breadcrumb, Card, Col, Divider, Row, Segmented, Space, Typography } from 'antd';
import React, { useRef, useState } from 'react';

import {
  FileDoneOutlined,
  FileOutlined,
  QuestionCircleOutlined,
  VerifiedOutlined,
} from '@ant-design/icons';
import type { DefaultOptionType } from 'antd/lib/select';

export type DocumentParams = {
  schemePublicId: string;
  dependantType: string;
  isDisabled: boolean;
  isDependant: boolean;
  dob: 'yyyy-mm-dd';
};

export default function AddProject() {
  const [fileList, setFileList] = React.useState<UploadFile | any>([]);

  const [stepData, setStepData] = useState({
    details: {},
    attachments: {},
    quiz: {},
    profile: {},
  });

  const fullForm = useRef<ProFormInstance>();
  const step1Ref: any = useRef<ProFormInstance>();
  const step3Ref = useRef<ProFormInstance>();
  const step5Ref = useRef<ProFormInstance>();
  const [answers, setAnswers] = React.useState<any>();

  const [schemesId, setSchemesId] = useState<string>('');
  const [schemeName, setSchemeName] = useState<any>();
  const [isDisabled, setIsDisable] = useState<boolean>(false);

  const [divisionType, setDivisionType] = useState<string>('');

  const [costSelectKey, setCostSelectKey] = useState<number>(Math.random());

  const missingRequired: any[] = [];

  const [attachmentErr, setAttachmentErr] = React.useState<any>();
  const [current, setCurrent] = React.useState(0);
  // adding the schemerules
  const [currentSchemeRules, setCurrentSchemeRules] = useState<any>([]);
  const [Divisions, setDivision] = useState<any>([]);
  const [schemeCovers, setSchemeCovers] = React.useState<any[]>();

  const [dob, setDOB] = React.useState<any>();

  const [joinDate, setJoinDate] = React.useState<any>();

  const [errText, setErrText] = React.useState<string | undefined>(undefined);

  const [schemePolicy, setSchemePolicy] = React.useState();
  const [isMandatory, setIsMandatory] = React.useState<boolean>();

  const [params, setParams] = React.useState<DocumentParams>({
    schemePublicId: '',
    dependantType: 'PrincipalMember',
    isDisabled: false,
    isDependant: false,
    dob: dob,
  });

  const step1Data = {
    headline: 'GHG Program',
    fullNames: 'Clean Energy Program',
    description: 'Promoting solar energy systems to reduce reliance on fossil fuels.',
    ptojectType: 'Grouped',
    Website: 'projectGHC.com',

    sector: 'Chemical Industry',
    Methodology: 'ISO 14064-6744RE- 56734G-3',
    sectorTwo: 'Industries',
  };
  const [step3Data, setStep3Data] = useState({});

  React.useEffect(() => {
    if (schemesId && dob) {
      setParams({
        schemePublicId: schemesId,
        dependantType: 'PrincipalMember',
        isDisabled: isDisabled,
        isDependant: false,
        dob: dob.format('YYYY-MM-DD'),
      });
    }
  }, [schemesId, isDisabled, dob]);

  let formattedData: DefaultOptionType[] | undefined = [];

  return (
    <PageContainer
      title={false}
      breadcrumbRender={(props) => {
        return (
          <>
            <Breadcrumb>
              <Breadcrumb.Item onClick={() => history.push('/membership/members')}>
                <span style={{ cursor: 'pointer' }}>Projects</span>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <span style={{ color: '#226b80' }}>Add Project</span>{' '}
              </Breadcrumb.Item>
            </Breadcrumb>
          </>
        );
      }}
    >
      <ProCard
        headerBordered
        title={
          <Typography.Title style={{ padding: 0, margin: 0 }} level={4}>
            ADD A PROJECT
          </Typography.Title>
        }
        className="dfd-34"
        bordered
      >
        <StepsForm
          formRef={fullForm}
          containerStyle={{ width: '100%' }}
          onCurrentChange={(e) => setCurrent(e)}
          stepsRender={(steps, def) => {
            return (
              <>
                <Segmented
                  defaultValue={current}
                  block
                  size="large"
                  value={current}
                  options={[
                    {
                      label: (
                        <Space>
                          <FileDoneOutlined /> Project Type
                        </Space>
                      ),
                      value: 0,
                    },
                    {
                      label: (
                        <Space>
                          <FileOutlined /> Project Details
                        </Space>
                      ),
                      value: 1,
                    },
                    {
                      label: (
                        <Space>
                          <VerifiedOutlined /> GHG Program and Start Date
                        </Space>
                      ),
                      value: 2,
                    },

                    {
                      label: (
                        <Space>
                          <QuestionCircleOutlined /> Sector and Information
                        </Space>
                      ),
                      value: 3,
                    },
                    {
                      label: (
                        <Space>
                          <QuestionCircleOutlined /> Profile
                        </Space>
                      ),
                      value: 4,
                    },
                  ]}
                />
              </>
            );
          }}
        >
          <StepsForm.StepForm formRef={step3Ref} name="plans" title="Cover">
            <Row>
              <ProForm.Group>
                <CheckCard.Group style={{ width: '100%' }} size="small" defaultValue="new">
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <CheckCard
                      title="Register a new Project"
                      description="I'm registering a new project that has not been registered before in another GHG program"
                      value="new"
                      style={{
                        width: '48%',
                        borderRadius: '6px',
                      }}
                    />
                    <CheckCard
                      title="Transitioning from another GHG Program"
                      description="I'm transferring a registration of a project that is currently or has previously been registered with another GHG program"
                      value="old"
                      style={{
                        width: '48%',
                        borderRadius: '6px',
                      }}
                    />
                  </div>
                </CheckCard.Group>
              </ProForm.Group>
            </Row>
          </StepsForm.StepForm>

          <StepsForm.StepForm
            formRef={step1Ref}
            name="details"
            title="Project Information"
            onFinish={async () => {
              if (errText) return false;

              return true;
            }}
            layout="horizontal"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
            labelAlign="left"
          >
            <ProFormText
              name="headline"
              label="Headline"
              width="xl"
              placeholder="This is the project's public display name."
            />
            <ProFormText
              name="headline"
              label="Full Names"
              width="xl"
              placeholder="This is the project's full name."
            />
            <ProFormTextArea
              name="shortdesc"
              label="Short Description"
              width="xl"
              placeholder="This is the project's public display name."
            />

            <ProFormCheckbox
              name="disabled"
              label="Is this a grouped Project"
              fieldProps={{ onChange: (e) => setIsDisable(e.target.checked) }}
            />

            <ProFormText
              name="email"
              label="Website"
              width="xl"
              placeholder="This is a link to the project's website."
              rules={[{ type: 'email' }]}
            />

            {errText && (
              <>
                <Alert description={errText} type="warning" />
                <br />
              </>
            )}
          </StepsForm.StepForm>

          <StepsForm.StepForm
            name="attachments"
            title="GHG Program and Start Date"
            layout="horizontal"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
            labelAlign="left"
          >
            <ProFormDatePicker
              width="xl"
              name="startDate"
              label="Start Date"
              placeholder="Start Date"
            />
            <Divider />
            <CheckCard.Group style={{ width: '100%' }} size="small" defaultValue="new">
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <CheckCard
                  title="ICR Program"
                  description="The International Carbon Registry GHG program. Registration of climate projects and issuance of high integrity carbon credits ICCs"
                  value="icr"
                  style={{
                    width: '48%',
                    borderRadius: '6px',
                  }}
                />
                <CheckCard
                  title="Forest Carbon Code"
                  description="A quality assurance standard for afforestation projects in Iceland. Registration of afforestation projects and issuance of high integrity carbon credits."
                  value="old"
                  style={{
                    width: '48%',
                    borderRadius: '6px',
                  }}
                />
              </div>
            </CheckCard.Group>
          </StepsForm.StepForm>

          <StepsForm.StepForm
            formRef={step5Ref}
            name="quiz"
            title="Enrollment Questions"
            layout="horizontal"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
            labelAlign="left"
          >
            <ProFormSelect
              name="sector"
              label="Select Sector"
              showSearch
              debounceTime={300}
              options={[
                'Energy industries',
                'Energy Distribution',
                'Energy Demand',
                'Manufacturing Industries',
                'Chemical industries',
                'Construction',
                'Transport',
                'Mining/mineral production',
                'Metal production',
                'Fugitive emissions from fuel (solid, oil and gas)',
                'Fugitive emissions from production and consumption of halocarbons and SF6',
                'Solvent use',
                'Waste handling and disposal',
                'Afforestation and reforestation',
                'Agriculture',
                'Carbon capture and storage',
                'Other',
              ]}
              placeholder="Select region"
              rules={[
                {
                  required: true,
                  message: 'Type must be specified',
                },
              ]}
            />
            <Divider />
            <ProFormSelect
              name="otherSector"
              label="Select Other Sector"
              showSearch
              debounceTime={300}
              options={[
                'Energy industries',
                'Energy Distribution',
                'Energy Demand',
                'Manufacturing Industries',
                'Chemical industries',
                'Construction',
                'Transport',
                'Mining/mineral production',
                'Metal production',
                'Fugitive emissions from fuel (solid, oil and gas)',
                'Fugitive emissions from production and consumption of halocarbons and SF6',
                'Solvent use',
                'Waste handling and disposal',
                'Afforestation and reforestation',
                'Agriculture',
                'Carbon capture and storage',
                'Other',
              ]}
              placeholder="Select region"
            />
            <Divider />
            <ProFormSelect
              name="methodology"
              label="Select Methodology"
              showSearch
              debounceTime={300}
              options={['ISO 14064-2ISO 14064-2:']}
              placeholder="Select region"
              rules={[
                {
                  required: true,
                  message: 'Methodology must be specified',
                },
              ]}
            />
          </StepsForm.StepForm>

          <StepsForm.StepForm
            formRef={step5Ref}
            name="profile"
            title="Profile"
            onFinish={async () => {
              console.log('Profile complete, form submitted');
              return true;
            }}
            onLoad={() => {}}
            layout="horizontal"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
            labelAlign="left"
          >
            <Col style={{ display: 'flex' }}>
              <Card style={{ width: '800px' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '120px', margin: '9px' }}>headline:</div>
                  <div>{step1Data.headline}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '120px', margin: '9px' }}>fullNames:</div>
                  <div>{step1Data.fullNames}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '120px', margin: '9px' }}>Last Name:</div>
                  <div>{step1Data.description}</div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '120px', margin: '9px' }}>description:</div>
                  <div>{step1Data.ptojectType}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
                  <div style={{ width: '120px', margin: '9px', marginBottom: '15px' }}>
                    Website:
                  </div>
                  <div>{step1Data.Website}</div>
                </div>
              </Card>

              <Card style={{ width: '800px' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '120px', margin: '9px' }}>sector:</div>
                  <div>{step1Data.sector}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '120px', margin: '9px' }}>Methodology:</div>
                  <div>{step1Data.Methodology}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '120px', margin: '9px' }}>sectorTwo:</div>
                  <div>{step1Data.sectorTwo}</div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '120px', margin: '9px' }}>description:</div>
                  <div>{step1Data.ptojectType}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
                  <div style={{ width: '120px', margin: '9px', marginBottom: '15px' }}>
                    Website:
                  </div>
                  <div>{step1Data.Website}</div>
                </div>
              </Card>
            </Col>
          </StepsForm.StepForm>
        </StepsForm>
      </ProCard>
    </PageContainer>
  );
}
