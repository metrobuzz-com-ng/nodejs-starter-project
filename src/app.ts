import express from "express";
import cors from "cors";
import { databaseConnect, getters } from "@config";
import { loadServices } from "./loader";

const app = express();

const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
};

app.use(cors(corsOptions));

app.use(express.json());

databaseConnect();

loadServices(app);

const port = getters.getAppPort();

app.listen(port, () => {
  console.log(`${getters.geti18ns().LOGS.RUNNING_APP} ${port}`);
});
