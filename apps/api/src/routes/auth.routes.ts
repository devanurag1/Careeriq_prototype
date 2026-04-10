import { Router } from 'express';

const authRouter = Router();

authRouter.post('/login', (req, res) => {
  // Mock login
  res.json({
    user: { id: '1', name: 'Arjun Kumar', email: req.body.email, plan: 'FREE' },
    token: 'mock-jwt-token-123'
  });
});

authRouter.post('/signup', (req, res) => {
  // Mock signup
  res.json({
    user: { id: '1', name: req.body.name, email: req.body.email, plan: 'FREE' },
    token: 'mock-jwt-token-123'
  });
});

export { authRouter };
