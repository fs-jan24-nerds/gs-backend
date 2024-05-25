import { Optional } from 'sequelize';
import { Users } from '../db';
import { User } from '../types/User';

export const createUser = async (userData: Optional<User, 'id'>) => {
  const user = await Users.create(userData);
  return user;
};

export const findUserByEmail = async (email: string) => {
  const user = await Users.findOne({ where: { email } });
  return user;
};
