export class BaseError extends Error {
  public errors: string[];
  public isOperational: boolean;

  constructor(errors: string[], isOperational: boolean, description: string) {
    super(description);

    Object.setPrototypeOf(this, new.target.prototype);
    this.errors = errors;
    this.isOperational = isOperational;
    Error.captureStackTrace(this);
  }
}
