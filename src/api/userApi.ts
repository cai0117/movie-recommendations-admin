import { baseApi } from "./baseApi";

export type RoleAuthType = {
  roleId: string;
  name: string;
  userId: string;
  roleName: string;
  roleCode: string;
};

export type LoginReq = {
  account: string;
  password: string;
};

type Result = {
  token: string;
  refreshToken: string;
  data: RoleAuthType;
};
const UserApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<Result, LoginReq>({
      query: (data) => ({
        url: "/admin/login",
        method: "post",
        body: {
          ...data,
        },
      }),
    }),
  }),
});

export const { useLoginMutation } = UserApi;

export default UserApi;
