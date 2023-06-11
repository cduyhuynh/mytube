import React from 'react';
import { Form, Typography, Input, Row, Col, Button, notification } from 'antd';
import axios from 'axios';

const { Title } = Typography;

export default function(){
  const [form] = Form.useForm();
  const share = (e) => {
    axios.post(`/share`, form.getFieldsValue())
      .then((response) => {
        notification.success({
          message: 'Success',
          description: response.data.message
        });
        form.resetFields();
      })
      .catch(({response}) => {
        notification.error({
          message: 'Error',
          description: response.data.message
        });
      });
  }

  return(
    <Row align="middle">
      <Col span={12} offset={6}>
        <Title level={3}>Share a Youtube movie</Title>
        <Form form={form}
          name="basic"
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 16,
          }}
          autoComplete="off"
        >
          <Form.Item
            label="Youtube URL"
            name="url"
            rules={[
              {
                required: true,
                message: 'Please input Youtube URL!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{
            offset: 8,
            span: 16,
          }}>
            <Button type="primary" onClick={share}>Share</Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
)};