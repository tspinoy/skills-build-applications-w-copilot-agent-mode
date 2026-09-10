import mongoose, { type Model, type Schema } from 'mongoose';

export interface User {
  name: string;
  email: string;
  avatar?: string;
}

export interface Team {
  name: string;
  description?: string;
  members: string[];
}

export interface Activity {
  user: string;
  type: string;
  duration: number;
  date: Date;
}

export interface LeaderboardEntry {
  user: string;
  points: number;
  rank: number;
}

export interface Workout {
  name: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: number;
}

const userSchema = new mongoose.Schema<User>({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true },
  avatar: String,
});

const teamSchema = new mongoose.Schema<Team>({
  name: { type: String, required: true, trim: true },
  description: String,
  members: { type: [String], default: [] },
});

const activitySchema = new mongoose.Schema<Activity>({
  user: { type: String, required: true },
  type: { type: String, required: true },
  duration: { type: Number, required: true, min: 1 },
  date: { type: Date, required: true, default: Date.now },
});

const leaderboardSchema = new mongoose.Schema<LeaderboardEntry>({
  user: { type: String, required: true },
  points: { type: Number, required: true, min: 0 },
  rank: { type: Number, required: true, min: 1 },
});

const workoutSchema = new mongoose.Schema<Workout>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  difficulty: { type: String, enum: ['beginner', 'intermediate', 'advanced'], required: true },
  duration: { type: Number, required: true, min: 1 },
});

export const UserModel = getModel<User>('User', userSchema);
export const TeamModel = getModel<Team>('Team', teamSchema);
export const ActivityModel = getModel<Activity>('Activity', activitySchema);
export const LeaderboardModel = getModel<LeaderboardEntry>('Leaderboard', leaderboardSchema);
export const WorkoutModel = getModel<Workout>('Workout', workoutSchema);

function getModel<T>(name: string, schema: Schema<T>): Model<T> {
  return (mongoose.models[name] as Model<T> | undefined) ?? mongoose.model<T>(name, schema);
}
