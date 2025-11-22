import { Hono } from 'hono';

const app = new Hono();

app.get('/.*', (c) => c.text('404 Not Found', 404));

export default app;

