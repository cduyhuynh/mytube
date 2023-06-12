import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Button, Typography } from 'antd';
import { list } from './redux';

const { Title } = Typography;
export default function(){
  const { data, loading, page, end_of_feed } = useSelector((state) => state.feed);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(list(page));
  }, data);
  const loadMore = () => 
  {
    dispatch(list(page));
  }

  return(
    <>
    {data.map((video) => {
      return (
        <Row key={video.id}>
          <Col span={10} offset={4}>
            <iframe width="100%" height="315" src={video.embedded_url} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen/>
          </Col>
          <Col span={5} offset={1}>
            Shared by: <b>{video.email}</b>
          </Col>
        </Row>
      );
    })}
    <Row>
      <Col span={4} offset={10}>
        <br />
        { !end_of_feed && 
          <Button type="primary" size="large" onClick={loadMore}>Load more</Button>
        }
        { end_of_feed && <Title level={3}>No more videos</Title>}
        <br />
      </Col>
    </Row>
    </>
)};