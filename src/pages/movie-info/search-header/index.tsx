import { Button, Form, Input, Select, Space } from "antd";
import React, { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.less";

type Props = {
  isError?: boolean;
  initialValues: any;
  onChange: (
    values: Partial<{
      opt: Partial<{ registerWay: number; keyword: string }>;
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

  const handleFinish = (value: { keyword: string; registerWay: number }) => {
    onChange({ opt: value, pagination: { tCurrent: 1 } });
  };
  const resetSearch = useCallback(() => {
    form.resetFields();
    onChange({ opt: {}, pagination: { tCurrent: 1, tSize: 10 } });
  }, []);

  return (
    <Form layout="inline" form={form} onFinish={handleFinish}>
      <Space size={[0, 16]} wrap>
        <Form.Item label="评分" name="rate">
          <Input
            allowClear
            className={styles.keyword}
            placeholder="请输入评分进行搜索"
          />
        </Form.Item>
        <Form.Item label="电影名称" name="title">
          <Input
            allowClear
            className={styles.keyword}
            placeholder="请输入电影名称进行搜索"
          />
        </Form.Item>
        <Form.Item label="导演" name="director">
          <Input
            allowClear
            className={styles.keyword}
            placeholder="请输入导演进行搜索"
          />
        </Form.Item>
        <Form.Item label="主演" name="protagonist">
          <Input
            allowClear
            className={styles.keyword}
            placeholder="请输入主演进行搜索"
          />
        </Form.Item>
        <Form.Item label="类型" name="type">
          <Input allowClear className={styles.type} placeholder="请输入类型" />
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
              新增电影
            </Button>
          </Space>
        </Form.Item>
      </Space>
    </Form>
  );
};

export default React.memo(SearchHeadr);