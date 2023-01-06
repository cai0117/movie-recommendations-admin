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
  }),
});

export const { useLoginMutation } = UserApi;

export default UserApi;
