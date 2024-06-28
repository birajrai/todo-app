import { NextSeo } from 'next-seo';
import TaskList from '../components/TaskList';

const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-nord-6 dark:bg-nord-0 text-nord-0 dark:text-nord-6">
            <NextSeo
                title="To-Do App - A modern, responsive To-Do app built with Next.js, TailwindCSS, and TypeScript."
                description="Welcome to my task list app"
                canonical="https://modernxtodo.vercel.app"
                openGraph={{
                    url: 'https://modernxtodo.vercel.app',
                    title: 'To-Do App',
                    description: 'A modern, responsive To-Do app built with Next.js, TailwindCSS, and TypeScript.',
                    images: [
                        {
                            url: 'https://modernxtodo.vercel.app/og-image.jpg',
                            width: 800,
                            height: 600,
                            alt: 'Og Image Alt',
                        },
                    ],
                    site_name: 'To-Do App',
                }}
            />
            <TaskList />
        </div>
    );
};

export default Home;
