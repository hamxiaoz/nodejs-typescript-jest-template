import dotenv from 'dotenv';

const result = dotenv.config();
if (result.error) {
  dotenv.config({ path: '.env.default' });
}

export class Config {
  static general = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || '3000',
    projectId: process.env.PROJECT_ID || '',
  };
}
