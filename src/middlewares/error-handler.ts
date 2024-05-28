import { Request, Response, NextFunction } from 'express';
import { httpStatusCodes } from '../util/http-status-codes';
import {
  InternalServerError,
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
  ForbiddenError,
} from '../util/errors/api-errors';

type ErrorType =
  | BadRequestError
  | UnauthorizedError
  | ForbiddenError
  | NotFoundError
  | InternalServerError
  | Error;

export const errorHandler = (
  err: ErrorType,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
): Response => {
  let error = err;
  let statusCode = httpStatusCodes.INTERNAL_SERVER;

  switch (err.constructor) {
    case BadRequestError:
      statusCode = httpStatusCodes.BAD_REQUEST;
      break;
    case UnauthorizedError:
      statusCode = httpStatusCodes.UNAUTHORIZED;
      break;
    case ForbiddenError:
      statusCode = httpStatusCodes.FORBIDDEN;
      break;
    case NotFoundError:
      statusCode = httpStatusCodes.NOT_FOUND;
      break;
    case InternalServerError:
      statusCode = httpStatusCodes.INTERNAL_SERVER;
      break;
    default:
      error = new InternalServerError(['Something went wrong']);
      break;
  }

  return res.status(statusCode).json(error);
};
