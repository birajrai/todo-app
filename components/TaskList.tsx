import { useTaskContext } from '../contexts/TaskContext';
import TaskItem from './TaskItem';
import { useState } from 'react';
import TaskForm from './TaskForm';

const TaskList: React.FC = () => {
    const { tasks } = useTaskContext();
    const [isAdding, setIsAdding] = useState(false);

    return (
        <div>
            <h1 className="text-2xl mb-4">To-Do List</h1>
            <button onClick={() => setIsAdding(true)} className="bg-green-500 text-white p-2 rounded mb-4">
                Add Task
            </button>
            <div className="space-y-2">
                {tasks.map(task => {
                    if (!task) return null; // Skip if task is undefined
                    return <TaskItem key={task.id} task={task} />;
                })}
            </div>
            {isAdding && <TaskForm onClose={() => setIsAdding(false)} />}
        </div>
    );
};

export default TaskList;
