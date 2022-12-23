import React, { useState, Suspense } from "react";
import { Outlet } from "react-router-dom";

import fullMenu, { LocalMenuType } from "@/constants/menu";
import { Layout, Menu, MenuProps, Spin } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import styles from "./index.module.less";
import UserButton from "./user-button";

const { Header, Sider, Content } = Layout;

const HomePage = () => {
  const [collapsed, setCollapsed] = useState(false);
  // const navigate = useNavigate();
  // const { pathname } = useLocation();

  return (
    <Layout className={styles.container}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className={styles.scrollView}
      >
        <div className={styles.logo}>电影推荐系统</div>

        <Menu
          theme="dark"
          mode="inline"
          items={fullMenu}
          defaultOpenKeys={["1"]}
          defaultSelectedKeys={["8"]}
        />
      </Sider>
      <Layout className={styles.rightLayout}>
        <Header className={styles.header}>
          <div className={styles.headerLeft}>
            {collapsed ? (
              <MenuUnfoldOutlined onClick={() => setCollapsed(false)} />
            ) : (
              <MenuFoldOutlined onClick={() => setCollapsed(true)} />
            )}
          </div>
          <UserButton />
        </Header>
        <Content className={styles.content}>
          <Suspense
            fallback={
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Spin />
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  );
};

export default HomePage;
