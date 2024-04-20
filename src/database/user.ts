import models from "@models";

const findAllUsers = async () => {
  const users = await models.user.findAll();

  if (!users) {
    return [];
  }

  return users;
};

export default { findAllUsers };
