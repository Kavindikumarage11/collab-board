import React from 'react';
import TaskCard from '../components/TaskCard';

const BoardPage = ({ tasks }) => {
  const columns = [
    { title: 'To do', status: 'todo' },
    { title: 'Doing', status: 'doing' },
    { title: 'Done', status: 'done' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {columns.map((col) => {
        const columnTasks = tasks.filter((t) => t.status === col.status);
        return (
          <div key={col.status} className="flex flex-col">
            {/* Column Header with Title & Count */}
            <div className="flex justify-between items-center mb-2">
              <span className="text-[13px] font-medium text-gray-300">{col.title}</span>
              <span className="text-xs text-gray-500">{columnTasks.length}</span>
            </div>

            {/* Tasks Container */}
            <div className="flex flex-col gap-2">
              {columnTasks.length > 0 ? (
                columnTasks.map((task) => <TaskCard key={task.id} task={task} />)
              ) : (
                <div className="text-center text-gray-600 text-xs py-8">No tasks</div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BoardPage;