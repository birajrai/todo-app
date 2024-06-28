import { useState, useEffect } from 'react';
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

  const handleSubmit = () => {
    if (task) {
      updateTask({ ...task, title, description });
    } else {
      addTask({ id: uuidv4(), title, description, completed: false });
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-md">
        <h2 className="text-xl mb-4">{task ? 'Edit Task' : 'New Task'}</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full mb-2 p-2 border border-gray-300 rounded"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="w-full mb-2 p-2 border border-gray-300 rounded"
        />
        <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 rounded">
          {task ? 'Update' : 'Add'}
        </button>
        <button onClick={onClose} className="bg-red-500 text-white p-2 rounded ml-2">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default TaskForm;
