import { Model, Optional } from "sequelize";

/**
 * User types
 */

export type UserAttributes = {
  id: number;
  firstName: string;
  lastName: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export interface UserInstance
  extends Model<UserAttributes>,
    Optional<UserAttributes, "id"> {
  firstName: string;
  lastName: string;
  createdAt: Date;
  updatedAt: Date;
}
