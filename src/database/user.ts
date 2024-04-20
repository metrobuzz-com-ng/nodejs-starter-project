import { User } from "../models";

const findAllUsers = async () => {
  const users = await User.findAll();

  if (!users) {
    return [];
  }

  return users;
};

export default { findAllUsers };
