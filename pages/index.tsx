import TaskList from '../components/TaskList';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-nord-6 dark:bg-nord-0 text-nord-0 dark:text-nord-6">
      <TaskList />
    </div>
  );
};

export default Home;
