import { useState } from 'react';
import { Task } from '../types';
import { useTaskContext } from '../contexts/TaskContext';
import { v4 as uuidv4 } from 'uuid';

interface TaskFormProps {
  task?: Task;
  onClose: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ task, onClose }) => {
  const { addTask, updateTask } = useTaskContext();
  const [title, setTitle] = useState(task ? task.title : '');
  const [description, setDescription] = useState(task ? task.description : '');
  const [priority, setPriority] = useState(task ? task.priority : 'low');
  const [dueDate, setDueDate] = useState(task ? task.dueDate : '');

  const handleSubmit = () => {
    if (task) {
      updateTask({ ...task, title, description, priority, dueDate });
    } else {
      addTask({ id: uuidv4(), title, description, completed: false, priority, dueDate });
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-nord-6 dark:bg-nord-1 p-4 rounded shadow-md w-full max-w-lg mx-2">
        <h2 className="text-xl mb-4">{task ? 'Edit Task' : 'New Task'}</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full mb-2 p-2 border border-nord-3 dark:border-nord-2 rounded bg-nord-5 dark:bg-nord-0 text-nord-0 dark:text-nord-6"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="w-full mb-2 p-2 border border-nord-3 dark:border-nord-2 rounded bg-nord-5 dark:bg-nord-0 text-nord-0 dark:text-nord-6"
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high')}
          className="w-full mb-2 p-2 border border-nord-3 dark:border-nord-2 rounded bg-nord-5 dark:bg-nord-0 text-nord-0 dark:text-nord-6"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="w-full mb-2 p-2 border border-nord-3 dark:border-nord-2 rounded bg-nord-5 dark:bg-nord-0 text-nord-0 dark:text-nord-6"
        />
        <div className="flex justify-end">
          <button onClick={handleSubmit} className="bg-nord-8 text-nord-6 dark:text-nord-0 p-2 rounded mr-2">
            {task ? 'Update' : 'Add'}
          </button>
          <button onClick={onClose} className="bg-nord-11 text-nord-6 dark:text-nord-0 p-2 rounded">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskForm;
