import { Card, Col, Row, Tabs, Typography } from 'antd';
import { useParams } from 'react-router-dom';

const { TabPane } = Tabs;
const { Paragraph, Text } = Typography;

const Details = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>{id}</h1>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Overview" key="1">
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

          <Card style={{ backgroundColor: '#3C316A', marginTop: '1%', alignItems: "center" }}>
            <Row>
              <Col style={{ color: 'white' }}>
                <h1>Current Mitigation</h1>
                <p>These are the current mitigation. Future, Live, and trabsfered carcon credits</p>
              </Col>
            </Row>
            <Row gutter={16} >
              <Col span={4} style={{ marginLeft: '50%' , marginTop:"-5%"}}>
                <Card style={{ textAlign: 'center' }}>Documents & files</Card>
              </Col>
              <Col span={4} style={{marginTop:"-5%"}}>
                <Card style={{ textAlign: 'center' }}>Stakeholders</Card>
              </Col>
              <Col span={4} style={{marginTop:"-5%"}}>
                <Card style={{ textAlign: 'center' }}>Stakeholders</Card>
              </Col>
            </Row>
          </Card>
        </TabPane>

        <TabPane tab="People" key="2">
          <p>Details about the people involved in the project.</p>
        </TabPane>
        <TabPane tab="Mitigation" key="3">
          <p>Information about the mitigation strategies used in the project.</p>
        </TabPane>
        <TabPane tab="Benefits" key="4">
          <p>Details about the benefits of the project.</p>
        </TabPane>
        <TabPane tab="BBV" key="5">
          <p>Information about BBV related to the project.</p>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Details;
