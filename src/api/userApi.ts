import { baseApi } from "./baseApi";

export type RoleAuthType = {
  name: string;
  userId: string;
  tel: string;
  status: string;
};

export type LoginReq = {
  tel: string;
  password: string;
};

type Result = {
  token: string;
  userInfo: RoleAuthType;
};

export type UserRequest = {
  current: number;
  size: number;
  input: Partial<{
    name: string;
    tel: string;
    status: number;
  }>;
};

type Response<T> = {
  current: number;
  size: number;
  total: number;
  records: T[];
};

const UserApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<Result, LoginReq>({
      query: (data) => ({
        url: "/movieUser/login",
        method: "post",
        body: {
          ...data,
        },
      }),
    }),
    getUserList: builder.mutation<Response<RoleAuthType>, UserRequest>({
      query: (data) => ({
        url: "/movieUser/query",
        method: "post",
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation, useGetUserListMutation } = UserApi;

export default UserApi;
