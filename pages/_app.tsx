import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { TaskProvider } from '../contexts/TaskContext';
import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { SpeedInsights } from '@vercel/speed-insights/next';
function MyApp({ Component, pageProps }: AppProps) {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(isDarkMode);
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        localStorage.setItem('darkMode', newDarkMode.toString());
        if (newDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    return (
        <TaskProvider>
            <div className="flex justify-end p-4 bg-nord-3 dark:bg-nord-2 text-nord-6 dark:text-nord-0">
                <button
                    onClick={toggleDarkMode}
                    className="bg-nord-3 dark:bg-nord-2 text-nord-6 dark:text-nord-0 p-2 rounded"
                >
                    {darkMode ? <FaSun /> : <FaMoon />}
                </button>
            </div>
            <Component {...pageProps} />
            <SpeedInsights />
        </TaskProvider>
    );
}

export default MyApp;
