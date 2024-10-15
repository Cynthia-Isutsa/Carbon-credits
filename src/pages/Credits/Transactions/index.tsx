import { PageContainer, ProCard } from '@ant-design/pro-components';
import { useLocation } from '@umijs/max';
import { Col, Row } from 'antd';
import Text from 'antd/es/typography/Text';
import Title from 'antd/es/typography/Title';
import { useEffect, useState } from 'react';
import TransactionList from './All/TransactionList';
import IssuanceList from './Issuance/IssuanceList';
import RetirementList from './RetirementList/RetirementList';
import TransfersList from './Transfers/TransfersList';

type CountType = {
  tasks: number;
};

const Transactions = () => {
  const { state }: any = useLocation();
  const [tab, setTab] = useState('BUSINESSLEADS');
  const [count, setCount] = useState<CountType>({
    tasks: 0,
  });

  useEffect(() => {
    // fetchDashboardCount();

    if (state && state.tab) {
      const currentTab = (() => {
        switch (state.tab) {
          case 'LEAD':
            return 'BUSINESSLEADS';
          case 'PROSPECT':
            return 'BUSINESSSPROSPECTS';
          case 'CUSTOMER':
            return 'BUSINESSCLIENTS';
          case 'CONGLOMERATE':
            return 'BUSINESSCONGLOMERATES';
          default:
            return 'BUSINESSSETTINGS';
        }
      })();

      setTab(currentTab);
    }
  }, [state]);

  return (
    <PageContainer title="TRANSACTIONS">
      <div>
        {/* <Title style={{ paddingLeft: '15px' }} level={3}>
          TRANSACTIONS
        </Title> */}
        {/* <Row
          style={{
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Col style={{ padding: '10px 10px' }} xs={24} sm={24} md={12} lg={8}>
            <ProCard style={{ minHeight: 190 }} gutter={4} direction="column" bordered>
              <Title level={4}>TOTAL CREDITS</Title>
              <Title level={3}>{200}</Title>
              <Text style={{ fontSize: 16 }}>
                <span style={{ color: 'rgba(56, 158, 13, 1)' }}>{100} </span> Completed
              </Text>
            </ProCard>
          </Col>
          <Col style={{ padding: '10px 10px' }} xs={24} sm={24} md={12} lg={8}>
            <ProCard style={{ minHeight: 190 }} gutter={4} direction="column" bordered>
              <Title level={4}>TOTAL ISSUANCES</Title>
              <Title level={3}>{20}</Title>
              <Text style={{ fontSize: 16 }}>
                <span style={{ color: 'rgba(56, 158, 13, 1)' }}>{100} </span> Active
              </Text>
            </ProCard>
          </Col>
          <Col style={{ padding: '10px 10px' }} xs={24} sm={24} md={12} lg={8}>
            <ProCard style={{ minHeight: 190 }} gutter={4} direction="column" bordered>
              <Title level={4}>RETIREMENTS</Title>
              <Title level={3}>{count.tasks}</Title>
              <Text style={{ fontSize: 16 }}>
                <span style={{ color: '#000' }}>View my retirements </span>
              </Text>
            </ProCard>
          </Col>
        </Row> */}
      </div>
      <br />

      <ProCard
        tabs={{
          items: [
            {
              label: 'ALL',
              key: 'BUSINESSLEADS',
              children: <TransactionList />,
            },
            {
              label: 'ISSUANCE',
              key: 'BUSINESSSPROSPECTS',
              children: <IssuanceList />,
            },
            {
              label: 'RETIREMENTS',
              key: 'BUSINESSCLIENTS',
              children: <RetirementList />,
            },
            {
              label: 'TRANSFERS',
              key: 'BUSINESSCONGLOMERATES',
              children: <TransfersList />,
            },
          ],
          activeKey: tab,
          onChange: (key) => {
            setTab(key);
          },
        }}
      />
    </PageContainer>
  );
};

export default Transactions;
