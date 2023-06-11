import React from 'react';
import { Layout, Input, Row, Col, Button } from 'antd';
import LoginHeader from './LoginHeader';

const { Content, Footer } = Layout;

export default function({content}) {
  return (
    <Layout>
      <LoginHeader />
      <Content>
        {content}
      </Content>
    </Layout>
)};