import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from "@reduxjs/toolkit/query/react";
import { QueryReturnValue } from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import { Mutex } from "async-mutex";
import { store } from "@redux/store";
type ResultData = {
  code: number;
  msg: string;
  success: boolean;
  data: any;
};
const mutex = new Mutex();
const baseQuery = fetchBaseQuery({
  baseUrl: process.env.BASE_URL,
  prepareHeaders: (headers) => {
    // headers.set("token", store.getState().token.token);
    return headers;
  },
});

const baseQueryWithIntercept: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  async function refreshToken() {
    //     if (!mutex.isLocked()) {
    //       const release = await mutex.acquire();
    //       try {
    //         const refreshToken = store.getState().token.refreshToken;
    //         const token = store.getState().token.token;
    //         const userId = store.getState().user.id;
    //         if (refreshToken && userId && token) {
    //           const result = await baseQuery(
    //             {
    //               url: `/erp/refreshToken`,
    //               method: "post",
    //               body: {
    //                 refreshToken: store.getState().token.refreshToken,
    //                 userId: userId,
    //               },
    //             },
    //             api,
    //             extraOptions
    //           );
    //           const { data, error } = result;
    //           const { data: newToken, success } = data as ResultData;
    //           if (!success || !!error || !newToken) {
    //             api.dispatch(tokenClear());
    //             api.dispatch(userInfoClear());
    //             return false;
    //           }
    //           api.dispatch(setToken(newToken));
    //           return true;
    //         } else {
    //           api.dispatch(tokenClear());
    //           api.dispatch(userInfoClear());
    //           return false;
    //         }
    //       } catch {
    //         api.dispatch(tokenClear());
    //         api.dispatch(userInfoClear());
    //         return false;
    //       } finally {
    //         release();
    //       }
    //     } else {
    //       await mutex.waitForUnlock();
    //       return true;
    //     }
  }

  await mutex.waitForUnlock();
  let result: QueryReturnValue<any, FetchBaseQueryError, FetchBaseQueryMeta> =
    await baseQuery(args, api, extraOptions);
  const { error, data } = result;
  if (data) {
    const { msg, success } = data as ResultData;
    if (!success) {
      throw new Error(msg);
    }
  }
  if (error) {
    const { status } = error as FetchBaseQueryError;
    //处理401错误
    if (status === 401) {
      //   const refreshSuccess = await refreshToken();
      //   // retry the initial query
      //   if (refreshSuccess) {
      //     let newResult: QueryReturnValue<
      //       any,
      //       FetchBaseQueryError,
      //       FetchBaseQueryMeta
      //     > = await baseQuery(args, api, extraOptions);
      //     const { error } = newResult;
      //     if (error) {
      //       const errorData = error.data as any;
      //       throw new Error(errorData.msg);
      //     }
      //     return newResult.data ? newResult.data : result;
      //   }
    }
    const errorData = error.data as any;
    throw new Error(errorData.msg);
  }

  return result.data ? result.data : result;
};
export const baseApi = createApi({
  baseQuery: baseQueryWithIntercept,
  reducerPath: "baseApi",
  // 缓存，默认时间是秒，默认时长60秒
  keepUnusedDataFor: 5 * 60,
  refetchOnMountOrArgChange: 30 * 60,
  tagTypes: [],
  endpoints: () => ({}),
});
