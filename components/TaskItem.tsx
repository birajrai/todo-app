import { Task } from '../types';
import { useTaskContext } from '../contexts/TaskContext';
import { useState } from 'react';
import TaskForm from './TaskForm';

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const { deleteTask, updateTask } = useTaskContext();
  const [isEditing, setIsEditing] = useState(false);

  if (!task) return null; // Skip rendering if task is undefined

  const toggleCompleted = () => {
    updateTask({ ...task, completed: !task.completed });
  };

  return (
    <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border-b border-nord-3 dark:border-nord-2 bg-nord-5 dark:bg-nord-0 ${task.completed ? 'bg-opacity-50' : ''}`}>
      <div className="flex-1">
        <h3 className="text-lg">{task.title}</h3>
        <p>{task.description}</p>
        <p>Priority: {task.priority}</p>
        <p>Due: {task.dueDate}</p>
        <p>Status: {task.completed ? 'Done' : 'Incomplete'}</p>
      </div>
      <div className="flex mt-2 sm:mt-0">
        <button onClick={toggleCompleted} className={`p-2 rounded mr-2 ${task.completed ? 'bg-nord-7 text-nord-6 dark:text-nord-0' : 'bg-nord-3 dark:bg-nord-2 text-nord-6 dark:text-nord-0'}`}>
          {task.completed ? 'Undone' : 'Done'}
        </button>
        <button onClick={() => setIsEditing(true)} className="bg-nord-12 text-nord-6 dark:text-nord-0 p-2 rounded mr-2">
          Edit
        </button>
        <button onClick={() => deleteTask(task.id)} className="bg-nord-11 text-nord-6 dark:text-nord-0 p-2 rounded">
          Delete
        </button>
      </div>
      {isEditing && <TaskForm task={task} onClose={() => setIsEditing(false)} />}
    </div>
  );
};

export default TaskItem;
