import React from 'react'; 

const TaskCard = ({ task }) => {
  const isDone = task.status === 'done';

  return (
    <div className={`border rounded-xl p-3 mb-2 transition-all ${task.conflict ? 'bg-surface-2 border-blue-500/50' : 'bg-surface-2 border-border'}`} style={{ background: '#1e293b', borderColor: task.conflict ? '#3b82f6' : '#334155' }}>
      <p className={`text-sm mb-2 text-white ${isDone ? 'line-through text-gray-400' : ''}`}>
        {task.title}
      </p>
      
      <div className="flex justify-between items-center">
        {/* Assignee Circle Icon */}
        <span className="w-[22px] h-[22px] rounded-full bg-blue-600/30 text-blue-400 text-[11px] font-semibold flex items-center justify-center">
          {task.assignee}
        </span>
        <span className="text-xs text-gray-400">{task.dueDate}</span>
      </div>

      {/* Conflict badge if true */}
      {task.conflict && (
        <div className="mt-2">
          <span className="text-[11px] bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded">
            Conflict detected
          </span>
        </div>
      )}
    </div>
  );
};

export default TaskCard;