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
    <div className={`flex items-center justify-between p-2 border-b border-gray-300 ${task.completed ? 'bg-gray-200' : ''}`}>
      <div>
        <h3 className="text-lg">{task.title}</h3>
        <p>{task.description}</p>
        <p>Priority: {task.priority}</p>
        <p>Due: {task.dueDate}</p>
        <p>Status: {task.completed ? 'Done' : 'Incomplete'}</p>
      </div>
      <div>
        <button onClick={toggleCompleted} className={`p-1 rounded mr-2 ${task.completed ? 'bg-green-500 text-white' : 'bg-gray-300'}`}>
          {task.completed ? 'Undone' : 'Done'}
        </button>
        <button onClick={() => setIsEditing(true)} className="bg-yellow-500 text-white p-1 rounded mr-2">
          Edit
        </button>
        <button onClick={() => deleteTask(task.id)} className="bg-red-500 text-white p-1 rounded">
          Delete
        </button>
      </div>
      {isEditing && <TaskForm task={task} onClose={() => setIsEditing(false)} />}
    </div>
  );
};

export default TaskItem;
