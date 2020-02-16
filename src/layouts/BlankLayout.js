import React from 'react';
import { Layout } from 'antd';
import './BlankLayout.scss';

const { Footer, Content } = Layout;

const BlankLayout = ({ children, id = '' }) => {
  return (
    <div id={id} className="blank-layout">
      <Layout>
        <Content>{children}</Content>
        <Footer>@powered by codeJS</Footer>
      </Layout>
    </div>
  );
};

export default BlankLayout;
