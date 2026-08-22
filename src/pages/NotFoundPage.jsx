import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <div
        style={{
          maxWidth: '500px',
          width: '100%',
          textAlign: 'center',
          background: 'var(--surface-2)',
          border: '0.5px solid var(--border)',
          borderRadius: '12px',
          padding: '40px 24px',
        }}
      >
        <div
          style={{
            fontSize: '64px',
            fontWeight: '600',
            lineHeight: '1',
            marginBottom: '16px',
          }}
        >
          404
        </div>

        <h2
          style={{
            fontSize: '22px',
            fontWeight: '500',
            margin: '0 0 10px',
          }}
        >
          Page not found
        </h2>

        <p
          style={{
            fontSize: '14px',
            color: 'var(--text-muted)',
            lineHeight: '1.6',
            margin: '0 0 24px',
          }}
        >
          The page you are looking for does not exist or may have been moved.
        </p>

        <button
          onClick={() => navigate('/')}
          style={{
            cursor: 'pointer',
            padding: '9px 16px',
            borderRadius: '8px',
            fontSize: '14px',
          }}
        >
          ← Back to SyncBoard
        </button>
      </div>
    </div>
  );
}
