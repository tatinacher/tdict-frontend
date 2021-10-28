import { AUTH_TOKEN_NAME, getCookie } from ".";

export type RequestProps = {
  method: string;
  url: string;
  params?: object;
};

export const request = async ({
  url,
  method,
  params = {},
}: RequestProps): Promise<any> => {
  const request =
    !process.env.NODE_ENV || process.env.NODE_ENV === "development"
      ? process.env.REACT_APP_HOST + "api" + url
      : "api" + url;
  let headers: any = {
    "Content-Type": "application/json;charset=UTF-8",
    Accept: "application/json",
  };

  const token = getCookie(AUTH_TOKEN_NAME);

  if (token) {
    headers["Authorization"] = "Token " + token;
  }

  const options =
    method === "get"
      ? { headers, method }
      : {
          headers,
          method,
          body: JSON.stringify(params),
        };

  try {
    const response = await fetch(request, options);
    const result = await response.json();
    if (!response.ok) {
      throw new Error(result);
    }
    return result;
  } catch (error: any) {
    throw new Error(error);
  }
};
