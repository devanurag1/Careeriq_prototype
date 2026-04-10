import { Router } from 'express';

const roadmapRouter = Router();

roadmapRouter.get('/', (req, res) => {
  // Return structure matching @careeriq/shared/types Roadmap
  res.json({
    id: 'rd_1',
    ownerName: 'Arjun Kumar',
    targetRole: 'Senior SDE',
    weeks: [
      {
        id: 'w1',
        number: 1,
        title: 'Backend Fundamentals',
        isCompleted: true,
        tasks: [
          { id: 't1', title: 'Redis Caching Patterns', duration: '2h', difficulty: 'Intermediate', skill: 'Redis', isCompleted: true }
        ]
      },
      {
        id: 'w2',
        number: 2,
        title: 'Distributed Systems',
        isCompleted: false,
        tasks: [
          { id: 't2', title: 'Kafka Producer Optimization', duration: '3h', difficulty: 'Advanced', skill: 'Kafka', isCompleted: false, isCurrent: true }
        ]
      }
    ]
  });
});

export { roadmapRouter };
