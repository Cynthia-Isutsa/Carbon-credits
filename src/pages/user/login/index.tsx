import { login} from '@/services/ant-design-pro/api'; 
import { LoadingOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import type { ProFormInstance } from '@ant-design/pro-components';
import { ProCard, ProForm, ProFormCheckbox, ProFormText } from '@ant-design/pro-components';
import { FormattedMessage } from '@umijs/max';
import { Button, Col, Image, message, Row, Spin } from 'antd';
import Text from 'antd/es/typography/Text';
import Title from 'antd/es/typography/Title';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import ccr from '../../../../public/ccr.jpeg';

const Login = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [isSignup, setIsSignup] = useState<boolean>(false); 
  const formRef = useRef<ProFormInstance>();
  const navigate = useNavigate();

  const handleSubmit = async (values: any) => {
    try {
      setLoading(true);
      let msg;

      if (isSignup) {
        console.log('Signup values:', values)
      } else {
        // Handle login submission
        msg = await login({ ...values }); 
      }
      console.log({msg});

      if (msg?.status === 'ok') {
        message.success(isSignup ? 'Signup successful!' : 'Login successful!');
        window.location.href = '/'; 
      } else {
        message.error(isSignup ? 'Signup failed, please try again!' : 'Login failed, please try again!');
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      message.error(isSignup ? 'Signup failed, please try again!' : 'Login failed, please try again!');
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        background: 'linear-gradient(180deg, #A1887F  0%, #fff 100%)',
        position: 'absolute',
        width: '100%',
        height: '100vh',
        top: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Row
        style={{
          zIndex: 1,
          backgroundColor: 'transparent',
          borderRadius: 0,
          position: 'absolute',
          height: '70vh',
        }}
        justify="center"
        align="middle"
      >
        <Col style={{ width: '450px' }}>
          <ProCard
            colSpan={24}
            direction="column"
            gutter={12}
            layout="center"
            style={{ padding: '0px 10px', backgroundColor: 'transparent' }}
          >
            <Title style={{ color: '#000' }} level={1}>
              Carbon Credit Registry
            </Title>

            <Text>
              Empower Your Sustainability Journey: Strategize and Optimize Your Carbon Credit
              Footprint Today!
            </Text>
          </ProCard>
        </Col>
        <Col style={{ width: '450px', marginTop: '60px' }}>
          <ProCard colSpan={24} layout="center" bordered>
            <ProForm
              style={{ padding: '10px 25px' }}
              onFinish={handleSubmit}
              submitter={{
                resetButtonProps: {
                  style: { display: 'none' },
                },
                submitButtonProps: {
                  style: { display: 'none' },
                },
              }}
              formRef={formRef}
            >
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Image preview={false} width={100} height={100} src={ccr} />
              </div>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginBottom: '15px',
                }}
              >
                <Title style={{ fontFamily: 'monospace' }} level={2}>
                  {isSignup ? 'SIGN UP' : 'LOGIN'}
                </Title>
                <span style={{ fontWeight: 500, fontSize: 16 }}>
                  {isSignup ? 'Create your account to start using the app.' : 'Please enter your details to start using the app.'}
                </span>
              </div>

              <ProFormText
                name="username"
                fieldProps={{ size: 'large', prefix: <UserOutlined /> }}
                placeholder="Username"
                rules={[
                  {
                    required: true,
                    message: (
                      <FormattedMessage
                        id="pages.login.username.required"
                        defaultMessage="请输入用户名!"
                      />
                    ),
                  },
                ]}
              />
              <ProFormText.Password
                name="password"
                fieldProps={{ size: 'large', prefix: <LockOutlined /> }}
                placeholder="Password"
                rules={[
                  {
                    required: true,
                    message: (
                      <FormattedMessage
                        id="pages.login.password.required"
                        defaultMessage="请输入密码！"
                      />
                    ),
                  },
                ]}
              />

              {isSignup && ( 
                <ProFormText.Password
                  name="confirmPassword"
                  fieldProps={{ size: 'large', prefix: <LockOutlined /> }}
                  placeholder="Confirm Password"
                  rules={[
                    {
                      required: true,
                      message: 'Please confirm your password!',
                    },
                    {
                      validator: (_, value) =>
                        value === formRef.current?.getFieldValue('password')
                          ? Promise.resolve()
                          : Promise.reject(new Error('Passwords do not match!')),
                    },
                  ]}
                />
              )}

              <div style={{ marginBottom: 24 }}>
                <ProFormCheckbox noStyle name="autoLogin">
                  <FormattedMessage id="pages.login.rememberMe" defaultMessage="Remember Me" />
                </ProFormCheckbox>
                <a style={{ float: 'right' }} onClick={() => navigate('/user/forgot-password')}>
                  <FormattedMessage id="pages.login.forgotPassword" defaultMessage="Forgot Password?" />
                </a>
              </div>

              <Row style={{ marginTop: 15, padding: '0px, 15px' }} justify="center">
                {loading ? (
                  <Spin indicator={<LoadingOutlined spin />} />
                ) : (
                  <Button
                    block
                    style={{
                      height: 50,
                      backgroundColor: '#795548',
                      color: 'white',
                      fontSize: 18,
                      fontWeight: 'bold',
                      borderRadius: 8,
                      border: '1px #000',
                    }}
                    type="primary"
                    onClick={() => formRef.current?.submit()}
                  >
                    {isSignup ? 'Sign Up' : 'Login'}
                  </Button>
                )}
              </Row>
              <Row style={{ marginTop: 15, padding: '0px, 15px' }} justify="center">
                <Button type="default" onClick={() => setIsSignup(!isSignup)}>
                  {isSignup ? "Already have an account? Login" : "Don't have an account? Sign Up"}
                </Button>
              </Row>
            </ProForm>
          </ProCard>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
