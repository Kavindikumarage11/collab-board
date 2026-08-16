import React from 'react';
import './index.css';

export default function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Header section based on design */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '18px', fontWeight: '500' }}>SyncBoard</span>
          <span style={{ fontSize: '12px', background: '#e6f4ea', color: '#137333', padding: '3px 10px', borderRadius: '4px' }}>
            3 online
          </span>
        </div>
        
        <div style={{ display: 'flex', gap: '8px', flex: 1, maxWidth: '420px', minWidth: '220px' }}>
          <input type="text" placeholder="Search tasks" style={{ flex: 1, padding: '6px 10px', borderRadius: '4px', border: '1px solid #ccc' }} />
          <select style={{ width: '120px', padding: '6px', borderRadius: '4px', border: '1px solid #ccc' }}>
            <option>All members</option>
          </select>
        </div>

        <button style={{ whiteSpace: 'nowrap', padding: '6px 12px', background: '#1a73e8', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          New task
        </button>
      </div>

      {/* Main Container where Board or other pages will render */}
      <div style={{ marginTop: '20px', padding: '20px', border: '1px dashed #ccc', borderRadius: '8px', textAlign: 'center', color: '#666' }}>
        <p>Team members' components will be integrated here (Columns, TaskCards, etc.)</p>
      </div>
    </div>
  );
}