import React, {
  useState,
  useCallback,
  useMemo,
  useEffect,
  Suspense,
} from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { Layout, Menu, Spin } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
// import { useGetDictsQuery } from "@api/dictApi";
import menu, { MenuType } from "../../constants/menu";
import UserButton from "./user-button";
import RouterBreadcrumb from "./router-breadcrumb";
import styles from "./index.module.less";
import { useAppSelector } from "@/redux/hooks";

const { Header, Sider, Content } = Layout;

const HomePage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  // const roles = useAppSelector((state) => state.user.roles || []);
  // useGetDictsQuery();

  const pathEqual = (path: string, menuPath: string) => {
    let pathList = path.split("/");
    let menuPathList = menuPath.split("/");
    let minSize = menuPathList.length;
    for (let i = 0; i < minSize; i++) {
      if (pathList[i] !== menuPathList[i]) return false;
    }
    return true;
  };

  const userMenu = useMemo(() => {
    // const rolesCode = roles.map((role) => role.roleCode);
    let menuSet = new Set<MenuType>();
    // rolesCode.forEach((code) => {
    menu.forEach((menuItem) => {
      // if (menuItem.roles.includes(code)) {
      menuSet.add(menuItem);
      // }
    });
    // });
    return Array.from(menuSet);
  }, []);

  useEffect(() => {
    if (userMenu.length === 0) return;
    let initRoute = userMenu.find((menuItem) =>
      pathEqual(pathname, menuItem.path || "")
    );
    if (!initRoute) {
      navigate(userMenu[0].path || "");
    }
  }, [userMenu]);

  const initIndex = useMemo(() => {
    return (
      userMenu.find((menuItem) => pathEqual(pathname, menuItem.path || ""))
        ?.key || userMenu[0]?.key
    );
  }, [pathname, userMenu]);

  const handleMenuChange = (SelectEventHandler: any) => {
    navigate(SelectEventHandler.item.props.path);
  };

  return (
    <Layout className={styles.container}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className={styles.logo}>电影推荐系统</div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[initIndex]}
          items={userMenu}
          onSelect={handleMenuChange}
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
            <RouterBreadcrumb />
          </div>
          <UserButton />
        </Header>
        <Content className={styles.content}>
          {/*使用React懒加载需要Suspense来进行loading*/}
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
