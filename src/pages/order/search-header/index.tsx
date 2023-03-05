import { OrderReq } from "@/api/orderApi";
import { Button, Form, Input, Select, Space } from "antd";
import React, { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.less";

type Props = {
  isError?: boolean;
  initialValues: any;
  onChange: (
    values: Partial<{
      opt: OrderReq["input"];
      pagination: Partial<{ tCurrent: number; tSize: number }>;
    }>
  ) => void;
};
const SearchHeadr: React.FC<Props> = (props) => {
  const { isError, initialValues, onChange } = props;
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { Option } = Select;

  useEffect(() => {
    if (isError) form.resetFields();
  }, [isError, form]);

  useEffect(() => {
    if (JSON.stringify(initialValues) !== "{}")
      form.setFieldsValue(initialValues);
  }, []);

  const handleFinish = (value: OrderReq["input"]) => {
    onChange({ opt: value, pagination: { tCurrent: 1 } });
  };
  const resetSearch = useCallback(() => {
    form.resetFields();
    onChange({ opt: {}, pagination: { tCurrent: 1, tSize: 10 } });
  }, []);

  return (
    <Form layout="inline" form={form} onFinish={handleFinish}>
      <Space size={[0, 16]} wrap>
        <Form.Item name="orderId">
          <Input
            allowClear
            className={styles.keyword}
            placeholder="请输入订单编号"
          />
        </Form.Item>
        <Form.Item name="customerId">
          <Input
            allowClear
            className={styles.keyword}
            placeholder="请输入客户编号"
          />
        </Form.Item>
        <Form.Item name="title">
          <Input
            allowClear
            className={styles.keyword}
            placeholder="请输入电影名称"
          />
        </Form.Item>
        <Form.Item>
          <Space>
            <Button htmlType="submit" type="primary">
              搜索
            </Button>
            <Button htmlType="button" onClick={resetSearch}>
              重置
            </Button>

            <Button
              type="primary"
              // onClick={() => {
              //   navigate("/home/customerManagement/create");
              // }}
            >
              新增客户
            </Button>
          </Space>
        </Form.Item>
      </Space>
    </Form>
  );
};

export default React.memo(SearchHeadr);
