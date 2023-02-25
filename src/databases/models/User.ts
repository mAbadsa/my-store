import { DataTypes } from 'sequelize';
import { sequelize } from '../connections';
import { IUser } from '../interfaces/index.interface';

sequelize.define<IUser>('users', {
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userRoleId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  userStatusId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  googleId: {
    type: DataTypes.STRING,
  },
  totalRevenue: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  paidRevenue: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
  },
  rejectionReason: {
    type: DataTypes.STRING,
  },
  stripeAccount: {
    type: DataTypes.STRING,
  },
  createdBy: {
    type: DataTypes.INTEGER,
  },
  updatedBy: {
    type: DataTypes.INTEGER,
  },
}, {
  paranoid: true
})
