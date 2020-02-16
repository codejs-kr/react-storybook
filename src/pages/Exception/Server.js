import React from 'react';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

const Server = () => {
  return (
    <Result
      status="500"
      title="500"
      subTitle="Sorry, the server is wrong."
      extra={
        <Link to="/">
          <Button type="primary">Back Home</Button>
        </Link>
      }
    />
  );
};

export default Server;
