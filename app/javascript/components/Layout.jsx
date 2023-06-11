import React from 'react';
import { Layout, Input, Row, Col, Button, Typography } from 'antd';
import LoginHeader from './LoginHeader';

const { Content, Footer } = Layout;
const { Title, Text } = Typography;

export default function() {
  return (
    <Layout>
      <LoginHeader />
      <Content>
      </Content>
    </Layout>
)};