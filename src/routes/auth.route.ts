import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middlewares';
import { LoginDto, SignupDto } from '@dtos/auth.dto';

class AuthRoute implements Routes {
  public path = '/';
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}signin`, validationMiddleware(LoginDto, 'body'));
    this.router.post(`${this.path}signup`, validationMiddleware(SignupDto, 'body'))
  }
}

export default AuthRoute;
