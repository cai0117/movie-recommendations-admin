import { baseApi } from "./baseApi";
import { Movie } from "./movie";

export type Order = {
  orderId: number;
  orderTime: string;
  payStatus: number;
  orderPrice: number;
  customerId: number;
  payPrice: number;
  movie: Movie;
};

export type OrderReq = {
  current: number;
  size: number;
  input: Partial<{
    orderId: number;
    payStatus: number;
    customerId: number;
    title: string;
  }>;
};

type OrderResponse<T> = {
  current: number;
  size: number;
  total: number;
  records: T[];
};
const OrderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getOrderList: builder.mutation<OrderResponse<Order>, OrderReq>({
      query: (data) => ({
        url: "/movieOrder/query",
        method: "post",
        body: data,
      }),
    }),
  }),
});

export const { useGetOrderListMutation } = OrderApi;

export default OrderApi;
