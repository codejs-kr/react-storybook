import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Table, Empty, Card } from 'antd';
import BasicLayout from 'layouts/BasicLayout';

function List(props) {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];

  return (
    <Fragment>
      <h3>List</h3>
      <section id="search-result-wrap">
        {dataSource.length ? (
          <Table dataSource={dataSource} columns={columns} />
        ) : (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="데이터가 없습니다." />
        )}
      </section>
    </Fragment>
  );
}

export default List;
