import React from 'react';
import { PageContainer } from '@ant-design/pro-components';
import { Card, Row, Col, Avatar, Descriptions, Typography } from 'antd';
import ccr from '../../../../public/carbonprofile.jpeg'
import {
  FacebookOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  TwitterOutlined,
  GlobalOutlined,
  PhoneOutlined,
  MailOutlined,
} from '@ant-design/icons';


const companyDetails = {
  companyName: "Pathways Technologies",
  organizationType: "Technology Services",
  contactInfo: {
    email: "info@pathwaystech.co.ke",
    phone: "+254 (700) 123-456",
    website: "www.pathwaystech.co.ke"
  },
  socialMedia: {
    facebook: "https://facebook.com/pathwaystechke",
    linkedin: "https://linkedin.com/company/pathwaystechke",
    instagram: "https://instagram.com/pathwaystechke",
    twitter: "https://twitter.com/pathwaystechke"
  },
  location: {
    country: "Kenya",
    city: "Nairobi",
    street: "4567 Ngong Road"
  },
  onboardingProgress: {
    steps: [
      "Organization type selected",
      "Contact info added",
      "Location added",
      "Tell us a bit about yourself"
    ]
  },
  status: "In Progress"
};

const Profile = () => {
  return (
    <PageContainer>
      <Card>
        <Row gutter={[16, 16]}>
       
          <Col span={6}>
            <Avatar
              size={128}
              src={ccr} 
              alt="Company Logo"
              style={{ marginBottom: '16px' }}
            />
            <Typography.Title level={3}>{companyDetails.companyName}</Typography.Title>
            <Typography.Text>{companyDetails.organizationType}</Typography.Text>
          </Col>

          {/* Company Details Section */}
          <Col span={18}>
            <Descriptions title="Company Information" bordered>
              <Descriptions.Item label="Email">
                <MailOutlined /> {companyDetails.contactInfo.email}
              </Descriptions.Item>
              <Descriptions.Item label="Phone">
                <PhoneOutlined /> {companyDetails.contactInfo.phone}
              </Descriptions.Item>
              <Descriptions.Item label="Website">
                <GlobalOutlined />{' '}
                <a href={companyDetails.contactInfo.website} target="_blank" rel="noopener noreferrer">
                  {companyDetails.contactInfo.website}
                </a>
              </Descriptions.Item>
              <Descriptions.Item label="Country">{companyDetails.location.country}</Descriptions.Item>
              <Descriptions.Item label="City">{companyDetails.location.city}</Descriptions.Item>
              <Descriptions.Item label="Street Address">{companyDetails.location.street}</Descriptions.Item>
              <Descriptions.Item label="Status">{companyDetails.status}</Descriptions.Item>
            </Descriptions>

            {/* Social Media Section */}
            <div style={{ marginTop: '16px' }}>
              <Typography.Title level={4}>Follow Us</Typography.Title>
              <a href={companyDetails.socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                <FacebookOutlined style={{ fontSize: '24px', marginRight: '16px' }} />
              </a>
              <a href={companyDetails.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedinOutlined style={{ fontSize: '24px', marginRight: '16px' }} />
              </a>
              <a href={companyDetails.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                <InstagramOutlined style={{ fontSize: '24px', marginRight: '16px' }} />
              </a>
              <a href={companyDetails.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                <TwitterOutlined style={{ fontSize: '24px', marginRight: '16px' }} />
              </a>
            </div>
          </Col>
        </Row>
      </Card>
    </PageContainer>
  );
};

export default Profile;
