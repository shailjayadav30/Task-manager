import TaskFilters from "./Taskfilters"
const Sidebar = () => {
  return (
    <div className=" w-[15rem] px-4 py-2 bg-opacity-15 bg-slate-100 h-screen">
      <h1 className="text-slate-100 font-bold text-xl bg-gradient-to-r from-purple-500 via-slate-600 to-orange-500 bg-clip-text text-transparent text-center">Filters Task</h1>
      <TaskFilters />


</div>
  )
}

export default Sidebar
