import { request } from "@lib";

export const getToken = (params: {
  password: string;
  username: string;
}): Promise<any> =>
  request({
    url: "/token/",
    method: "post",
    params,
  });
