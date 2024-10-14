// import PageHeader from '@/components/PageHeader/PageHeader';
import { PageHeader } from '@/components/PageHeader/PageHeader';
import { HomeOutlined, PieChartOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import { Helmet } from 'react-helmet-async';

function Projects() {
  const companyProfile = {
    title: 'Reforestation Initiative',
    
  };

  return (
    <div>
      <Helmet>
        <title>Projects</title>
      </Helmet>

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
          {
            title: (
              <>
                <PieChartOutlined />
                <span>dashboard</span>
              </>
            ),
          },
          {
            title: 'Projects',
          },
        ]}
      />

      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: 20, backgroundColor: "#D1FFBD" }}>
        <Card
          title={<span style={{ fontSize: '1.2rem' }}>Clean Energy Program</span>}
          bordered={false}
          style={{ width: '80%', maxWidth: 600 , }}
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

      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: 20 , backgroundColor: "#D1FFBD"}}>
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
      </div>
    </div>
  );
}

export default Projects;
