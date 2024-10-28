import { PageContainer } from '@ant-design/pro-components';
import { Card, Col, Row, Typography } from 'antd';
import Title from 'antd/es/typography/Title';
const { Text } = Typography;

const Profile = () => {
  return (
    <PageContainer pageHeaderRender={false}>
      <p>This is the overview of the project.</p>

      <Card>
            <Row gutter={16}>
              <Col span={4}>
                <Card style={{ textAlign: 'center' }}>Information</Card>
              </Col>
              <Col span={4}>
                <Card style={{ textAlign: 'center' }}>Mitigation</Card>
              </Col>
              <Col span={4}>
                <Card style={{ textAlign: 'center' }}>Benefits</Card>
              </Col>
              <Col span={4}>
                <Card style={{ textAlign: 'center' }}>Documents & files</Card>
              </Col>
              <Col span={4}>
                <Card style={{ textAlign: 'center' }}>Stakeholders</Card>
              </Col>
              <Col span={4}>
                <Card style={{ textAlign: 'center' }}>Stakeholders</Card>
              </Col>
            </Row>
          </Card>

          <Row gutter={16} style={{ marginTop: '1%' }}>
            <Col span={8}>
              <Card style={{ textAlign: 'center', height: '49px' }}>Information</Card>
            </Col>
            <Col span={8}>
              <Card style={{ textAlign: 'center', height: '49px' }}>Mitigation</Card>
            </Col>
            <Col span={8}>
              <Card style={{ textAlign: 'center', height: '49px' }}>Benefits</Card>
            </Col>
          </Row>

          <Card style={{ backgroundColor: '#3C316A', marginTop: '1%', alignItems: 'center' }}>
            <Row>
              <Col style={{ color: 'white' }}>
                <h1>Current Mitigation</h1>
                <p>These are the current mitigation. Future, Live, and trabsfered carcon credits</p>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={4} style={{ marginLeft: '50%', marginTop: '-5%' }}>
                <Card style={{ textAlign: 'center' }}>Documents & files</Card>
              </Col>
              <Col span={4} style={{ marginTop: '-5%' }}>
                <Card style={{ textAlign: 'center' }}>Stakeholders</Card>
              </Col>
              <Col span={4} style={{ marginTop: '-5%' }}>
                <Card style={{ textAlign: 'center' }}>Stakeholders</Card>
              </Col>
            </Row>
          </Card>

          <Card style={{ marginTop: '2%', width: '60%', height: '220px' }}>
            <Row gutter={16} style={{ textAlign: 'center' }}>
              <Col span={8}>
                <div>
                  <div style={{ fontWeight: 'bold' }}>Project Owner</div>
                  <Text type="secondary">
                    The individual or organization responsible for managing the project.
                  </Text>
                </div>
              </Col>
              <Col span={8}>
                <div>
                  <div style={{ fontWeight: 'bold' }}>Project Location</div>
                  <Text type="secondary">The geographical area where the project takes place.</Text>
                </div>
              </Col>
              <Col span={8}>
                <div>
                  <div style={{ fontWeight: 'bold' }}>Project Website</div>
                  <Text type="secondary">
                    A link to the project's website for more information.
                  </Text>
                </div>
              </Col>
            </Row>
          </Card>

          <Card style={{ marginLeft: '62%', width: '38%', height: '400px', marginTop: '-14%' }}>
            <Row gutter={16}>
              <Col span={8}>
                <Card style={{ textAlign: 'center', height: '100%' }}>
                  <div style={{ fontWeight: 'bold' }}>Information</div>
                  <Text type="secondary">
                    Short description about the information insights related to the project.
                  </Text>
                </Card>
              </Col>
              <Col span={8}>
                <Card style={{ textAlign: 'center', height: '100%' }}>
                  <div style={{ fontWeight: 'bold' }}>Mitigation</div>
                  <Text type="secondary">
                    Short description about mitigation strategies and insights.
                  </Text>
                </Card>
              </Col>
              <Col span={8}>
                <Card style={{ textAlign: 'center', height: '100%' }}>
                  <div style={{ fontWeight: 'bold' }}>Benefits</div>
                  <Text type="secondary">
                    Short description about the benefits gained from the project.
                  </Text>
                </Card>
              </Col>
            </Row>
          </Card>

          <Card style={{ marginTop: '-10%', width: '60%', height: '160px' }}>
            <Row gutter={16}>
              <Col span={8}>
                <div>
                  <Title level={4}>Project Short Description</Title>
                  <p>
                    This project aims to implement renewable energy solutions in rural areas,
                    enhancing energy access and reducing carbon footprints through solar and wind
                    technologies.
                  </p>
                </div>
              </Col>
            </Row>
          </Card>

     
    </PageContainer>
  );
};

export default Profile;
