import express from 'express';
const app = express();
const PORT = 4000;

app.get('/api/hello', (_, res) => {
  res.json({ message: 'Hello from Express!' });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
