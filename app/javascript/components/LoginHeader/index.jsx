import React from 'react';
import { Layout, Form, Image, Input, Row, Col, Button } from 'antd';
import { login } from './redux';
import axios from 'axios';

const { Header } = Layout;

export default function(){
  const [form] = Form.useForm();

  const sign_up = (values) => {
    axios.post(`/sign_up`, values)
      .then(function(res){
        console.log(res);
      });
  }

  return (
    <Header>
      <Row>
        <Col span={3}>
          <Image height={"100%"} preview={false} src="/logo.png"/>
        </Col>

        <Col offset={10} span={10}>
          <Form form={form} layout="inline" onFinish={sign_up}>
            <Form.Item name="email" rules={[{required: true, message: 'Please input email!'}]}>
              <Input placeholder="email"/>
            </Form.Item>
            <Form.Item name="password">
              <Input.Password placeholder="password"/>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Login/Register
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Header>
)};