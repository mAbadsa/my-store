import { Request } from "express";
import { IsEmail, IsString, MinLength} from 'class-validator';
import { ILogin, ISignup } from "@interfaces/DtoAuth.interface";

// export const loginDTO = (request: Request): ILogin => ({
//   email: request.body.email.toLowerCase(),
//   password: request.body.password,
//   rememberMe: request.body.rememberMe,
// })

// export const signupDTO = (request: Request): ISignup => ({
//   username: request.body.username,
//   email: request.body.email.toLowerCase(),
//   password: request.body.password,
//   confirmPassword: request.body.confirmPassword
// })

export class LoginDto {
  @IsEmail()
  public email: string;

  @MinLength(8, {message: 'Password must be at least $constraint1 characters'})
  @IsString()
  public password: string;

  @IsString()
  public rememberMe: string;
}

export class SignupDto {
  @IsString()
  public username: string;

  @IsEmail()
  public email: string;
  
  @IsString()
  @MinLength(8, {message: 'Password must be at least $constraint1 characters'})
  public password: string;

  @IsString()
  @MinLength(8, {message: 'Password must be at least $constraint1 characters'})  
  public confirmPassword: string;
}
