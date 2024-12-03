import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/tasksSlice';

const filters = [
  { label: 'All Tasks', value: 'all' },
  { label: 'Completed Tasks', value: 'completed' },
  { label: 'Pending Tasks', value: 'pending' },
  { label: 'Overdue Tasks', value: 'overdue' },
];

const TaskFilters = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.tasks.filter);

  const handleFilterChange = (filter) => {
    dispatch(setFilter(filter));
  };

  return (
    <div className="flex flex-col mt-8 gap-2 items-center ">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => handleFilterChange(filter.value)}
          className={`p-2 rounded ${
            currentFilter === filter.value ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          } hover:bg-blue-400 hover:text-white transition w-full cursor-pointer`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default TaskFilters;
