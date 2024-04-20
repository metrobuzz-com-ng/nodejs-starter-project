import { Document } from "mongoose";

/**
 * User types
 */
export type User = {
  id: number;
  firstName: string;
  lastName: string;
  createdAt?: Date;
  updatedAt?: Date;
} & Document;
