import { Router } from 'express';
import type { Model } from 'mongoose';

import {
  ActivityModel,
  LeaderboardModel,
  TeamModel,
  UserModel,
  WorkoutModel,
  type Activity,
  type LeaderboardEntry,
  type Team,
  type User,
  type Workout,
} from '../models/index.js';

export const usersRouter = createResourceRouter(UserModel);
export const teamsRouter = createResourceRouter(TeamModel);
export const activitiesRouter = createResourceRouter(ActivityModel);
export const leaderboardRouter = createResourceRouter(LeaderboardModel);
export const workoutsRouter = createResourceRouter(WorkoutModel);

function createResourceRouter<T extends object>(model: Model<T>): Router {
  const router = Router();

  router.get('/', async (_request, response, next) => {
    try {
      response.json(await model.find().lean());
    } catch (error) {
      next(error);
    }
  });

  router.post('/', async (request, response, next) => {
    try {
      const resource = await model.create(request.body);
      response.status(201).json(resource);
    } catch (error) {
      next(error);
    }
  });

  return router;
}

export type Resource =
  | User
  | Team
  | Activity
  | LeaderboardEntry
  | Workout;
