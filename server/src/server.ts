import "dotenv/config";
import express from "express";
import cors from "cors";

const port = process.env.PORT || 3001;

const app = express();
app.use(cors());

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server is running on PORT ${port}`));
