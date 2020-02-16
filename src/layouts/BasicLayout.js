import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon, Avatar, Row, Col, Breadcrumb } from 'antd';
import ProfileDropdown from 'components/ProfileDropdown';
import NotificationPopover from 'components/NotificationPopover';
import './BasicLayout.scss';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const BasicLayout = ({ children, id = '', sidebar }) => {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Fragment>
      <div id={id} className="basic-layout">
        <Layout>
          <Sider trigger={null} collapsible collapsed={collapsed} width="250">
            <div className="logo">LOGO</div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Link to="/dashboard">
                  <Icon type="dashboard" />
                  <span>Dashboard</span>
                </Link>
              </Menu.Item>
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="table" />
                    <span>Manage</span>
                  </span>
                }
              >
                <Menu.Item key="2">
                  <Link to="/manage/list">List</Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to="/manage/new">New</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="build" />
                    <span>Samples</span>
                  </span>
                }
              >
                <Menu.Item key="4">Dashboard</Menu.Item>
                <Menu.Item key="5">Search List</Menu.Item>
                <Menu.Item key="6">Basic Form</Menu.Item>
                <Menu.Item key="7">Account Settings</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: '0 25px' }}>
              <Row>
                <Col span={18}>
                  <Icon className="trigger" type={collapsed ? 'menu-unfold' : 'menu-fold'} onClick={handleToggle} />
                </Col>
                <Col span={6} className="infomation">
                  <NotificationPopover>
                    <button type="button" id="btn-notification">
                      <Icon type="bell" />
                    </button>
                  </NotificationPopover>
                  <ProfileDropdown>
                    <button type="button" id="btn-profile">
                      <Avatar icon="user" />
                      <span className="name">관리자</span>
                    </button>
                  </ProfileDropdown>
                </Col>
              </Row>
            </Header>

            <Breadcrumb>
              <Breadcrumb.Item>
                <Link to="/dashboard">Home</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>Manage</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
            </Breadcrumb>
            <Content>{children}</Content>
            <Footer>@powered by codeJS</Footer>
          </Layout>
        </Layout>
      </div>
    </Fragment>
  );
};

export default BasicLayout;
