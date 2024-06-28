import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { TaskProvider } from '../contexts/TaskContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TaskProvider>
      <Component {...pageProps} />
    </TaskProvider>
  );
}

export default MyApp;
