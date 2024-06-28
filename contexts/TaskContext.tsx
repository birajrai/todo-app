import { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { Task } from '../types';
import { useCookies } from 'react-cookie';

interface TaskContextProps {
  tasks: Task[];
  addTask: (task: Task) => void;
  updateTask: (updatedTask: Task) => void;
  deleteTask: (id: string) => void;
}

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [cookies, setCookie] = useCookies(['tasks']);

  useEffect(() => {
    if (cookies.tasks) {
      setTasks(cookies.tasks);
    }
  }, []);

  useEffect(() => {
    setCookie('tasks', tasks, { path: '/' });
  }, [tasks]);

  const addTask = (task: Task) => setTasks([...tasks, task]);
  const updateTask = (updatedTask: Task) => setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
  const deleteTask = (id: string) => setTasks(tasks.filter(task => task.id !== id));

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};
