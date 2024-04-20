import { router as healthRouter } from "./health";
import userRouter from "./user";

export default {
  health: healthRouter,
  user: userRouter,
};
