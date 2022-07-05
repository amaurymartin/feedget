import "dotenv/config";
import express from "express";
import cors from "cors";

import router from "./router";

const port = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => console.log(`Server is running on PORT ${port}`));
