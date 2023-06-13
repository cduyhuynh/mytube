import React from 'react';
import { Layout, notification } from 'antd';
import LoginHeader from './LoginHeader';
import consumer from '../channels/consumer';

const { Content, Footer } = Layout;

export default function({content}) {
  consumer.subscriptions.create({ channel: "VideoChannel" }, {
    received(data) {
      notification.info({
        message: `New video shared by ${data.email}`,
        description: ``
      });
  }});
  return (
    <Layout>
      <LoginHeader />
      <Content>
        {content}
      </Content>
    </Layout>
)};