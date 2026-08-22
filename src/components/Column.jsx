import React from "react";

const Column = ({ title, tasks = [], children }) => {
  return (
    <div className="column">
      {/* Column header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "8px",
        }}
      >
        <span
          style={{
            fontSize: "13px",
            fontWeight: "500",
            color: "var(--text-secondary)",
          }}
        >
          {title}
        </span>

        <span
          style={{
            fontSize: "12px",
            color: "var(--text-muted)",
          }}
        >
          {tasks.length}
        </span>
      </div>

      {/* Task cards */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        {children ||
          tasks.map((task) => (
            <div key={task.id}>{task.title}</div>
          ))}
      </div>
    </div>
  );
};

export default Column;
