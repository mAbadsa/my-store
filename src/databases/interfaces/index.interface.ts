import { Model, InferAttributes, InferCreationAttributes } from 'sequelize';

export interface IUser extends Model<InferAttributes<IUser>, InferCreationAttributes<IUser>> {
  id: number;
  username: string;
  email: string;
  password: string;
  googleId?: string;
  userRoleId: number;
  userStatusId?: number;
  totalRevenue: number | string;
  paidRevenue: number | string;
  image?: string;
  rejectionReason?: string;
  stripeAccount?: string;
  createdBy: number;
  updatedBy?: number;
  createdAt?: string;
  updatedAt?: string;
}
