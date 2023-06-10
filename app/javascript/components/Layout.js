import React, { useState } from 'react';
import { Layout, Button, Typography, Image } from 'antd';

const { Header, Sider, Content, Footer } = Layout;
const { Title, Text } = Typography;

export default function({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{minHeight:"100vh"}} hasSider>
      <Layout>
        <Header>
        </Header>
        <Content>
          Content
          { children }
        </Content>
        
      </Layout>
    </Layout>
)};