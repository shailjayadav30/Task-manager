import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/tasksSlice';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description && dueDate) {
      dispatch(addTask({ title, description, dueDate }));
      setTitle('');
      setDescription('');
      setDueDate('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center mt-10 gap-3 pb-2 ">
      <h1 className="text-slate-100 text-4xl mb-2 font-bold">Add Your Daily Task Here <span className="text-cyan-500 text-xl font-bold">.</span></h1>
      <div className='flex flex-col w-1/2 items-center gap-2'>
      <input
        className="border pl-2 w-full mb-2 py-5  rounded"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="border pl-2 pt-4 w-full rounded "
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      </div>
      <div className='flex justify-between w-1/2 gap-3 '>
      <input
        type="date"
        className="border p-2 w-full  rounded"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
        Add Task
      </button>
      </div>
    </form>
  );
};

export default TaskForm;
