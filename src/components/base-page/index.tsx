import React, { PropsWithChildren } from "react";
import { Spin, Button } from "antd";
import styles from "./index.module.less";

type Props = PropsWithChildren<{
  className?: string;
  isLoading?: boolean;
  isError?: boolean;
  refetch?: () => void;
}>;

const BasePage: React.FC<Props> = (props) => {
  const { className = "", isLoading, isError, refetch, children } = props;

  const handleRefresh = () => {
    refetch?.();
  };

  if (isLoading)
    return (
      <div className={`${styles.spinContainer} ${className}`}>
        <Spin />
      </div>
    );
  if (isError)
    return (
      <div className={`${styles.errorContainer} ${className}`}>
        <Button onClick={handleRefresh} size="large">
          网络请求异常,请重试
        </Button>
      </div>
    );

  return <div className={`${styles.container} ${className}`}>{children}</div>;
};

export default React.memo(BasePage);
