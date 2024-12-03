
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, toggleTaskCompletion } from '../redux/tasksSlice';
import { useEffect } from 'react';

const TaskList = () => {
  const dispatch = useDispatch();
  const { tasks, filter } = useSelector((state) => state.tasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    if (filter === 'overdue') return new Date(task.dueDate) < new Date() && !task.completed;
    return true; 
  });

  return (
    <div className="max-h-[600px] mx-auto my-4 px-4">
      {filteredTasks.length === 0 ? (
        <p className="text-center text-gray-600">No tasks found</p>
      ) : (
        <div className=" grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
          {filteredTasks.map((task) => (
            <div
              key={task.id}
              className="p-4 border rounded-lg shadow-md flex justify-between items-center bg-white"
            >
              <div>
                <h3 className={`text-lg font-bold ${task.completed ? 'line-through text-gray-400' : ''}`}>
                  {task.title}
                </h3>
                <p className={`text-gray-700 ${task.completed ? 'line-through text-gray-400' : ''}`}>
                  {task.description}
                </p>
                <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => dispatch(toggleTaskCompletion(task.id))}
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                >
                  {task.completed ? 'Undo' : 'Complete'}
                </button>
                <button
                  onClick={() => dispatch(deleteTask(task.id))}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;
