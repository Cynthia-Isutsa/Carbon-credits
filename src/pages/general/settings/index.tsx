import {
  PageContainer,
  ProForm,
  ProFormRadio,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-components';

const Settings = () => {
  return (
    <PageContainer title="Organizations Information">
      <ProForm>
        <ProFormText
          name="name"
          label="Organization Name"
          // tooltip="Name"
          placeholder="Organization Name"
          rules={[{ required: true }]}
        />
        <ProFormText
          name="bio"
          label="Bio"
          // tooltip="Name"
          placeholder="Provider Address"
          rules={[{ required: true }]}
        />
        <ProFormText
          label={"Website"}
          name="Website url"
          rules={[
            {
              required: true,
              // message: ,
            },
          ]}
          fieldProps={{
            style: {
              width: '100%',
            },
            addonBefore: 'http://',
            addonAfter: '.com',
          }}
          placeholder="website URL"
        />
        <ProFormSelect
          name="region"
          label="Type"
          showSearch
          debounceTime={300}
          options={[
            'Buyer',
            'Broker',
            'Consultancy',
            'Data & Analytics Provider',
            'Exchange',
            'Insurance',
            'Investment Finance',
            'MarketPlace',
            'Monitoring & Reporting',
            'Other',
            'Project Developer',
            'Project Proponent',
            'Standard/GHG Program',
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
              message: 'Region must be specified',
            },
          ]}
        />

        <ProFormText
          name="providerInformation"
          label="Email"
          // tooltip="Name"
          placeholder="Provider information"
          rules={[{ required: true, type: 'email' }]}
        />

        <ProFormText
          name="phoneNumber"
          label="Phone Number"
          // tooltip="Name"
          placeholder="Provider information"
          rules={[{ required: true, type: 'number' }]}
        />

        <ProFormSelect
          name="country"
          label="Country of Residence"
          placeholder={'country of residence'}
          rules={[{ required: true }]}
        />

        <ProFormText
          name="streetAddress"
          label="Street Address"
          // tooltip="Name"
          placeholder="Street address"
          rules={[{ required: true }]}
        />
        <ProFormText
          name="city"
          label="City"
          // tooltip="Name"
          rules={[{ required: true }]}
        />

        <ProFormRadio.Group
          name="status"
          label="Status"
          initialValue="ACTIVE"
          radioType="button"
          options={[
            {
              label: 'ACTIVE',
              value: 'ACTIVE',
            },
            {
              label: 'INACTIVE',
              value: 'INACTIVE',
            },
          ]}
        />
      </ProForm>
    </PageContainer>
  );
};

export default Settings;
