import { baseApi } from "./baseApi";

export type Customer = {
  name: string;
  customerId: number;
  tel: string;
  status: string;
  origin: string;
};

export type CustomerReq = {
  current: number;
  size: number;
  input: Partial<{
    keyword: string;
    origin: string;
  }>;
};

type Result<T> = {
  current: number;
  size: number;
  total: number;
  records: T[];
};
const CustomerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCustomer: builder.mutation<Result<Customer>, CustomerReq>({
      query: (data) => ({
        url: "/movieCustomer/query",
        method: "post",
        body: data,
      }),
    }),
  }),
});

export const { useGetAllCustomerMutation } = CustomerApi;

export default CustomerApi;
