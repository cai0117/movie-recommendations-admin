import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Space, Table } from "antd";
import type { TablePaginationConfig, ColumnsType } from "antd/es/table";
import { Movie } from "@/api/movie";

type Props = {
  pagination: TablePaginationConfig;
  data: Movie[];
  isLoading: boolean;
  onChange: (values: {
    pagination: Partial<{ tCurrent: number; tSize: number }>;
  }) => void;
};
const MovieInfoTable: React.FC<Props> = (props) => {
  const { pagination, onChange, data, isLoading } = props;
  const navigate = useNavigate();

  const handleTableChange = async (pagination: TablePaginationConfig) => {
    onChange({
      pagination: { tCurrent: pagination.current, tSize: pagination.pageSize },
    });
  };
  const columns: ColumnsType<Movie> = [
    {
      title: "电影名称",
      dataIndex: "title",
      align: "center",
    },
    {
      title: "电影评分",
      dataIndex: "rate",
      width: 100,
      align: "center",
    },
    {
      title: "导演",
      dataIndex: "director",
      align: "center",
    },
    {
      title: "主演",
      dataIndex: "protagonist",
      width: 500,
      ellipsis: true,
      align: "center",
      render: (value, record, index) => {
        return <>{record.protagonist.split("/").join("、")}</>;
      },
    },
    {
      title: "上映时间",
      dataIndex: "release",
      align: "center",
    },
    {
      title: "时长",
      dataIndex: "movieTime",
      align: "center",
    },
    {
      title: "类型",
      dataIndex: "type",
      align: "center",
    },
    {
      title: "操作",
      width: 100,
      render: (_, record) => (
        <Space size="small">
          <Button type="primary" ghost>
            编辑
          </Button>
        </Space>
      ),
      align: "center",
    },
  ];
  return (
    <Table
      bordered
      rowKey={(item) => item.movieId}
      dataSource={data}
      columns={columns}
      loading={isLoading}
      pagination={pagination}
      onChange={handleTableChange}
    />
  );
};

export default React.memo(MovieInfoTable);
