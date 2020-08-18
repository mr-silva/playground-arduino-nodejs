import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.get('/', (request, response) => response.json({ message: 'It Lives!!!' }));

app.listen((process.env.PORT), () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});
