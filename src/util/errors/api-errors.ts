import { BaseError } from './base-error';

export class BadRequestError extends BaseError {
  constructor(
    errors: string[],
    description: string = 'Bad request.',
    isOperational: boolean = true,
  ) {
    super(errors, isOperational, description);
  }
}

export class UnauthorizedError extends BaseError {
  constructor(
    errors: string[],
    description: string = 'Unauthorized.',
    isOperational: boolean = true,
  ) {
    super(errors, isOperational, description);
  }
}

export class ForbiddenError extends BaseError {
  constructor(
    errors: string[],
    description: string = 'Forbidden.',
    isOperational: boolean = true,
  ) {
    super(errors, isOperational, description);
  }
}

export class NotFoundError extends BaseError {
  constructor(
    errors: string[],
    description: string = 'Not found.',
    isOperational: boolean = true,
  ) {
    super(errors, isOperational, description);
  }
}

export class InternalServerError extends BaseError {
  /* istanbul ignore next */
  constructor(
    errors: string[],
    description: string = 'Internal server.',
    isOperational: boolean = true,
  ) {
    super(errors, isOperational, description);
  }
}
