import mongoose from 'mongoose';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';
export const apiBaseUrl = process.env.CODESPACE_NAME
  ? `https://${process.env.CODESPACE_NAME}-8000.app.github.dev`
  : 'http://localhost:8000';
const db = mongoose.connection;

mongoose
  .connect(connectionString)
  .then(() => {
    console.log('Connected to octofit_db');
  })
  .catch((error) => {
    console.error('Error connecting to octofit_db:', error);
    process.exit(1);
  });

db.on('error', console.error.bind(console, 'connection error:'));

export default db;
