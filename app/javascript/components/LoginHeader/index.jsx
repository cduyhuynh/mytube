import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Layout, Form, Image, Input, Row, Col, Button } from 'antd';
import { login } from './redux';

const { Header } = Layout;

export default function(){
  const [form] = Form.useForm();
  const { data, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const submitLogin = (e) => {
    const values = form.getFieldsValue();
    dispatch(login(values));
  }

  const isLoggedIn = () => {
    return Object.keys(data).length > 0;
  }

  return (
    <Header>
      <Row align="middle">
        <Col span={3}>
          <Image height={"100%"} preview={false} src="/logo.png"/>
        </Col>

        <Col offset={10} span={10}>
          { !isLoggedIn() && 
            <Form form={form} layout="inline">
              <Form.Item name="email" rules={[{required: true, message: 'Please input email!'}]}>
                <Input placeholder="email"/>
              </Form.Item>
              <Form.Item name="password">
                <Input.Password placeholder="password"/>
              </Form.Item>
              <Form.Item>
                <Button type="primary" onClick={submitLogin}>
                  Login/Register
                </Button>
              </Form.Item>
            </Form>
          }
          {
            isLoggedIn() && 
            <Button type="primary">
              Logout
            </Button>
          }
        </Col>
      </Row>
    </Header>
)};