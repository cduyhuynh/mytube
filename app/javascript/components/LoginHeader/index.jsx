import React from 'react';
import { Layout, Form, Image, Input, Row, Col, Button } from 'antd';
import axios from 'axios';

const { Header } = Layout;

export default function(){
  const [form] = Form.useForm();

  const login = (e) => {
    const values = form.getFieldsValue();
    axios.post(`/login`, values)
      .then(function(res){
        console.log(res);
      })
      .catch(function(res){
        console.log(res.response);
      });
  }

  return (
    <Header>
      <Row align="middle">
        <Col span={3}>
          <Image height={"100%"} preview={false} src="/logo.png"/>
        </Col>

        <Col offset={10} span={10}>
          <Form form={form} layout="inline">
            <Form.Item name="email" rules={[{required: true, message: 'Please input email!'}]}>
              <Input placeholder="email"/>
            </Form.Item>
            <Form.Item name="password">
              <Input.Password placeholder="password"/>
            </Form.Item>
            <Form.Item>
              <Button type="primary" onClick={login}>
                Login/Register
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Header>
)};