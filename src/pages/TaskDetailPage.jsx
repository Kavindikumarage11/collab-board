import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function TaskDetailPage() {
  const navigate = useNavigate();
  const { taskId } = useParams();

 
  const task = {
    id: taskId || '1',
    title: 'Wire tasks to MongoDB',
    description:
      'Connect the task board with MongoDB so that tasks can be created, updated and stored permanently.',
    status: 'Doing',
    assignee: 'DL',
    assigneeName: 'Dilan',
    dueDate: 'Today',
    priority: 'High',
    conflict: true,
  };

  const styles = {
    page: {
      maxWidth: '850px',
      margin: '0 auto',
      padding: '24px 20px',
    },

    topBar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px',
      gap: '12px',
      flexWrap: 'wrap',
    },

    backButton: {
      border: '0.5px solid var(--border, #d6d6d6)',
      background: 'var(--surface-1, #ffffff)',
      padding: '8px 14px',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '13px',
    },

    syncStatus: {
      display: 'flex',
      gap: '8px',
      alignItems: 'center',
      fontSize: '12px',
      color: 'var(--text-success, #18864b)',
    },

    card: {
      background: 'var(--surface-2, #ffffff)',
      border: '0.5px solid var(--border, #dddddd)',
      borderRadius: '12px',
      padding: '24px',
    },

    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: '20px',
      flexWrap: 'wrap',
      marginBottom: '20px',
    },

    title: {
      margin: '0 0 8px 0',
      fontSize: '24px',
      fontWeight: '600',
    },

    taskId: {
      margin: 0,
      fontSize: '12px',
      color: 'var(--text-muted, #777777)',
    },

    status: {
      fontSize: '12px',
      background: 'var(--bg-accent, #e9efff)',
      color: 'var(--text-accent, #315cc8)',
      padding: '5px 12px',
      borderRadius: '20px',
      fontWeight: '500',
    },

    section: {
      marginTop: '22px',
    },

    sectionTitle: {
      fontSize: '13px',
      fontWeight: '600',
      color: 'var(--text-secondary, #555555)',
      marginBottom: '8px',
    },

    description: {
      margin: 0,
      fontSize: '14px',
      lineHeight: '1.6',
      color: 'var(--text-secondary, #444444)',
    },

    detailsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
      gap: '12px',
      marginTop: '22px',
    },

    detailBox: {
      padding: '14px',
      border: '0.5px solid var(--border, #dddddd)',
      borderRadius: '10px',
      background: 'var(--surface-1, #fafafa)',
    },

    label: {
      fontSize: '11px',
      color: 'var(--text-muted, #777777)',
      marginBottom: '6px',
    },

    value: {
      fontSize: '14px',
      fontWeight: '500',
    },

    assignee: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },

    avatar: {
      width: '28px',
      height: '28px',
      borderRadius: '50%',
      background: 'var(--bg-accent, #e9efff)',
      color: 'var(--text-accent, #315cc8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '11px',
      fontWeight: '600',
    },

    warning: {
      marginTop: '20px',
      padding: '12px',
      background: 'var(--bg-warning, #fff4d6)',
      color: 'var(--text-warning, #8a6200)',
      borderRadius: '8px',
      fontSize: '13px',
    },

    actions: {
      display: 'flex',
      gap: '10px',
      marginTop: '24px',
      flexWrap: 'wrap',
    },

    primaryButton: {
      border: 'none',
      background: 'var(--text-accent, #315cc8)',
      color: '#ffffff',
      padding: '9px 16px',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '13px',
    },

    secondaryButton: {
      border: '0.5px solid var(--border, #cccccc)',
      background: 'var(--surface-1, #ffffff)',
      padding: '9px 16px',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '13px',
    },

    footer: {
      display: 'flex',
      gap: '18px',
      marginTop: '16px',
      fontSize: '12px',
      color: 'var(--text-muted, #777777)',
      flexWrap: 'wrap',
    },
  };

  return (
    <div style={styles.page}>
      {/* Top section */}
      <div style={styles.topBar}>
        <button
          type="button"
          style={styles.backButton}
          onClick={() => navigate(-1)}
        >
          ← Back to board
        </button>

        <div style={styles.syncStatus}>
          <span>●</span>
          <span>Live</span>
        </div>
      </div>

      {/* Task detail card */}
      <div style={styles.card}>
        <div style={styles.header}>
          <div>
            <h1 style={styles.title}>{task.title}</h1>

            <p style={styles.taskId}>
              Task ID: {task.id}
            </p>
          </div>

          <span style={styles.status}>
            {task.status}
          </span>
        </div>

        {/* Description */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>
            Description
          </div>

          <p style={styles.description}>
            {task.description}
          </p>
        </div>

        {/* Task information */}
        <div style={styles.detailsGrid}>
          <div style={styles.detailBox}>
            <div style={styles.label}>ASSIGNEE</div>

            <div style={styles.assignee}>
              <div style={styles.avatar}>
                {task.assignee}
              </div>

              <span style={styles.value}>
                {task.assigneeName}
              </span>
            </div>
          </div>

          <div style={styles.detailBox}>
            <div style={styles.label}>DUE DATE</div>

            <div style={styles.value}>
              {task.dueDate}
            </div>
          </div>

          <div style={styles.detailBox}>
            <div style={styles.label}>STATUS</div>

            <div style={styles.value}>
              {task.status}
            </div>
          </div>

          <div style={styles.detailBox}>
            <div style={styles.label}>PRIORITY</div>

            <div style={styles.value}>
              {task.priority}
            </div>
          </div>
        </div>

        {/* Conflict message */}
        {task.conflict && (
          <div style={styles.warning}>
            ⚠ Conflict detected — another team member may have
            updated this task. Check the latest version before
            making changes.
          </div>
        )}

        {/* Actions */}
        <div style={styles.actions}>
          <button
            type="button"
            style={styles.primaryButton}
          >
            Edit task
          </button>

          <button
            type="button"
            style={styles.secondaryButton}
            onClick={() => navigate(-1)}
          >
            Close
          </button>
        </div>
      </div>

      {/* Connection information */}
      <div style={styles.footer}>
        <span>🔌 WebSocket connected</span>
        <span>☁ Cached offline</span>
      </div>
    </div>
  );
}
