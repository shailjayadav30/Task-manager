import Sidebar from '../components/Sidebar';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/Tasklists';

const TaskDashboard = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      
      <Sidebar />

      <div className="flex flex-col w-full p-4">
        <TaskForm />
        <div className="flex-grow overflow-y-auto hide-scrollbar">
          <TaskList />
        </div>
      </div>
    </div>
  );
};

export default TaskDashboard;
