import { Task } from '../types';
import { useTaskContext } from '../contexts/TaskContext';
import { useState } from 'react';
import TaskForm from './TaskForm';

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const { deleteTask } = useTaskContext();
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="flex items-center justify-between p-2 border-b border-gray-300">
      <div>
        <h3 className="text-lg">{task.title}</h3>
        <p>{task.description}</p>
      </div>
      <div>
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
