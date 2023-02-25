import { validate, ValidationError } from 'class-validator';
import { plainToInstance } from 'class-transformer';
import { RequestHandler } from 'express';

const validationMiddleware = (type: any, value: string | 'body' | 'query' | 'params' = 'body', skipMissingProperties = false,
whitelist = true,
forbidNonWhitelisted = true, ): RequestHandler => {
  return (req, res, next) => {
    validate(plainToInstance(type, req[value]), { skipMissingProperties, whitelist, forbidNonWhitelisted }).then((errors: ValidationError[]) => {
      if(errors.length > 0) {
        const message = errors.map((error: ValidationError) => Object.values(error.constraints)).join(', ');
        next(new Error());
      } else {
        next();
      }
    });
  }
}

export default validationMiddleware;
