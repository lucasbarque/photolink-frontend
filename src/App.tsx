import { ErrorBoundary } from '@errors/ErrorBoundary';

import { Providers } from './providers';
import MainRoutes from './routes';

export function App() {
  return (
    <ErrorBoundary>
      <Providers>
        <MainRoutes />
      </Providers>
    </ErrorBoundary>
  );
}
