import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { authRouter } from './routes/auth.routes';
import { roadmapRouter } from './routes/roadmap.routes';
import { diagnosticRouter } from './routes/diagnostic.routes';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRouter);
app.use('/api/roadmap', roadmapRouter);
app.use('/api/diagnostic', diagnosticRouter);

// Basic health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

export { app };
