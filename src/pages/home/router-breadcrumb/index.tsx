import React from "react";
import { Breadcrumb } from "antd";
import { useLocation, Link } from "react-router-dom";
import { breadcrumbNameMap } from "./config";
import styles from "./index.module.less";

type Props = {
  className?: string;
};

const RouterBreadcrumb: React.FC<Props> = (props) => {
  const { className } = props;
  const location = useLocation();
  const pathSnippets = location.pathname.split("/").filter((i) => i);

  const breadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    if (!breadcrumbNameMap[url]) return null;

    return (
      <Breadcrumb.Item key={url}>
        {
          <Link
            to={
              breadcrumbNameMap[url].isLeaf ? "/" + pathSnippets.join("/") : url
            }
          >
            {breadcrumbNameMap[url].name}
          </Link>
        }
      </Breadcrumb.Item>
    );
  });

  return (
    <div className={`${styles.container} ${className}`}>
      <Breadcrumb>{breadcrumbItems}</Breadcrumb>
    </div>
  );
};

export default React.memo(RouterBreadcrumb);
