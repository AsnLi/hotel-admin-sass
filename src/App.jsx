import React, { Component } from "react";
import { Layout, Menu, Icon, Tabs, PageHeader  } from "antd";
import { Link } from 'react-router-dom';
import RouterConfig from "./routes/config";

import Routes from './routes';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
const { TabPane } = Tabs;

export default class App extends Component {
  state = {
    collapsed: false
  };

  componentDidMount() {
    console.log();
  }

  componentWillUnmount() {}

  toggleMenu = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          breakpoint="lg"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline">
            {RouterConfig.menus.map((item, index) => {
              if (item.subs) {
                return (
                  <SubMenu
                    key={item.key}
                    title={
                      <span>
                        <Icon type={item.icon} />
                        <span>{item.title}</span>
                      </span>
                    }
                  >
                    {item.subs.map(child => (
                      <Menu.Item key={child.key}>
                        <Link to={item.key}>
                          <Icon type={child.icon} />
                          <span> {child.title}</span>
                        </Link>
                      </Menu.Item>
                    ))}
                  </SubMenu>
                );
              } else {
                return (
                  <Menu.Item key={item.key}>
                    <Link to={item.key}>
                      <Icon type={item.icon} />
                      <span> {item.title}</span>
                    </Link>
                  </Menu.Item>
                )
              }
            })}
          </Menu>
        </Sider>
        <Layout>

          <Header style={{ background: "#fff", padding: 0, display: "flex" }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggleMenu}
            />
            <Tabs defaultActiveKey="1" onChange={key => {console.log(key) }} style={{
              height: "100%",
              flex: 1
            }}>
              <TabPane tab="预定" key="1" />
              <TabPane tab="入住" key="2" />
              <TabPane tab="订单" key="3" />
           </Tabs>
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: 280
            }}
          >
            <PageHeader onBack={() => null} title="普通预定" subTitle="其他说明" style={{
              padding: 0,
              paddingBottom: 16
            }}/>
            <Routes />
          </Content>
        </Layout>
      </Layout>
    );
  }
}
