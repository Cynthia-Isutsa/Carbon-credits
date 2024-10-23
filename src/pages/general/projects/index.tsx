// import PageHeader from '@/components/PageHeader/PageHeader';
import { PageHeader } from '@/components/PageHeader/PageHeader';
import { EyeOutlined, HomeOutlined, PlusOutlined } from '@ant-design/icons';
import { useNavigate } from '@umijs/max';
import { Button, Card, Col, List, Row } from 'antd';

function Projects() {
  const navigate = useNavigate();
  // const companyProfile = {
  //   title: 'Reforestation Initiative',
  // };

  const projects = [
    {
      key: '1',
      location: 'Nairobi, Kenya',
      objective: 'Promoting solar energy systems to reduce reliance on fossil fuels.',
      impact: '2,000 households powered by solar energy, reducing 15,000 tons of CO₂ emissions.',
      status: 'Ongoing',
      title:'Clean Energy Program'
    },
    {
      key: '2',
      location: 'Rift Valley, Kenya',
      objective: 'Implementing climate-smart farming techniques to reduce carbon emissions.',
      impact: '1,500 farmers trained, 5,000 tons of CO₂ emissions reduced annually.',
      status: '50% complete',
      title:'Sustainable Agriculture'
    },
    {
      key: '3',
      location: 'Mau Forest, Kenya',
      objective: 'Restoring degraded forest lands through planting native trees.',
      impact: '500 hectares reforested, 10,000 tons of CO₂ sequestered annually.',
      status: '75% complete',
      title:'Reforestation Initiative'
    },
    {
      key: '4',
      location: 'Turkana, Kenya',
      objective: 'Implementing rainwater harvesting systems and rehabilitating water catchments.',
      impact: '50,000 liters of water conserved annually, benefiting 3,000 households.',
      status: 'Completed',
      title:'Water Conservation Project'
    },
    {
      key: '5',
      location: 'Kitui, Kenya',
      objective: 'Converting organic waste into biogas for clean cooking and reducing deforestation.',
      impact: '500 biogas units installed, reducing 2,500 tons of CO₂ annually.',
      status: 'Ongoing',
      title:'Biogas Energy Program'
    },
    {
      key: '6',
      location: 'Marsabit, Kenya',
      objective: 'Harnessing wind power to supply electricity to remote communities.',
      impact: '10 wind turbines installed, generating 5 MW of renewable energy.',
      status: 'Planning stage',
      title:'Wind Energy Development'
    },
  ];

  return (
    <div>
      <PageHeader
        title="Available Projects"
        breadcrumbs={[
          {
            title: (
              <>
                <HomeOutlined />
                <span>home</span>
              </>
            ),
            path: '/',
          },
          // {
          //   title: (
          //     <>
          //       <PieChartOutlined />
          //       <span>dashboard</span>
          //     </>
          //   ),
          // },
          {
            title: 'Projects',
            path: '/general/projects',
          },
        ]}
      ></PageHeader>
      <div style={{ marginBottom: 16, textAlign: 'right' }}>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => navigate('/general/projects/onboard')}
        >
          Add a Project
        </Button>
      </div>

      {/* Changes making it reusable and clean code */}

      <Row gutter={[16, 16]}>
        <Col span={24}>
          <List
            grid={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 4, gutter: 16, column: 4 }}
            dataSource={projects ?? []}
            // pagination={{
            //   onChange: (pg: any) => {
            //     setPage(pg - 1);
            //   },
            //   //total: totalElements,
            //   showSizeChanger: false,
            //   current: page + 1,
            //   showQuickJumper: true,
            //   pageSize: 10,
            // }}
            // loading={loading}
            renderItem={({ location, impact, status, objective, title, key }: any) => {
              return (
                <List.Item
                  style={{
                      //  border: '1px solid grey',
                    paddingLeft: '0',
                    paddingRight: '0',
                    minWidth: '40%',
                    borderRadius: "10px"
                  }}
                >
                  <Card
                    title={<span style={{ fontSize: '1.2rem' }}>{title}</span>}
                    bordered={false}
                    style={{ width: '100%', maxWidth: 600 }}
                    onClick={() => navigate(`/general/projects/${key}`,  {
                      state: { id: key, title: title },
                    })}
                    hoverable
                    actions={[
                      <Button
                        key="001"
                        type="link"
                        icon={<EyeOutlined />}
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate('/general/projects/clean-energy/details');
                        }}
                      >
                        View Details
                      </Button>,
                    ]}
                  >
                    <p style={{ fontSize: '1rem' }}>
                      <strong>Location:</strong> {location}
                    </p>
                    <p style={{ fontSize: '1rem' }}>
                      <strong>Objective:</strong> {objective}
                    </p>
                    <p style={{ fontSize: '1rem' }}>
                      <strong>Impact:</strong> {impact}
                    </p>
                    <p style={{ fontSize: '1rem' }}>
                      <strong>Status:</strong> {status}
                    </p>
                  </Card>
                </List.Item>
              );
            }}
          />
        </Col>
      </Row>

      {/* Changes */}
      {/* <div
        style={{
          display: 'flex',
          gap: '10px',
          justifyContent: 'center',
          marginTop: 20,
          backgroundColor: '#D1FFBD',
        }}
      >
        <Card
          title={<span style={{ fontSize: '1.2rem' }}>Clean Energy Program</span>}
          bordered={false}
          style={{ width: '80%', maxWidth: 600 }}
          hoverable
        >
          <p style={{ fontSize: '1rem' }}>
            <strong>Location:</strong> Nairobi, Kenya
          </p>
          <p style={{ fontSize: '1rem' }}>
            <strong>Objective:</strong> Promoting solar energy systems to reduce reliance on fossil
            fuels.
          </p>
          <p style={{ fontSize: '1rem' }}>
            <strong>Impact:</strong> 2,000 households powered by solar energy, reducing 15,000 tons
            of CO₂ emissions.
          </p>
          <p style={{ fontSize: '1rem' }}>
            <strong>Status:</strong> Ongoing
          </p>
        </Card>

        <Card
          title={<span style={{ fontSize: '1.2rem' }}>Sustainable Agriculture</span>}
          bordered={false}
          style={{ width: '80%', maxWidth: 600 }}
        >
          <p style={{ fontSize: '1rem' }}>
            <strong>Location:</strong> Rift Valley, Kenya
          </p>
          <p style={{ fontSize: '1rem' }}>
            <strong>Objective:</strong> Implementing climate-smart farming techniques to reduce
            carbon emissions.
          </p>
          <p style={{ fontSize: '1rem' }}>
            <strong>Impact:</strong> 1,500 farmers trained, 5,000 tons of CO₂ emissions reduced
            annually.
          </p>
          <p style={{ fontSize: '1rem' }}>
            <strong>Status:</strong> 50% complete
          </p>
        </Card>

        <Card
          title={<span style={{ fontSize: '1.2rem' }}>{companyProfile.title}</span>}
          bordered={false}
          style={{ width: '80%', maxWidth: 600 }}
        >
          <p style={{ fontSize: '1rem' }}>
            <strong>Location:</strong> Mau Forest, Kenya
          </p>
          <p style={{ fontSize: '1rem' }}>
            <strong>Objective:</strong> Restoring degraded forest lands through planting native
            trees.
          </p>
          <p style={{ fontSize: '1rem' }}>
            <strong>Impact:</strong> 500 hectares reforested, 10,000 tons of CO₂ sequestered
            annually.
          </p>
          <p style={{ fontSize: '1rem' }}>
            <strong>Status:</strong> 75% complete
          </p>
        </Card>
      </div>

      <div
        style={{
          display: 'flex',
          gap: '10px',
          justifyContent: 'center',
          marginTop: 20,
          backgroundColor: '#D1FFBD',
        }}
      >
        <Card
          title={<span style={{ fontSize: '1.2rem' }}>Water Conservation Project</span>}
          bordered={false}
          style={{ width: '80%', maxWidth: 600 }}
        >
          <p style={{ fontSize: '1rem' }}>
            <strong>Location:</strong> Turkana, Kenya
          </p>
          <p style={{ fontSize: '1rem' }}>
            <strong>Objective:</strong> Implementing rainwater harvesting systems and rehabilitating
            water catchments.
          </p>
          <p style={{ fontSize: '1rem' }}>
            <strong>Impact:</strong> 50,000 liters of water conserved annually, benefiting 3,000
            households.
          </p>
          <p style={{ fontSize: '1rem' }}>
            <strong>Status:</strong> Completed
          </p>
        </Card>

        <Card
          title={<span style={{ fontSize: '1.2rem' }}>Biogas Energy Program</span>}
          bordered={false}
          style={{ width: '80%', maxWidth: 600 }}
        >
          <p style={{ fontSize: '1rem' }}>
            <strong>Location:</strong> Kitui, Kenya
          </p>
          <p style={{ fontSize: '1rem' }}>
            <strong>Objective:</strong> Converting organic waste into biogas for clean cooking and
            reducing deforestation.
          </p>
          <p style={{ fontSize: '1rem' }}>
            <strong>Impact:</strong> 500 biogas units installed, reducing 2,500 tons of CO₂
            annually.
          </p>
          <p style={{ fontSize: '1rem' }}>
            <strong>Status:</strong> Ongoing
          </p>
        </Card>

        <Card
          title={<span style={{ fontSize: '1.2rem' }}>Wind Energy Development</span>}
          bordered={false}
          style={{ width: '80%', maxWidth: 600 }}
        >
          <p style={{ fontSize: '1rem' }}>
            <strong>Location:</strong> Marsabit, Kenya
          </p>
          <p style={{ fontSize: '1rem' }}>
            <strong>Objective:</strong> Harnessing wind power to supply electricity to remote
            communities.
          </p>
          <p style={{ fontSize: '1rem' }}>
            <strong>Impact:</strong> 10 wind turbines installed, generating 5 MW of renewable
            energy.
          </p>
          <p style={{ fontSize: '1rem' }}>
            <strong>Status:</strong> Planning stage
          </p>
        </Card>
      </div> */}
    </div>
  );
}

export default Projects;
