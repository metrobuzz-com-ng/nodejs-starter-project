import type { ResponseObjectFn } from "@types";

export const responseObject: ResponseObjectFn = (props) => {
  const {
    res,
    statusCode,
    message,
    payload = undefined,
    responseStatusCode = undefined,
    status = false,
  } = props;

  res.set("Cache-Control", "no-store");

  let responseObject: {
    statusCode: number;
    message: string;
    payload: unknown;
    serviceStatusCode?: string | number;
    status?: boolean;
  } = {
    statusCode,
    message,
    payload,
  };

  if (responseStatusCode) {
    responseObject = {
      ...responseObject,
      serviceStatusCode: responseStatusCode,
      status:
        parseInt(responseStatusCode.toString()) >= 200 &&
        parseInt(responseStatusCode.toString()) <= 300,
    };
  }

  if (status) {
    responseObject = {
      ...responseObject,
      status,
    };
  }

  return res.status(statusCode).send(responseObject);
};
