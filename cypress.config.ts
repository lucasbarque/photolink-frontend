import coverage from '@cypress/code-coverage/task';
import { defineConfig } from 'cypress';

import clearDbByContext from './cypress/database/ClearDbByContext';
import PgPromiseConnection from './cypress/database/PgPromiseConnection';

export default defineConfig({
  env: {
    codeCoverage: {
      exclude: 'cypress/**/*.*',
    },
  },
  e2e: {
    setupNodeEvents(on, config) {
      coverage(on, config);
      on('task', {
        clearDB(context: 'all' | 'users') {
          return new Promise(async (resolve) => {
            await clearDbByContext(context);
            return resolve(null);
          });
        },
        selectDB(query: string) {
          return new Promise(async (resolve) => {
            const connection = new PgPromiseConnection();
            const result = await connection.query(query);
            await connection.close();
            return resolve(result);
          });
        },
      });
      return config;
    },
  },
});
