import React, { useCallback, useState, useEffect } from "react";
import { message, Space } from "antd";
import BasePage from "@/components/base-page";
import type { TablePaginationConfig } from "antd/es/table";
import usePaginationKeeper from "@/hooks/usePaginationKeeper";
import SearchHeadr from "./search-header";
import MovieInfoTable from "./movie-info-table";
import { Movie, MovieReq, useGetAllMovieMutation } from "@/api/movie";

const MovieInfoPage = () => {
  const [data, setData] = useState<Movie[]>([]);
  const [pagination, setPagination] = useState<TablePaginationConfig>({
    current: 1,
    pageSize: 10,
  });
  const [getAllMovie, { isLoading, isError }] = useGetAllMovieMutation();
  const { current, size, input } = usePaginationKeeper();
  useEffect(() => {
    handlePageChange({
      current: current.current,
      size: size.current,
      input: input.current,
    });
  }, []);

  const handlePageChange = useCallback(
    async (data: MovieReq) => {
      try {
        const payload = await getAllMovie(data).unwrap();
        setData(payload.records);
        setPagination({
          current: payload.current,
          pageSize: payload.size,
          total: payload.total,
          showQuickJumper: true,
          showSizeChanger: true,
          showTotal: (total) => {
            return <Space>总共有{total}条数据</Space>;
          },
        });
      } catch (error: any) {
        message.error(error.message);
      }
    },
    [getAllMovie]
  );

  const handleValuesChange = (
    values: Partial<{
      opt: Partial<{ registerWay: number; keyword: string }>;
      pagination: Partial<{ tCurrent: number; tSize: number }>;
    }>
  ) => {
    values.pagination?.tCurrent &&
      (current.current = values.pagination?.tCurrent);
    values.pagination?.tSize && (size.current = values.pagination?.tSize);
    values.opt && (input.current = values.opt);

    handlePageChange({
      current: current.current,
      size: size.current,
      input: input.current,
    });
  };

  return (
    <BasePage>
      <Space direction="vertical" size={[0, 40]}>
        <SearchHeadr
          onChange={handleValuesChange}
          initialValues={input.current}
          isError={isError}
        />

        <MovieInfoTable
          pagination={pagination}
          onChange={handleValuesChange}
          isLoading={isLoading}
          data={data}
        />
      </Space>
    </BasePage>
  );
};

export default MovieInfoPage;
