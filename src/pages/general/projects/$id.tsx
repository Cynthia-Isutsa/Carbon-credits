import { ProCard } from '@ant-design/pro-components';
import { useLocation } from '@umijs/max';
import Title from 'antd/es/typography/Title';
import { useState } from 'react';
import VVB from './VVB';
import Details from './Profile';
import Profile from './Profile';
// import CreditNotes from './CreditNotes';


export default function $id() {
  const { state }: any = useLocation();
  console.log("state", state)

  const [tab, setTab] = useState('overviewtab');
  
  return (
    <>
      <div>
        <Title style={{ paddingLeft: '15px' }} level={3}>
          {state?.title}
        </Title>
      </div>
      <br />

      <ProCard
        tabs={{
          activeKey: tab,
          items: [
            {
              label: 'Overview',
              key: 'overviewtab',
              children: <Profile />,
            },
            {
              label: 'People',
              key: 'peopletab',
              // children: <People />,
            },
            {
              label: `Mitigation`,
              key: 'mitigationtab',
              // children: <Mitigation />,
            },
            {
              label: `Benefits`,
              key: 'benefitstab',
              // children: <Benefits />,
            },

            {
              label: `VVB`,
              key: 'vvbtab',
              children: <VVB />,
            },
          ],
          onChange: (key: string) => {
            setTab(key);
          },
        }}
      />
    </>
  );
}
