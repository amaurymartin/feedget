import 'dotenv/config';
import express from 'express';

const port = process.env.PORT || 3001;

const app = express();

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server is running on PORT ${port}`));
