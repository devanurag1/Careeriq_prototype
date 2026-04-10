import { Router } from 'express';

const diagnosticRouter = Router();

diagnosticRouter.get('/', (req, res) => {
  res.json({
    readinessScore: 68,
    targetRole: 'Senior SDE',
    gaps: [
      { skillId: 's1', skillName: 'System Design', severity: 'critical', userLevel: 4, marketDemand: 95 },
      { skillId: 's2', skillName: 'Kubernetes', severity: 'high', userLevel: 2, marketDemand: 80 }
    ]
  });
});

export { diagnosticRouter };
