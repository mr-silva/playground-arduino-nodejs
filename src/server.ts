import express from 'express';

const app = express();

app.get('/', (request, response) => response.json({ message: 'It Lives!!!' }));

app.listen((2408), () => {
  // eslint-disable-next-line no-console
  console.log('Server running on http://localhost:2408');
});
