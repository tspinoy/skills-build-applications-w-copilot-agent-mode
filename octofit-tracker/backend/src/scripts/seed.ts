import mongoose from 'mongoose';

import {
  ActivityModel,
  LeaderboardModel,
  TeamModel,
  UserModel,
  WorkoutModel,
} from '../models/index.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');

    await Promise.all([
      UserModel.deleteMany({}),
      TeamModel.deleteMany({}),
      ActivityModel.deleteMany({}),
      LeaderboardModel.deleteMany({}),
      WorkoutModel.deleteMany({}),
    ]);

    const users = await UserModel.create([
      { name: 'Ada Lovelace', email: 'ada@example.com' },
      { name: 'Grace Hopper', email: 'grace@example.com' },
    ]);

    await Promise.all([
      TeamModel.create({
        name: 'Code Runners',
        description: 'A team for developers who train together.',
        members: users.map((user) => user.name),
      }),
      ActivityModel.create([
        { user: users[0].name, type: 'Running', duration: 30, date: new Date() },
        { user: users[1].name, type: 'Cycling', duration: 45, date: new Date() },
      ]),
      LeaderboardModel.create([
        { user: users[0].name, points: 420, rank: 1 },
        { user: users[1].name, points: 360, rank: 2 },
      ]),
      WorkoutModel.create([
        {
          name: 'Morning Mobility',
          description: 'A balanced mobility routine for every morning.',
          difficulty: 'beginner',
          duration: 20,
        },
        {
          name: 'Strength Circuit',
          description: 'A full-body strength workout for active users.',
          difficulty: 'intermediate',
          duration: 35,
        },
      ]),
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
