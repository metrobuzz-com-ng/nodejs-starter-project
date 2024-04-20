import models from "@models";

const findAllUsers = () => {
  const users = models.user.find();

  if (!users) {
    return [];
  }

  return users;
};

export default {
  findAllUsers,
};
