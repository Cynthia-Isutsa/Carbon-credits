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
import { Alert, Breadcrumb, Divider, List, Row, Segmented, Space, Typography } from 'antd';
import React, { useRef, useState } from 'react';

//   import { fetchCountries } from '@/pages/Business/service';
//   import Attachment from '@/pages/Members/components/Attachment';
//   import EnrolmentAnswers from '@/pages/Members/components/EnrolmentAnswers';
//   import { queryCoverCategory, querySchemePolicyPeriod } from '@/pages/Members/services';
//   import { uploadDocument } from '@/pages/Provider/Provider/services/ProviderService';
//   import { querySchemeRules } from '@/pages/Scheme/Schemes/services/services';
//   import { formatNumber } from '@/utils/helpers';
import {
  CheckCircleOutlined,
  FileDoneOutlined,
  FileOutlined,
  QuestionCircleOutlined,
  VerifiedOutlined,
} from '@ant-design/icons';
import type { DefaultOptionType } from 'antd/lib/select';
//   import { updateAnswers } from '../EnrollmentQuestions/services/EnrollmentQuestionsService';
//   import { createMembers, queryDepartments, querySchemes } from '../services/MemberService';
//   import './styles.less';
export type DocumentParams = {
  schemePublicId: string;
  dependantType: string;
  isDisabled: boolean;
  isDependant: boolean;
  dob: 'yyyy-mm-dd';
};

export default function AddProject() {
  const [fileList, setFileList] = React.useState<UploadFile | any>([]);

  const fullForm = useRef<ProFormInstance>();
  const step1Ref: any = useRef<ProFormInstance>();
  const step3Ref = useRef<ProFormInstance>();
  const step5Ref = useRef<ProFormInstance>();
  const [answers, setAnswers] = React.useState<any>();

  const [schemesId, setSchemesId] = useState<string>('');
  const [schemeName, setSchemeName] = useState<any>();
  const [isDisabled, setIsDisable] = useState<boolean>(false);

  // const [key, setKey] = useState(0);

  const [divisionType, setDivisionType] = useState<string>('');

  //const [departmentsDate, setDepartmentsDate] = useState<string | null>(null);
  // const [locationsDate, setLocationsDate] = useState<string | null>(null);
  // const [branchDate, setBranchDate] = useState<string | null>(null);
  // const [costCenterDate, setCostCenterDate] = useState<string | null>(null);
  // const [coverType, setCoverType] = useState<string>('Location');

  const [costSelectKey, setCostSelectKey] = useState<number>(Math.random());

  const missingRequired: any[] = [];

  const [attachmentErr, setAttachmentErr] = React.useState<any>();
  const [current, setCurrent] = React.useState(0);
  // adding the schemerules
  const [currentSchemeRules, setCurrentSchemeRules] = useState<any>([]);
  const [Divisions, setDivision] = useState<any>([]);
  const [schemeCovers, setSchemeCovers] = React.useState<any[]>();

  const [dob, setDOB] = React.useState<any>();
  //const [dob, setDOB] = React.useState<moment.Moment | null>(null);
  //moment('1990-01-01', 'YYYY-MM-DD')
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

  // const { data } = useRequest(fetchCountries);

  let formattedData: DefaultOptionType[] | undefined = [];

  // if (data) {
  //   formattedData = Object.keys(data && data)?.map((key) => {
  //     return {
  //       ...data[key],
  //       label: data[key]?.countryName,
  //       value: data[key]?.countryName,
  //       //type: 'country',
  //     };
  //   });
  // }

  // async function fetchSchemeRules() {
  //   //setLoading(true);
  //   const response = await querySchemeRules(schemesId);

  //   setCurrentSchemeRules(response?.content || []);
  //   // setFormKey(Math.random());
  //   // setLoading(false);
  // }
  // const ageLimitRule = currentSchemeRules.find((rule: any) => rule.schemeRuleType === 'AgeLimit');

  // const index = ageLimitRule.definitions.findIndex((item: any) => item.dependantType === 'PrincipalMember');

  // useEffect(() => {
  //   if (schemesId) fetchSchemeRules();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [schemesId]);

  // const { data: schemePolicyPeriod, loading: schemePolicyPeriodLoading }: any = useRequest(
  //   async () => {
  //     let response;
  //     if (schemesId) {
  //       response = await querySchemePolicyPeriod(schemesId, { status: 'Active' });
  //     }
  //     return response ?? [];
  //   },
  //   { refreshDeps: [schemesId] },
  // );

  // async function fetchDivisions() {
  //   let data2 = [];
  //   const response = await queryDepartments({
  //     departmentType: divisionType,
  //     schemePublicId: schemesId,
  //     schemePolicyPublicId: schemePolicy,
  //   });
  //   if (response && response.content) {
  //     data2 = response.content;
  //     setDivision(data2);
  //   }
  //   return data2;
  // }

  // function handleMandatory() {
  //   const mandatory = Divisions.map((div: any) => div?.isMandatory ?? false);
  //   setIsMandatory(mandatory[0]);
  // }

  // useEffect(() => {
  //   handleMandatory();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [divisionType]);

  // useEffect(() => {
  //   if (divisionType) fetchDivisions();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [divisionType]);

  // React.useEffect(() => {
  //   if (dob && joinDate && joinDate < dob) {
  //     setErrText("Joined date shouldn't be before the date of birth! Update to proceed");
  //   } else {
  //     setErrText(undefined);
  //   }
  // }, [dob, joinDate]);

  // React.useEffect(() => {
  //   step3Ref.current?.resetFields(['editionPublicId']);
  //   step3Ref.current?.resetFields(['schemePolicyPeriodPublicId']);
  // }, [schemesId, schemePolicyPeriod]);

  // React.useEffect(() => {
  //   step3Ref.current?.resetFields(['editionPublicId']);
  // }, [schemePolicy]);

  // React.useEffect(() => {
  //   step3Ref.current?.resetFields(['divisionName']);
  // }, [divisionType]);

  // const dateOfBirthValue = step1Ref.current?.getFieldValue('dateOfBirth')
  //   ? step1Ref.current?.getFieldValue('dateOfBirth').format('DD/MM/YYYY')
  //   : null;

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
          // onFinish={async (v) => {
          //   const {
          //     editionPublicId,
          //     consents,
          //     schemePolicyPeriodPublicId,
          //     schemePublicId,
          //     memberDivisions,
          //     ...rest
          //   } = v;

          //   const memberDiv = memberDivisions.map((division: any) => {
          //     return {
          //       ...division,
          //       departmentType: division?.departmentType?.value,
          //       divisionName: division?.divisionName?.value,
          //       isMandatory: isMandatory,
          //     };
          //   });
          //   // let response: any;
          //   try {
          //     const response = await createMembers({
          //       ...rest,
          //       vip: consents?.includes('vip'),
          //       surveyConsent: consents?.includes('surveyConsent'),
          //       cdmConsent: consents?.includes('cdmConsent'),
          //       coverPlan: {
          //         schemePublicIds: [v?.schemePublicId],
          //         editionPublicId: v?.editionPublicId ?? editionPublicId[0],
          //         costCentrePublicId: v?.coveragePublicId,
          //         schemePolicyPeriodPublicId: v?.schemePolicyPeriodPublicId,
          //       },
          //       //CHECK IF ITS CALLED membershipDivisions
          //       memberDivisions: memberDiv,
          //     });

          //     if (response?.publicId) {
          //       answers?.selected?.forEach(async (el: any) => {
          //         await updateAnswers({
          //           publicId: el?.publicId,
          //           answer: true,
          //           description: el?.answerDescription,
          //           membershipPublicId: response?.publicId && response?.publicId,
          //         });

          //         setAnswers({});
          //       });
          //     }

          //     if (response?.publicId) {
          //       Object.values(fileList)
          //         ?.flat()
          //         ?.forEach(async (attachment: any) => {
          //           if (attachment?.originFileObj) {
          //             const formData = new FormData();
          //             formData.append('file', attachment?.originFileObj);
          //             formData.append('referenceId', response?.publicId);
          //             formData.append('documentRulePublicId', attachment?.pid);

          //             await uploadDocument({ data: formData });
          //             // message.success(`Record Updated`);
          //             setFileList([]);
          //           }
          //         });
          //     }
          //     message.success('Member created successfully');
          //     history.push(`/membership/members/${response?.publicId}`);
          //     return true;
          //   } catch (error) {
          //     return false;
          //   }
          // }}
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
                    // {
                    //   label: (
                    //     <Space>
                    //       <CheckCircleOutlined /> Summary
                    //     </Space>
                    //   ),
                    //   value: 4,
                    // },
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
            // style={{ maxWidth: 800 }}
          >
            {/* <ProForm.Group> */}

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
              //   labelCol={{ span: 6 }}
              //   wrapperCol={{ span: 18 }}
            />

            {/* </ProForm.Group> */}

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
            // onFinish={async () => {
            //   try {
            //     if (missingRequired?.length > 0) {
            //       setAttachmentErr(
            //         missingRequired?.map((el) => el?.name).join(', ') + ' ' + 'is required',
            //       );
            //       return false;
            //     }
            //     setAttachmentErr(null);
            //     return true;
            //   } catch (error) {
            //     return false;
            //   }
            // }}
            name="attachments"
            title="GHG Program and Start Date"
            layout="horizontal"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
            labelAlign="left"
            // style={{ maxWidth: 800 }}
          >
            <ProFormDatePicker
              width="xl"
              name="startDate"
              label="Start Date"
              placeholder="Start Date"
              //   fieldProps={{
              //     onSelect() {},
              //   }}
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
            // onFinish={async (values) => {}}
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
              // request={async ({ keyWords }) => {
              //   const response = await queryDivision({
              //     name: keyWords,
              //   });
              //   // @ts-ignore
              //   return response?.content || [];
              // }}
              placeholder="Select region"
              // fieldProps={{
              //   labelInValue: true,
              //   fieldNames: {
              //     label: 'regionName',
              //     value: 'publicId',
              //   },
              //   optionItemRender(item) {
              //     return item?.regionName;
              //   },
              // }}
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
              // request={async ({ keyWords }) => {
              //   const response = await queryDivision({
              //     name: keyWords,
              //   });
              //   // @ts-ignore
              //   return response?.content || [];
              // }}
              placeholder="Select region"
              // fieldProps={{
              //   labelInValue: true,
              //   fieldNames: {
              //     label: 'regionName',
              //     value: 'publicId',
              //   },
              //   optionItemRender(item) {
              //     return item?.regionName;
              //   },
              // }}
            />
            <Divider />
            <ProFormSelect
              name="methodology"
              label="Select Methodology"
              showSearch
              debounceTime={300}
              options={['ISO 14064-2ISO 14064-2:']}
              // request={async ({ keyWords }) => {
              //   const response = await queryDivision({
              //     name: keyWords,
              //   });
              //   // @ts-ignore
              //   return response?.content || [];
              // }}
              placeholder="Select region"
              // fieldProps={{
              //   labelInValue: true,
              //   fieldNames: {
              //     label: 'regionName',
              //     value: 'publicId',
              //   },
              //   optionItemRender(item) {
              //     return item?.regionName;
              //   },
              // }}
              rules={[
                {
                  required: true,
                  message: 'Methodology must be specified',
                },
              ]}
            />
          </StepsForm.StepForm>
          {/* <StepsForm.StepForm name="summary">
            <ProCard bordered>
              <List
                split
                header="Member details"
                dataSource={[
                  { title: 'Title', value: step1Ref.current?.getFieldValue()?.title },
                  { title: 'First name', value: step1Ref.current?.getFieldValue()?.firstName },
                  { title: 'Surname', value: step1Ref.current?.getFieldValue()?.lastName },
                  { title: 'Other name', value: step1Ref.current?.getFieldValue()?.otherNames },
                  {
                    title: 'DOB',
                    //   value: dateOfBirthValue,
                    //value: step1Ref.current?.getFieldValue()?.dateOfBirth,
                  },
                  {
                    title: 'Country of Birth',
                    value: step1Ref.current?.getFieldValue()?.birthCountry,
                  },
                  {
                    title: 'Country of Residence',
                    value: step1Ref.current?.getFieldValue()?.residenceCountry,
                  },
                  {
                    title: 'City of Residence',
                    value: step1Ref.current?.getFieldValue()?.residenceCity,
                  },
                  { title: 'Gender', value: step1Ref.current?.getFieldValue()?.gender },
                  {
                    title: 'Physical address',
                    value: step1Ref.current?.getFieldValue()?.physicalAddress,
                  },
                  { title: 'Email', value: step1Ref.current?.getFieldValue()?.emailAddress },
                  {
                    title: 'Phone number',
                    value: step1Ref.current?.getFieldValue()?.primaryPhoneNumber,
                  },
                  {
                    title: 'Identification type',
                    value: step1Ref.current?.getFieldValue()?.identificationType,
                  },
                  {
                    title: 'Identification number',
                    value: step1Ref.current?.getFieldValue()?.identification,
                  },
                ]}
                renderItem={(e) => (
                  <List.Item>
                    <div>{e?.title} </div>
                    <div>{e?.value ?? '-'}</div>
                  </List.Item>
                )}
              />
            </ProCard>
            <br />
          </StepsForm.StepForm> */}
        </StepsForm>
      </ProCard>
    </PageContainer>
  );
}
