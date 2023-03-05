import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Space, Table } from "antd";
import type { TablePaginationConfig, ColumnsType } from "antd/es/table";
import { Order } from "@/api/orderApi";
import { priceToPresentation } from "@/util";

type Props = {
  pagination: TablePaginationConfig;
  data: Order[];
  isLoading: boolean;
  onChange: (values: {
    pagination: Partial<{ tCurrent: number; tSize: number }>;
  }) => void;
};
const OrderTable: React.FC<Props> = (props) => {
  const { pagination, onChange, data, isLoading } = props;
  const navigate = useNavigate();

  const handleTableChange = async (pagination: TablePaginationConfig) => {
    onChange({
      pagination: { tCurrent: pagination.current, tSize: pagination.pageSize },
    });
  };
  const columns: ColumnsType<Order> = [
    {
      title: "订单编号",
      dataIndex: "orderId",
      align: "center",
    },
    {
      title: "客户编号",
      dataIndex: "customerId",
      align: "center",
    },
    {
      title: "下单时间",
      dataIndex: "orderTime",
      align: "center",
    },
    {
      title: "支付状态",
      dataIndex: "payStatus",
      align: "center",
    },
    {
      title: "应付金额",
      dataIndex: "orderPrice",
      align: "center",
      render: (_, record) => (
        <span>{priceToPresentation(record.orderPrice)}</span>
      ),
    },
    {
      title: "实付金额",
      dataIndex: "payPrice",
      align: "center",
      render: (_, record) => (
        <span>{priceToPresentation(record.payPrice)}</span>
      ),
    },
    {
      title: "下单电影",
      dataIndex: "movie",
      align: "center",
    },
    {
      title: "操作",
      width: "10%",
      render: (_, record) => (
        <Space size="small">
          <Button type="primary" ghost>
            编辑
          </Button>

          <Button type="primary" ghost>
            开单
          </Button>
        </Space>
      ),
      align: "center",
    },
  ];
  return (
    <Table
      bordered
      rowKey={(item) => item.orderId}
      dataSource={data}
      columns={columns}
      loading={isLoading}
      pagination={pagination}
      onChange={handleTableChange}
    />
  );
};

export default React.memo(OrderTable);
